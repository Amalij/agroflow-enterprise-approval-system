import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ApprovalDecision } from '../../approvals/models/approval.model';

export interface ApprovalActionDialogData {
  decision: Exclude<ApprovalDecision, 'approve'>;
  requestId: string;
  title: string;
}

@Component({
  selector: 'app-approval-action-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './approval-action-dialog.component.html',
  styleUrl: './approval-action-dialog.component.scss'
})
export class ApprovalActionDialogComponent {
  readonly data = inject<ApprovalActionDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<ApprovalActionDialogComponent, string | undefined>);
  readonly form = new FormGroup({ comment: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/\S/), Validators.maxLength(1000)] }) });

  get title(): string { return this.data.decision === 'reject' ? 'Reject request' : 'Return request for changes'; }
  get submitLabel(): string { return this.data.decision === 'reject' ? 'Reject Request' : 'Return for Changes'; }

  submit(): void {
    if (this.form.invalid) {
      this.form.controls.comment.markAsTouched();
      return;
    }
    this.dialogRef.close(this.form.controls.comment.value.trim());
  }

  close(): void { this.dialogRef.close(); }
}