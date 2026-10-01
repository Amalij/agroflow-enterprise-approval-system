import { DatePipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

import { AuditLogService } from '../services/audit-log.service';
import { AuditLog, AuditLogFilters } from '../models/administration.model';

@Component({
  selector: 'app-audit-logs',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatTableModule, ReactiveFormsModule],
  templateUrl: './audit-logs.component.html',
  styleUrl: './administration-pages.component.scss'
})
export class AuditLogsComponent implements OnInit {
  readonly service = inject(AuditLogService);
  private readonly destroyRef = inject(DestroyRef);
  readonly modules = ['Approval Configuration', 'Approvals', 'Authentication', 'Departments', 'Requests', 'System Settings', 'Users'];
  readonly displayedColumns = ['id', 'user', 'action', 'module', 'description', 'timestamp', 'ipAddress', 'status'];
  readonly filters = new FormGroup({
    search: new FormControl('', { nonNullable: true }),
    module: new FormControl('', { nonNullable: true }),
    date: new FormControl('', { nonNullable: true }),
    user: new FormControl('', { nonNullable: true })
  });
  logs: AuditLog[] = [];
  loading = false;
  errorMessage = '';

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.errorMessage = '';
    this.service.getAuditLogs(this.filters.getRawValue() as AuditLogFilters).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (logs) => { this.logs = logs; this.loading = false; },
      error: () => { this.loading = false; this.errorMessage = this.service.errorMessage(); }
    });
  }

  reset(): void { this.filters.reset({ search: '', module: '', date: '', user: '' }); this.load(); }
}