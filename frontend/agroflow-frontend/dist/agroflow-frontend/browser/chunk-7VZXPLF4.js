import {
  AdministrationService,
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-CGSPDZ5S.js";
import "./chunk-ONRSG33Q.js";
import "./chunk-CAIZOA7I.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-3KUWR5NY.js";
import {
  MatTooltipModule
} from "./chunk-YM3RABSX.js";
import {
  MatTooltip
} from "./chunk-2DXKA2R6.js";
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
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-N2QZREPG.js";
import "./chunk-4V2R5SHM.js";
import {
  MatDividerModule
} from "./chunk-N7METAUH.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-S5Y7ZGUB.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-CEFQC7DY.js";
import "./chunk-XIFJHBZC.js";
import {
  MatChip,
  MatChipsModule
} from "./chunk-IGEVX5VZ.js";
import {
  MatError,
  MatFormField,
  MatLabel
} from "./chunk-EVUGFGV4.js";
import "./chunk-WG4DC2AT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
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
  MatCardContent,
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
  CurrencyPipe
} from "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
  finalize,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-N56IC4AV.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/features/administration/models/administration.model.ts
var APPROVAL_REQUEST_TYPES = ["IOU", "Petty Cash", "Procurement"];

// src/app/features/administration/pages/approval-configuration-dialog.component.ts
function ApprovalConfigurationDialogComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r1 = ctx.$implicit;
    \u0275\u0275property("value", type_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r1);
  }
}
function ApprovalConfigurationDialogComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r2 = ctx.$implicit;
    \u0275\u0275property("value", department_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(department_r2);
  }
}
function ApprovalConfigurationDialogComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275property("value", role_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r3);
  }
}
function ApprovalConfigurationDialogComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1, "Maximum amount must be greater than or equal to the minimum amount.");
    \u0275\u0275elementEnd();
  }
}
function ApprovalConfigurationDialogComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function ApprovalConfigurationDialogComponent_Conditional_52_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.save());
    });
    \u0275\u0275text(1, "Save changes");
    \u0275\u0275elementEnd();
  }
}
var amountRangeValidator = (control) => {
  const minimumAmount = control.get("minimumAmount")?.value;
  const maximumAmount = control.get("maximumAmount")?.value;
  return maximumAmount !== null && minimumAmount !== null && maximumAmount < minimumAmount ? { invalidAmountRange: true } : null;
};
var _ApprovalConfigurationDialogComponent = class _ApprovalConfigurationDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef);
    this.requestTypes = APPROVAL_REQUEST_TYPES;
    this.departments = ["Agriculture", "Finance", "Operations", "Procurement"];
    this.roles = ["Manager", "Approver", "Admin"];
    this.form = new FormGroup({
      requestType: new FormControl(this.data.configuration.requestType, { nonNullable: true, validators: [Validators.required] }),
      department: new FormControl(this.data.configuration.department, { nonNullable: true, validators: [Validators.required] }),
      approvalLevel: new FormControl(this.data.configuration.approvalLevel, { nonNullable: true, validators: [Validators.required, Validators.min(1)] }),
      approverRole: new FormControl(this.data.configuration.approverRole, { nonNullable: true, validators: [Validators.required] }),
      minimumAmount: new FormControl(this.data.configuration.minimumAmount, { nonNullable: true, validators: [Validators.required, Validators.min(0)] }),
      maximumAmount: new FormControl(this.data.configuration.maximumAmount, { validators: [Validators.min(0)] }),
      active: new FormControl(this.data.configuration.active, { nonNullable: true })
    }, { validators: amountRangeValidator });
    if (this.data.mode === "view")
      this.form.disable();
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.dialogRef.close(__spreadValues(__spreadValues({}, this.data.configuration), this.form.getRawValue()));
  }
};
_ApprovalConfigurationDialogComponent.\u0275fac = function ApprovalConfigurationDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApprovalConfigurationDialogComponent)();
};
_ApprovalConfigurationDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApprovalConfigurationDialogComponent, selectors: [["app-approval-configuration-dialog"]], decls: 53, vars: 4, consts: [["mat-dialog-title", ""], [1, "dialog-form", 3, "formGroup"], ["appearance", "outline"], ["formControlName", "requestType"], [3, "value"], ["formControlName", "department"], ["matInput", "", "type", "number", "min", "1", "formControlName", "approvalLevel"], ["formControlName", "approverRole"], ["matInput", "", "type", "number", "min", "0", "step", "0.01", "formControlName", "minimumAmount"], ["matInput", "", "type", "number", "min", "0", "step", "0.01", "placeholder", "No limit", "formControlName", "maximumAmount"], ["role", "alert", 1, "form-error"], ["formControlName", "active"], ["align", "end"], ["mat-button", "", "type", "button", "mat-dialog-close", ""], ["mat-flat-button", "", "color", "primary", "type", "button"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function ApprovalConfigurationDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "mat-form-field", 2)(5, "mat-label");
    \u0275\u0275text(6, "Request Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-select", 3);
    \u0275\u0275repeaterCreate(8, ApprovalConfigurationDialogComponent_For_9_Template, 2, 2, "mat-option", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11, "Choose a request type.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-form-field", 2)(13, "mat-label");
    \u0275\u0275text(14, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-select", 5);
    \u0275\u0275repeaterCreate(16, ApprovalConfigurationDialogComponent_For_17_Template, 2, 2, "mat-option", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-error");
    \u0275\u0275text(19, "Choose a department.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 2)(21, "mat-label");
    \u0275\u0275text(22, "Approval Level");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 6);
    \u0275\u0275elementStart(24, "mat-error");
    \u0275\u0275text(25, "Level must be at least 1.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 2)(27, "mat-label");
    \u0275\u0275text(28, "Approver Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-select", 7);
    \u0275\u0275repeaterCreate(30, ApprovalConfigurationDialogComponent_For_31_Template, 2, 2, "mat-option", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-error");
    \u0275\u0275text(33, "Choose an approver role.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "mat-form-field", 2)(35, "mat-label");
    \u0275\u0275text(36, "Minimum Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(37, "input", 8);
    \u0275\u0275elementStart(38, "mat-error");
    \u0275\u0275text(39, "Enter zero or a greater amount.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "mat-form-field", 2)(41, "mat-label");
    \u0275\u0275text(42, "Maximum Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(43, "input", 9);
    \u0275\u0275elementStart(44, "mat-error");
    \u0275\u0275text(45, "Enter zero or a greater amount.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(46, ApprovalConfigurationDialogComponent_Conditional_46_Template, 2, 0, "p", 10);
    \u0275\u0275elementStart(47, "mat-slide-toggle", 11);
    \u0275\u0275text(48, "Active");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "mat-dialog-actions", 12)(50, "button", 13);
    \u0275\u0275text(51, "Close");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(52, ApprovalConfigurationDialogComponent_Conditional_52_Template, 2, 0, "button", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.data.mode === "view" ? "Approval Route" : "Edit Approval Route");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.requestTypes);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.departments);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx.roles);
    \u0275\u0275advance(16);
    \u0275\u0275conditional(ctx.form.hasError("invalidAmountRange") ? 46 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.data.mode === "edit" ? 52 : -1);
  }
}, dependencies: [MatButtonModule, MatButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatError, MatIconModule, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatSlideToggleModule, MatSlideToggle, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.admin-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #20352a;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin: 8px 0 0;\n  color: #718078;\n  font-size: 13px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: #71876f;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n}\n.table-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 860px;\n}\nth.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #68796d;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\ntd.mat-mdc-cell[_ngcontent-%COMP%] {\n  color: #35453a;\n  font-size: 12px;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 128px;\n}\n.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #597261;\n}\n.inactive-chip[_ngcontent-%COMP%] {\n  background: #f0f1ed !important;\n  color: #72776f !important;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 11px 13px;\n  border-radius: 5px;\n  background: #f1f5ef;\n  color: #596e5c;\n  font-size: 12px;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  background: #fff3f0;\n  color: #9d493e;\n}\n.state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 170px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n  color: #768179;\n  font-size: 13px;\n}\n.error-state[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  color: #9d493e;\n}\n.settings-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 16px;\n  padding: 20px;\n}\n.settings-form[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n.settings-form[_ngcontent-%COMP%]    > .notification-setting[_ngcontent-%COMP%], \n.settings-form[_ngcontent-%COMP%]    > .form-actions[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.settings-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #34463a;\n  font-size: 14px;\n}\n.notification-setting[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 11px 0;\n  border-bottom: 1px solid #edf0ed;\n  color: #46584b;\n  font-size: 13px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 12px;\n}\n.filter-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(170px, 1.4fr) repeat(3, minmax(145px, 1fr)) auto;\n  align-items: start;\n  gap: 10px;\n  padding: 16px 16px 0;\n}\n.filter-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  padding-top: 5px;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 12px;\n  padding: 4px 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-chip.success[_ngcontent-%COMP%] {\n  background: #edf5ed;\n  color: #456d4a;\n}\n.status-chip.failed[_ngcontent-%COMP%] {\n  background: #fff0ed;\n  color: #a24d40;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 12px;\n  padding-top: 8px;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-error[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin: -8px 0 4px;\n  color: #a24d40;\n  font-size: 12px;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 6px 0 18px;\n}\n@media (max-width: 850px) {\n  .filter-form[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .filter-actions[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    padding: 0 0 10px;\n  }\n}\n@media (max-width: 580px) {\n  .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .settings-form[_ngcontent-%COMP%], \n   .dialog-form[_ngcontent-%COMP%], \n   .filter-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .settings-form[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n   .settings-form[_ngcontent-%COMP%]    > .notification-setting[_ngcontent-%COMP%], \n   .settings-form[_ngcontent-%COMP%]    > .form-actions[_ngcontent-%COMP%], \n   .filter-actions[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .settings-form[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=administration-pages.component.css.map */'] });
var ApprovalConfigurationDialogComponent = _ApprovalConfigurationDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApprovalConfigurationDialogComponent, [{
    type: Component,
    args: [{ selector: "app-approval-configuration-dialog", standalone: true, imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule, MatSlideToggleModule, ReactiveFormsModule], template: `<h2 mat-dialog-title>{{ data.mode === 'view' ? 'Approval Route' : 'Edit Approval Route' }}</h2>\r
<mat-dialog-content>\r
  <form class="dialog-form" [formGroup]="form">\r
    <mat-form-field appearance="outline"><mat-label>Request Type</mat-label><mat-select formControlName="requestType">@for (type of requestTypes; track type) { <mat-option [value]="type">{{ type }}</mat-option> }</mat-select><mat-error>Choose a request type.</mat-error></mat-form-field>\r
    <mat-form-field appearance="outline"><mat-label>Department</mat-label><mat-select formControlName="department">@for (department of departments; track department) { <mat-option [value]="department">{{ department }}</mat-option> }</mat-select><mat-error>Choose a department.</mat-error></mat-form-field>\r
    <mat-form-field appearance="outline"><mat-label>Approval Level</mat-label><input matInput type="number" min="1" formControlName="approvalLevel"><mat-error>Level must be at least 1.</mat-error></mat-form-field>\r
    <mat-form-field appearance="outline"><mat-label>Approver Role</mat-label><mat-select formControlName="approverRole">@for (role of roles; track role) { <mat-option [value]="role">{{ role }}</mat-option> }</mat-select><mat-error>Choose an approver role.</mat-error></mat-form-field>\r
    <mat-form-field appearance="outline"><mat-label>Minimum Amount</mat-label><input matInput type="number" min="0" step="0.01" formControlName="minimumAmount"><mat-error>Enter zero or a greater amount.</mat-error></mat-form-field>\r
    <mat-form-field appearance="outline"><mat-label>Maximum Amount</mat-label><input matInput type="number" min="0" step="0.01" placeholder="No limit" formControlName="maximumAmount"><mat-error>Enter zero or a greater amount.</mat-error></mat-form-field>\r
    @if (form.hasError('invalidAmountRange')) { <p class="form-error" role="alert">Maximum amount must be greater than or equal to the minimum amount.</p> }\r
    <mat-slide-toggle formControlName="active">Active</mat-slide-toggle>\r
  </form>\r
</mat-dialog-content>\r
<mat-dialog-actions align="end"><button mat-button type="button" mat-dialog-close>Close</button>@if (data.mode === 'edit') { <button mat-flat-button color="primary" type="button" (click)="save()">Save changes</button> }</mat-dialog-actions>`, styles: ['/* src/app/features/administration/pages/administration-pages.component.scss */\n:host {\n  display: block;\n}\n.admin-page {\n  display: grid;\n  gap: 18px;\n}\n.page-heading {\n  padding: 8px 0 0;\n}\n.page-heading h1 {\n  margin: 0;\n  color: #20352a;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.page-heading p:last-child {\n  margin: 8px 0 0;\n  color: #718078;\n  font-size: 13px;\n}\n.eyebrow {\n  margin: 0 0 7px;\n  color: #71876f;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.table-card {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n}\n.table-card mat-card-content {\n  padding: 0;\n}\n.table-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  min-width: 860px;\n}\nth.mat-mdc-header-cell {\n  color: #68796d;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\ntd.mat-mdc-cell {\n  color: #35453a;\n  font-size: 12px;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 128px;\n}\n.row-actions button {\n  color: #597261;\n}\n.inactive-chip {\n  background: #f0f1ed !important;\n  color: #72776f !important;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 11px 13px;\n  border-radius: 5px;\n  background: #f1f5ef;\n  color: #596e5c;\n  font-size: 12px;\n}\n.preview-notice mat-icon,\n.error-notice mat-icon {\n  flex: 0 0 auto;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.error-notice {\n  background: #fff3f0;\n  color: #9d493e;\n}\n.state {\n  display: flex;\n  min-height: 170px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n  color: #768179;\n  font-size: 13px;\n}\n.error-state {\n  flex-wrap: wrap;\n  color: #9d493e;\n}\n.settings-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 16px;\n  padding: 20px;\n}\n.settings-form > h2,\n.settings-form > .notification-setting,\n.settings-form > .form-actions {\n  grid-column: 1/-1;\n}\n.settings-form h2 {\n  margin: 4px 0 0;\n  color: #34463a;\n  font-size: 14px;\n}\n.notification-setting {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 11px 0;\n  border-bottom: 1px solid #edf0ed;\n  color: #46584b;\n  font-size: 13px;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 12px;\n}\n.filter-form {\n  display: grid;\n  grid-template-columns: minmax(170px, 1.4fr) repeat(3, minmax(145px, 1fr)) auto;\n  align-items: start;\n  gap: 10px;\n  padding: 16px 16px 0;\n}\n.filter-form mat-form-field {\n  width: 100%;\n}\n.filter-actions {\n  display: flex;\n  gap: 6px;\n  padding-top: 5px;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 12px;\n  padding: 4px 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-chip.success {\n  background: #edf5ed;\n  color: #456d4a;\n}\n.status-chip.failed {\n  background: #fff0ed;\n  color: #a24d40;\n}\n.dialog-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 12px;\n  padding-top: 8px;\n}\n.dialog-form mat-form-field {\n  width: 100%;\n}\n.form-error {\n  grid-column: 1/-1;\n  margin: -8px 0 4px;\n  color: #a24d40;\n  font-size: 12px;\n}\n.dialog-form mat-slide-toggle {\n  align-self: center;\n  padding: 6px 0 18px;\n}\n@media (max-width: 850px) {\n  .filter-form {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .filter-actions {\n    grid-column: 1/-1;\n    padding: 0 0 10px;\n  }\n}\n@media (max-width: 580px) {\n  .page-heading h1 {\n    font-size: 24px;\n  }\n  .settings-form,\n  .dialog-form,\n  .filter-form {\n    grid-template-columns: 1fr;\n  }\n  .settings-form > h2,\n  .settings-form > .notification-setting,\n  .settings-form > .form-actions,\n  .filter-actions {\n    grid-column: auto;\n  }\n  .settings-form {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=administration-pages.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApprovalConfigurationDialogComponent, { className: "ApprovalConfigurationDialogComponent", filePath: "src/app/features/administration/pages/approval-configuration-dialog.component.ts", lineNumber: 27 });
})();

// src/app/features/administration/pages/approval-configuration.component.ts
function ApprovalConfigurationComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Development preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Changes are temporary and are not sent to the server.");
    \u0275\u0275elementEnd()();
  }
}
function ApprovalConfigurationComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-progress-spinner", 9);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading approval routes\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ApprovalConfigurationComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 10);
    \u0275\u0275listener("click", function ApprovalConfigurationComponent_Conditional_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.load());
    });
    \u0275\u0275text(6, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function ApprovalConfigurationComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "rule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No approval configurations are available.");
    \u0275\u0275elementEnd()();
  }
}
function ApprovalConfigurationComponent_Conditional_15_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Request Type");
    \u0275\u0275elementEnd();
  }
}
function ApprovalConfigurationComponent_Conditional_15_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.requestType);
  }
}
function ApprovalConfigurationComponent_Conditional_15_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function ApprovalConfigurationComponent_Conditional_15_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.department);
  }
}
function ApprovalConfigurationComponent_Conditional_15_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Approval Level");
    \u0275\u0275elementEnd();
  }
}
function ApprovalConfigurationComponent_Conditional_15_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Level ", row_r5.approvalLevel);
  }
}
function ApprovalConfigurationComponent_Conditional_15_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Approver Role");
    \u0275\u0275elementEnd();
  }
}
function ApprovalConfigurationComponent_Conditional_15_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.approverRole);
  }
}
function ApprovalConfigurationComponent_Conditional_15_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Amount Range");
    \u0275\u0275elementEnd();
  }
}
function ApprovalConfigurationComponent_Conditional_15_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind4(2, 2, row_r7.minimumAmount, "USD", "symbol", "1.0-2"), " \u2013 ", row_r7.maximumAmount === null ? "No limit" : \u0275\u0275pipeBind4(3, 7, row_r7.maximumAmount, "USD", "symbol", "1.0-2"));
  }
}
function ApprovalConfigurationComponent_Conditional_15_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function ApprovalConfigurationComponent_Conditional_15_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 24)(1, "mat-chip");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("inactive-chip", !row_r8.active);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.active ? "Active" : "Inactive");
  }
}
function ApprovalConfigurationComponent_Conditional_15_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ApprovalConfigurationComponent_Conditional_15_td_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 24)(1, "div", 25)(2, "button", 26);
    \u0275\u0275listener("click", function ApprovalConfigurationComponent_Conditional_15_td_22_Template_button_click_2_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openConfiguration(row_r10, "view"));
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function ApprovalConfigurationComponent_Conditional_15_td_22_Template_button_click_5_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openConfiguration(row_r10, "edit"));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-slide-toggle", 28);
    \u0275\u0275listener("change", function ApprovalConfigurationComponent_Conditional_15_td_22_Template_mat_slide_toggle_change_8_listener($event) {
      const row_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleStatus(row_r10, $event.checked));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance(8);
    \u0275\u0275property("checked", row_r10.active);
    \u0275\u0275ariaProperty("aria-label", (row_r10.active ? "Deactivate" : "Activate") + " approval route");
  }
}
function ApprovalConfigurationComponent_Conditional_15_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function ApprovalConfigurationComponent_Conditional_15_tr_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function ApprovalConfigurationComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "table", 11);
    \u0275\u0275elementContainerStart(2, 12);
    \u0275\u0275template(3, ApprovalConfigurationComponent_Conditional_15_th_3_Template, 2, 0, "th", 13)(4, ApprovalConfigurationComponent_Conditional_15_td_4_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 15);
    \u0275\u0275template(6, ApprovalConfigurationComponent_Conditional_15_th_6_Template, 2, 0, "th", 13)(7, ApprovalConfigurationComponent_Conditional_15_td_7_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 16);
    \u0275\u0275template(9, ApprovalConfigurationComponent_Conditional_15_th_9_Template, 2, 0, "th", 13)(10, ApprovalConfigurationComponent_Conditional_15_td_10_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 17);
    \u0275\u0275template(12, ApprovalConfigurationComponent_Conditional_15_th_12_Template, 2, 0, "th", 13)(13, ApprovalConfigurationComponent_Conditional_15_td_13_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 18);
    \u0275\u0275template(15, ApprovalConfigurationComponent_Conditional_15_th_15_Template, 2, 0, "th", 13)(16, ApprovalConfigurationComponent_Conditional_15_td_16_Template, 4, 12, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 19);
    \u0275\u0275template(18, ApprovalConfigurationComponent_Conditional_15_th_18_Template, 2, 0, "th", 13)(19, ApprovalConfigurationComponent_Conditional_15_td_19_Template, 3, 3, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 20);
    \u0275\u0275template(21, ApprovalConfigurationComponent_Conditional_15_th_21_Template, 2, 0, "th", 13)(22, ApprovalConfigurationComponent_Conditional_15_td_22_Template, 9, 2, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(23, ApprovalConfigurationComponent_Conditional_15_tr_23_Template, 1, 0, "tr", 21)(24, ApprovalConfigurationComponent_Conditional_15_tr_24_Template, 1, 0, "tr", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.configurations);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
var _ApprovalConfigurationComponent = class _ApprovalConfigurationComponent {
  constructor() {
    this.service = inject(AdministrationService);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.displayedColumns = ["requestType", "department", "approvalLevel", "approverRole", "amountRange", "status", "actions"];
    this.configurations = [];
    this.loading = false;
    this.errorMessage = "";
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.errorMessage = "";
    this.service.getApprovalConfigurations().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (configurations) => {
        this.configurations = configurations;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = this.service.errorMessage();
      }
    });
  }
  openConfiguration(configuration, mode) {
    const data = { configuration, mode };
    this.dialog.open(ApprovalConfigurationDialogComponent, {
      width: "min(560px, calc(100vw - 32px))",
      maxWidth: "calc(100vw - 32px)",
      data
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((result) => {
      if (result)
        this.save(result);
    });
  }
  toggleStatus(configuration, active) {
    this.service.setApprovalConfigurationStatus(configuration.id, active).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.configurations = this.configurations.map((item) => item.id === updated.id ? updated : item);
        this.message(`Approval route ${active ? "activated" : "deactivated"}${this.service.previewMode() ? " in preview data" : ""}.`);
      },
      error: () => this.message("The approval route status could not be updated.")
    });
  }
  save(configuration) {
    this.service.saveApprovalConfiguration(configuration).pipe(finalize(() => void 0), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.configurations = this.configurations.map((item) => item.id === updated.id ? updated : item);
        this.message(`Approval route saved${this.service.previewMode() ? " to preview data" : ""}.`);
      },
      error: () => this.message("The approval route could not be saved.")
    });
  }
  message(text) {
    this.snackBar.open(text, "Dismiss", { duration: 3500 });
  }
};
_ApprovalConfigurationComponent.\u0275fac = function ApprovalConfigurationComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApprovalConfigurationComponent)();
};
_ApprovalConfigurationComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApprovalConfigurationComponent, selectors: [["app-approval-configuration"]], decls: 16, vars: 2, consts: [["aria-labelledby", "approval-config-title", 1, "admin-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "approval-config-title"], ["role", "status", 1, "preview-notice"], ["appearance", "outlined", 1, "table-card"], [1, "state"], ["role", "alert", 1, "state", "error-state"], [1, "table-scroll"], ["diameter", "34", "mode", "indeterminate"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-table", "", "aria-label", "Approval configuration routes", 3, "dataSource"], ["matColumnDef", "requestType"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "department"], ["matColumnDef", "approvalLevel"], ["matColumnDef", "approverRole"], ["matColumnDef", "amountRange"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "row-actions"], ["mat-icon-button", "", "type", "button", "aria-label", "View approval route", "matTooltip", "View", 3, "click"], ["mat-icon-button", "", "type", "button", "aria-label", "Edit approval route", "matTooltip", "Edit", 3, "click"], [3, "change", "checked", "aria-label"], ["mat-header-row", ""], ["mat-row", ""]], template: function ApprovalConfigurationComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "ADMINISTRATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "Approval Configuration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Manage approval routes, role assignments, and request limits.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, ApprovalConfigurationComponent_Conditional_9_Template, 7, 0, "div", 4);
    \u0275\u0275elementStart(10, "mat-card", 5)(11, "mat-card-content");
    \u0275\u0275conditionalCreate(12, ApprovalConfigurationComponent_Conditional_12_Template, 4, 0, "div", 6)(13, ApprovalConfigurationComponent_Conditional_13_Template, 7, 1, "div", 7)(14, ApprovalConfigurationComponent_Conditional_14_Template, 5, 0, "div", 6)(15, ApprovalConfigurationComponent_Conditional_15_Template, 25, 3, "div", 8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.service.previewMode() ? 9 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.loading ? 12 : ctx.errorMessage ? 13 : !ctx.configurations.length ? 14 : 15);
  }
}, dependencies: [MatButtonModule, MatButton, MatIconButton, MatCardModule, MatCard, MatCardContent, MatChipsModule, MatChip, MatDialogModule, MatDividerModule, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatSlideToggleModule, MatSlideToggle, MatSnackBarModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTooltipModule, MatTooltip, CurrencyPipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.admin-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #20352a;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin: 8px 0 0;\n  color: #718078;\n  font-size: 13px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: #71876f;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n}\n.table-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 860px;\n}\nth.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #68796d;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\ntd.mat-mdc-cell[_ngcontent-%COMP%] {\n  color: #35453a;\n  font-size: 12px;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 128px;\n}\n.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #597261;\n}\n.inactive-chip[_ngcontent-%COMP%] {\n  background: #f0f1ed !important;\n  color: #72776f !important;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 11px 13px;\n  border-radius: 5px;\n  background: #f1f5ef;\n  color: #596e5c;\n  font-size: 12px;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  background: #fff3f0;\n  color: #9d493e;\n}\n.state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 170px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n  color: #768179;\n  font-size: 13px;\n}\n.error-state[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  color: #9d493e;\n}\n.settings-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 16px;\n  padding: 20px;\n}\n.settings-form[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n.settings-form[_ngcontent-%COMP%]    > .notification-setting[_ngcontent-%COMP%], \n.settings-form[_ngcontent-%COMP%]    > .form-actions[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.settings-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #34463a;\n  font-size: 14px;\n}\n.notification-setting[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 11px 0;\n  border-bottom: 1px solid #edf0ed;\n  color: #46584b;\n  font-size: 13px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 12px;\n}\n.filter-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(170px, 1.4fr) repeat(3, minmax(145px, 1fr)) auto;\n  align-items: start;\n  gap: 10px;\n  padding: 16px 16px 0;\n}\n.filter-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  padding-top: 5px;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 12px;\n  padding: 4px 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-chip.success[_ngcontent-%COMP%] {\n  background: #edf5ed;\n  color: #456d4a;\n}\n.status-chip.failed[_ngcontent-%COMP%] {\n  background: #fff0ed;\n  color: #a24d40;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 12px;\n  padding-top: 8px;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-error[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin: -8px 0 4px;\n  color: #a24d40;\n  font-size: 12px;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 6px 0 18px;\n}\n@media (max-width: 850px) {\n  .filter-form[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .filter-actions[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    padding: 0 0 10px;\n  }\n}\n@media (max-width: 580px) {\n  .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .settings-form[_ngcontent-%COMP%], \n   .dialog-form[_ngcontent-%COMP%], \n   .filter-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .settings-form[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n   .settings-form[_ngcontent-%COMP%]    > .notification-setting[_ngcontent-%COMP%], \n   .settings-form[_ngcontent-%COMP%]    > .form-actions[_ngcontent-%COMP%], \n   .filter-actions[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .settings-form[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=administration-pages.component.css.map */'] });
var ApprovalConfigurationComponent = _ApprovalConfigurationComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApprovalConfigurationComponent, [{
    type: Component,
    args: [{ selector: "app-approval-configuration", standalone: true, imports: [CurrencyPipe, MatButtonModule, MatCardModule, MatChipsModule, MatDialogModule, MatDividerModule, MatIconModule, MatProgressSpinnerModule, MatSlideToggleModule, MatSnackBarModule, MatTableModule, MatTooltipModule], template: `<section class="admin-page" aria-labelledby="approval-config-title">\r
  <header class="page-heading"><div><p class="eyebrow">ADMINISTRATION</p><h1 id="approval-config-title">Approval Configuration</h1><p>Manage approval routes, role assignments, and request limits.</p></div></header>\r
  @if (service.previewMode()) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Development preview</strong> Changes are temporary and are not sent to the server.</span></div> }\r
  <mat-card appearance="outlined" class="table-card">\r
    <mat-card-content>\r
      @if (loading) { <div class="state"><mat-progress-spinner diameter="34" mode="indeterminate"/><span>Loading approval routes\u2026</span></div> }\r
      @else if (errorMessage) { <div class="state error-state" role="alert"><mat-icon>error_outline</mat-icon><span>{{ errorMessage }}</span><button mat-stroked-button type="button" (click)="load()">Retry</button></div> }\r
      @else if (!configurations.length) { <div class="state"><mat-icon>rule</mat-icon><span>No approval configurations are available.</span></div> }\r
      @else {\r
        <div class="table-scroll"><table mat-table [dataSource]="configurations" aria-label="Approval configuration routes">\r
          <ng-container matColumnDef="requestType"><th mat-header-cell *matHeaderCellDef>Request Type</th><td mat-cell *matCellDef="let row">{{ row.requestType }}</td></ng-container>\r
          <ng-container matColumnDef="department"><th mat-header-cell *matHeaderCellDef>Department</th><td mat-cell *matCellDef="let row">{{ row.department }}</td></ng-container>\r
          <ng-container matColumnDef="approvalLevel"><th mat-header-cell *matHeaderCellDef>Approval Level</th><td mat-cell *matCellDef="let row">Level {{ row.approvalLevel }}</td></ng-container>\r
          <ng-container matColumnDef="approverRole"><th mat-header-cell *matHeaderCellDef>Approver Role</th><td mat-cell *matCellDef="let row">{{ row.approverRole }}</td></ng-container>\r
          <ng-container matColumnDef="amountRange"><th mat-header-cell *matHeaderCellDef>Amount Range</th><td mat-cell *matCellDef="let row">{{ row.minimumAmount | currency:'USD':'symbol':'1.0-2' }} \u2013 {{ row.maximumAmount === null ? 'No limit' : (row.maximumAmount | currency:'USD':'symbol':'1.0-2') }}</td></ng-container>\r
          <ng-container matColumnDef="status"><th mat-header-cell *matHeaderCellDef>Status</th><td mat-cell *matCellDef="let row"><mat-chip [class.inactive-chip]="!row.active">{{ row.active ? 'Active' : 'Inactive' }}</mat-chip></td></ng-container>\r
          <ng-container matColumnDef="actions"><th mat-header-cell *matHeaderCellDef>Actions</th><td mat-cell *matCellDef="let row"><div class="row-actions"><button mat-icon-button type="button" aria-label="View approval route" matTooltip="View" (click)="openConfiguration(row, 'view')"><mat-icon>visibility</mat-icon></button><button mat-icon-button type="button" aria-label="Edit approval route" matTooltip="Edit" (click)="openConfiguration(row, 'edit')"><mat-icon>edit</mat-icon></button><mat-slide-toggle [checked]="row.active" [aria-label]="(row.active ? 'Deactivate' : 'Activate') + ' approval route'" (change)="toggleStatus(row, $event.checked)"/></div></td></ng-container>\r
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr><tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
        </table></div>\r
      }\r
    </mat-card-content>\r
  </mat-card>\r
</section>`, styles: ['/* src/app/features/administration/pages/administration-pages.component.scss */\n:host {\n  display: block;\n}\n.admin-page {\n  display: grid;\n  gap: 18px;\n}\n.page-heading {\n  padding: 8px 0 0;\n}\n.page-heading h1 {\n  margin: 0;\n  color: #20352a;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.page-heading p:last-child {\n  margin: 8px 0 0;\n  color: #718078;\n  font-size: 13px;\n}\n.eyebrow {\n  margin: 0 0 7px;\n  color: #71876f;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.table-card {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n}\n.table-card mat-card-content {\n  padding: 0;\n}\n.table-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  min-width: 860px;\n}\nth.mat-mdc-header-cell {\n  color: #68796d;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\ntd.mat-mdc-cell {\n  color: #35453a;\n  font-size: 12px;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 128px;\n}\n.row-actions button {\n  color: #597261;\n}\n.inactive-chip {\n  background: #f0f1ed !important;\n  color: #72776f !important;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 11px 13px;\n  border-radius: 5px;\n  background: #f1f5ef;\n  color: #596e5c;\n  font-size: 12px;\n}\n.preview-notice mat-icon,\n.error-notice mat-icon {\n  flex: 0 0 auto;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.error-notice {\n  background: #fff3f0;\n  color: #9d493e;\n}\n.state {\n  display: flex;\n  min-height: 170px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n  color: #768179;\n  font-size: 13px;\n}\n.error-state {\n  flex-wrap: wrap;\n  color: #9d493e;\n}\n.settings-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 16px;\n  padding: 20px;\n}\n.settings-form > h2,\n.settings-form > .notification-setting,\n.settings-form > .form-actions {\n  grid-column: 1/-1;\n}\n.settings-form h2 {\n  margin: 4px 0 0;\n  color: #34463a;\n  font-size: 14px;\n}\n.notification-setting {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 11px 0;\n  border-bottom: 1px solid #edf0ed;\n  color: #46584b;\n  font-size: 13px;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 12px;\n}\n.filter-form {\n  display: grid;\n  grid-template-columns: minmax(170px, 1.4fr) repeat(3, minmax(145px, 1fr)) auto;\n  align-items: start;\n  gap: 10px;\n  padding: 16px 16px 0;\n}\n.filter-form mat-form-field {\n  width: 100%;\n}\n.filter-actions {\n  display: flex;\n  gap: 6px;\n  padding-top: 5px;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 12px;\n  padding: 4px 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-chip.success {\n  background: #edf5ed;\n  color: #456d4a;\n}\n.status-chip.failed {\n  background: #fff0ed;\n  color: #a24d40;\n}\n.dialog-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 12px;\n  padding-top: 8px;\n}\n.dialog-form mat-form-field {\n  width: 100%;\n}\n.form-error {\n  grid-column: 1/-1;\n  margin: -8px 0 4px;\n  color: #a24d40;\n  font-size: 12px;\n}\n.dialog-form mat-slide-toggle {\n  align-self: center;\n  padding: 6px 0 18px;\n}\n@media (max-width: 850px) {\n  .filter-form {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .filter-actions {\n    grid-column: 1/-1;\n    padding: 0 0 10px;\n  }\n}\n@media (max-width: 580px) {\n  .page-heading h1 {\n    font-size: 24px;\n  }\n  .settings-form,\n  .dialog-form,\n  .filter-form {\n    grid-template-columns: 1fr;\n  }\n  .settings-form > h2,\n  .settings-form > .notification-setting,\n  .settings-form > .form-actions,\n  .filter-actions {\n    grid-column: auto;\n  }\n  .settings-form {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=administration-pages.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApprovalConfigurationComponent, { className: "ApprovalConfigurationComponent", filePath: "src/app/features/administration/pages/approval-configuration.component.ts", lineNumber: 28 });
})();
export {
  ApprovalConfigurationComponent
};
//# sourceMappingURL=chunk-7VZXPLF4.js.map
