import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';

import { AdministrationService } from '../services/administration.service';
import { SystemSettings } from '../models/administration.model';

@Component({
  selector: 'app-system-settings',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule, ReactiveFormsModule],
  templateUrl: './system-settings.component.html',
  styleUrl: './administration-pages.component.scss'
})
export class SystemSettingsComponent implements OnInit {
  readonly service = inject(AdministrationService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);
  loading = false;
  loadError = '';
  readonly currencies = ['USD', 'EUR', 'GBP', 'KES', 'NGN', 'TZS', 'UGX', 'ZAR'];
  readonly dateFormats = ['MMM d, yyyy', 'dd/MM/yyyy', 'MM/dd/yyyy', 'yyyy-MM-dd'];
  readonly form = new FormGroup({
    organizationName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(100)] }),
    defaultCurrency: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    dateFormat: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    email: new FormControl(true, { nonNullable: true }),
    inApp: new FormControl(true, { nonNullable: true }),
    approvalReminders: new FormControl(true, { nonNullable: true }),
    requestNumberPrefix: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[A-Za-z0-9-]{2,8}$/)] })
  });

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.loadError = '';
    this.service.getSystemSettings().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (settings) => { this.setForm(settings); this.loading = false; },
      error: () => { this.loading = false; this.loadError = this.service.errorMessage(); }
    });
  }

  save(): void {
    if (this.form.invalid || this.service.saving()) { this.form.markAllAsTouched(); return; }
    const value = this.form.getRawValue();
    const settings: SystemSettings = {
      organizationName: value.organizationName.trim(),
      defaultCurrency: value.defaultCurrency,
      dateFormat: value.dateFormat,
      requestNumberPrefix: value.requestNumberPrefix.toUpperCase(),
      notificationSettings: { email: value.email, inApp: value.inApp, approvalReminders: value.approvalReminders }
    };
    this.service.saveSystemSettings(settings).pipe(finalize(() => undefined), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (saved) => { this.setForm(saved); this.snackBar.open(`Settings saved${this.service.previewMode() ? ' to preview data' : ''}.`, 'Dismiss', { duration: 3500 }); },
      error: () => this.snackBar.open('Settings could not be saved. Please try again.', 'Dismiss', { duration: 3500 })
    });
  }

  private setForm(settings: SystemSettings): void {
    this.form.reset({
      organizationName: settings.organizationName,
      defaultCurrency: settings.defaultCurrency,
      dateFormat: settings.dateFormat,
      email: settings.notificationSettings.email,
      inApp: settings.notificationSettings.inApp,
      approvalReminders: settings.notificationSettings.approvalReminders,
      requestNumberPrefix: settings.requestNumberPrefix
    });
  }
}