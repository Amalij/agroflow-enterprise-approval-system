import {
  PETTY_CASH_CATEGORIES
} from "./chunk-EXL73QZT.js";
import {
  PettyCashPreviewStore,
  PettyCashService
} from "./chunk-AXXMCM3X.js";
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

// src/app/features/pages/petty-cash/petty-cash-form.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function PettyCashFormComponent_Conditional_13_Template(rf, ctx) {
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
function PettyCashFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Department preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Department options are temporary; request actions still use the configured API.");
    \u0275\u0275elementEnd()();
  }
}
function PettyCashFormComponent_Conditional_15_Template(rf, ctx) {
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
function PettyCashFormComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-progress-spinner", 40);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading draft\u2026");
    \u0275\u0275elementEnd()();
  }
}
function PettyCashFormComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Purpose is required.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Use 120 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Description is required.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter at least 10 characters.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Use 2000 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Amount is required.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Amount must be greater than 0.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Expense date is required.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Expense date cannot be in the future.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_For_64_Template(rf, ctx) {
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
function PettyCashFormComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Select a department.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-hint");
    \u0275\u0275text(1, "Loading departments\u2026");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
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
function PettyCashFormComponent_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Expense category is required.");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 32)(1, "mat-icon");
    \u0275\u0275text(2, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "button", 41);
    \u0275\u0275listener("click", function PettyCashFormComponent_Conditional_86_Template_button_click_4_listener() {
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
function PettyCashFormComponent_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32)(1, "mat-icon");
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
function PettyCashFormComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 33);
    \u0275\u0275text(1, "No file selected");
    \u0275\u0275elementEnd();
  }
}
function PettyCashFormComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Use 1000 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function requiredExpenseDate(control) {
  if (!(control.value instanceof Date) || Number.isNaN(control.value.getTime()))
    return { required: true };
  const selected = new Date(control.value.getFullYear(), control.value.getMonth(), control.value.getDate());
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  return selected > today ? { futureDate: true } : null;
}
var _PettyCashFormComponent = class _PettyCashFormComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.departmentService = inject(DepartmentService);
    this.departmentPreviewStore = inject(DepartmentPreviewStore);
    this.pettyCashService = inject(PettyCashService);
    this.previewStore = inject(PettyCashPreviewStore);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.categories = PETTY_CASH_CATEGORIES;
    this.maxExpenseDate = new Date((/* @__PURE__ */ new Date()).getFullYear(), (/* @__PURE__ */ new Date()).getMonth(), (/* @__PURE__ */ new Date()).getDate());
    this.form = new FormGroup({
      purpose: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.maxLength(120)] }),
      description: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.minLength(10), Validators.maxLength(2e3)] }),
      amount: new FormControl(null, { validators: [Validators.required, Validators.min(0.01)] }),
      expenseDate: new FormControl(null, { validators: [requiredExpenseDate] }),
      departmentId: new FormControl(null, { validators: [Validators.required, Validators.min(1)] }),
      expenseCategory: new FormControl(null, { validators: [Validators.required] }),
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
  }
  get isEditingDraft() {
    return !!this.draftId;
  }
  get pageTitle() {
    return this.isEditingDraft ? "Edit Petty Cash Draft" : "Create Petty Cash Request";
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
    if (file.size > 10 * 1024 * 1024)
      this.errorMessage = "Receipts must be 10 MB or smaller.";
    else if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type))
      this.errorMessage = "Attach a PDF, JPG, or PNG receipt.";
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
    void this.router.navigateByUrl(this.draftId ? `/petty-cash/${encodeURIComponent(this.draftId)}` : "/petty-cash");
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
    this.pettyCashService.getRequest(this.draftId, ownerEmail, false).pipe(finalize(() => this.loadingDraft = false), takeUntilDestroyed(this.destroyRef)).subscribe({
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
      purpose: request.purpose,
      description: request.description,
      amount: request.amount,
      expenseDate: /* @__PURE__ */ new Date(`${request.expenseDate.slice(0, 10)}T12:00:00`),
      departmentId: request.departmentId,
      expenseCategory: request.expenseCategory,
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
    const request$ = action === "draft" ? this.draftId ? this.pettyCashService.updateDraft(this.draftId, payload) : this.pettyCashService.saveDraft(payload) : this.draftId ? this.pettyCashService.submitDraft(this.draftId, payload) : this.pettyCashService.submit(payload);
    request$.pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (request) => this.finishSave(request, action),
      error: () => {
        if (isDevMode()) {
          this.savePreview(user.email, user.displayName, payload, action);
          return;
        }
        this.errorMessage = "The Petty Cash request could not be saved. Please try again.";
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
    return {
      purpose: value.purpose.trim(),
      description: value.description.trim(),
      amount: value.amount ?? 0,
      expenseDate: this.toISODate(value.expenseDate),
      departmentId: department.id,
      departmentName: department.name,
      expenseCategory: value.expenseCategory ?? "Other",
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
    this.snackBar.open(action === "draft" ? "Petty Cash request saved as draft." : "Petty Cash request submitted for approval.", "Dismiss", { duration: 3500 });
    void this.router.navigate(["/petty-cash", request.id]);
  }
};
_PettyCashFormComponent.\u0275fac = function PettyCashFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PettyCashFormComponent)();
};
_PettyCashFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PettyCashFormComponent, selectors: [["app-petty-cash-form"]], decls: 107, vars: 25, consts: [["expenseDatePicker", ""], ["fileInput", ""], ["aria-labelledby", "petty-form-title", 1, "petty-form-page"], ["routerLink", "/petty-cash", 1, "back-link"], [1, "page-heading"], [1, "eyebrow"], ["id", "petty-form-title"], [1, "description"], ["role", "status", 1, "preview-notice"], ["role", "alert", 1, "error-notice"], [1, "loading-panel"], ["appearance", "outlined", 1, "form-card"], [1, "form-card-heading"], [1, "required-hint"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "form-grid"], ["appearance", "outline", 1, "wide-field"], ["matInput", "", "formControlName", "purpose", "maxlength", "120", "placeholder", "Briefly explain the expense purpose"], ["matInput", "", "formControlName", "description", "rows", "4", "maxlength", "2000", "placeholder", "Describe the expense and business need"], ["appearance", "outline"], ["matTextPrefix", ""], ["matInput", "", "type", "number", "min", "0.01", "step", "0.01", "formControlName", "amount", "placeholder", "0.00"], ["matInput", "", "formControlName", "expenseDate", "placeholder", "Choose a date", 3, "matDatepicker", "max"], ["matIconSuffix", "", 3, "for"], ["formControlName", "departmentId"], [3, "value"], ["formControlName", "expenseCategory"], [1, "attachment-field", "wide-field"], [1, "field-label"], ["type", "file", "accept", "application/pdf,image/jpeg,image/png", "hidden", "", 3, "change"], [1, "attachment-control"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "file-name"], [1, "no-file"], ["matInput", "", "formControlName", "additionalNotes", "rows", "3", "maxlength", "1000", "placeholder", "Add context for reviewers"], [1, "form-actions"], ["mat-button", "", "type", "button", 3, "click", "disabled"], [1, "action-spacer"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], ["mode", "indeterminate", "diameter", "32", "aria-label", "Loading draft"], ["mat-icon-button", "", "type", "button", "aria-label", "Remove receipt", 3, "click"]], template: function PettyCashFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 2)(1, "a", 3)(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Back to Petty Cash");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "header", 4)(6, "div")(7, "p", 5);
    \u0275\u0275text(8, "FINANCE WORKSPACE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 6);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 7);
    \u0275\u0275text(12, "Record a small operational expense for approval.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, PettyCashFormComponent_Conditional_13_Template, 7, 0, "div", 8)(14, PettyCashFormComponent_Conditional_14_Template, 7, 0, "div", 8);
    \u0275\u0275conditionalCreate(15, PettyCashFormComponent_Conditional_15_Template, 5, 1, "div", 9);
    \u0275\u0275conditionalCreate(16, PettyCashFormComponent_Conditional_16_Template, 4, 0, "div", 10);
    \u0275\u0275elementStart(17, "mat-card", 11)(18, "div", 12)(19, "div")(20, "h2");
    \u0275\u0275text(21, "Petty Cash Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23, "Provide the expense details and supporting receipt.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "span", 13);
    \u0275\u0275text(25, "* Required");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(26, "mat-divider");
    \u0275\u0275elementStart(27, "form", 14);
    \u0275\u0275listener("ngSubmit", function PettyCashFormComponent_Template_form_ngSubmit_27_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.submitForApproval());
    });
    \u0275\u0275elementStart(28, "div", 15)(29, "mat-form-field", 16)(30, "mat-label");
    \u0275\u0275text(31, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "input", 17);
    \u0275\u0275conditionalCreate(33, PettyCashFormComponent_Conditional_33_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(34, PettyCashFormComponent_Conditional_34_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 16)(36, "mat-label");
    \u0275\u0275text(37, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "textarea", 18);
    \u0275\u0275conditionalCreate(39, PettyCashFormComponent_Conditional_39_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(40, PettyCashFormComponent_Conditional_40_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(41, PettyCashFormComponent_Conditional_41_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-form-field", 19)(43, "mat-label");
    \u0275\u0275text(44, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 20);
    \u0275\u0275text(46, "$\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275element(47, "input", 21);
    \u0275\u0275conditionalCreate(48, PettyCashFormComponent_Conditional_48_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(49, PettyCashFormComponent_Conditional_49_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-form-field", 19)(51, "mat-label");
    \u0275\u0275text(52, "Expense Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 22)(54, "mat-datepicker-toggle", 23)(55, "mat-datepicker", null, 0);
    \u0275\u0275conditionalCreate(57, PettyCashFormComponent_Conditional_57_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(58, PettyCashFormComponent_Conditional_58_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "mat-form-field", 19)(60, "mat-label");
    \u0275\u0275text(61, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-select", 24);
    \u0275\u0275repeaterCreate(63, PettyCashFormComponent_For_64_Template, 2, 2, "mat-option", 25, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(65, PettyCashFormComponent_Conditional_65_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(66, PettyCashFormComponent_Conditional_66_Template, 2, 0, "mat-hint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "mat-form-field", 19)(68, "mat-label");
    \u0275\u0275text(69, "Expense Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-select", 26);
    \u0275\u0275repeaterCreate(71, PettyCashFormComponent_For_72_Template, 2, 2, "mat-option", 25, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(73, PettyCashFormComponent_Conditional_73_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 27)(75, "div", 28);
    \u0275\u0275text(76, "Supporting Document / Receipt ");
    \u0275\u0275elementStart(77, "span");
    \u0275\u0275text(78, "Optional \xB7 PDF, JPG, PNG up to 10 MB");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "input", 29, 1);
    \u0275\u0275listener("change", function PettyCashFormComponent_Template_input_change_79_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onFileSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 30)(82, "button", 31);
    \u0275\u0275listener("click", function PettyCashFormComponent_Template_button_click_82_listener() {
      \u0275\u0275restoreView(_r1);
      const fileInput_r5 = \u0275\u0275reference(80);
      return \u0275\u0275resetView(fileInput_r5.click());
    });
    \u0275\u0275elementStart(83, "mat-icon");
    \u0275\u0275text(84, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "Choose receipt");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(86, PettyCashFormComponent_Conditional_86_Template, 7, 1, "span", 32)(87, PettyCashFormComponent_Conditional_87_Template, 4, 1, "span", 32)(88, PettyCashFormComponent_Conditional_88_Template, 2, 0, "span", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "mat-form-field", 16)(90, "mat-label");
    \u0275\u0275text(91, "Additional Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(92, "textarea", 34);
    \u0275\u0275conditionalCreate(93, PettyCashFormComponent_Conditional_93_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(94, "mat-divider");
    \u0275\u0275elementStart(95, "div", 35)(96, "button", 36);
    \u0275\u0275listener("click", function PettyCashFormComponent_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cancel());
    });
    \u0275\u0275text(97, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275element(98, "span", 37);
    \u0275\u0275elementStart(99, "button", 38);
    \u0275\u0275listener("click", function PettyCashFormComponent_Template_button_click_99_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.saveDraft());
    });
    \u0275\u0275elementStart(100, "mat-icon");
    \u0275\u0275text(101, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(102, "Save as Draft");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "button", 39)(104, "mat-icon");
    \u0275\u0275text(105, "send");
    \u0275\u0275elementEnd();
    \u0275\u0275text(106, "Submit for Approval");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const expenseDatePicker_r7 = \u0275\u0275reference(56);
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
    \u0275\u0275property("matDatepicker", expenseDatePicker_r7)("max", ctx.maxExpenseDate);
    \u0275\u0275advance();
    \u0275\u0275property("for", expenseDatePicker_r7);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.form.controls.expenseDate.hasError("required") && ctx.form.controls.expenseDate.touched ? 57 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.expenseDate.hasError("futureDate") ? 58 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.departments);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.departmentId.hasError("required") && ctx.form.controls.departmentId.touched ? 65 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loadingDepartments ? 66 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.categories);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.expenseCategory.hasError("required") && ctx.form.controls.expenseCategory.touched ? 73 : -1);
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx.selectedFile ? 86 : ctx.existingAttachmentName ? 87 : 88);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.form.controls.additionalNotes.hasError("maxlength") ? 93 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.saving);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx.saving || ctx.loadingDraft);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx.saving || ctx.loadingDraft);
  }
}, dependencies: [MatButtonModule, MatButton, MatIconButton, MatCardModule, MatCard, MatDatepickerModule, MatDatepicker, MatDatepickerInput, MatDatepickerToggle, MatDividerModule, MatDivider, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatPrefix, MatSuffix, MatIconModule, MatIcon, MatInputModule, MatInput, MatNativeDateModule, MatProgressSpinnerModule, MatProgressSpinner, MatSelectModule, MatSelect, MatOption, MatSnackBarModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, MinValidator, FormGroupDirective, FormControlName, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.petty-form-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 1px 0 3px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 27px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.preview-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b86156;\n}\n.loading-panel[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 100px;\n  align-items: center;\n  justify-content: center;\n  gap: 11px;\n  color: #7c8980;\n  font-size: 11px;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 21px 23px 0;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.form-card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n}\n.form-card-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2b3d32;\n  font: 600 15px/1.3 "Space Grotesk", sans-serif;\n}\n.form-card-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 10px;\n}\n.required-hint[_ngcontent-%COMP%] {\n  color: #8a958d;\n  font-size: 9px;\n}\n.form-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 3px 14px;\n  padding: 20px 0 10px;\n}\n.form-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.wide-field[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.attachment-field[_ngcontent-%COMP%] {\n  padding: 2px 0 17px;\n}\n.field-label[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #4f5f54;\n  font-size: 10px;\n  font-weight: 600;\n}\n.field-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  color: #8d9890;\n  font-size: 9px;\n  font-weight: 400;\n}\n.attachment-control[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 38px;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 11px;\n}\n.attachment-control[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.attachment-control[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.file-name[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  gap: 5px;\n  color: #59695e;\n  font-size: 10px;\n  overflow-wrap: anywhere;\n}\n.file-name[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  font-size: 15px;\n}\n.file-name[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #8a625b;\n}\n.no-file[_ngcontent-%COMP%] {\n  color: #929d94;\n  font-size: 10px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 9px;\n  padding: 14px 0 17px;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 36px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.form-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.action-spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .petty-form-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 620px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: 17px 14px 0;\n  }\n  .form-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 2px;\n  }\n  .wide-field[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column-reverse;\n  }\n  .action-spacer[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .field-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: block;\n    margin: 4px 0 0;\n  }\n}\n/*# sourceMappingURL=petty-cash-form.component.css.map */'] });
var PettyCashFormComponent = _PettyCashFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PettyCashFormComponent, [{
    type: Component,
    args: [{ selector: "app-petty-cash-form", standalone: true, imports: [
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
    ], template: `<section class="petty-form-page" aria-labelledby="petty-form-title">\r
  <a class="back-link" routerLink="/petty-cash"><mat-icon>arrow_back</mat-icon>Back to Petty Cash</a>\r
  <header class="page-heading"><div><p class="eyebrow">FINANCE WORKSPACE</p><h1 id="petty-form-title">{{ pageTitle }}</h1><p class="description">Record a small operational expense for approval.</p></div></header>\r
  @if (previewMode) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Development preview</strong> Changes are temporary and won't be sent to the server.</span></div> }\r
  @else if (departmentPreview) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Department preview</strong> Department options are temporary; request actions still use the configured API.</span></div> }\r
  @if (errorMessage) { <div class="error-notice" role="alert"><mat-icon>error_outline</mat-icon><span>{{ errorMessage }}</span></div> }\r
  @if (loadingDraft) { <div class="loading-panel"><mat-progress-spinner mode="indeterminate" diameter="32" aria-label="Loading draft"></mat-progress-spinner><span>Loading draft\u2026</span></div> }\r
\r
  <mat-card appearance="outlined" class="form-card">\r
    <div class="form-card-heading"><div><h2>Petty Cash Information</h2><p>Provide the expense details and supporting receipt.</p></div><span class="required-hint">* Required</span></div>\r
    <mat-divider></mat-divider>\r
    <form [formGroup]="form" (ngSubmit)="submitForApproval()" novalidate>\r
      <div class="form-grid">\r
        <mat-form-field appearance="outline" class="wide-field">\r
          <mat-label>Purpose</mat-label><input matInput formControlName="purpose" maxlength="120" placeholder="Briefly explain the expense purpose">\r
          @if (form.controls.purpose.hasError('required') && form.controls.purpose.touched) { <mat-error>Purpose is required.</mat-error> }\r
          @if (form.controls.purpose.hasError('maxlength')) { <mat-error>Use 120 characters or fewer.</mat-error> }\r
        </mat-form-field>\r
        <mat-form-field appearance="outline" class="wide-field">\r
          <mat-label>Description</mat-label><textarea matInput formControlName="description" rows="4" maxlength="2000" placeholder="Describe the expense and business need"></textarea>\r
          @if (form.controls.description.hasError('required') && form.controls.description.touched) { <mat-error>Description is required.</mat-error> }\r
          @if (form.controls.description.hasError('minlength')) { <mat-error>Enter at least 10 characters.</mat-error> }\r
          @if (form.controls.description.hasError('maxlength')) { <mat-error>Use 2000 characters or fewer.</mat-error> }\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Amount</mat-label><span matTextPrefix>$&nbsp;</span><input matInput type="number" min="0.01" step="0.01" formControlName="amount" placeholder="0.00">\r
          @if (form.controls.amount.hasError('required') && form.controls.amount.touched) { <mat-error>Amount is required.</mat-error> }\r
          @if (form.controls.amount.hasError('min')) { <mat-error>Amount must be greater than 0.</mat-error> }\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Expense Date</mat-label><input matInput [matDatepicker]="expenseDatePicker" [max]="maxExpenseDate" formControlName="expenseDate" placeholder="Choose a date"><mat-datepicker-toggle matIconSuffix [for]="expenseDatePicker"></mat-datepicker-toggle><mat-datepicker #expenseDatePicker></mat-datepicker>\r
          @if (form.controls.expenseDate.hasError('required') && form.controls.expenseDate.touched) { <mat-error>Expense date is required.</mat-error> }\r
          @if (form.controls.expenseDate.hasError('futureDate')) { <mat-error>Expense date cannot be in the future.</mat-error> }\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Department</mat-label><mat-select formControlName="departmentId">@for (department of departments; track department.id) { <mat-option [value]="department.id">{{ department.name }}</mat-option> }</mat-select>\r
          @if (form.controls.departmentId.hasError('required') && form.controls.departmentId.touched) { <mat-error>Select a department.</mat-error> }\r
          @if (loadingDepartments) { <mat-hint>Loading departments\u2026</mat-hint> }\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Expense Category</mat-label><mat-select formControlName="expenseCategory">@for (category of categories; track category) { <mat-option [value]="category">{{ category }}</mat-option> }</mat-select>\r
          @if (form.controls.expenseCategory.hasError('required') && form.controls.expenseCategory.touched) { <mat-error>Expense category is required.</mat-error> }\r
        </mat-form-field>\r
        <div class="attachment-field wide-field">\r
          <div class="field-label">Supporting Document / Receipt <span>Optional \xB7 PDF, JPG, PNG up to 10 MB</span></div>\r
          <input #fileInput type="file" accept="application/pdf,image/jpeg,image/png" hidden (change)="onFileSelected($event)">\r
          <div class="attachment-control"><button mat-stroked-button type="button" (click)="fileInput.click()"><mat-icon>attach_file</mat-icon>Choose receipt</button>\r
            @if (selectedFile) { <span class="file-name"><mat-icon>description</mat-icon>{{ selectedFile.name }}<button mat-icon-button type="button" aria-label="Remove receipt" (click)="removeAttachment()"><mat-icon>close</mat-icon></button></span> }\r
            @else if (existingAttachmentName) { <span class="file-name"><mat-icon>description</mat-icon>{{ existingAttachmentName }}</span> }\r
            @else { <span class="no-file">No file selected</span> }\r
          </div>\r
        </div>\r
        <mat-form-field appearance="outline" class="wide-field"><mat-label>Additional Notes</mat-label><textarea matInput formControlName="additionalNotes" rows="3" maxlength="1000" placeholder="Add context for reviewers"></textarea>@if (form.controls.additionalNotes.hasError('maxlength')) { <mat-error>Use 1000 characters or fewer.</mat-error> }</mat-form-field>\r
      </div>\r
      <mat-divider></mat-divider>\r
      <div class="form-actions"><button mat-button type="button" (click)="cancel()" [disabled]="saving">Cancel</button><span class="action-spacer"></span><button mat-stroked-button type="button" (click)="saveDraft()" [disabled]="saving || loadingDraft"><mat-icon>save</mat-icon>Save as Draft</button><button mat-flat-button color="primary" type="submit" [disabled]="saving || loadingDraft"><mat-icon>send</mat-icon>Submit for Approval</button></div>\r
    </form>\r
  </mat-card>\r
</section>`, styles: ['/* src/app/features/pages/petty-cash/petty-cash-form.component.scss */\n:host {\n  display: block;\n}\n.petty-form-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: arrive 260ms ease-out both;\n}\n.back-link {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link mat-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading {\n  padding: 1px 0 3px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 27px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.preview-notice {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.preview-notice strong {\n  margin-right: 4px;\n}\n.error-notice {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice mat-icon {\n  color: #b86156;\n}\n.loading-panel {\n  display: flex;\n  min-height: 100px;\n  align-items: center;\n  justify-content: center;\n  gap: 11px;\n  color: #7c8980;\n  font-size: 11px;\n}\n.form-card {\n  padding: 21px 23px 0;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.form-card-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  padding-bottom: 16px;\n}\n.form-card-heading h2 {\n  margin: 0;\n  color: #2b3d32;\n  font: 600 15px/1.3 "Space Grotesk", sans-serif;\n}\n.form-card-heading p {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 10px;\n}\n.required-hint {\n  color: #8a958d;\n  font-size: 9px;\n}\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 3px 14px;\n  padding: 20px 0 10px;\n}\n.form-grid mat-form-field {\n  width: 100%;\n}\n.wide-field {\n  grid-column: 1/-1;\n}\n.attachment-field {\n  padding: 2px 0 17px;\n}\n.field-label {\n  margin-bottom: 8px;\n  color: #4f5f54;\n  font-size: 10px;\n  font-weight: 600;\n}\n.field-label span {\n  margin-left: 5px;\n  color: #8d9890;\n  font-size: 9px;\n  font-weight: 400;\n}\n.attachment-control {\n  display: flex;\n  min-height: 38px;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 11px;\n}\n.attachment-control > button {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.attachment-control > button mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.file-name {\n  display: inline-flex;\n  min-width: 0;\n  align-items: center;\n  gap: 5px;\n  color: #59695e;\n  font-size: 10px;\n  overflow-wrap: anywhere;\n}\n.file-name > mat-icon {\n  width: 15px;\n  height: 15px;\n  font-size: 15px;\n}\n.file-name button {\n  width: 28px;\n  height: 28px;\n  color: #8a625b;\n}\n.no-file {\n  color: #929d94;\n  font-size: 10px;\n}\n.form-actions {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 9px;\n  padding: 14px 0 17px;\n}\n.form-actions button {\n  min-height: 36px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.form-actions mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.action-spacer {\n  flex: 1;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .petty-form-page {\n    animation: none;\n  }\n}\n@media (max-width: 620px) {\n  .form-card {\n    padding: 17px 14px 0;\n  }\n  .form-grid {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 2px;\n  }\n  .wide-field {\n    grid-column: auto;\n  }\n  .form-actions {\n    align-items: stretch;\n    flex-direction: column-reverse;\n  }\n  .action-spacer {\n    display: none;\n  }\n  .form-actions button {\n    width: 100%;\n  }\n  .field-label span {\n    display: block;\n    margin: 4px 0 0;\n  }\n}\n/*# sourceMappingURL=petty-cash-form.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PettyCashFormComponent, { className: "PettyCashFormComponent", filePath: "src/app/features/pages/petty-cash/petty-cash-form.component.ts", lineNumber: 45 });
})();
export {
  PettyCashFormComponent
};
//# sourceMappingURL=chunk-HVNJGWF3.js.map
