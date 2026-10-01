import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { Department, DepartmentWrite } from '../../departments/models/department.model';

export type DepartmentDialogMode = 'view' | 'create' | 'edit' | 'delete';

export interface DepartmentDialogData {
  mode: DepartmentDialogMode;
  department?: Department;
}

export type DepartmentDialogResult =
  | { action: 'save'; department: DepartmentWrite }
  | { action: 'delete' };

@Component({
  selector: 'app-department-dialog',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  templateUrl: './department-dialog.component.html',
  styleUrl: './department-dialog.component.scss'
})
export class DepartmentDialogComponent implements OnInit {
  readonly data = inject<DepartmentDialogData>(MAT_DIALOG_DATA);
  private readonly dialogRef = inject(MatDialogRef<DepartmentDialogComponent, DepartmentDialogResult | undefined>);

  readonly form = new FormGroup({
    name: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(120)] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.maxLength(500)] }),
    active: new FormControl(true, { nonNullable: true })
  });

  get title(): string {
    switch (this.data.mode) {
      case 'create': return 'Add Department';
      case 'edit': return 'Edit Department';
      case 'delete': return 'Delete Department';
      default: return 'Department Details';
    }
  }

  ngOnInit(): void {
    const department = this.data.department;
    if (department) {
      this.form.setValue({
        name: department.name,
        description: department.description ?? '',
        active: department.active
      });
    }
    if (this.data.mode === 'view') this.form.disable();
  }

  save(): void {
    if (this.form.invalid || this.data.mode === 'view') return;
    this.dialogRef.close({ action: 'save', department: this.form.getRawValue() });
  }

  confirmDelete(): void {
    this.dialogRef.close({ action: 'delete' });
  }

  close(): void {
    this.dialogRef.close();
  }
}