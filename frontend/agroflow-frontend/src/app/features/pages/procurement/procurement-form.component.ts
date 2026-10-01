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
import { PROCUREMENT_CATEGORIES, ProcurementCategory, ProcurementRequest, ProcurementRequestPayload } from '../../procurement/models/procurement.model';
import { ProcurementPreviewStore } from '../../procurement/services/procurement-preview.store';
import { ProcurementService } from '../../procurement/services/procurement.service';

function requiredFutureDate(control: AbstractControl): ValidationErrors | null {
  if (!(control.value instanceof Date) || Number.isNaN(control.value.getTime())) return { required: true };
  const selected = new Date(control.value.getFullYear(), control.value.getMonth(), control.value.getDate());
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected < today ? { pastDate: true } : null;
}

@Component({
  selector: 'app-procurement-form',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, ReactiveFormsModule, RouterLink],
  templateUrl: './procurement-form.component.html',
  styleUrl: './procurement-form.component.scss'
})
export class ProcurementFormComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly departmentService = inject(DepartmentService);
  private readonly departmentPreviewStore = inject(DepartmentPreviewStore);
  private readonly procurementService = inject(ProcurementService);
  private readonly previewStore = inject(ProcurementPreviewStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  readonly categories: readonly ProcurementCategory[] = PROCUREMENT_CATEGORIES;
  readonly minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  readonly form = new FormGroup({
    requestTitle: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(140)] }),
    departmentId: new FormControl<number | null>(null, { validators: [Validators.required, Validators.min(1)] }),
    category: new FormControl<ProcurementCategory | null>(null, { validators: [Validators.required] }),
    itemDescription: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(5), Validators.maxLength(500)] }),
    quantity: new FormControl<number | null>(null, { validators: [Validators.required, Validators.min(1)] }),
    estimatedUnitPrice: new FormControl<number | null>(null, { validators: [Validators.required, Validators.min(0.01)] }),
    estimatedTotalAmount: new FormControl({ value: 0, disabled: true }, { nonNullable: true }),
    requiredDate: new FormControl<Date | null>(null, { validators: [requiredFutureDate] }),
    justification: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10), Validators.maxLength(2000)] }),
    preferredSupplier: new FormControl('', { nonNullable: true, validators: [Validators.maxLength(160)] }),
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
  get pageTitle(): string { return this.isEditingDraft ? 'Edit Procurement Draft' : 'Create Procurement Request'; }

  constructor() {
    this.form.controls.quantity.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.updateEstimatedTotal());
    this.form.controls.estimatedUnitPrice.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.updateEstimatedTotal());
  }

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
    if (file.size > 20 * 1024 * 1024) this.errorMessage = 'Supporting documents must be 20 MB or smaller.';
    else if (!['application/pdf', 'image/jpeg', 'image/png'].includes(file.type)) this.errorMessage = 'Attach a PDF, JPG, or PNG file.';
    else this.selectedFile = file;
    input.value = '';
  }

  removeAttachment(): void { this.selectedFile = undefined; }
  saveDraft(): void { this.persist('draft'); }
  submitForApproval(): void { this.persist('submit'); }
  cancel(): void { void this.router.navigateByUrl(this.draftId ? `/procurement/${encodeURIComponent(this.draftId)}` : '/procurement'); }

  private updateEstimatedTotal(): void {
    const quantity = this.form.controls.quantity.value ?? 0;
    const unitPrice = this.form.controls.estimatedUnitPrice.value ?? 0;
    this.form.controls.estimatedTotalAmount.setValue(this.procurementService.calculateEstimatedTotal(quantity, unitPrice), { emitEvent: false });
  }

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
    this.procurementService.getRequest(this.draftId, ownerEmail, false).pipe(finalize(() => this.loadingDraft = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (request) => this.patchForm(request),
      error: () => {
        const preview = isDevMode() ? this.previewStore.getById(ownerEmail, this.draftId, requesterName) : undefined;
        if (preview?.status === 'Draft') { this.previewMode = true; this.patchForm(preview); }
        else this.errorMessage = 'This draft could not be loaded.';
      }
    });
  }

  private patchForm(request: ProcurementRequest): void {
    this.form.patchValue({
      requestTitle: request.requestTitle,
      departmentId: request.departmentId,
      category: request.category,
      itemDescription: request.item.description,
      quantity: request.item.quantity,
      estimatedUnitPrice: request.item.estimatedUnitPrice,
      requiredDate: new Date(`${request.requiredDate.slice(0, 10)}T12:00:00`),
      justification: request.justification,
      preferredSupplier: request.preferredSupplier ?? '',
      additionalNotes: request.additionalNotes ?? ''
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
    if (this.previewMode) { this.savePreview(user.email, user.displayName, payload, action); return; }

    this.saving = true;
    const request$ = action === 'draft'
      ? this.draftId ? this.procurementService.updateDraft(this.draftId, payload) : this.procurementService.saveDraft(payload)
      : this.draftId ? this.procurementService.submitDraft(this.draftId, payload) : this.procurementService.submit(payload);
    request$.pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (request) => this.finishSave(request, action),
      error: () => {
        if (isDevMode()) { this.savePreview(user.email, user.displayName, payload, action); return; }
        this.errorMessage = 'The Procurement request could not be saved. Please try again.';
      }
    });
  }

  private savePreview(ownerEmail: string, requesterName: string, payload: ProcurementRequestPayload, action: 'draft' | 'submit'): void {
    const request = action === 'draft'
      ? this.previewStore.saveDraft(ownerEmail, requesterName, payload, this.draftId || undefined)
      : this.previewStore.submit(ownerEmail, requesterName, payload, this.draftId || undefined);
    if (!request) { this.errorMessage = 'This draft is no longer available for editing.'; return; }
    this.previewMode = true;
    this.finishSave(request, action);
  }

  private toPayload(department: Department): ProcurementRequestPayload {
    const value = this.form.getRawValue();
    const quantity = value.quantity ?? 0;
    const estimatedUnitPrice = value.estimatedUnitPrice ?? 0;
    return {
      requestTitle: value.requestTitle.trim(),
      departmentId: department.id,
      departmentName: department.name,
      category: value.category ?? 'Other',
      item: { description: value.itemDescription.trim(), quantity, estimatedUnitPrice, estimatedTotalAmount: this.procurementService.calculateEstimatedTotal(quantity, estimatedUnitPrice) },
      requiredDate: this.toISODate(value.requiredDate),
      justification: value.justification.trim(),
      preferredSupplier: value.preferredSupplier.trim(),
      additionalNotes: value.additionalNotes.trim(),
      attachment: this.selectedFile
    };
  }

  private toISODate(date: Date | null): string {
    if (!date) return '';
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  }

  private finishSave(request: ProcurementRequest, action: 'draft' | 'submit'): void {
    this.snackBar.open(action === 'draft' ? 'Procurement request saved as draft.' : 'Procurement request submitted for approval.', 'Dismiss', { duration: 3500 });
    void this.router.navigate(['/procurement', request.id]);
  }
}