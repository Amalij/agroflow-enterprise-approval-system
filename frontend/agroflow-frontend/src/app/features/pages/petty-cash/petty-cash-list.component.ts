import { CurrencyPipe, DatePipe } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, OnInit, ViewChild, inject, isDevMode } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
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
import { PettyCashPreviewStore } from '../../petty-cash/services/petty-cash-preview.store';
import { PettyCashService } from '../../petty-cash/services/petty-cash.service';
import { PETTY_CASH_STATUSES, PettyCashFilters, PettyCashRequest, PettyCashStatus } from '../../petty-cash/models/petty-cash.model';

@Component({
  selector: 'app-petty-cash-list',
  standalone: true,
  imports: [
    CurrencyPipe, DatePipe, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
    MatPaginatorModule, MatProgressBarModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatTooltipModule,
    ReactiveFormsModule, RequestStatusChipComponent, RouterLink
  ],
  templateUrl: './petty-cash-list.component.html',
  styleUrl: './petty-cash-list.component.scss'
})
export class PettyCashListComponent implements OnInit, AfterViewInit {
  private readonly authService = inject(AuthService);
  private readonly pettyCashService = inject(PettyCashService);
  private readonly previewStore = inject(PettyCashPreviewStore);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator | undefined) {
    if (paginator) this.dataSource.paginator = paginator;
  }

  readonly dataSource = new MatTableDataSource<PettyCashRequest>([]);
  readonly statuses = PETTY_CASH_STATUSES;
  readonly pageSizeOptions = [5, 10, 20];
  readonly displayedColumns = ['id', 'requester', 'department', 'purpose', 'amount', 'requestDate', 'status', 'actions'];
  readonly filters = new FormGroup({
    query: new FormControl('', { nonNullable: true }),
    status: new FormControl<PettyCashStatus | 'all'>('all', { nonNullable: true }),
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
      try { return this.pettyCashService.matchesFilters(request, JSON.parse(serializedFilters) as PettyCashFilters); }
      catch { return true; }
    };
  }

  ngOnInit(): void {
    this.filters.valueChanges.pipe(startWith(this.filters.getRawValue()), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.applyFilters());
    this.loadRequests();
  }

  ngAfterViewInit(): void { this.dataSource.paginator?.firstPage(); }
  retry(): void { this.loadRequests(); }
  canEdit(request: PettyCashRequest): boolean { return request.status === 'Draft'; }
  canCancel(request: PettyCashRequest): boolean { return ['Draft', 'Pending', 'Returned'].includes(request.status); }

  cancelRequest(request: PettyCashRequest): void {
    if (!this.canCancel(request) || this.cancelling) return;
    const data: CancelRequestDialogData = { requestId: request.id, title: request.purpose };
    this.dialog.open<CancelRequestDialogComponent, CancelRequestDialogData, boolean>(CancelRequestDialogComponent, {
      width: 'min(440px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)', data, autoFocus: false
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((confirmed) => {
      if (confirmed) this.performCancel(request);
    });
  }

  private loadRequests(): void {
    const user = this.authService.currentUser();
    if (!user) { void this.router.navigate(['/login'], { queryParams: { returnUrl: '/petty-cash' } }); return; }
    this.ownerEmail = user.email;
    this.loading = true;
    this.errorMessage = '';
    this.pettyCashService.getMyRequests(user.email).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (requests) => { this.previewMode = false; this.dataSource.data = requests; this.applyFilters(); },
      error: () => {
        if (isDevMode()) {
          this.previewMode = true;
          this.dataSource.data = this.previewStore.getForOwner(user.email, user.displayName);
          this.errorMessage = 'The Petty Cash API is unavailable. Showing development preview data scoped to your account; changes stay local.';
        } else {
          this.previewMode = false;
          this.dataSource.data = [];
          this.errorMessage = 'The Petty Cash service is unavailable. Please try again later.';
        }
        this.applyFilters();
      }
    });
  }

  private applyFilters(): void {
    this.dataSource.filter = JSON.stringify(this.filters.getRawValue());
    this.dataSource.paginator?.firstPage();
  }

  private performCancel(request: PettyCashRequest): void {
    if (this.previewMode) {
      const updated = this.previewStore.cancel(this.ownerEmail, request.id);
      if (updated) this.replaceRequest(updated);
      return;
    }
    this.cancelling = true;
    this.pettyCashService.cancel(request.id).pipe(finalize(() => this.cancelling = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => { this.replaceRequest(updated); this.snackBar.open('Petty Cash request cancelled.', 'Dismiss', { duration: 3500 }); },
      error: () => this.snackBar.open('The request could not be cancelled. Please try again.', 'Dismiss', { duration: 3500 })
    });
  }

  private replaceRequest(updated: PettyCashRequest): void {
    this.dataSource.data = this.dataSource.data.map((request) => request.id === updated.id ? updated : request);
  }
}