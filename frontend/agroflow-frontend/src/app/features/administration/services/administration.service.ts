import { HttpClient } from '@angular/common/http';
import { inject, Injectable, isDevMode, signal } from '@angular/core';
import { catchError, finalize, Observable, of, tap, throwError } from 'rxjs';

import { APPROVAL_CONFIGURATION_PREVIEW, SYSTEM_SETTINGS_PREVIEW } from '../data/administration-preview.data';
import { ApprovalConfiguration, SystemSettings } from '../models/administration.model';

@Injectable({ providedIn: 'root' })
export class AdministrationService {
  private readonly http = inject(HttpClient);
  private readonly configurationsUrl = 'http://localhost:8080/api/admin/approval-configurations';
  private readonly settingsUrl = 'http://localhost:8080/api/admin/settings';
  private previewConfigurations = APPROVAL_CONFIGURATION_PREVIEW.map((item) => ({ ...item }));
  private previewSettings: SystemSettings = structuredClone(SYSTEM_SETTINGS_PREVIEW);

  readonly loading = signal(false);
  readonly saving = signal(false);
  readonly previewMode = signal(false);
  readonly errorMessage = signal('');

  getApprovalConfigurations(): Observable<ApprovalConfiguration[]> {
    this.loading.set(true);
    this.errorMessage.set('');
    return this.http.get<ApprovalConfiguration[]>(this.configurationsUrl).pipe(
      tap(() => this.previewMode.set(false)),
      catchError((error: unknown) => {
        if (isDevMode()) {
          this.previewMode.set(true);
          return of(this.previewConfigurations.map((item) => ({ ...item })));
        }
        this.errorMessage.set('Approval configurations could not be loaded. Please try again.');
        return throwError(() => error);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  saveApprovalConfiguration(configuration: ApprovalConfiguration): Observable<ApprovalConfiguration> {
    this.saving.set(true);
    const request = this.previewMode()
      ? of(this.savePreviewConfiguration(configuration))
      : this.http.put<ApprovalConfiguration>(`${this.configurationsUrl}/${encodeURIComponent(configuration.id)}`, configuration);
    return request.pipe(finalize(() => this.saving.set(false)));
  }

  setApprovalConfigurationStatus(id: string, active: boolean): Observable<ApprovalConfiguration> {
    this.saving.set(true);
    const request = this.previewMode()
      ? of(this.updatePreviewStatus(id, active))
      : this.http.patch<ApprovalConfiguration>(`${this.configurationsUrl}/${encodeURIComponent(id)}`, { active });
    return request.pipe(finalize(() => this.saving.set(false)));
  }

  getSystemSettings(): Observable<SystemSettings> {
    this.loading.set(true);
    this.errorMessage.set('');
    return this.http.get<SystemSettings>(this.settingsUrl).pipe(
      tap(() => this.previewMode.set(false)),
      catchError((error: unknown) => {
        if (isDevMode()) {
          this.previewMode.set(true);
          return of(structuredClone(this.previewSettings));
        }
        this.errorMessage.set('System settings could not be loaded. Please try again.');
        return throwError(() => error);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  saveSystemSettings(settings: SystemSettings): Observable<SystemSettings> {
    this.saving.set(true);
    const request = this.previewMode()
      ? of(this.savePreviewSettings(settings))
      : this.http.put<SystemSettings>(this.settingsUrl, settings);
    return request.pipe(finalize(() => this.saving.set(false)));
  }

  private savePreviewConfiguration(configuration: ApprovalConfiguration): ApprovalConfiguration {
    const index = this.previewConfigurations.findIndex((item) => item.id === configuration.id);
    const saved = { ...configuration };
    if (index < 0) this.previewConfigurations = [...this.previewConfigurations, saved];
    else this.previewConfigurations = this.previewConfigurations.map((item, itemIndex) => itemIndex === index ? saved : item);
    return { ...saved };
  }

  private updatePreviewStatus(id: string, active: boolean): ApprovalConfiguration {
    const configuration = this.previewConfigurations.find((item) => item.id === id);
    if (!configuration) throw new Error('Approval configuration not found.');
    configuration.active = active;
    return { ...configuration };
  }

  private savePreviewSettings(settings: SystemSettings): SystemSettings {
    this.previewSettings = structuredClone(settings);
    return structuredClone(this.previewSettings);
  }
}