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
import { IOU_STATUSES, IOU, IOUFilters, IOUStatus } from '../../iou/models/iou.model';
import { IOUPreviewStore } from '../../iou/services/iou-preview.store';
import { IOUService } from '../../iou/services/iou.service';

@Component({
  selector: 'app-iou-list',
  standalone: true,
  imports: [
    CurrencyPipe, DatePipe, MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule,
    MatPaginatorModule, MatProgressBarModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatTooltipModule,
    ReactiveFormsModule, RequestStatusChipComponent, RouterLink
  ],
  templateUrl: './iou-list.component.html',
  styleUrl: './iou-list.component.scss'
})
export class IOUListComponent implements OnInit, AfterViewInit {
  private readonly authService = inject(AuthService);
  private readonly iouService = inject(IOUService);
  private readonly previewStore = inject(IOUPreviewStore);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator | undefined) {
    if (paginator) this.dataSource.paginator = paginator;
  }

  readonly dataSource = new MatTableDataSource<IOU>([]);
  readonly statuses = IOU_STATUSES;
  readonly pageSizeOptions = [5, 10, 20];
  readonly displayedColumns = ['id', 'requester', 'department', 'purpose', 'amount', 'requestDate', 'requiredDate', 'status', 'actions'];
  readonly filters = new FormGroup({
    query: new FormControl('', { nonNullable: true }),
    status: new FormControl<IOUStatus | 'all'>('all', { nonNullable: true }),
    dateFrom: new FormControl('', { nonNullable: true }),
    dateTo: new FormControl('', { nonNullable: true })
  });

  loading = true;
  previewMode = false;
  cancelling = false;
  errorMessage = '';
  private ownerEmail = '';

  constructor() {
    this.dataSource.filterPredicate = (iou, serializedFilters) => {
      try { return this.iouService.matchesFilters(iou, JSON.parse(serializedFilters) as IOUFilters); }
      catch { return true; }
    };
  }

  ngOnInit(): void {
    this.filters.valueChanges.pipe(startWith(this.filters.getRawValue()), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.applyFilters());
    this.loadIOUs();
  }

  ngAfterViewInit(): void { this.dataSource.paginator?.firstPage(); }

  retry(): void { this.loadIOUs(); }
  canEdit(iou: IOU): boolean { return iou.status === 'Draft'; }
  canCancel(iou: IOU): boolean { return ['Draft', 'Pending', 'Returned'].includes(iou.status); }

  cancelIOU(iou: IOU): void {
    if (!this.canCancel(iou) || this.cancelling) return;
    const data: CancelRequestDialogData = { requestId: iou.id, title: iou.purpose };
    this.dialog.open<CancelRequestDialogComponent, CancelRequestDialogData, boolean>(CancelRequestDialogComponent, {
      width: 'min(440px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)', data, autoFocus: false
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((confirmed) => {
      if (confirmed) this.performCancel(iou);
    });
  }

  private loadIOUs(): void {
    const user = this.authService.currentUser();
    if (!user) {
      void this.router.navigate(['/login'], { queryParams: { returnUrl: '/iou' } });
      return;
    }
    this.ownerEmail = user.email;
    this.loading = true;
    this.errorMessage = '';
    this.iouService.getMyIOUs(user.email).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (ious) => { this.previewMode = false; this.dataSource.data = ious; this.applyFilters(); },
      error: () => {
        if (isDevMode()) {
          this.previewMode = true;
          this.dataSource.data = this.previewStore.getForOwner(user.email, user.displayName);
          this.errorMessage = 'The IOU API is unavailable. Showing development preview data scoped to your account; changes stay local.';
        } else {
          this.dataSource.data = [];
          this.errorMessage = 'The IOU service is unavailable. Please try again later.';
        }
        this.applyFilters();
      }
    });
  }

  private applyFilters(): void {
    this.dataSource.filter = JSON.stringify(this.filters.getRawValue());
    this.dataSource.paginator?.firstPage();
  }

  private performCancel(iou: IOU): void {
    if (this.previewMode) {
      const updated = this.previewStore.cancel(this.ownerEmail, iou.id);
      if (updated) this.updateRow(updated);
      return;
    }
    this.cancelling = true;
    this.iouService.cancelIOU(iou.id).pipe(finalize(() => this.cancelling = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => { this.updateRow(updated); this.snackBar.open('IOU cancelled.', 'Dismiss', { duration: 3500 }); },
      error: () => this.snackBar.open('The IOU could not be cancelled. Please try again.', 'Dismiss', { duration: 3500 })
    });
  }

  private updateRow(updated: IOU): void {
    this.dataSource.data = this.dataSource.data.map((iou) => iou.id === updated.id ? updated : iou);
  }
}