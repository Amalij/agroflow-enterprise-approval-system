import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Department } from '../../departments/models/department.model';
import { USER_ROLES, UserRecord, UserRole, UserWrite } from '../../users/models/user.model';

export type UserDialogMode = 'view' | 'create' | 'edit';

export interface UserDialogData {
  mode: UserDialogMode;
  user?: UserRecord;
  departments: Department[];
}

@Component({
  selector: 'app-user-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './user-dialog.component.html',
  styleUrl: './user-dialog.component.scss'
})
export class UserDialogComponent implements OnInit {
  readonly data = inject<UserDialogData>(MAT_DIALOG_DATA);
  readonly roles: readonly UserRole[] = USER_ROLES;
  private readonly dialogRef = inject(MatDialogRef<UserDialogComponent, UserWrite | undefined>);

  readonly form = new FormGroup({
    fullName: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(120)] }),
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email, Validators.maxLength(254)] }),
    departmentId: new FormControl(0, { nonNullable: true, validators: [Validators.min(1)] }),
    role: new FormControl<UserRole>('Employee', { nonNullable: true, validators: [Validators.required] }),
    active: new FormControl(true, { nonNullable: true })
  });

  get title(): string {
    if (this.data.mode === 'create') return 'Add User';
    if (this.data.mode === 'edit') return 'Edit User';
    return 'User Details';
  }

  ngOnInit(): void {
    const user = this.data.user;
    if (user) {
      this.form.setValue({
        fullName: user.fullName,
        email: user.email,
        departmentId: user.departmentId,
        role: user.role,
        active: user.active
      });
    }
    if (this.data.mode === 'view') this.form.disable();
  }

  save(): void {
    if (this.form.invalid || this.data.mode === 'view') return;
    this.dialogRef.close(this.form.getRawValue());
  }

  close(): void {
    this.dialogRef.close();
  }
}