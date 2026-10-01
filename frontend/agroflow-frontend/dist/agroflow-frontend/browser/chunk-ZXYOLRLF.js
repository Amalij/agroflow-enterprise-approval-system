import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
  MatNativeDateModule
} from "./chunk-TLH3YCPQ.js";
import {
  DepartmentPreviewStore,
  DepartmentService
} from "./chunk-KG37TGCR.js";
import {
  IOUPreviewStore,
  IOUService
} from "./chunk-6H7M7NAD.js";
import "./chunk-CAIZOA7I.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-3KUWR5NY.js";
import "./chunk-2DXKA2R6.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-JUUIYSSP.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-VHWOFMVY.js";
import "./chunk-234M5F2B.js";
import "./chunk-4V2R5SHM.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-N7METAUH.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-CEFQC7DY.js";
import "./chunk-XIFJHBZC.js";
import {
  AuthService
} from "./chunk-FVZ63Q7G.js";
import "./chunk-AW4U6G7T.js";
import {
  MatError,
  MatFormField,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-EVUGFGV4.js";
import "./chunk-WG4DC2AT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MaxLengthValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-WZQ4T6AT.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-QXMR3LDA.js";
import {
  takeUntilDestroyed
} from "./chunk-35TXIJWI.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-KV3NKOTC.js";
import "./chunk-DBRYW4UZ.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-A3MOLE3M.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-PEU3H2UL.js";
import "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
  finalize,
  inject,
  isDevMode,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/iou/iou-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function IOUFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Development preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " IOU changes are temporary and won't be sent to the server.");
    \u0275\u0275elementEnd()();
  }
}
function IOUFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Department preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " The department options are temporary; IOU actions still use the configured API.");
    \u0275\u0275elementEnd()();
  }
}
function IOUFormComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function IOUFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-progress-spinner", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading draft\u2026");
    \u0275\u0275elementEnd()();
  }
}
function IOUFormComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Purpose is required.");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Use 120 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Description is required.");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter at least 10 characters.");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Use 2000 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Amount is required.");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Amount must be greater than 0.");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required date is required.");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required date cannot be in the past.");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r3 = ctx.$implicit;
    \u0275\u0275property("value", department_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(department_r3.name);
  }
}
function IOUFormComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Select a department.");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint");
    \u0275\u0275text(1, "Loading departments\u2026");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 31)(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 40);
    \u0275\u0275listener("click", function IOUFormComponent_Conditional_79_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAttachment());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.selectedFile.name);
  }
}
function IOUFormComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 31)(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.existingAttachmentName);
  }
}
function IOUFormComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32);
    \u0275\u0275text(1, "No file selected");
    \u0275\u0275elementEnd();
  }
}
function IOUFormComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Use 1000 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function requiredFutureDate(control) {
  if (!(control.value instanceof Date) || Number.isNaN(control.value.getTime()))
    return { required: true };
  const selected = new Date(control.value.getFullYear(), control.value.getMonth(), control.value.getDate());
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  return selected < today ? { pastDate: true } : null;
}
var _IOUFormComponent = class _IOUFormComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.departmentService = inject(DepartmentService);
    this.departmentPreviewStore = inject(DepartmentPreviewStore);
    this.iouService = inject(IOUService);
    this.iouPreviewStore = inject(IOUPreviewStore);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.minDate = new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), (/* @__PURE__ */ new Date()).getDate());
    this.form = new FormGroup({
      purpose: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.maxLength(120)] }),
      description: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.minLength(10), Validators.maxLength(2e3)] }),
      amount: new FormControl(null, { validators: [Validators.required, Validators.min(0.01)] }),
      requiredDate: new FormControl(null, { validators: [requiredFutureDate] }),
      departmentId: new FormControl(null, { validators: [Validators.required, Validators.min(1)] }),
      additionalNotes: new FormControl("", { nonNullable: true, validators: [Validators.maxLength(1e3)] })
    });
    this.departments = isDevMode() ? this.departmentPreviewStore.getAll() : [];
    this.departmentPreview = isDevMode();
    this.loadingDepartments = true;
    this.loadingDraft = false;
    this.saving = false;
    this.previewMode = false;
    this.errorMessage = "";
    this.draftId = "";
    this.existingAttachmentName = "";
  }
  get isEditingDraft() {
    return !!this.draftId;
  }
  get pageTitle() {
    return this.isEditingDraft ? "Edit IOU Draft" : "Create IOU";
  }
  ngOnInit() {
    const user = this.authService.currentUser();
    if (!user) {
      void this.router.navigate(["/login"], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    this.draftId = this.route.snapshot.queryParamMap.get("draftId") ?? "";
    this.loadDepartments();
    if (this.draftId)
      this.loadDraft(user.email, user.displayName);
  }
  onFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0];
    this.errorMessage = "";
    if (!file)
      return;
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
    if (file.size > 10 * 1024 * 1024)
      this.errorMessage = "Attachments must be 10 MB or smaller.";
    else if (!allowedTypes.includes(file.type))
      this.errorMessage = "Attach a PDF, JPG, or PNG file.";
    else
      this.selectedFile = file;
    input.value = "";
  }
  removeAttachment() {
    this.selectedFile = void 0;
  }
  saveDraft() {
    this.persist("draft");
  }
  submitForApproval() {
    this.persist("submit");
  }
  cancel() {
    void this.router.navigateByUrl(this.draftId ? `/iou/${encodeURIComponent(this.draftId)}` : "/iou");
  }
  loadDepartments() {
    this.departmentService.getDepartments().pipe(finalize(() => this.loadingDepartments = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (departments) => {
        this.departments = departments;
        this.departmentPreview = false;
      },
      error: () => {
        if (isDevMode()) {
          this.departments = this.departmentPreviewStore.getAll();
          this.departmentPreview = true;
        } else {
          this.departments = [];
          this.departmentPreview = false;
          this.errorMessage = "Departments could not be loaded. Please try again later.";
        }
      }
    });
  }
  loadDraft(ownerEmail, requesterName) {
    this.loadingDraft = true;
    this.iouService.getMyIOU(this.draftId, ownerEmail).pipe(finalize(() => this.loadingDraft = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (iou) => this.patchForm(iou),
      error: () => {
        if (isDevMode()) {
          const preview = this.iouPreviewStore.getById(ownerEmail, this.draftId, requesterName);
          if (preview?.status === "Draft") {
            this.previewMode = true;
            this.patchForm(preview);
          } else
            this.errorMessage = "This draft could not be loaded.";
        } else
          this.errorMessage = "This draft could not be loaded.";
      }
    });
  }
  patchForm(iou) {
    this.form.patchValue({
      purpose: iou.purpose,
      description: iou.description,
      amount: iou.amount,
      requiredDate: /* @__PURE__ */ new Date(`${iou.requiredDate.slice(0, 10)}T12:00:00`),
      departmentId: iou.departmentId,
      additionalNotes: iou.additionalNotes ?? ""
    });
    this.existingAttachmentName = iou.attachment?.fileName ?? "";
  }
  persist(action) {
    this.errorMessage = "";
    if (this.form.invalid || this.saving || this.loadingDraft) {
      this.form.markAllAsTouched();
      return;
    }
    const user = this.authService.currentUser();
    if (!user)
      return;
    const departmentId = this.form.controls.departmentId.value;
    const department = this.departments.find((item) => item.id === departmentId);
    if (!departmentId || !department) {
      this.errorMessage = "Select an available department.";
      return;
    }
    const payload = this.createRequestPayload(department);
    this.saving = true;
    if (this.previewMode) {
      const preview = action === "draft" ? this.iouPreviewStore.saveDraft(user.email, user.displayName, payload, this.draftId || void 0) : this.iouPreviewStore.submit(user.email, user.displayName, payload, this.draftId || void 0);
      this.saving = false;
      if (preview)
        this.finishSave(preview, action);
      else
        this.errorMessage = "This draft is no longer available for editing.";
      return;
    }
    const request$ = action === "draft" ? this.draftId ? this.iouService.updateDraft(this.draftId, payload) : this.iouService.saveDraft(payload) : this.draftId ? this.iouService.submitDraftForApproval(this.draftId, payload) : this.iouService.submitForApproval(payload);
    request$.pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (iou) => this.finishSave(iou, action),
      error: () => {
        if (isDevMode()) {
          const preview = action === "draft" ? this.iouPreviewStore.saveDraft(user.email, user.displayName, payload, this.draftId || void 0) : this.iouPreviewStore.submit(user.email, user.displayName, payload, this.draftId || void 0);
          if (preview) {
            this.previewMode = true;
            this.finishSave(preview, action);
            return;
          }
        }
        this.errorMessage = "The IOU could not be saved. Please try again.";
      }
    });
  }
  createRequestPayload(department) {
    const value = this.form.getRawValue();
    return {
      purpose: value.purpose.trim(),
      description: value.description.trim(),
      amount: value.amount ?? 0,
      requiredDate: this.dateToISO(value.requiredDate),
      departmentId: department.id,
      departmentName: department.name,
      additionalNotes: value.additionalNotes.trim(),
      attachment: this.selectedFile
    };
  }
  dateToISO(date) {
    if (!date)
      return "";
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${date.getFullYear()}-${month}-${day}`;
  }
  finishSave(iou, action) {
    this.snackBar.open(action === "draft" ? "IOU saved as draft." : "IOU submitted for approval.", "Dismiss", { duration: 3500 });
    void this.router.navigate(["/iou", iou.id]);
  }
};
_IOUFormComponent.\u0275fac = function IOUFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IOUFormComponent)();
};
_IOUFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IOUFormComponent, selectors: [["app-iou-form"]], decls: 100, vars: 24, consts: [["requiredDatePicker", ""], ["fileInput", ""], ["aria-labelledby", "iou-form-title", 1, "iou-form-page"], ["routerLink", "/iou", 1, "back-link"], [1, "page-heading"], [1, "eyebrow"], ["id", "iou-form-title"], [1, "description"], ["role", "status", 1, "preview-notice"], ["role", "alert", 1, "error-notice"], [1, "loading-panel"], ["appearance", "outlined", 1, "form-card"], [1, "form-card-heading"], [1, "required-hint"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-grid"], ["appearance", "outline", 1, "wide-field"], ["matInput", "", "formControlName", "purpose", "maxlength", "120", "placeholder", "Briefly explain the purpose"], ["matInput", "", "formControlName", "description", "rows", "4", "maxlength", "2000", "placeholder", "Provide details to help reviewers assess the request"], ["appearance", "outline"], ["matInput", "", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "amount", "placeholder", "0.00"], ["matTextPrefix", ""], ["matInput", "", "formControlName", "requiredDate", "placeholder", "Choose a date", 3, "matDatepicker", "min"], ["matIconSuffix", "", 3, "for"], ["formControlName", "departmentId"], [3, "value"], [1, "attachment-field", "wide-field"], [1, "field-label"], ["type", "file", "accept", "application/pdf,image/jpeg,image/png", "hidden", "", 3, "change"], [1, "attachment-control"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "file-name"], [1, "no-file"], ["matInput", "", "formControlName", "additionalNotes", "rows", "3", "maxlength", "1000", "placeholder", "Add any relevant context for reviewers"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click", "disabled"], [1, "action-spacer"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mode", "indeterminate", "diameter", "32", "aria-label", "Loading draft"], ["mat-icon-button", "", "type", "button", "aria-label", "Remove attachment", 3, "click"]], template: function IOUFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "a", 3)(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Back to IOU Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "header", 4)(6, "div")(7, "p", 5);
    \u0275\u0275text(8, "FINANCE WORKSPACE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 7);
    \u0275\u0275text(12, "Request an advance that follows your organization's approval workflow.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, IOUFormComponent_Conditional_13_Template, 7, 0, "div", 8)(14, IOUFormComponent_Conditional_14_Template, 7, 0, "div", 8);
    \u0275\u0275conditionalCreate(15, IOUFormComponent_Conditional_15_Template, 5, 1, "div", 9);
    \u0275\u0275conditionalCreate(16, IOUFormComponent_Conditional_16_Template, 4, 0, "div", 10);
    \u0275\u0275elementStart(17, "mat-card", 11)(18, "div", 12)(19, "div")(20, "h2");
    \u0275\u0275text(21, "IOU Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Complete the request details below.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span", 13);
    \u0275\u0275text(25, "* Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "mat-divider");
    \u0275\u0275elementStart(27, "form", 14);
    \u0275\u0275listener("ngSubmit", function IOUFormComponent_Template_form_ngSubmit_27_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submitForApproval());
    });
    \u0275\u0275elementStart(28, "div", 15)(29, "mat-form-field", 16)(30, "mat-label");
    \u0275\u0275text(31, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 17);
    \u0275\u0275conditionalCreate(33, IOUFormComponent_Conditional_33_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(34, IOUFormComponent_Conditional_34_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 16)(36, "mat-label");
    \u0275\u0275text(37, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "textarea", 18);
    \u0275\u0275conditionalCreate(39, IOUFormComponent_Conditional_39_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(40, IOUFormComponent_Conditional_40_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(41, IOUFormComponent_Conditional_41_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-form-field", 19)(43, "mat-label");
    \u0275\u0275text(44, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "input", 20);
    \u0275\u0275elementStart(46, "span", 21);
    \u0275\u0275text(47, "$\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(48, IOUFormComponent_Conditional_48_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(49, IOUFormComponent_Conditional_49_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-form-field", 19)(51, "mat-label");
    \u0275\u0275text(52, "Required Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 22)(54, "mat-datepicker-toggle", 23)(55, "mat-datepicker", null, 0);
    \u0275\u0275conditionalCreate(57, IOUFormComponent_Conditional_57_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(58, IOUFormComponent_Conditional_58_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-form-field", 16)(60, "mat-label");
    \u0275\u0275text(61, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-select", 24);
    \u0275\u0275repeaterCreate(63, IOUFormComponent_For_64_Template, 2, 2, "mat-option", 25, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(65, IOUFormComponent_Conditional_65_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(66, IOUFormComponent_Conditional_66_Template, 2, 0, "mat-hint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 26)(68, "div", 27);
    \u0275\u0275text(69, "Supporting Document / Attachment ");
    \u0275\u0275elementStart(70, "span");
    \u0275\u0275text(71, "Optional \xB7 PDF, JPG, PNG up to 10 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "input", 28, 1);
    \u0275\u0275listener("change", function IOUFormComponent_Template_input_change_72_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 29)(75, "button", 30);
    \u0275\u0275listener("click", function IOUFormComponent_Template_button_click_75_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r4 = \u0275\u0275reference(73);
      return \u0275\u0275resetView(fileInput_r4.click());
    });
    \u0275\u0275elementStart(76, "mat-icon");
    \u0275\u0275text(77, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(78, "Choose file");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(79, IOUFormComponent_Conditional_79_Template, 7, 1, "span", 31)(80, IOUFormComponent_Conditional_80_Template, 4, 1, "span", 31)(81, IOUFormComponent_Conditional_81_Template, 2, 0, "span", 32);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(82, "mat-form-field", 16)(83, "mat-label");
    \u0275\u0275text(84, "Additional Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(85, "textarea", 33);
    \u0275\u0275conditionalCreate(86, IOUFormComponent_Conditional_86_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(87, "mat-divider");
    \u0275\u0275elementStart(88, "div", 34)(89, "button", 35);
    \u0275\u0275listener("click", function IOUFormComponent_Template_button_click_89_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cancel());
    });
    \u0275\u0275text(90, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(91, "span", 36);
    \u0275\u0275elementStart(92, "button", 37);
    \u0275\u0275listener("click", function IOUFormComponent_Template_button_click_92_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveDraft());
    });
    \u0275\u0275elementStart(93, "mat-icon");
    \u0275\u0275text(94, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(95, "Save as Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "button", 38)(97, "mat-icon");
    \u0275\u0275text(98, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(99, "Submit for Approval");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const requiredDatePicker_r6 = \u0275\u0275reference(56);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.pageTitle);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.previewMode ? 13 : ctx.departmentPreview ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.errorMessage ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loadingDraft ? 16 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.form.controls.purpose.hasError("required") && ctx.form.controls.purpose.touched ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.purpose.hasError("maxlength") ? 34 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.form.controls.description.hasError("required") && ctx.form.controls.description.touched ? 39 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.description.hasError("minlength") ? 40 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.description.hasError("maxlength") ? 41 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.form.controls.amount.hasError("required") && ctx.form.controls.amount.touched ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.amount.hasError("min") ? 49 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("matDatepicker", requiredDatePicker_r6)("min", ctx.minDate);
    \u0275\u0275advance();
    \u0275\u0275property("for", requiredDatePicker_r6);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.form.controls.requiredDate.hasError("required") && ctx.form.controls.requiredDate.touched ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.requiredDate.hasError("pastDate") ? 58 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.departments);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.departmentId.hasError("required") && ctx.form.controls.departmentId.touched ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loadingDepartments ? 66 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx.selectedFile ? 79 : ctx.existingAttachmentName ? 80 : 81);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.form.controls.additionalNotes.hasError("maxlength") ? 86 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.saving);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.saving || ctx.loadingDraft);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.saving || ctx.loadingDraft);
  }
}, dependencies: [
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatCardModule,
  MatCard,
  MatDatepickerModule,
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerToggle,
  MatDividerModule,
  MatDivider,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatHint,
  MatError,
  MatPrefix,
  MatSuffix,
  MatIconModule,
  MatIcon,
  MatInputModule,
  MatInput,
  MatNativeDateModule,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatSnackBarModule,
  ReactiveFormsModule,
  \u0275NgNoValidate,
  DefaultValueAccessor,
  NumberValueAccessor,
  NgControlStatus,
  NgControlStatusGroup,
  MaxLengthValidator,
  MinValidator,
  FormGroupDirective,
  FormControlName,
  RouterLink
], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.iou-form-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 1px 0 3px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 27px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.preview-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b86156;\n}\n.loading-panel[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 110px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  color: #7c8980;\n  font-size: 11px;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 21px 23px 0;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.form-card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n}\n.form-card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2b3d32;\n  font: 600 15px/1.3 "Space Grotesk", sans-serif;\n}\n.form-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 10px;\n}\n.required-hint[_ngcontent-%COMP%] {\n  color: #8a958d;\n  font-size: 9px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 3px 14px;\n  padding: 20px 0 10px;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wide-field[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.attachment-field[_ngcontent-%COMP%] {\n  padding: 2px 0 17px;\n}\n.field-label[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #4f5f54;\n  font-size: 10px;\n  font-weight: 600;\n}\n.field-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  color: #8d9890;\n  font-size: 9px;\n  font-weight: 400;\n}\n.attachment-control[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 38px;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 11px;\n}\n.attachment-control[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.attachment-control[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.file-name[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  gap: 5px;\n  color: #59695e;\n  font-size: 10px;\n  overflow-wrap: anywhere;\n}\n.file-name[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  font-size: 15px;\n}\n.file-name[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #8a625b;\n}\n.no-file[_ngcontent-%COMP%] {\n  color: #929d94;\n  font-size: 10px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 9px;\n  padding: 14px 0 17px;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 36px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.form-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.action-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .iou-form-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 620px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: 17px 14px 0;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 2px;\n  }\n  .wide-field[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column-reverse;\n  }\n  .action-spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .field-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    margin: 4px 0 0;\n  }\n}\n/*# sourceMappingURL=iou-form.component.css.map */'] });
var IOUFormComponent = _IOUFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IOUFormComponent, [{
    type: Component,
    args: [{ selector: "app-iou-form", standalone: true, imports: [
      MatButtonModule,
      MatCardModule,
      MatDatepickerModule,
      MatDividerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatNativeDateModule,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSnackBarModule,
      ReactiveFormsModule,
      RouterLink
    ], template: `<section class="iou-form-page" aria-labelledby="iou-form-title">\r
  <a class="back-link" routerLink="/iou"><mat-icon>arrow_back</mat-icon>Back to IOU Management</a>\r
  <header class="page-heading"><div><p class="eyebrow">FINANCE WORKSPACE</p><h1 id="iou-form-title">{{ pageTitle }}</h1><p class="description">Request an advance that follows your organization's approval workflow.</p></div></header>\r
\r
  @if (previewMode) {\r
    <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Development preview</strong> IOU changes are temporary and won't be sent to the server.</span></div>\r
  } @else if (departmentPreview) {\r
    <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Department preview</strong> The department options are temporary; IOU actions still use the configured API.</span></div>\r
  }\r
  @if (errorMessage) { <div class="error-notice" role="alert"><mat-icon>error_outline</mat-icon><span>{{ errorMessage }}</span></div> }\r
  @if (loadingDraft) { <div class="loading-panel"><mat-progress-spinner mode="indeterminate" diameter="32" aria-label="Loading draft"></mat-progress-spinner><span>Loading draft\u2026</span></div> }\r
\r
  <mat-card appearance="outlined" class="form-card">\r
    <div class="form-card-heading"><div><h2>IOU Information</h2><p>Complete the request details below.</p></div><span class="required-hint">* Required</span></div>\r
    <mat-divider></mat-divider>\r
    <form [formGroup]="form" (ngSubmit)="submitForApproval()" novalidate>\r
      <div class="form-grid">\r
        <mat-form-field appearance="outline" class="wide-field">\r
          <mat-label>Purpose</mat-label>\r
          <input matInput formControlName="purpose" maxlength="120" placeholder="Briefly explain the purpose">\r
          @if (form.controls.purpose.hasError('required') && form.controls.purpose.touched) { <mat-error>Purpose is required.</mat-error> }\r
          @if (form.controls.purpose.hasError('maxlength')) { <mat-error>Use 120 characters or fewer.</mat-error> }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="wide-field">\r
          <mat-label>Description</mat-label>\r
          <textarea matInput formControlName="description" rows="4" maxlength="2000" placeholder="Provide details to help reviewers assess the request"></textarea>\r
          @if (form.controls.description.hasError('required') && form.controls.description.touched) { <mat-error>Description is required.</mat-error> }\r
          @if (form.controls.description.hasError('minlength')) { <mat-error>Enter at least 10 characters.</mat-error> }\r
          @if (form.controls.description.hasError('maxlength')) { <mat-error>Use 2000 characters or fewer.</mat-error> }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline">\r
          <mat-label>Amount</mat-label>\r
          <input matInput type="number" min="0.01" step="0.01" formControlName="amount" placeholder="0.00">\r
          <span matTextPrefix>$&nbsp;</span>\r
          @if (form.controls.amount.hasError('required') && form.controls.amount.touched) { <mat-error>Amount is required.</mat-error> }\r
          @if (form.controls.amount.hasError('min')) { <mat-error>Amount must be greater than 0.</mat-error> }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline">\r
          <mat-label>Required Date</mat-label>\r
          <input matInput [matDatepicker]="requiredDatePicker" [min]="minDate" formControlName="requiredDate" placeholder="Choose a date">\r
          <mat-datepicker-toggle matIconSuffix [for]="requiredDatePicker"></mat-datepicker-toggle>\r
          <mat-datepicker #requiredDatePicker></mat-datepicker>\r
          @if (form.controls.requiredDate.hasError('required') && form.controls.requiredDate.touched) { <mat-error>Required date is required.</mat-error> }\r
          @if (form.controls.requiredDate.hasError('pastDate')) { <mat-error>Required date cannot be in the past.</mat-error> }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="wide-field">\r
          <mat-label>Department</mat-label>\r
          <mat-select formControlName="departmentId">\r
            @for (department of departments; track department.id) { <mat-option [value]="department.id">{{ department.name }}</mat-option> }\r
          </mat-select>\r
          @if (form.controls.departmentId.hasError('required') && form.controls.departmentId.touched) { <mat-error>Select a department.</mat-error> }\r
          @if (loadingDepartments) { <mat-hint>Loading departments\u2026</mat-hint> }\r
        </mat-form-field>\r
\r
        <div class="attachment-field wide-field">\r
          <div class="field-label">Supporting Document / Attachment <span>Optional \xB7 PDF, JPG, PNG up to 10 MB</span></div>\r
          <input #fileInput type="file" accept="application/pdf,image/jpeg,image/png" hidden (change)="onFileSelected($event)">\r
          <div class="attachment-control">\r
            <button mat-stroked-button type="button" (click)="fileInput.click()"><mat-icon>attach_file</mat-icon>Choose file</button>\r
            @if (selectedFile) {\r
              <span class="file-name"><mat-icon>description</mat-icon>{{ selectedFile.name }}<button mat-icon-button type="button" aria-label="Remove attachment" (click)="removeAttachment()"><mat-icon>close</mat-icon></button></span>\r
            } @else if (existingAttachmentName) {\r
              <span class="file-name"><mat-icon>description</mat-icon>{{ existingAttachmentName }}</span>\r
            } @else { <span class="no-file">No file selected</span> }\r
          </div>\r
        </div>\r
\r
        <mat-form-field appearance="outline" class="wide-field">\r
          <mat-label>Additional Notes</mat-label>\r
          <textarea matInput formControlName="additionalNotes" rows="3" maxlength="1000" placeholder="Add any relevant context for reviewers"></textarea>\r
          @if (form.controls.additionalNotes.hasError('maxlength')) { <mat-error>Use 1000 characters or fewer.</mat-error> }\r
        </mat-form-field>\r
      </div>\r
\r
      <mat-divider></mat-divider>\r
      <div class="form-actions">\r
        <button mat-button type="button" (click)="cancel()" [disabled]="saving">Cancel</button>\r
        <span class="action-spacer"></span>\r
        <button mat-stroked-button type="button" (click)="saveDraft()" [disabled]="saving || loadingDraft"><mat-icon>save</mat-icon>Save as Draft</button>\r
        <button mat-flat-button color="primary" type="submit" [disabled]="saving || loadingDraft"><mat-icon>send</mat-icon>Submit for Approval</button>\r
      </div>\r
    </form>\r
  </mat-card>\r
</section>`, styles: ['/* src/app/features/pages/iou/iou-form.component.scss */\n:host {\n  display: block;\n}\n.iou-form-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: arrive 260ms ease-out both;\n}\n.back-link {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link mat-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading {\n  padding: 1px 0 3px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 27px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.preview-notice {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.preview-notice strong {\n  margin-right: 4px;\n}\n.error-notice {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice mat-icon {\n  color: #b86156;\n}\n.loading-panel {\n  display: flex;\n  min-height: 110px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  color: #7c8980;\n  font-size: 11px;\n}\n.form-card {\n  padding: 21px 23px 0;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.form-card-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n}\n.form-card-heading h2 {\n  margin: 0;\n  color: #2b3d32;\n  font: 600 15px/1.3 "Space Grotesk", sans-serif;\n}\n.form-card-heading p {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 10px;\n}\n.required-hint {\n  color: #8a958d;\n  font-size: 9px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 3px 14px;\n  padding: 20px 0 10px;\n}\n.form-grid mat-form-field {\n  width: 100%;\n}\n.wide-field {\n  grid-column: 1/-1;\n}\n.attachment-field {\n  padding: 2px 0 17px;\n}\n.field-label {\n  margin-bottom: 8px;\n  color: #4f5f54;\n  font-size: 10px;\n  font-weight: 600;\n}\n.field-label span {\n  margin-left: 5px;\n  color: #8d9890;\n  font-size: 9px;\n  font-weight: 400;\n}\n.attachment-control {\n  display: flex;\n  min-height: 38px;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 11px;\n}\n.attachment-control > button {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.attachment-control > button mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.file-name {\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  gap: 5px;\n  color: #59695e;\n  font-size: 10px;\n  overflow-wrap: anywhere;\n}\n.file-name > mat-icon {\n  width: 15px;\n  height: 15px;\n  font-size: 15px;\n}\n.file-name button {\n  width: 28px;\n  height: 28px;\n  color: #8a625b;\n}\n.no-file {\n  color: #929d94;\n  font-size: 10px;\n}\n.form-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 9px;\n  padding: 14px 0 17px;\n}\n.form-actions button {\n  min-height: 36px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.form-actions mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.action-spacer {\n  flex: 1;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .iou-form-page {\n    animation: none;\n  }\n}\n@media (max-width: 620px) {\n  .form-card {\n    padding: 17px 14px 0;\n  }\n  .form-grid {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 2px;\n  }\n  .wide-field {\n    grid-column: auto;\n  }\n  .form-actions {\n    align-items: stretch;\n    flex-direction: column-reverse;\n  }\n  .action-spacer {\n    display: none;\n  }\n  .form-actions button {\n    width: 100%;\n  }\n  .field-label span {\n    display: block;\n    margin: 4px 0 0;\n  }\n}\n/*# sourceMappingURL=iou-form.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IOUFormComponent, { className: "IOUFormComponent", filePath: "src/app/features/pages/iou/iou-form.component.ts", lineNumber: 45 });
})();
export {
  IOUFormComponent
};
//# sourceMappingURL=chunk-ZXYOLRLF.js.map
