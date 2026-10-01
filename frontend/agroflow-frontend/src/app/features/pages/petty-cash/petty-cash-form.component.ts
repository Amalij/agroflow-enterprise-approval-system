import { Component, DestroyRef, OnInit, inject, isDevMode } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { DepartmentPreviewStore } from '../../departments/models/services/department-preview.store';
import { DepartmentService } from '../../departments/models/services/department.service';
import { Department } from '../../departments/models/department.model';
import { PETTY_CASH_CATEGORIES, PettyCashRequest, PettyCashRequestPayload } from '../../petty-cash/models/petty-cash.model';
import { PettyCashPreviewStore } from '../../petty-cash/services/petty-cash-preview.store';
import { PettyCashService } from '../../petty-cash/services/petty-cash.service';

function requiredExpenseDate(control: AbstractControl): ValidationErrors | null {
  if (!(control.value instanceof Date) || Number.isNaN(control.value.getTime())) return { required: true };
  const selected = new Date(control.value.getFullYear(), control.value.getMonth(), control.value.getDate());
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected > today ? { futureDate: true } : null;
}

@Component({
  selector: 'app-petty-cash-form',
  standalone: true,
  imports: [
    MatButtonModule, MatCardModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule,
    MatIconModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule,
    MatSnackBarModule, ReactiveFormsModule, RouterLink
  ],
  templateUrl: './petty-cash-form.component.html',
  styleUrl: './petty-cash-form.component.scss'
})
export class PettyCashFormComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly departmentService = inject(DepartmentService);
  private readonly departmentPreviewStore = inject(DepartmentPreviewStore);
  private readonly pettyCashService = inject(PettyCashService);
  private readonly previewStore = inject(PettyCashPreviewStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  readonly categories = PETTY_CASH_CATEGORIES;
  readonly maxExpenseDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  readonly form = new FormGroup({
    purpose: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(120)] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10), Validators.maxLength(2000)] }),
    amount: new FormControl<number | null>(null, { validators: [Validators.required, Validators.min(0.01)] }),
    expenseDate: new FormControl<Date | null>(null, { validators: [requiredExpenseDate] }),
    departmentId: new FormControl<number | null>(null, { validators: [Validators.required, Validators.min(1)] }),
    expenseCategory: new FormControl<(typeof PETTY_CASH_CATEGORIES)[number] | null>(null, { validators: [Validators.required] }),
    additionalNotes: new FormControl('', { nonNullable: true, validators: [Validators.maxLength(1000)] })
  });

  departments: Department[] = isDevMode() ? this.departmentPreviewStore.getAll() : [];
  departmentPreview = isDevMode();
  previewMode = false;
  loadingDepartments = true;
  loadingDraft = false;
  saving = false;
  errorMessage = '';
  draftId = '';
  selectedFile?: File;
  existingAttachmentName = '';

  get isEditingDraft(): boolean { return !!this.draftId; }
  get pageTitle(): string { return this.isEditingDraft ? 'Edit Petty Cash Draft' : 'Create Petty Cash Request'; }

  ngOnInit(): void {
    const user = this.authService.currentUser();
    if (!user) { void this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } }); return; }
    this.draftId = this.route.snapshot.queryParamMap.get('draftId') ?? '';
    this.loadDepartments();
    if (this.draftId) this.loadDraft(user.email, user.displayName);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.errorMessage = '';
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) this.errorMessage = 'Receipts must be 10 MB or smaller.';
    else if (!['application/pdf', 'image/jpeg', 'image/png'].includes(file.type)) this.errorMessage = 'Attach a PDF, JPG, or PNG receipt.';
    else this.selectedFile = file;
    input.value = '';
  }

  removeAttachment(): void { this.selectedFile = undefined; }
  saveDraft(): void { this.persist('draft'); }
  submitForApproval(): void { this.persist('submit'); }
  cancel(): void { void this.router.navigateByUrl(this.draftId ? `/petty-cash/${encodeURIComponent(this.draftId)}` : '/petty-cash'); }

  private loadDepartments(): void {
    this.departmentService.getDepartments().pipe(finalize(() => this.loadingDepartments = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (departments) => { this.departments = departments; this.departmentPreview = false; },
      error: () => {
        if (isDevMode()) { this.departments = this.departmentPreviewStore.getAll(); this.departmentPreview = true; }
        else { this.departments = []; this.departmentPreview = false; this.errorMessage = 'Departments could not be loaded. Please try again later.'; }
      }
    });
  }

  private loadDraft(ownerEmail: string, requesterName: string): void {
    this.loadingDraft = true;
    this.pettyCashService.getRequest(this.draftId, ownerEmail, false).pipe(finalize(() => this.loadingDraft = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (request) => this.patchForm(request),
      error: () => {
        const preview = isDevMode() ? this.previewStore.getById(ownerEmail, this.draftId, requesterName) : undefined;
        if (preview?.status === 'Draft') { this.previewMode = true; this.patchForm(preview); }
        else this.errorMessage = 'This draft could not be loaded.';
      }
    });
  }

  private patchForm(request: PettyCashRequest): void {
    this.form.patchValue({
      purpose: request.purpose, description: request.description, amount: request.amount,
      expenseDate: new Date(`${request.expenseDate.slice(0, 10)}T12:00:00`), departmentId: request.departmentId,
      expenseCategory: request.expenseCategory, additionalNotes: request.additionalNotes ?? ''
    });
    this.existingAttachmentName = request.attachment?.fileName ?? '';
  }

  private persist(action: 'draft' | 'submit'): void {
    this.errorMessage = '';
    if (this.form.invalid || this.saving || this.loadingDraft) { this.form.markAllAsTouched(); return; }
    const user = this.authService.currentUser();
    if (!user) return;
    const department = this.departments.find((item) => item.id === this.form.controls.departmentId.value);
    if (!department) { this.errorMessage = 'Select an available department.'; return; }
    const payload = this.toPayload(department);
    if (this.previewMode) {
      this.savePreview(user.email, user.displayName, payload, action);
      return;
    }

    this.saving = true;
    const request$ = action === 'draft'
      ? this.draftId ? this.pettyCashService.updateDraft(this.draftId, payload) : this.pettyCashService.saveDraft(payload)
      : this.draftId ? this.pettyCashService.submitDraft(this.draftId, payload) : this.pettyCashService.submit(payload);
    request$.pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (request) => this.finishSave(request, action),
      error: () => {
        if (isDevMode()) { this.savePreview(user.email, user.displayName, payload, action); return; }
        this.errorMessage = 'The Petty Cash request could not be saved. Please try again.';
      }
    });
  }

  private savePreview(ownerEmail: string, requesterName: string, payload: PettyCashRequestPayload, action: 'draft' | 'submit'): void {
    const request = action === 'draft'
      ? this.previewStore.saveDraft(ownerEmail, requesterName, payload, this.draftId || undefined)
      : this.previewStore.submit(ownerEmail, requesterName, payload, this.draftId || undefined);
    if (!request) { this.errorMessage = 'This draft is no longer available for editing.'; return; }
    this.previewMode = true;
    this.finishSave(request, action);
  }

  private toPayload(department: Department): PettyCashRequestPayload {
    const value = this.form.getRawValue();
    return {
      purpose: value.purpose.trim(), description: value.description.trim(), amount: value.amount ?? 0,
      expenseDate: this.toISODate(value.expenseDate), departmentId: department.id, departmentName: department.name,
      expenseCategory: value.expenseCategory ?? 'Other', additionalNotes: value.additionalNotes.trim(), attachment: this.selectedFile
    };
  }

  private toISODate(date: Date | null): string {
    if (!date) return '';
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  private finishSave(request: PettyCashRequest, action: 'draft' | 'submit'): void {
    this.snackBar.open(action === 'draft' ? 'Petty Cash request saved as draft.' : 'Petty Cash request submitted for approval.', 'Dismiss', { duration: 3500 });
    void this.router.navigate(['/petty-cash', request.id]);
  }
}