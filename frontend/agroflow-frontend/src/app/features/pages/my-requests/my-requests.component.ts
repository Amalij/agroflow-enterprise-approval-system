import { CurrencyPipe, DatePipe } from '@angular/common';
import { AfterViewInit, Component, DestroyRef, OnInit, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router, RouterLink } from '@angular/router';
import { debounceTime, distinctUntilChanged, finalize, startWith } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { RequestStatusChipComponent } from '../../requests/components/request-status-chip/request-status-chip.component';
import { CancelRequestDialogComponent, CancelRequestDialogData } from '../../requests/components/cancel-request-dialog/cancel-request-dialog.component';
import { RequestPreviewStore } from '../../requests/services/request-preview.store';
import { RequestService } from '../../requests/services/request.service';
import { RequestFilters, RequestRecord, RequestStatus, RequestType, REQUEST_STATUSES, REQUEST_TYPES } from '../../requests/models/request.model';

@Component({
  selector: 'app-my-requests',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatSelectModule,
    MatSnackBarModule,
    MatTableModule,
    MatTooltipModule,
    ReactiveFormsModule,
    RequestStatusChipComponent,
    RouterLink
  ],
  templateUrl: './my-requests.component.html',
  styleUrl: './my-requests.component.scss'
})
export class MyRequestsComponent implements OnInit, AfterViewInit {
  private readonly authService = inject(AuthService);
  private readonly requestService = inject(RequestService);
  private readonly previewStore = inject(RequestPreviewStore);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator | undefined) {
    if (paginator) this.dataSource.paginator = paginator;
  }

  readonly dataSource = new MatTableDataSource<RequestRecord>([]);
  readonly requestTypes = REQUEST_TYPES;
  readonly requestStatuses = REQUEST_STATUSES;
  readonly pageSizeOptions = [5, 10, 20];
  readonly displayedColumns = ['id', 'type', 'title', 'department', 'amount', 'status', 'submittedAt', 'actions'];
  readonly filters = new FormGroup({
    query: new FormControl('', { nonNullable: true }),
    type: new FormControl<RequestType | 'all'>('all', { nonNullable: true }),
    status: new FormControl<RequestStatus | 'all'>('all', { nonNullable: true }),
    dateFrom: new FormControl('', { nonNullable: true }),
    dateTo: new FormControl('', { nonNullable: true })
  });

  loading = true;
  cancelling = false;
  previewMode = false;
  errorMessage = '';
  private ownerEmail = '';

  constructor() {
    this.dataSource.filterPredicate = (request, serializedFilters) => {
      try {
        return this.requestService.matchesFilters(request, JSON.parse(serializedFilters) as RequestFilters);
      } catch {
        return true;
      }
    };
  }

  ngOnInit(): void {
    this.filters.valueChanges
      .pipe(startWith(this.filters.getRawValue()), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.applyFilters());
    this.loadRequests();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator?.firstPage();
  }

  onTypeChange(event: MatSelectChange): void {
    this.filters.controls.type.setValue(event.value as RequestType | 'all');
  }

  onStatusChange(event: MatSelectChange): void {
    this.filters.controls.status.setValue(event.value as RequestStatus | 'all');
  }

  retry(): void { this.loadRequests(); }

  cancelRequest(request: RequestRecord): void {
    if (!this.canCancel(request) || this.cancelling) return;
    const data: CancelRequestDialogData = { requestId: request.id, title: request.title };
    this.dialog.open<CancelRequestDialogComponent, CancelRequestDialogData, boolean>(CancelRequestDialogComponent, {
      width: 'min(440px, calc(100vw - 32px))',
      maxWidth: 'calc(100vw - 32px)',
      data,
      autoFocus: false
    }).afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((confirmed) => {
        if (confirmed) this.performCancellation(request);
      });
  }

  canEdit(request: RequestRecord): boolean { return request.status === 'Draft'; }
  canCancel(request: RequestRecord): boolean { return request.status === 'Draft' || request.status === 'Pending'; }

  private loadRequests(): void {
    const user = this.authService.currentUser();
    if (!user) {
      void this.router.navigate(['/login'], { queryParams: { returnUrl: '/requests' } });
      return;
    }

    this.ownerEmail = user.email;
    this.loading = true;
    this.errorMessage = '';
    this.requestService.getMyRequests(this.ownerEmail)
      .pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (requests) => {
          this.previewMode = false;
          this.dataSource.data = requests;
          this.applyFilters();
        },
        error: () => {
          this.previewMode = true;
          this.dataSource.data = this.previewStore.getForOwner(this.ownerEmail);
          this.errorMessage = 'The Requests API is unavailable. Showing temporary data scoped to your signed-in account; changes will not be sent to the server.';
          this.applyFilters();
        }
      });
  }

  private applyFilters(): void {
    this.dataSource.filter = JSON.stringify(this.filters.getRawValue());
    this.dataSource.paginator?.firstPage();
  }

  private performCancellation(request: RequestRecord): void {
    if (this.previewMode) {
      const updated = this.previewStore.cancel(this.ownerEmail, request.id);
      if (updated) this.replaceRequest(updated);
      else this.showMessage('This request can no longer be cancelled.');
      return;
    }

    this.cancelling = true;
    this.requestService.cancelRequest(request.id, this.ownerEmail)
      .pipe(finalize(() => this.cancelling = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (updated) => {
          this.replaceRequest(updated);
          this.showMessage('Request cancelled.');
        },
        error: () => this.showMessage('The request could not be cancelled. Please try again.')
      });
  }

  private replaceRequest(updated: RequestRecord): void {
    this.dataSource.data = this.dataSource.data.map((request) => request.id === updated.id ? updated : request);
    this.applyFilters();
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Dismiss', { duration: 3500 });
  }
}