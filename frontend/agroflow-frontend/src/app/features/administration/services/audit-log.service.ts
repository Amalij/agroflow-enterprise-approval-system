import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, isDevMode, signal } from '@angular/core';
import { catchError, finalize, Observable, of, tap, throwError } from 'rxjs';

import { AUDIT_LOG_PREVIEW } from '../data/administration-preview.data';
import { AuditLog, AuditLogFilters } from '../models/administration.model';

@Injectable({ providedIn: 'root' })
export class AuditLogService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/admin/audit-logs';
  readonly loading = signal(false);
  readonly previewMode = signal(false);
  readonly errorMessage = signal('');

  getAuditLogs(filters: AuditLogFilters): Observable<AuditLog[]> {
    this.loading.set(true);
    this.errorMessage.set('');
    let params = new HttpParams();
    for (const [key, value] of Object.entries(filters)) {
      if (value.trim()) params = params.set(key, value.trim());
    }
    return this.http.get<AuditLog[]>(this.apiUrl, { params }).pipe(
      tap(() => this.previewMode.set(false)),
      catchError((error: unknown) => {
        if (isDevMode()) {
          this.previewMode.set(true);
          return of(this.filterPreview(filters));
        }
        this.previewMode.set(false);
        this.errorMessage.set('Audit logs could not be loaded. Please try again.');
        return throwError(() => error);
      }),
      finalize(() => this.loading.set(false))
    );
  }

  private filterPreview(filters: AuditLogFilters): AuditLog[] {
    const search = filters.search.trim().toLocaleLowerCase();
    const user = filters.user.trim().toLocaleLowerCase();
    return AUDIT_LOG_PREVIEW.filter((log) => {
      const matchesSearch = !search || `${log.id} ${log.action} ${log.module} ${log.description} ${log.ipAddress}`.toLocaleLowerCase().includes(search);
      const matchesModule = !filters.module || log.module === filters.module;
      const matchesDate = !filters.date || log.timestamp.slice(0, 10) === filters.date;
      const matchesUser = !user || log.user.toLocaleLowerCase().includes(user);
      return matchesSearch && matchesModule && matchesDate && matchesUser;
    }).map((log) => ({ ...log }));
  }
}