import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { tap } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { REPORT_STATUSES, ReportFilters, ReportSnapshot } from '../../reports/models/report.model';
import { ReportService } from '../../reports/services/report.service';
import { REQUEST_TYPES, RequestType } from '../../requests/models/request.model';

const dateRangeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const { dateFrom, dateTo } = control.value as { dateFrom?: string; dateTo?: string };
  return dateFrom && dateTo && dateFrom > dateTo ? { invalidDateRange: true } : null;
};

@Component({
  selector: 'app-reports-page',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatTableModule, ReactiveFormsModule],
  templateUrl: './reports-page.component.html',
  styleUrl: './reports-page.component.scss'
})
export class ReportsPageComponent implements OnInit {
  private readonly authService = inject(AuthService);
  readonly reportService = inject(ReportService);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  readonly requestTypes = REQUEST_TYPES;
  readonly statuses = REPORT_STATUSES;
  readonly departmentColumns = ['department', 'totalRequests', 'pending', 'approved', 'rejected', 'totalAmount'];
  readonly requestTypeColumns = ['requestType', 'totalRequests', 'pending', 'approved', 'rejected', 'totalAmount'];
  readonly activityColumns = ['requestId', 'requestType', 'approver', 'action', 'date', 'comment'];
  readonly filters = new FormGroup({
    dateFrom: new FormControl('', { nonNullable: true }),
    dateTo: new FormControl('', { nonNullable: true }),
    department: new FormControl<string | 'all'>('all', { nonNullable: true }),
    requestType: new FormControl<RequestType | 'all'>('all', { nonNullable: true }),
    status: new FormControl<ReportFilters['status']>('all', { nonNullable: true }),
    requestedBy: new FormControl('', { nonNullable: true })
  }, { validators: dateRangeValidator });

  loading = false;
  hasLoaded = false;

  ngOnInit(): void { this.applyFilters(); }

  get report(): ReportSnapshot | null { return this.reportService.snapshot(); }
  get departmentOptions(): string[] { return this.reportService.departmentOptions(); }
  get dateRangeInvalid(): boolean { return this.filters.hasError('invalidDateRange'); }

  applyFilters(): void {
    if (this.dateRangeInvalid) {
      this.filters.controls.dateFrom.markAsTouched();
      this.filters.controls.dateTo.markAsTouched();
      return;
    }
    const user = this.authService.currentUser();
    if (!user) return;
    const filter: ReportFilters = this.filters.getRawValue();
    this.loading = true;
    this.reportService.loadReport(filter).pipe(
      tap({ error: () => undefined }),
      takeUntilDestroyed(this.destroyRef)
    ).subscribe({
      next: () => { this.loading = false; this.hasLoaded = true; },
      error: () => { this.loading = false; this.hasLoaded = true; }
    });
  }

  resetFilters(): void {
    this.filters.reset({ dateFrom: '', dateTo: '', department: 'all', requestType: 'all', status: 'all', requestedBy: '' });
    this.applyFilters();
  }

  exportReport(): void {
    const message = this.reportService.previewMode()
      ? 'Export is unavailable for temporary preview data.'
      : 'Report export is not configured yet.';
    this.snackBar.open(message, 'Dismiss', { duration: 3500 });
  }

  statusTone(status: string): string { return status.toLocaleLowerCase(); }
}