import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { CancelRequestDialogComponent, CancelRequestDialogData } from '../../requests/components/cancel-request-dialog/cancel-request-dialog.component';
import { RequestStatusChipComponent } from '../../requests/components/request-status-chip/request-status-chip.component';
import { RequestPreviewStore } from '../../requests/services/request-preview.store';
import { RequestService } from '../../requests/services/request.service';
import { RequestRecord } from '../../requests/models/request.model';

@Component({
  selector: 'app-request-details',
  standalone: true,
  imports: [
    CurrencyPipe,
    DatePipe,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    RequestStatusChipComponent,
    RouterLink
  ],
  templateUrl: './request-details.component.html',
  styleUrl: './request-details.component.scss'
})
export class RequestDetailsComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly requestService = inject(RequestService);
  private readonly previewStore = inject(RequestPreviewStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  request?: RequestRecord;
  loading = true;
  previewMode = false;
  errorMessage = '';
  cancelling = false;

  ngOnInit(): void {
    this.loadRequest();
  }

  get canEdit(): boolean { return this.request?.status === 'Draft'; }
  get canCancel(): boolean { return this.request?.status === 'Draft' || this.request?.status === 'Pending'; }

  retry(): void { this.loadRequest(); }

  editDraft(): void {
    if (!this.request || !this.canEdit) return;
    void this.router.navigate(['/requests/create'], {
      queryParams: { draftId: this.request.id, type: this.request.type }
    });
  }

  cancelRequest(): void {
    const request = this.request;
    if (!request || !this.canCancel || this.cancelling) return;
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

  private loadRequest(): void {
    const ownerEmail = this.authService.currentUser()?.email;
    const requestId = this.route.snapshot.paramMap.get('requestId');
    if (!ownerEmail) {
      void this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    if (!requestId) {
      this.loading = false;
      this.errorMessage = 'A request ID is required.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.requestService.getMyRequest(requestId, ownerEmail)
      .pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (request) => {
          this.request = request;
          this.previewMode = false;
        },
        error: () => {
          const previewRequest = this.previewStore.getById(ownerEmail, requestId);
          if (previewRequest) {
            this.request = previewRequest;
            this.previewMode = true;
            this.errorMessage = '';
          } else {
            this.errorMessage = 'This request could not be found in your account.';
          }
        }
      });
  }

  private performCancellation(request: RequestRecord): void {
    const ownerEmail = this.authService.currentUser()?.email;
    if (!ownerEmail) return;
    if (this.previewMode) {
      const updated = this.previewStore.cancel(ownerEmail, request.id);
      if (updated) this.request = updated;
      return;
    }

    this.cancelling = true;
    this.requestService.cancelRequest(request.id, ownerEmail)
      .pipe(finalize(() => this.cancelling = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (updated) => {
          this.request = updated;
          this.snackBar.open('Request cancelled.', 'Dismiss', { duration: 3500 });
        },
        error: () => this.snackBar.open('The request could not be cancelled. Please try again.', 'Dismiss', { duration: 3500 })
      });
  }
}