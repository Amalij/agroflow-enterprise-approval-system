import { CurrencyPipe, DatePipe } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, OnInit, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged, finalize, startWith } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { ApprovalStatusChipComponent } from '../../approvals/components/approval-status-chip/approval-status-chip.component';
import { ApprovalPreviewStore } from '../../approvals/services/approval-preview.store';
import { ApprovalService } from '../../approvals/services/approval.service';
import { ApprovalFilters, ApprovalRecord, ApprovalStatus } from '../../approvals/models/approval.model';
import { REQUEST_TYPES, RequestType } from '../../requests/models/request.model';

@Component({
  selector: 'app-pending-approvals',
  standalone: true,
  imports: [
    ApprovalStatusChipComponent,
    CurrencyPipe,
    DatePipe,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './pending-approvals.component.html',
  styleUrl: './pending-approvals.component.scss'
})
export class PendingApprovalsComponent implements OnInit, AfterViewInit {
  private readonly authService = inject(AuthService);
  private readonly approvalService = inject(ApprovalService);
  private readonly previewStore = inject(ApprovalPreviewStore);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator | undefined) {
    if (paginator) this.dataSource.paginator = paginator;
  }

  readonly dataSource = new MatTableDataSource<ApprovalRecord>([]);
  readonly requestTypes = REQUEST_TYPES;
  readonly statuses: ApprovalStatus[] = ['Pending', 'Changes Requested', 'Approved', 'Rejected'];
  readonly pageSizeOptions = [5, 10, 20];
  readonly displayedColumns = ['id', 'requestType', 'requester', 'department', 'amount', 'submittedAt', 'level', 'status', 'actions'];
  readonly filters = new FormGroup({
    query: new FormControl('', { nonNullable: true }),
    requestType: new FormControl<RequestType | 'all'>('all', { nonNullable: true }),
    department: new FormControl<string | 'all'>('all', { nonNullable: true }),
    status: new FormControl<ApprovalStatus | 'all'>('all', { nonNullable: true }),
    approvalLevel: new FormControl<string | 'all'>('all', { nonNullable: true })
  });

  loading = true;
  previewMode = false;
  errorMessage = '';
  private approverEmail = '';

  constructor() {
    this.dataSource.filterPredicate = (approval, serializedFilters) => {
      try {
        return this.approvalService.matchesFilters(approval, JSON.parse(serializedFilters) as ApprovalFilters);
      } catch {
        return true;
      }
    };
  }

  ngOnInit(): void {
    this.filters.valueChanges
      .pipe(startWith(this.filters.getRawValue()), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.applyFilters());
    this.loadApprovals();
  }

  ngAfterViewInit(): void { this.dataSource.paginator?.firstPage(); }

  get departments(): string[] { return [...new Set(this.dataSource.data.map((approval) => approval.departmentName))].sort(); }
  get approvalLevels(): string[] { return [...new Set(this.dataSource.data.map((approval) => approval.currentApprovalLevel))].sort(); }
  retry(): void { this.loadApprovals(); }

  private loadApprovals(): void {
    const user = this.authService.currentUser();
    if (!user) {
      void this.router.navigate(['/login'], { queryParams: { returnUrl: '/approvals/pending' } });
      return;
    }
    this.approverEmail = user.email;
    this.loading = true;
    this.errorMessage = '';
    this.approvalService.getAssignedPendingApprovals(this.approverEmail)
      .pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (approvals) => {
          this.previewMode = false;
          this.dataSource.data = approvals;
          this.applyFilters();
        },
        error: () => {
          this.previewMode = true;
          this.dataSource.data = this.previewStore.getForApprover(this.approverEmail);
          this.errorMessage = 'The Approvals API is unavailable. Showing temporary approval data assigned to your account; decisions are not sent to the server.';
          this.applyFilters();
        }
      });
  }

  private applyFilters(): void {
    this.dataSource.filter = JSON.stringify(this.filters.getRawValue());
    this.dataSource.paginator?.firstPage();
  }
}