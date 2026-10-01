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
import { CancelRequestDialogComponent, CancelRequestDialogData } from '../../requests/components/cancel-request-dialog/cancel-request-dialog.component';
import { RequestStatusChipComponent } from '../../requests/components/request-status-chip/request-status-chip.component';
import { ApprovalActionDialogComponent, ApprovalActionDialogData } from '../approvals/approval-action-dialog.component';
import { ApprovalWorkflowProgressComponent } from '../../approvals/components/approval-workflow-progress/approval-workflow-progress.component';
import { IOU, IOUDecision, IOUDecisionPayload } from '../../iou/models/iou.model';
import { IOUPreviewStore } from '../../iou/services/iou-preview.store';
import { IOUService } from '../../iou/services/iou.service';

@Component({
  selector: 'app-iou-details',
  standalone: true,
  imports: [
    CurrencyPipe, DatePipe, DecimalPipe, ApprovalWorkflowProgressComponent, MatButtonModule, MatCardModule, MatDialogModule,
    MatDividerModule, MatIconModule, MatProgressBarModule, MatSnackBarModule, RequestStatusChipComponent, RouterLink
  ],
  templateUrl: './iou-details.component.html',
  styleUrl: './iou-details.component.scss'
})
export class IOUDetailsComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly iouService = inject(IOUService);
  private readonly previewStore = inject(IOUPreviewStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  iou?: IOU;
  loading = true;
  previewMode = false;
  saving = false;
  errorMessage = '';
  private userEmail = '';
  private userName = '';
  private canApprove = false;

  ngOnInit(): void { this.loadIOU(); }

  get canEditDraft(): boolean { return this.iou?.status === 'Draft'; }
  get canCancel(): boolean { return !!this.iou && ['Draft', 'Pending', 'Returned'].includes(this.iou.status); }
  get canDecide(): boolean { return !!this.canApprove && !!this.iou?.assignedApproverEmail && this.iou.assignedApproverEmail.toLocaleLowerCase() === this.userEmail.toLocaleLowerCase() && ['Pending', 'Returned'].includes(this.iou.status); }

  retry(): void { this.loadIOU(); }

  editDraft(): void {
    if (this.iou && this.canEditDraft) void this.router.navigate(['/iou/create'], { queryParams: { draftId: this.iou.id } });
  }

  cancelIOU(): void {
    const iou = this.iou;
    if (!iou || !this.canCancel || this.saving) return;
    const data: CancelRequestDialogData = { requestId: iou.id, title: iou.purpose };
    this.dialog.open<CancelRequestDialogComponent, CancelRequestDialogData, boolean>(CancelRequestDialogComponent, {
      width: 'min(440px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)', data, autoFocus: false
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((confirmed) => {
      if (confirmed) this.performCancel(iou);
    });
  }

  approve(): void { this.processDecision({ decision: 'approve' }); }
  reject(): void { this.openCommentDialog('reject'); }
  returnForChanges(): void { this.openCommentDialog('return'); }

  private loadIOU(): void {
    const user = this.authService.currentUser();
    const iouId = this.route.snapshot.paramMap.get('iouId');
    if (!user) {
      void this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    if (!iouId) { this.loading = false; this.errorMessage = 'An IOU ID is required.'; return; }
    this.userEmail = user.email;
    this.userName = user.displayName;
    this.canApprove = ['Admin', 'Manager', 'Approver'].includes(user.role);
    this.loading = true;
    this.errorMessage = '';
    this.iouService.getIOU(iouId, user.email, this.canApprove).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (iou) => { this.iou = iou; this.previewMode = false; },
      error: () => {
        if (isDevMode()) {
          const preview = this.previewStore.getById(user.email, iouId, user.displayName);
          if (preview) { this.iou = preview; this.previewMode = true; }
          else this.errorMessage = 'This IOU could not be found in your account or approval queue.';
        } else this.errorMessage = 'This IOU could not be found in your account or approval queue.';
      }
    });
  }

  private performCancel(iou: IOU): void {
    if (this.previewMode) {
      const updated = this.previewStore.cancel(this.userEmail, iou.id);
      if (updated) this.iou = updated;
      return;
    }
    this.saving = true;
    this.iouService.cancelIOU(iou.id).pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => { this.iou = updated; this.snackBar.open('IOU cancelled.', 'Dismiss', { duration: 3500 }); },
      error: () => this.snackBar.open('The IOU could not be cancelled.', 'Dismiss', { duration: 3500 })
    });
  }

  private openCommentDialog(decision: 'reject' | 'return'): void {
    const iou = this.iou;
    if (!iou || !this.canDecide || this.saving) return;
    const data: ApprovalActionDialogData = { decision, requestId: iou.id, title: iou.purpose };
    this.dialog.open<ApprovalActionDialogComponent, ApprovalActionDialogData, string>(ApprovalActionDialogComponent, {
      width: 'min(500px, calc(100vw - 32px))', maxWidth: 'calc(100vw - 32px)', data, autoFocus: 'first-tabbable'
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((comment) => {
      if (comment) this.processDecision({ decision, comment });
    });
  }

  private processDecision(payload: IOUDecisionPayload): void {
    const iou = this.iou;
    if (!iou || !this.canDecide || this.saving) return;
    if (this.previewMode) {
      const updated = this.previewStore.decide(this.userEmail, iou.id, payload, this.userName);
      if (updated) { this.iou = updated; this.snackBar.open('Decision saved to temporary IOU preview data.', 'Dismiss', { duration: 3500 }); }
      return;
    }
    this.saving = true;
    this.iouService.decide(iou.id, payload).pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => { this.iou = updated; this.snackBar.open('IOU decision recorded.', 'Dismiss', { duration: 3500 }); },
      error: () => this.snackBar.open('The IOU decision could not be recorded.', 'Dismiss', { duration: 3500 })
    });
  }
}