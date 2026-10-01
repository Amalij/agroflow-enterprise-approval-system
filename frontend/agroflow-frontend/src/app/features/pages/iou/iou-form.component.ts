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
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { finalize } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { DepartmentPreviewStore } from '../../departments/models/services/department-preview.store';
import { DepartmentService } from '../../departments/models/services/department.service';
import { Department } from '../../departments/models/department.model';
import { IOU, IOURequest } from '../../iou/models/iou.model';
import { IOUPreviewStore } from '../../iou/services/iou-preview.store';
import { IOUService } from '../../iou/services/iou.service';

function requiredFutureDate(control: AbstractControl): ValidationErrors | null {
  if (!(control.value instanceof Date) || Number.isNaN(control.value.getTime())) return { required: true };
  const selected = new Date(control.value.getFullYear(), control.value.getMonth(), control.value.getDate());
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected < today ? { pastDate: true } : null;
}

@Component({
  selector: 'app-iou-form',
  standalone: true,
  imports: [
    MatButtonModule, MatCardModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatIconModule,
    MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule,
    ReactiveFormsModule, RouterLink
  ],
  templateUrl: './iou-form.component.html',
  styleUrl: './iou-form.component.scss'
})
export class IOUFormComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly departmentService = inject(DepartmentService);
  private readonly departmentPreviewStore = inject(DepartmentPreviewStore);
  private readonly iouService = inject(IOUService);
  private readonly iouPreviewStore = inject(IOUPreviewStore);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  readonly minDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
  readonly form = new FormGroup({
    purpose: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.maxLength(120)] }),
    description: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.minLength(10), Validators.maxLength(2000)] }),
    amount: new FormControl<number | null>(null, { validators: [Validators.required, Validators.min(0.01)] }),
    requiredDate: new FormControl<Date | null>(null, { validators: [requiredFutureDate] }),
    departmentId: new FormControl<number | null>(null, { validators: [Validators.required, Validators.min(1)] }),
    additionalNotes: new FormControl('', { nonNullable: true, validators: [Validators.maxLength(1000)] })
  });

  departments: Department[] = isDevMode() ? this.departmentPreviewStore.getAll() : [];
  departmentPreview = isDevMode();
  loadingDepartments = true;
  loadingDraft = false;
  saving = false;
  previewMode = false;
  errorMessage = '';
  draftId = '';
  selectedFile?: File;
  existingAttachmentName = '';

  get isEditingDraft(): boolean { return !!this.draftId; }
  get pageTitle(): string { return this.isEditingDraft ? 'Edit IOU Draft' : 'Create IOU'; }

  ngOnInit(): void {
    const user = this.authService.currentUser();
    if (!user) {
      void this.router.navigate(['/login'], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    this.draftId = this.route.snapshot.queryParamMap.get('draftId') ?? '';
    this.loadDepartments();
    if (this.draftId) this.loadDraft(user.email, user.displayName);
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    this.errorMessage = '';
    if (!file) return;
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (file.size > 10 * 1024 * 1024) this.errorMessage = 'Attachments must be 10 MB or smaller.';
    else if (!allowedTypes.includes(file.type)) this.errorMessage = 'Attach a PDF, JPG, or PNG file.';
    else this.selectedFile = file;
    input.value = '';
  }

  removeAttachment(): void { this.selectedFile = undefined; }
  saveDraft(): void { this.persist('draft'); }
  submitForApproval(): void { this.persist('submit'); }

  cancel(): void {
    void this.router.navigateByUrl(this.draftId ? `/iou/${encodeURIComponent(this.draftId)}` : '/iou');
  }

  private loadDepartments(): void {
    this.departmentService.getDepartments().pipe(finalize(() => this.loadingDepartments = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (departments) => { this.departments = departments; this.departmentPreview = false; },
      error: () => {
        if (isDevMode()) {
          this.departments = this.departmentPreviewStore.getAll();
          this.departmentPreview = true;
        } else {
          this.departments = [];
          this.departmentPreview = false;
          this.errorMessage = 'Departments could not be loaded. Please try again later.';
        }
      }
    });
  }

  private loadDraft(ownerEmail: string, requesterName: string): void {
    this.loadingDraft = true;
    this.iouService.getMyIOU(this.draftId, ownerEmail).pipe(finalize(() => this.loadingDraft = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (iou) => this.patchForm(iou),
      error: () => {
        if (isDevMode()) {
          const preview = this.iouPreviewStore.getById(ownerEmail, this.draftId, requesterName);
          if (preview?.status === 'Draft') {
            this.previewMode = true;
            this.patchForm(preview);
          } else this.errorMessage = 'This draft could not be loaded.';
        } else this.errorMessage = 'This draft could not be loaded.';
      }
    });
  }

  private patchForm(iou: IOU): void {
    this.form.patchValue({
      purpose: iou.purpose,
      description: iou.description,
      amount: iou.amount,
      requiredDate: new Date(`${iou.requiredDate.slice(0, 10)}T12:00:00`),
      departmentId: iou.departmentId,
      additionalNotes: iou.additionalNotes ?? ''
    });
    this.existingAttachmentName = iou.attachment?.fileName ?? '';
  }

  private persist(action: 'draft' | 'submit'): void {
    this.errorMessage = '';
    if (this.form.invalid || this.saving || this.loadingDraft) {
      this.form.markAllAsTouched();
      return;
    }
    const user = this.authService.currentUser();
    if (!user) return;
    const departmentId = this.form.controls.departmentId.value;
    const department = this.departments.find((item) => item.id === departmentId);
    if (!departmentId || !department) {
      this.errorMessage = 'Select an available department.';
      return;
    }
    const payload = this.createRequestPayload(department);
    this.saving = true;

    if (this.previewMode) {
      const preview = action === 'draft'
        ? this.iouPreviewStore.saveDraft(user.email, user.displayName, payload, this.draftId || undefined)
        : this.iouPreviewStore.submit(user.email, user.displayName, payload, this.draftId || undefined);
      this.saving = false;
      if (preview) this.finishSave(preview, action);
      else this.errorMessage = 'This draft is no longer available for editing.';
      return;
    }

    const request$ = action === 'draft'
      ? this.draftId ? this.iouService.updateDraft(this.draftId, payload) : this.iouService.saveDraft(payload)
      : this.draftId ? this.iouService.submitDraftForApproval(this.draftId, payload) : this.iouService.submitForApproval(payload);
    request$.pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (iou) => this.finishSave(iou, action),
      error: () => {
        if (isDevMode()) {
          const preview = action === 'draft'
            ? this.iouPreviewStore.saveDraft(user.email, user.displayName, payload, this.draftId || undefined)
            : this.iouPreviewStore.submit(user.email, user.displayName, payload, this.draftId || undefined);
          if (preview) {
            this.previewMode = true;
            this.finishSave(preview, action);
            return;
          }
        }
        this.errorMessage = 'The IOU could not be saved. Please try again.';
      }
    });
  }

  private createRequestPayload(department: Department): IOURequest {
    const value = this.form.getRawValue();
    return {
      purpose: value.purpose.trim(), description: value.description.trim(), amount: value.amount ?? 0,
      requiredDate: this.dateToISO(value.requiredDate), departmentId: department.id, departmentName: department.name,
      additionalNotes: value.additionalNotes.trim(), attachment: this.selectedFile
    };
  }

  private dateToISO(date: Date | null): string {
    if (!date) return '';
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${date.getFullYear()}-${month}-${day}`;
  }

  private finishSave(iou: IOU, action: 'draft' | 'submit'): void {
    this.snackBar.open(action === 'draft' ? 'IOU saved as draft.' : 'IOU submitted for approval.', 'Dismiss', { duration: 3500 });
    void this.router.navigate(['/iou', iou.id]);
  }
}