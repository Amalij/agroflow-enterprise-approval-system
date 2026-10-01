import {
  PROCUREMENT_CATEGORIES
} from "./chunk-5GG6WFAT.js";
import {
  ProcurementPreviewStore,
  ProcurementService
} from "./chunk-PU5WRMLX.js";
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
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/procurement/procurement-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProcurementFormComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Development preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Changes are temporary and won't be sent to the server.");
    \u0275\u0275elementEnd()();
  }
}
function ProcurementFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Department preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Department options are temporary; Procurement actions still use the configured API.");
    \u0275\u0275elementEnd()();
  }
}
function ProcurementFormComponent_Conditional_15_Template(rf, ctx) {
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
function ProcurementFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-progress-spinner", 43);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading draft\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ProcurementFormComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Request title is required.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
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
function ProcurementFormComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Select a department.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    \u0275\u0275property("value", category_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r4);
  }
}
function ProcurementFormComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Select a category.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Item or service description is required.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter at least 5 characters.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Quantity is required.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Quantity must be greater than 0.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Unit price is required.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Unit price must be greater than 0.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required date is required.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required date cannot be in the past.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Justification is required.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter at least 10 characters.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementFormComponent_Conditional_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 35)(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 44);
    \u0275\u0275listener("click", function ProcurementFormComponent_Conditional_107_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
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
function ProcurementFormComponent_Conditional_108_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35)(1, "mat-icon");
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
function ProcurementFormComponent_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "No file selected");
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
var _ProcurementFormComponent = class _ProcurementFormComponent {
  get isEditingDraft() {
    return !!this.draftId;
  }
  get pageTitle() {
    return this.isEditingDraft ? "Edit Procurement Draft" : "Create Procurement Request";
  }
  constructor() {
    this.authService = inject(AuthService);
    this.departmentService = inject(DepartmentService);
    this.departmentPreviewStore = inject(DepartmentPreviewStore);
    this.procurementService = inject(ProcurementService);
    this.previewStore = inject(ProcurementPreviewStore);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.categories = PROCUREMENT_CATEGORIES;
    this.minDate = new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), (/* @__PURE__ */ new Date()).getDate());
    this.form = new FormGroup({
      requestTitle: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.maxLength(140)] }),
      departmentId: new FormControl(null, { validators: [Validators.required, Validators.min(1)] }),
      category: new FormControl(null, { validators: [Validators.required] }),
      itemDescription: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.minLength(5), Validators.maxLength(500)] }),
      quantity: new FormControl(null, { validators: [Validators.required, Validators.min(1)] }),
      estimatedUnitPrice: new FormControl(null, { validators: [Validators.required, Validators.min(0.01)] }),
      estimatedTotalAmount: new FormControl({ value: 0, disabled: true }, { nonNullable: true }),
      requiredDate: new FormControl(null, { validators: [requiredFutureDate] }),
      justification: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.minLength(10), Validators.maxLength(2e3)] }),
      preferredSupplier: new FormControl("", { nonNullable: true, validators: [Validators.maxLength(160)] }),
      additionalNotes: new FormControl("", { nonNullable: true, validators: [Validators.maxLength(1e3)] })
    });
    this.departments = isDevMode() ? this.departmentPreviewStore.getAll() : [];
    this.departmentPreview = isDevMode();
    this.previewMode = false;
    this.loadingDepartments = true;
    this.loadingDraft = false;
    this.saving = false;
    this.errorMessage = "";
    this.draftId = "";
    this.existingAttachmentName = "";
    this.form.controls.quantity.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.updateEstimatedTotal());
    this.form.controls.estimatedUnitPrice.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.updateEstimatedTotal());
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
    if (file.size > 20 * 1024 * 1024)
      this.errorMessage = "Supporting documents must be 20 MB or smaller.";
    else if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type))
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
    void this.router.navigateByUrl(this.draftId ? `/procurement/${encodeURIComponent(this.draftId)}` : "/procurement");
  }
  updateEstimatedTotal() {
    const quantity = this.form.controls.quantity.value ?? 0;
    const unitPrice = this.form.controls.estimatedUnitPrice.value ?? 0;
    this.form.controls.estimatedTotalAmount.setValue(this.procurementService.calculateEstimatedTotal(quantity, unitPrice), { emitEvent: false });
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
    this.procurementService.getRequest(this.draftId, ownerEmail, false).pipe(finalize(() => this.loadingDraft = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (request) => this.patchForm(request),
      error: () => {
        const preview = isDevMode() ? this.previewStore.getById(ownerEmail, this.draftId, requesterName) : void 0;
        if (preview?.status === "Draft") {
          this.previewMode = true;
          this.patchForm(preview);
        } else
          this.errorMessage = "This draft could not be loaded.";
      }
    });
  }
  patchForm(request) {
    this.form.patchValue({
      requestTitle: request.requestTitle,
      departmentId: request.departmentId,
      category: request.category,
      itemDescription: request.item.description,
      quantity: request.item.quantity,
      estimatedUnitPrice: request.item.estimatedUnitPrice,
      requiredDate: /* @__PURE__ */ new Date(`${request.requiredDate.slice(0, 10)}T12:00:00`),
      justification: request.justification,
      preferredSupplier: request.preferredSupplier ?? "",
      additionalNotes: request.additionalNotes ?? ""
    });
    this.existingAttachmentName = request.attachment?.fileName ?? "";
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
    const department = this.departments.find((item) => item.id === this.form.controls.departmentId.value);
    if (!department) {
      this.errorMessage = "Select an available department.";
      return;
    }
    const payload = this.toPayload(department);
    if (this.previewMode) {
      this.savePreview(user.email, user.displayName, payload, action);
      return;
    }
    this.saving = true;
    const request$ = action === "draft" ? this.draftId ? this.procurementService.updateDraft(this.draftId, payload) : this.procurementService.saveDraft(payload) : this.draftId ? this.procurementService.submitDraft(this.draftId, payload) : this.procurementService.submit(payload);
    request$.pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (request) => this.finishSave(request, action),
      error: () => {
        if (isDevMode()) {
          this.savePreview(user.email, user.displayName, payload, action);
          return;
        }
        this.errorMessage = "The Procurement request could not be saved. Please try again.";
      }
    });
  }
  savePreview(ownerEmail, requesterName, payload, action) {
    const request = action === "draft" ? this.previewStore.saveDraft(ownerEmail, requesterName, payload, this.draftId || void 0) : this.previewStore.submit(ownerEmail, requesterName, payload, this.draftId || void 0);
    if (!request) {
      this.errorMessage = "This draft is no longer available for editing.";
      return;
    }
    this.previewMode = true;
    this.finishSave(request, action);
  }
  toPayload(department) {
    const value = this.form.getRawValue();
    const quantity = value.quantity ?? 0;
    const estimatedUnitPrice = value.estimatedUnitPrice ?? 0;
    return {
      requestTitle: value.requestTitle.trim(),
      departmentId: department.id,
      departmentName: department.name,
      category: value.category ?? "Other",
      item: { description: value.itemDescription.trim(), quantity, estimatedUnitPrice, estimatedTotalAmount: this.procurementService.calculateEstimatedTotal(quantity, estimatedUnitPrice) },
      requiredDate: this.toISODate(value.requiredDate),
      justification: value.justification.trim(),
      preferredSupplier: value.preferredSupplier.trim(),
      additionalNotes: value.additionalNotes.trim(),
      attachment: this.selectedFile
    };
  }
  toISODate(date) {
    if (!date)
      return "";
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }
  finishSave(request, action) {
    this.snackBar.open(action === "draft" ? "Procurement request saved as draft." : "Procurement request submitted for approval.", "Dismiss", { duration: 3500 });
    void this.router.navigate(["/procurement", request.id]);
  }
};
_ProcurementFormComponent.\u0275fac = function ProcurementFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProcurementFormComponent)();
};
_ProcurementFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProcurementFormComponent, selectors: [["app-procurement-form"]], decls: 127, vars: 25, consts: [["requiredDatePicker", ""], ["fileInput", ""], ["aria-labelledby", "procurement-form-title", 1, "procurement-form-page"], ["routerLink", "/procurement", 1, "back-link"], [1, "page-heading"], [1, "eyebrow"], ["id", "procurement-form-title"], [1, "description"], ["role", "status", 1, "preview-notice"], ["role", "alert", 1, "error-notice"], [1, "loading-panel"], ["appearance", "outlined", 1, "form-card"], [1, "form-card-heading"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-grid"], ["appearance", "outline", 1, "wide-field"], ["matInput", "", "formControlName", "requestTitle", "maxlength", "140"], ["appearance", "outline"], ["formControlName", "departmentId"], [3, "value"], ["formControlName", "category"], ["matInput", "", "formControlName", "itemDescription", "rows", "3", "maxlength", "500", "placeholder", "Describe the goods or services"], ["matInput", "", "type", "number", "min", "1", "step", "1", "formControlName", "quantity"], ["matTextPrefix", ""], ["matInput", "", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "estimatedUnitPrice"], ["matInput", "", "type", "number", "formControlName", "estimatedTotalAmount", "readonly", ""], ["matInput", "", "formControlName", "requiredDate", 3, "matDatepicker", "min"], ["matIconSuffix", "", 3, "for"], ["matInput", "", "formControlName", "preferredSupplier", "maxlength", "160"], ["matInput", "", "formControlName", "justification", "rows", "4", "maxlength", "2000", "placeholder", "Explain the business need and expected benefit"], [1, "attachment-field", "wide-field"], [1, "field-label"], ["type", "file", "accept", "application/pdf,image/jpeg,image/png", "hidden", "", 3, "change"], [1, "attachment-control"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "file-name"], [1, "no-file"], ["matInput", "", "formControlName", "additionalNotes", "rows", "3", "maxlength", "1000"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click", "disabled"], [1, "action-spacer"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mode", "indeterminate", "diameter", "32", "aria-label", "Loading draft"], ["mat-icon-button", "", "type", "button", "aria-label", "Remove attachment", 3, "click"]], template: function ProcurementFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "a", 3)(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Back to Procurement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "header", 4)(6, "div")(7, "p", 5);
    \u0275\u0275text(8, "SUPPLY CHAIN WORKSPACE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 7);
    \u0275\u0275text(12, "Describe the goods or services and why they are needed.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, ProcurementFormComponent_Conditional_13_Template, 7, 0, "div", 8)(14, ProcurementFormComponent_Conditional_14_Template, 7, 0, "div", 8);
    \u0275\u0275conditionalCreate(15, ProcurementFormComponent_Conditional_15_Template, 5, 1, "div", 9);
    \u0275\u0275conditionalCreate(16, ProcurementFormComponent_Conditional_16_Template, 4, 0, "div", 10);
    \u0275\u0275elementStart(17, "mat-card", 11)(18, "div", 12)(19, "div")(20, "h2");
    \u0275\u0275text(21, "Procurement Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "All required fields are marked with an asterisk.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(24, "mat-divider");
    \u0275\u0275elementStart(25, "form", 13);
    \u0275\u0275listener("ngSubmit", function ProcurementFormComponent_Template_form_ngSubmit_25_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submitForApproval());
    });
    \u0275\u0275elementStart(26, "div", 14)(27, "mat-form-field", 15)(28, "mat-label");
    \u0275\u0275text(29, "Request Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 16);
    \u0275\u0275conditionalCreate(31, ProcurementFormComponent_Conditional_31_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 17)(33, "mat-label");
    \u0275\u0275text(34, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-select", 18);
    \u0275\u0275repeaterCreate(36, ProcurementFormComponent_For_37_Template, 2, 2, "mat-option", 19, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(38, ProcurementFormComponent_Conditional_38_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-form-field", 17)(40, "mat-label");
    \u0275\u0275text(41, "Procurement Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-select", 20);
    \u0275\u0275repeaterCreate(43, ProcurementFormComponent_For_44_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(45, ProcurementFormComponent_Conditional_45_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-form-field", 15)(47, "mat-label");
    \u0275\u0275text(48, "Item / Service Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(49, "textarea", 21);
    \u0275\u0275conditionalCreate(50, ProcurementFormComponent_Conditional_50_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(51, ProcurementFormComponent_Conditional_51_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "mat-form-field", 17)(53, "mat-label");
    \u0275\u0275text(54, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "input", 22);
    \u0275\u0275conditionalCreate(56, ProcurementFormComponent_Conditional_56_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(57, ProcurementFormComponent_Conditional_57_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-form-field", 17)(59, "mat-label");
    \u0275\u0275text(60, "Estimated Unit Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span", 23);
    \u0275\u0275text(62, "$\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "input", 24);
    \u0275\u0275conditionalCreate(64, ProcurementFormComponent_Conditional_64_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(65, ProcurementFormComponent_Conditional_65_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "mat-form-field", 17)(67, "mat-label");
    \u0275\u0275text(68, "Estimated Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "span", 23);
    \u0275\u0275text(70, "$\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(71, "input", 25);
    \u0275\u0275elementStart(72, "mat-hint");
    \u0275\u0275text(73, "Quantity \xD7 unit price");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "mat-form-field", 17)(75, "mat-label");
    \u0275\u0275text(76, "Required Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(77, "input", 26)(78, "mat-datepicker-toggle", 27)(79, "mat-datepicker", null, 0);
    \u0275\u0275conditionalCreate(81, ProcurementFormComponent_Conditional_81_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(82, ProcurementFormComponent_Conditional_82_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "mat-form-field", 17)(84, "mat-label");
    \u0275\u0275text(85, "Preferred Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275element(86, "input", 28);
    \u0275\u0275elementStart(87, "mat-hint");
    \u0275\u0275text(88, "Optional");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "mat-form-field", 15)(90, "mat-label");
    \u0275\u0275text(91, "Justification");
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "textarea", 29);
    \u0275\u0275conditionalCreate(93, ProcurementFormComponent_Conditional_93_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(94, ProcurementFormComponent_Conditional_94_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(95, "div", 30)(96, "div", 31);
    \u0275\u0275text(97, "Supporting Documents ");
    \u0275\u0275elementStart(98, "span");
    \u0275\u0275text(99, "Optional \xB7 PDF, JPG, PNG up to 20 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(100, "input", 32, 1);
    \u0275\u0275listener("change", function ProcurementFormComponent_Template_input_change_100_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "div", 33)(103, "button", 34);
    \u0275\u0275listener("click", function ProcurementFormComponent_Template_button_click_103_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r5 = \u0275\u0275reference(101);
      return \u0275\u0275resetView(fileInput_r5.click());
    });
    \u0275\u0275elementStart(104, "mat-icon");
    \u0275\u0275text(105, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, "Choose document");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(107, ProcurementFormComponent_Conditional_107_Template, 7, 1, "span", 35)(108, ProcurementFormComponent_Conditional_108_Template, 4, 1, "span", 35)(109, ProcurementFormComponent_Conditional_109_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(110, "mat-form-field", 15)(111, "mat-label");
    \u0275\u0275text(112, "Additional Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(113, "textarea", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(114, "mat-divider");
    \u0275\u0275elementStart(115, "div", 38)(116, "button", 39);
    \u0275\u0275listener("click", function ProcurementFormComponent_Template_button_click_116_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cancel());
    });
    \u0275\u0275text(117, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(118, "span", 40);
    \u0275\u0275elementStart(119, "button", 41);
    \u0275\u0275listener("click", function ProcurementFormComponent_Template_button_click_119_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveDraft());
    });
    \u0275\u0275elementStart(120, "mat-icon");
    \u0275\u0275text(121, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(122, "Save as Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "button", 42)(124, "mat-icon");
    \u0275\u0275text(125, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(126, "Submit for Approval");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const requiredDatePicker_r7 = \u0275\u0275reference(80);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx.pageTitle);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.previewMode ? 13 : ctx.departmentPreview ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.errorMessage ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loadingDraft ? 16 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.form.controls.requestTitle.hasError("required") && ctx.form.controls.requestTitle.touched ? 31 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.departments);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.departmentId.hasError("required") && ctx.form.controls.departmentId.touched ? 38 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.categories);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.category.hasError("required") && ctx.form.controls.category.touched ? 45 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.form.controls.itemDescription.hasError("required") && ctx.form.controls.itemDescription.touched ? 50 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.itemDescription.hasError("minlength") ? 51 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.form.controls.quantity.hasError("required") && ctx.form.controls.quantity.touched ? 56 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.quantity.hasError("min") ? 57 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.form.controls.estimatedUnitPrice.hasError("required") && ctx.form.controls.estimatedUnitPrice.touched ? 64 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.estimatedUnitPrice.hasError("min") ? 65 : -1);
    \u0275\u0275advance(12);
    \u0275\u0275property("matDatepicker", requiredDatePicker_r7)("min", ctx.minDate);
    \u0275\u0275advance();
    \u0275\u0275property("for", requiredDatePicker_r7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.form.controls.requiredDate.hasError("required") && ctx.form.controls.requiredDate.touched ? 81 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.requiredDate.hasError("pastDate") ? 82 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx.form.controls.justification.hasError("required") && ctx.form.controls.justification.touched ? 93 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.justification.hasError("minlength") ? 94 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx.selectedFile ? 107 : ctx.existingAttachmentName ? 108 : 109);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx.saving);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.saving || ctx.loadingDraft);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.saving || ctx.loadingDraft);
  }
}, dependencies: [MatButtonModule, MatButton, MatIconButton, MatCardModule, MatCard, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatDividerModule, MatDivider, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatIconModule, MatIcon, MatInputModule, MatInput, MatNativeDateModule, MatProgressSpinnerModule, MatProgressSpinner, MatSelectModule, MatSelect, MatOption, MatSnackBarModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.procurement-form-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 1px 0 3px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 27px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.preview-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b86156;\n}\n.loading-panel[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100px;\n  align-items: center;\n  justify-content: center;\n  gap: 11px;\n  color: #7c8980;\n  font-size: 11px;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 21px 23px 0;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.form-card-heading[_ngcontent-%COMP%] {\n  padding-bottom: 16px;\n}\n.form-card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2b3d32;\n  font: 600 15px/1.3 "Space Grotesk", sans-serif;\n}\n.form-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 10px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 3px 14px;\n  padding: 20px 0 10px;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wide-field[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.attachment-field[_ngcontent-%COMP%] {\n  padding: 2px 0 17px;\n}\n.field-label[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #4f5f54;\n  font-size: 10px;\n  font-weight: 600;\n}\n.field-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  color: #8d9890;\n  font-size: 9px;\n  font-weight: 400;\n}\n.attachment-control[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 38px;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 11px;\n}\n.attachment-control[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.attachment-control[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.file-name[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  gap: 5px;\n  color: #59695e;\n  font-size: 10px;\n  overflow-wrap: anywhere;\n}\n.file-name[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  font-size: 15px;\n}\n.file-name[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #8a625b;\n}\n.no-file[_ngcontent-%COMP%] {\n  color: #929d94;\n  font-size: 10px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 9px;\n  padding: 14px 0 17px;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 36px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.form-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.action-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .procurement-form-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 620px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: 17px 14px 0;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 2px;\n  }\n  .wide-field[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column-reverse;\n  }\n  .action-spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .field-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    margin: 4px 0 0;\n  }\n}\n/*# sourceMappingURL=procurement-form.component.css.map */'] });
var ProcurementFormComponent = _ProcurementFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProcurementFormComponent, [{
    type: Component,
    args: [{ selector: "app-procurement-form", standalone: true, imports: [MatButtonModule, MatCardModule, MatDatepickerModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, ReactiveFormsModule, RouterLink], template: `<section class="procurement-form-page" aria-labelledby="procurement-form-title">\r
  <a class="back-link" routerLink="/procurement"><mat-icon>arrow_back</mat-icon>Back to Procurement</a>\r
  <header class="page-heading"><div><p class="eyebrow">SUPPLY CHAIN WORKSPACE</p><h1 id="procurement-form-title">{{ pageTitle }}</h1><p class="description">Describe the goods or services and why they are needed.</p></div></header>\r
  @if (previewMode) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Development preview</strong> Changes are temporary and won't be sent to the server.</span></div> }\r
  @else if (departmentPreview) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Department preview</strong> Department options are temporary; Procurement actions still use the configured API.</span></div> }\r
  @if (errorMessage) { <div class="error-notice" role="alert"><mat-icon>error_outline</mat-icon><span>{{ errorMessage }}</span></div> }\r
  @if (loadingDraft) { <div class="loading-panel"><mat-progress-spinner mode="indeterminate" diameter="32" aria-label="Loading draft"></mat-progress-spinner><span>Loading draft\u2026</span></div> }\r
\r
  <mat-card appearance="outlined" class="form-card">\r
    <div class="form-card-heading"><div><h2>Procurement Information</h2><p>All required fields are marked with an asterisk.</p></div></div><mat-divider></mat-divider>\r
    <form [formGroup]="form" (ngSubmit)="submitForApproval()" novalidate>\r
      <div class="form-grid">\r
        <mat-form-field appearance="outline" class="wide-field"><mat-label>Request Title</mat-label><input matInput formControlName="requestTitle" maxlength="140">@if (form.controls.requestTitle.hasError('required') && form.controls.requestTitle.touched) { <mat-error>Request title is required.</mat-error> }</mat-form-field>\r
        <mat-form-field appearance="outline"><mat-label>Department</mat-label><mat-select formControlName="departmentId">@for (department of departments; track department.id) { <mat-option [value]="department.id">{{ department.name }}</mat-option> }</mat-select>@if (form.controls.departmentId.hasError('required') && form.controls.departmentId.touched) { <mat-error>Select a department.</mat-error> }</mat-form-field>\r
        <mat-form-field appearance="outline"><mat-label>Procurement Category</mat-label><mat-select formControlName="category">@for (category of categories; track category) { <mat-option [value]="category">{{ category }}</mat-option> }</mat-select>@if (form.controls.category.hasError('required') && form.controls.category.touched) { <mat-error>Select a category.</mat-error> }</mat-form-field>\r
        <mat-form-field appearance="outline" class="wide-field"><mat-label>Item / Service Description</mat-label><textarea matInput formControlName="itemDescription" rows="3" maxlength="500" placeholder="Describe the goods or services"></textarea>@if (form.controls.itemDescription.hasError('required') && form.controls.itemDescription.touched) { <mat-error>Item or service description is required.</mat-error> }@if (form.controls.itemDescription.hasError('minlength')) { <mat-error>Enter at least 5 characters.</mat-error> }</mat-form-field>\r
        <mat-form-field appearance="outline"><mat-label>Quantity</mat-label><input matInput type="number" min="1" step="1" formControlName="quantity">@if (form.controls.quantity.hasError('required') && form.controls.quantity.touched) { <mat-error>Quantity is required.</mat-error> }@if (form.controls.quantity.hasError('min')) { <mat-error>Quantity must be greater than 0.</mat-error> }</mat-form-field>\r
        <mat-form-field appearance="outline"><mat-label>Estimated Unit Price</mat-label><span matTextPrefix>$&nbsp;</span><input matInput type="number" min="0.01" step="0.01" formControlName="estimatedUnitPrice">@if (form.controls.estimatedUnitPrice.hasError('required') && form.controls.estimatedUnitPrice.touched) { <mat-error>Unit price is required.</mat-error> }@if (form.controls.estimatedUnitPrice.hasError('min')) { <mat-error>Unit price must be greater than 0.</mat-error> }</mat-form-field>\r
        <mat-form-field appearance="outline"><mat-label>Estimated Total Amount</mat-label><span matTextPrefix>$&nbsp;</span><input matInput type="number" formControlName="estimatedTotalAmount" readonly><mat-hint>Quantity \xD7 unit price</mat-hint></mat-form-field>\r
        <mat-form-field appearance="outline"><mat-label>Required Date</mat-label><input matInput [matDatepicker]="requiredDatePicker" [min]="minDate" formControlName="requiredDate"><mat-datepicker-toggle matIconSuffix [for]="requiredDatePicker"></mat-datepicker-toggle><mat-datepicker #requiredDatePicker></mat-datepicker>@if (form.controls.requiredDate.hasError('required') && form.controls.requiredDate.touched) { <mat-error>Required date is required.</mat-error> }@if (form.controls.requiredDate.hasError('pastDate')) { <mat-error>Required date cannot be in the past.</mat-error> }</mat-form-field>\r
        <mat-form-field appearance="outline"><mat-label>Preferred Supplier</mat-label><input matInput formControlName="preferredSupplier" maxlength="160"><mat-hint>Optional</mat-hint></mat-form-field>\r
        <mat-form-field appearance="outline" class="wide-field"><mat-label>Justification</mat-label><textarea matInput formControlName="justification" rows="4" maxlength="2000" placeholder="Explain the business need and expected benefit"></textarea>@if (form.controls.justification.hasError('required') && form.controls.justification.touched) { <mat-error>Justification is required.</mat-error> }@if (form.controls.justification.hasError('minlength')) { <mat-error>Enter at least 10 characters.</mat-error> }</mat-form-field>\r
        <div class="attachment-field wide-field"><div class="field-label">Supporting Documents <span>Optional \xB7 PDF, JPG, PNG up to 20 MB</span></div><input #fileInput type="file" accept="application/pdf,image/jpeg,image/png" hidden (change)="onFileSelected($event)"><div class="attachment-control"><button mat-stroked-button type="button" (click)="fileInput.click()"><mat-icon>attach_file</mat-icon>Choose document</button>@if (selectedFile) { <span class="file-name"><mat-icon>description</mat-icon>{{ selectedFile.name }}<button mat-icon-button type="button" aria-label="Remove attachment" (click)="removeAttachment()"><mat-icon>close</mat-icon></button></span> }@else if (existingAttachmentName) { <span class="file-name"><mat-icon>description</mat-icon>{{ existingAttachmentName }}</span> }@else { <span class="no-file">No file selected</span> }</div></div>\r
        <mat-form-field appearance="outline" class="wide-field"><mat-label>Additional Notes</mat-label><textarea matInput formControlName="additionalNotes" rows="3" maxlength="1000"></textarea></mat-form-field>\r
      </div>\r
      <mat-divider></mat-divider><div class="form-actions"><button mat-button type="button" (click)="cancel()" [disabled]="saving">Cancel</button><span class="action-spacer"></span><button mat-stroked-button type="button" (click)="saveDraft()" [disabled]="saving || loadingDraft"><mat-icon>save</mat-icon>Save as Draft</button><button mat-flat-button color="primary" type="submit" [disabled]="saving || loadingDraft"><mat-icon>send</mat-icon>Submit for Approval</button></div>\r
    </form>\r
  </mat-card>\r
</section>`, styles: ['/* src/app/features/pages/procurement/procurement-form.component.scss */\n:host {\n  display: block;\n}\n.procurement-form-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: arrive 260ms ease-out both;\n}\n.back-link {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link mat-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading {\n  padding: 1px 0 3px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 27px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.preview-notice {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.preview-notice strong {\n  margin-right: 4px;\n}\n.error-notice {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice mat-icon {\n  color: #b86156;\n}\n.loading-panel {\n  display: flex;\n  min-height: 100px;\n  align-items: center;\n  justify-content: center;\n  gap: 11px;\n  color: #7c8980;\n  font-size: 11px;\n}\n.form-card {\n  padding: 21px 23px 0;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.form-card-heading {\n  padding-bottom: 16px;\n}\n.form-card-heading h2 {\n  margin: 0;\n  color: #2b3d32;\n  font: 600 15px/1.3 "Space Grotesk", sans-serif;\n}\n.form-card-heading p {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 10px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 3px 14px;\n  padding: 20px 0 10px;\n}\n.form-grid mat-form-field {\n  width: 100%;\n}\n.wide-field {\n  grid-column: 1/-1;\n}\n.attachment-field {\n  padding: 2px 0 17px;\n}\n.field-label {\n  margin-bottom: 8px;\n  color: #4f5f54;\n  font-size: 10px;\n  font-weight: 600;\n}\n.field-label span {\n  margin-left: 5px;\n  color: #8d9890;\n  font-size: 9px;\n  font-weight: 400;\n}\n.attachment-control {\n  display: flex;\n  min-height: 38px;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 11px;\n}\n.attachment-control > button {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.attachment-control > button mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.file-name {\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  gap: 5px;\n  color: #59695e;\n  font-size: 10px;\n  overflow-wrap: anywhere;\n}\n.file-name > mat-icon {\n  width: 15px;\n  height: 15px;\n  font-size: 15px;\n}\n.file-name button {\n  width: 28px;\n  height: 28px;\n  color: #8a625b;\n}\n.no-file {\n  color: #929d94;\n  font-size: 10px;\n}\n.form-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 9px;\n  padding: 14px 0 17px;\n}\n.form-actions button {\n  min-height: 36px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.form-actions mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.action-spacer {\n  flex: 1;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .procurement-form-page {\n    animation: none;\n  }\n}\n@media (max-width: 620px) {\n  .form-card {\n    padding: 17px 14px 0;\n  }\n  .form-grid {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 2px;\n  }\n  .wide-field {\n    grid-column: auto;\n  }\n  .form-actions {\n    align-items: stretch;\n    flex-direction: column-reverse;\n  }\n  .action-spacer {\n    display: none;\n  }\n  .form-actions button {\n    width: 100%;\n  }\n  .field-label span {\n    display: block;\n    margin: 4px 0 0;\n  }\n}\n/*# sourceMappingURL=procurement-form.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProcurementFormComponent, { className: "ProcurementFormComponent", filePath: "src/app/features/pages/procurement/procurement-form.component.ts", lineNumber: 41 });
})();
export {
  ProcurementFormComponent
};
//# sourceMappingURL=chunk-7ZHOFRSR.js.map
