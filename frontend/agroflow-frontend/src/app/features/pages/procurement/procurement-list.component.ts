import { CurrencyPipe, DatePipe } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, OnInit, ViewChild, inject, isDevMode } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged, finalize, startWith } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { CancelRequestDialogComponent, CancelRequestDialogData } from '../../requests/components/cancel-request-dialog/cancel-request-dialog.component';
import { RequestStatusChipComponent } from '../../requests/components/request-status-chip/request-status-chip.component';
import { ProcurementPreviewStore } from '../../procurement/services/procurement-preview.store';
import { ProcurementService } from '../../procurement/services/procurement.service';
import { PROCUREMENT_STATUSES, ProcurementFilters, ProcurementRequest, ProcurementStatus } from '../../procurement/models/procurement.model';

@Component({
  selector: 'app-procurement-list',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatPaginatorModule, MatProgressBarModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatTooltipModule, ReactiveFormsModule, RequestStatusChipComponent, RouterLink],
  templateUrl: './procurement-list.component.html',
  styleUrl: './procurement-list.component.scss'
})
export class ProcurementListComponent implements OnInit, AfterViewInit {
  private readonly authService = inject(AuthService);
  private readonly procurementService = inject(ProcurementService);
  private readonly previewStore = inject(ProcurementPreviewStore);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator | undefined) { if (paginator) this.dataSource.paginator = paginator; }

  readonly dataSource = new MatTableDataSource<ProcurementRequest>([]);
  readonly statuses = PROCUREMENT_STATUSES;
  readonly pageSizeOptions = [5, 10, 20];
  readonly displayedColumns = ['id', 'requester', 'department', 'item', 'quantity', 'amount', 'requiredDate', 'status', 'actions'];
  readonly filters = new FormGroup({
    query: new FormControl('', { nonNullable: true }),
    status: new FormControl<ProcurementStatus | 'all'>('all', { nonNullable: true }),
    department: new FormControl<string | 'all'>('all', { nonNullable: true }),
    dateFrom: new FormControl('', { nonNullable: true }),
    dateTo: new FormControl('', { nonNullable: true })
  });

  loading = true;
  previewMode = false;
  cancelling = false;
  errorMessage = '';
  private ownerEmail = '';

  constructor() {
    this.dataSource.filterPredicate = (request, serializedFilters) => {
      try { return this.procurementService.matchesFilters(request, JSON.parse(serializedFilters) as ProcurementFilters); }
      catch { return true; }
    };
  }

  ngOnInit(): void {
    this.filters.valueChanges.pipe(startWith(this.filters.getRawValue()), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.applyFilters());
    this.loadRequests();
  }

  ngAfterViewInit(): void { this.dataSource.paginator?.firstPage(); }
  get departments(): string[] { return [...new Set(this.dataSource.data.map((request) => request.departmentName))].sort(); }
  retry(): void { this.loadRequests(); }
  canEdit(request: ProcurementRequest): boolean { return request.status === 'Draft'; }
  canCancel(request: ProcurementRequest): boolean { return ['Draft', 'Pending', 'Returned'].includes(request.status); }

  cancelRequest(request: ProcurementRequest): void {
    if (!this.canCancel(request) || this.cancelling) return;
    const data: CancelRequestDialogData = { requestId: request.id, title: request.requestTitle };
    this.dialog.open<CancelRequestDialogComponent, CancelRequestDialogData, boolean>(CancelRequestDialogComponent, { width: 'min(440px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)', data, autoFocus: false })
      .afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((confirmed) => { if (confirmed) this.performCancel(request); });
  }

  private loadRequests(): void {
    const user = this.authService.currentUser();
    if (!user) { void this.router.navigate(['/login'], { queryParams: { returnUrl: '/procurement' } }); return; }
    this.ownerEmail = user.email;
    this.loading = true;
    this.errorMessage = '';
    this.procurementService.getMyRequests(user.email).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (requests) => { this.previewMode = false; this.dataSource.data = requests; this.applyFilters(); },
      error: () => {
        if (isDevMode()) {
          this.previewMode = true;
          this.dataSource.data = this.previewStore.getForOwner(user.email, user.displayName);
          this.errorMessage = 'The Procurement API is unavailable. Showing development preview data scoped to your account; changes stay local.';
        } else {
          this.previewMode = false;
          this.dataSource.data = [];
          this.errorMessage = 'The Procurement service is unavailable. Please try again later.';
        }
        this.applyFilters();
      }
    });
  }

  private applyFilters(): void { this.dataSource.filter = JSON.stringify(this.filters.getRawValue()); this.dataSource.paginator?.firstPage(); }

  private performCancel(request: ProcurementRequest): void {
    if (this.previewMode) {
      const updated = this.previewStore.cancel(this.ownerEmail, request.id);
      if (updated) this.replaceRequest(updated);
      return;
    }
    this.cancelling = true;
    this.procurementService.cancel(request.id).pipe(finalize(() => this.cancelling = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => { this.replaceRequest(updated); this.snackBar.open('Procurement request cancelled.', 'Dismiss', { duration: 3500 }); },
      error: () => this.snackBar.open('The request could not be cancelled.', 'Dismiss', { duration: 3500 })
    });
  }

  private replaceRequest(updated: ProcurementRequest): void { this.dataSource.data = this.dataSource.data.map((request) => request.id === updated.id ? updated : request); }
}