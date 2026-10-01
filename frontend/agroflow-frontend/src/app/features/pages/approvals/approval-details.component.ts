import { CurrencyPipe, DatePipe, DecimalPipe } from '@angular/common';
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
import { ApprovalActionDialogComponent, ApprovalActionDialogData } from './approval-action-dialog.component';
import { ApprovalStatusChipComponent } from '../../approvals/components/approval-status-chip/approval-status-chip.component';
import { ApprovalPreviewStore } from '../../approvals/services/approval-preview.store';
import { ApprovalService } from '../../approvals/services/approval.service';
import { ApprovalActionPayload, ApprovalDecision, ApprovalRecord } from '../../approvals/models/approval.model';

@Component({
  selector: 'app-approval-details',
  standalone: true,
  imports: [
    ApprovalStatusChipComponent,
    CurrencyPipe,
    DatePipe,
    DecimalPipe,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    RouterLink
  ],
  templateUrl: './approval-details.component.html',
  styleUrl: './approval-details.component.scss'
})
export class ApprovalDetailsComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly approvalService = inject(ApprovalService);
  private readonly previewStore = inject(ApprovalPreviewStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly dialog = inject(MatDialog);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  approval?: ApprovalRecord;
  loading = true;
  previewMode = false;
  saving = false;
  errorMessage = '';

  ngOnInit(): void { this.loadApproval(); }

  get canDecide(): boolean { return this.approval?.status === 'Pending' || this.approval?.status === 'Changes Requested'; }
  retry(): void { this.loadApproval(); }

  approve(): void { this.processDecision({ decision: 'approve' }); }

  reject(): void { this.openCommentDialog('reject'); }
  returnForChanges(): void { this.openCommentDialog('return'); }

  private loadApproval(): void {
    const email = this.authService.currentUser()?.email;
    const approvalId = this.route.snapshot.paramMap.get('approvalId');
    if (!email) {
      void this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    if (!approvalId) {
      this.loading = false;
      this.errorMessage = 'An approval ID is required.';
      return;
    }

    this.loading = true;
    this.errorMessage = '';
    this.approvalService.getAssignedApproval(approvalId, email)
      .pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (approval) => { this.approval = approval; this.previewMode = false; },
        error: () => {
          const preview = this.previewStore.getById(email, approvalId);
          if (preview) {
            this.approval = preview;
            this.previewMode = true;
          } else {
            this.errorMessage = 'This request is not assigned to your approval queue.';
          }
        }
      });
  }

  private openCommentDialog(decision: 'reject' | 'return'): void {
    const approval = this.approval;
    if (!approval || !this.canDecide || this.saving) return;
    const data: ApprovalActionDialogData = { decision, requestId: approval.id, title: approval.title };
    this.dialog.open<ApprovalActionDialogComponent, ApprovalActionDialogData, string>(ApprovalActionDialogComponent, {
      width: 'min(500px, calc(100vw - 32px))',
      maxWidth: 'calc(100vw - 32px)',
      data,
      autoFocus: 'first-tabbable'
    }).afterClosed()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((comment) => {
        if (comment) this.processDecision({ decision, comment });
      });
  }

  private processDecision(payload: ApprovalActionPayload): void {
    const approval = this.approval;
    const user = this.authService.currentUser();
    if (!approval || !user || !this.canDecide || this.saving) return;
    if (this.previewMode) {
      const updated = this.previewStore.decide(user.email, approval.id, payload, user.displayName);
      if (updated) {
        this.approval = updated;
        this.showMessage('Decision saved to temporary preview data.');
      }
      return;
    }

    this.saving = true;
    this.approvalService.submitDecision(approval.id, user.email, payload)
      .pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (updated) => {
          this.approval = updated;
          this.showMessage('Approval decision recorded.');
        },
        error: () => this.showMessage('The decision could not be recorded. Please try again.')
      });
  }

  private showMessage(message: string): void {
    this.snackBar.open(message, 'Dismiss', { duration: 3500 });
  }
}