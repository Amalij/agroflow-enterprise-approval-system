import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
import { Component, DestroyRef, OnInit, inject, isDevMode } from '@angular/core';
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
import { ApprovalActionDialogComponent, ApprovalActionDialogData } from '../approvals/approval-action-dialog.component';
import { ApprovalWorkflowProgressComponent } from '../../approvals/components/approval-workflow-progress/approval-workflow-progress.component';
import { CancelRequestDialogComponent, CancelRequestDialogData } from '../../requests/components/cancel-request-dialog/cancel-request-dialog.component';
import { RequestStatusChipComponent } from '../../requests/components/request-status-chip/request-status-chip.component';
import { PettyCashDecisionPayload, PettyCashRequest } from '../../petty-cash/models/petty-cash.model';
import { PettyCashPreviewStore } from '../../petty-cash/services/petty-cash-preview.store';
import { PettyCashService } from '../../petty-cash/services/petty-cash.service';

@Component({
  selector: 'app-petty-cash-details',
  standalone: true,
  imports: [CurrencyPipe, DatePipe, DecimalPipe, ApprovalWorkflowProgressComponent, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatIconModule, MatProgressBarModule, MatSnackBarModule, RequestStatusChipComponent, RouterLink],
  templateUrl: './petty-cash-details.component.html',
  styleUrl: './petty-cash-details.component.scss'
})
export class PettyCashDetailsComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly pettyCashService = inject(PettyCashService);
  private readonly previewStore = inject(PettyCashPreviewStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  request?: PettyCashRequest;
  loading = true;
  previewMode = false;
  saving = false;
  errorMessage = '';
  private userEmail = '';
  private userName = '';
  private canApprove = false;

  ngOnInit(): void { this.loadRequest(); }
  get canEditDraft(): boolean { return this.request?.status === 'Draft'; }
  get canCancel(): boolean { return !!this.request && ['Draft', 'Pending', 'Returned'].includes(this.request.status); }
  get canDecide(): boolean { return !!this.canApprove && !!this.request?.assignedApproverEmail && this.request.assignedApproverEmail.toLocaleLowerCase() === this.userEmail.toLocaleLowerCase() && ['Pending', 'Returned'].includes(this.request.status); }
  retry(): void { this.loadRequest(); }

  editDraft(): void { if (this.request && this.canEditDraft) void this.router.navigate(['/petty-cash/create'], { queryParams: { draftId: this.request.id } }); }

  cancelRequest(): void {
    const request = this.request;
    if (!request || !this.canCancel || this.saving) return;
    const data: CancelRequestDialogData = { requestId: request.id, title: request.purpose };
    this.dialog.open<CancelRequestDialogComponent, CancelRequestDialogData, boolean>(CancelRequestDialogComponent, { width: 'min(440px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)', data, autoFocus: false })
      .afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((confirmed) => { if (confirmed) this.performCancel(request); });
  }

  approve(): void { this.processDecision({ decision: 'approve' }); }
  reject(): void { this.openCommentDialog('reject'); }
  returnForChanges(): void { this.openCommentDialog('return'); }

  private loadRequest(): void {
    const user = this.authService.currentUser();
    const id = this.route.snapshot.paramMap.get('pettyCashId');
    if (!user) { void this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } }); return; }
    if (!id) { this.loading = false; this.errorMessage = 'A request ID is required.'; return; }
    this.userEmail = user.email;
    this.userName = user.displayName;
    this.canApprove = ['Admin', 'Manager', 'Approver'].includes(user.role);
    this.loading = true;
    this.errorMessage = '';
    this.pettyCashService.getRequest(id, user.email, this.canApprove).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (request) => { this.request = request; this.previewMode = false; },
      error: () => {
        const preview = isDevMode() ? this.previewStore.getById(user.email, id, user.displayName) : undefined;
        if (preview) { this.request = preview; this.previewMode = true; }
        else this.errorMessage = 'This request could not be found in your account or approval queue.';
      }
    });
  }

  private performCancel(request: PettyCashRequest): void {
    if (this.previewMode) {
      const updated = this.previewStore.cancel(this.userEmail, request.id);
      if (updated) this.request = updated;
      return;
    }
    this.saving = true;
    this.pettyCashService.cancel(request.id).pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => { this.request = updated; this.snackBar.open('Petty Cash request cancelled.', 'Dismiss', { duration: 3500 }); },
      error: () => this.snackBar.open('The request could not be cancelled.', 'Dismiss', { duration: 3500 })
    });
  }

  private openCommentDialog(decision: 'reject' | 'return'): void {
    const request = this.request;
    if (!request || !this.canDecide || this.saving) return;
    const data: ApprovalActionDialogData = { decision, requestId: request.id, title: request.purpose };
    this.dialog.open<ApprovalActionDialogComponent, ApprovalActionDialogData, string>(ApprovalActionDialogComponent, { width: 'min(500px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)', data, autoFocus: 'first-tabbable' })
      .afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((comment) => { if (comment) this.processDecision({ decision, comment }); });
  }

  private processDecision(payload: PettyCashDecisionPayload): void {
    const request = this.request;
    if (!request || !this.canDecide || this.saving) return;
    if (this.previewMode) {
      const updated = this.previewStore.decide(this.userEmail, request.id, payload, this.userName);
      if (updated) { this.request = updated; this.snackBar.open('Decision saved to temporary Petty Cash preview data.', 'Dismiss', { duration: 3500 }); }
      return;
    }
    this.saving = true;
    this.pettyCashService.decide(request.id, payload).pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => { this.request = updated; this.snackBar.open('Petty Cash decision recorded.', 'Dismiss', { duration: 3500 }); },
      error: () => this.snackBar.open('The decision could not be recorded.', 'Dismiss', { duration: 3500 })
    });
  }
}