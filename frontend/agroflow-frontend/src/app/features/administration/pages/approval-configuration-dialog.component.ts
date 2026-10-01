import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ApprovalConfiguration, APPROVAL_REQUEST_TYPES, ApproverRole } from '../models/administration.model';

export interface ApprovalConfigurationDialogData { configuration: ApprovalConfiguration; mode: 'view' | 'edit'; }

const amountRangeValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const minimumAmount = control.get('minimumAmount')?.value as number | null;
  const maximumAmount = control.get('maximumAmount')?.value as number | null;
  return maximumAmount !== null && minimumAmount !== null && maximumAmount < minimumAmount ? { invalidAmountRange: true } : null;
};

@Component({
  selector: 'app-approval-configuration-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSlideToggleModule, ReactiveFormsModule],
  templateUrl: './approval-configuration-dialog.component.html',
  styleUrl: './administration-pages.component.scss'
})
export class ApprovalConfigurationDialogComponent {
  readonly data = inject<ApprovalConfigurationDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<ApprovalConfigurationDialogComponent, ApprovalConfiguration | undefined>);
  readonly requestTypes = APPROVAL_REQUEST_TYPES;
  readonly departments = ['Agriculture', 'Finance', 'Operations', 'Procurement'];
  readonly roles: ApproverRole[] = ['Manager', 'Approver', 'Admin'];
  readonly form = new FormGroup({
    requestType: new FormControl(this.data.configuration.requestType, { nonNullable: true, validators: [Validators.required] }),
    department: new FormControl(this.data.configuration.department, { nonNullable: true, validators: [Validators.required] }),
    approvalLevel: new FormControl(this.data.configuration.approvalLevel, { nonNullable: true, validators: [Validators.required, Validators.min(1)] }),
    approverRole: new FormControl<ApproverRole>(this.data.configuration.approverRole, { nonNullable: true, validators: [Validators.required] }),
    minimumAmount: new FormControl(this.data.configuration.minimumAmount, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
    maximumAmount: new FormControl<number | null>(this.data.configuration.maximumAmount, { validators: [Validators.min(0)] }),
    active: new FormControl(this.data.configuration.active, { nonNullable: true })
  }, { validators: amountRangeValidator });

  constructor() { if (this.data.mode === 'view') this.form.disable(); }

  save(): void {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.dialogRef.close({ ...this.data.configuration, ...this.form.getRawValue() });
  }
}