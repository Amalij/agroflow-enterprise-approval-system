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
  MatError,
  MatFormField,
  MatHint,
  MatLabel
} from "./chunk-EVUGFGV4.js";
import "./chunk-WG4DC2AT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  MaxLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
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
  MatButtonModule
} from "./chunk-KV3NKOTC.js";
import "./chunk-DBRYW4UZ.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-A3MOLE3M.js";
import "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
  finalize,
  inject,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/administration/pages/system-settings.component.ts
function SystemSettingsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Development preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Saved changes are temporary and are not sent to the server.");
    \u0275\u0275elementEnd()();
  }
}
function SystemSettingsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "mat-progress-spinner", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading system settings\u2026");
    \u0275\u0275elementEnd()();
  }
}
function SystemSettingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function SystemSettingsComponent_Conditional_11_Template_button_click_5_listener() {
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
    \u0275\u0275textInterpolate(ctx_r1.loadError);
  }
}
function SystemSettingsComponent_Conditional_12_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currency_r4 = ctx.$implicit;
    \u0275\u0275property("value", currency_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(currency_r4);
  }
}
function SystemSettingsComponent_Conditional_12_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const format_r5 = ctx.$implicit;
    \u0275\u0275property("value", format_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(format_r5);
  }
}
function SystemSettingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 7)(1, "form", 10);
    \u0275\u0275listener("ngSubmit", function SystemSettingsComponent_Conditional_12_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(2, "mat-form-field", 11)(3, "mat-label");
    \u0275\u0275text(4, "Organization Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 12);
    \u0275\u0275elementStart(6, "mat-error");
    \u0275\u0275text(7, "Enter an organization name (up to 100 characters).");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 11)(9, "mat-label");
    \u0275\u0275text(10, "Default Currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-select", 13);
    \u0275\u0275repeaterCreate(12, SystemSettingsComponent_Conditional_12_For_13_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-error");
    \u0275\u0275text(15, "Select a default currency.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 11)(17, "mat-label");
    \u0275\u0275text(18, "Date Format");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 15);
    \u0275\u0275repeaterCreate(20, SystemSettingsComponent_Conditional_12_For_21_Template, 2, 2, "mat-option", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-error");
    \u0275\u0275text(23, "Select a date format.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-form-field", 11)(25, "mat-label");
    \u0275\u0275text(26, "Request Number Prefix");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 16);
    \u0275\u0275elementStart(28, "mat-hint");
    \u0275\u0275text(29, "2\u20138 letters, numbers, or hyphens");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-error");
    \u0275\u0275text(31, "Enter a valid prefix between 2 and 8 characters.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "h2");
    \u0275\u0275text(33, "Notification Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275element(34, "mat-divider");
    \u0275\u0275elementStart(35, "label", 17)(36, "span");
    \u0275\u0275text(37, "Email notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "mat-slide-toggle", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "label", 17)(40, "span");
    \u0275\u0275text(41, "In-app notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275element(42, "mat-slide-toggle", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "label", 17)(44, "span");
    \u0275\u0275text(45, "Approval reminders");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "mat-slide-toggle", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 21)(48, "button", 22)(49, "mat-icon");
    \u0275\u0275text(50, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(51, "Save Settings");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(11);
    \u0275\u0275repeater(ctx_r1.currencies);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx_r1.dateFormats);
    \u0275\u0275advance(28);
    \u0275\u0275property("disabled", ctx_r1.service.saving());
  }
}
var _SystemSettingsComponent = class _SystemSettingsComponent {
  constructor() {
    this.service = inject(AdministrationService);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.loading = false;
    this.loadError = "";
    this.currencies = ["USD", "EUR", "GBP", "KES", "NGN", "TZS", "UGX", "ZAR"];
    this.dateFormats = ["MMM d, yyyy", "dd/MM/yyyy", "MM/dd/yyyy", "yyyy-MM-dd"];
    this.form = new FormGroup({
      organizationName: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.maxLength(100)] }),
      defaultCurrency: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      dateFormat: new FormControl("", { nonNullable: true, validators: [Validators.required] }),
      email: new FormControl(true, { nonNullable: true }),
      inApp: new FormControl(true, { nonNullable: true }),
      approvalReminders: new FormControl(true, { nonNullable: true }),
      requestNumberPrefix: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[A-Za-z0-9-]{2,8}$/)] })
    });
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.loadError = "";
    this.service.getSystemSettings().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (settings) => {
        this.setForm(settings);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.loadError = this.service.errorMessage();
      }
    });
  }
  save() {
    if (this.form.invalid || this.service.saving()) {
      this.form.markAllAsTouched();
      return;
    }
    const value = this.form.getRawValue();
    const settings = {
      organizationName: value.organizationName.trim(),
      defaultCurrency: value.defaultCurrency,
      dateFormat: value.dateFormat,
      requestNumberPrefix: value.requestNumberPrefix.toUpperCase(),
      notificationSettings: { email: value.email, inApp: value.inApp, approvalReminders: value.approvalReminders }
    };
    this.service.saveSystemSettings(settings).pipe(finalize(() => void 0), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (saved) => {
        this.setForm(saved);
        this.snackBar.open(`Settings saved${this.service.previewMode() ? " to preview data" : ""}.`, "Dismiss", { duration: 3500 });
      },
      error: () => this.snackBar.open("Settings could not be saved. Please try again.", "Dismiss", { duration: 3500 })
    });
  }
  setForm(settings) {
    this.form.reset({
      organizationName: settings.organizationName,
      defaultCurrency: settings.defaultCurrency,
      dateFormat: settings.dateFormat,
      email: settings.notificationSettings.email,
      inApp: settings.notificationSettings.inApp,
      approvalReminders: settings.notificationSettings.approvalReminders,
      requestNumberPrefix: settings.requestNumberPrefix
    });
  }
};
_SystemSettingsComponent.\u0275fac = function SystemSettingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SystemSettingsComponent)();
};
_SystemSettingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SystemSettingsComponent, selectors: [["app-system-settings"]], decls: 13, vars: 2, consts: [["aria-labelledby", "system-settings-title", 1, "admin-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "system-settings-title"], ["role", "status", 1, "preview-notice"], [1, "state"], ["role", "alert", 1, "state", "error-state"], ["appearance", "outlined", 1, "table-card"], ["diameter", "34", "mode", "indeterminate"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "settings-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "organizationName", "maxlength", "100"], ["formControlName", "defaultCurrency"], [3, "value"], ["formControlName", "dateFormat"], ["matInput", "", "formControlName", "requestNumberPrefix", "maxlength", "8"], [1, "notification-setting"], ["formControlName", "email", "aria-label", "Email notifications"], ["formControlName", "inApp", "aria-label", "In-app notifications"], ["formControlName", "approvalReminders", "aria-label", "Approval reminders"], [1, "form-actions"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function SystemSettingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "ADMINISTRATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "System Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Configure organization defaults and notification preferences.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, SystemSettingsComponent_Conditional_9_Template, 7, 0, "div", 4);
    \u0275\u0275conditionalCreate(10, SystemSettingsComponent_Conditional_10_Template, 4, 0, "div", 5)(11, SystemSettingsComponent_Conditional_11_Template, 7, 1, "div", 6)(12, SystemSettingsComponent_Conditional_12_Template, 52, 2, "mat-card", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.service.previewMode() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading ? 10 : ctx.loadError ? 11 : 12);
  }
}, dependencies: [MatButtonModule, MatButton, MatCardModule, MatCard, MatDividerModule, MatDivider, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatError, MatIconModule, MatIcon, MatInputModule, MatInput, MatProgressSpinnerModule, MatProgressSpinner, MatSelectModule, MatSelect, MatOption, MatSlideToggleModule, MatSlideToggle, MatSnackBarModule, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.admin-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #20352a;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin: 8px 0 0;\n  color: #718078;\n  font-size: 13px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: #71876f;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n}\n.table-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 860px;\n}\nth.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #68796d;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\ntd.mat-mdc-cell[_ngcontent-%COMP%] {\n  color: #35453a;\n  font-size: 12px;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 128px;\n}\n.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #597261;\n}\n.inactive-chip[_ngcontent-%COMP%] {\n  background: #f0f1ed !important;\n  color: #72776f !important;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 11px 13px;\n  border-radius: 5px;\n  background: #f1f5ef;\n  color: #596e5c;\n  font-size: 12px;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  background: #fff3f0;\n  color: #9d493e;\n}\n.state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 170px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n  color: #768179;\n  font-size: 13px;\n}\n.error-state[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  color: #9d493e;\n}\n.settings-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 16px;\n  padding: 20px;\n}\n.settings-form[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n.settings-form[_ngcontent-%COMP%]    > .notification-setting[_ngcontent-%COMP%], \n.settings-form[_ngcontent-%COMP%]    > .form-actions[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.settings-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #34463a;\n  font-size: 14px;\n}\n.notification-setting[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 11px 0;\n  border-bottom: 1px solid #edf0ed;\n  color: #46584b;\n  font-size: 13px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 12px;\n}\n.filter-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(170px, 1.4fr) repeat(3, minmax(145px, 1fr)) auto;\n  align-items: start;\n  gap: 10px;\n  padding: 16px 16px 0;\n}\n.filter-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  padding-top: 5px;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 12px;\n  padding: 4px 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-chip.success[_ngcontent-%COMP%] {\n  background: #edf5ed;\n  color: #456d4a;\n}\n.status-chip.failed[_ngcontent-%COMP%] {\n  background: #fff0ed;\n  color: #a24d40;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 12px;\n  padding-top: 8px;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-error[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin: -8px 0 4px;\n  color: #a24d40;\n  font-size: 12px;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 6px 0 18px;\n}\n@media (max-width: 850px) {\n  .filter-form[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .filter-actions[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    padding: 0 0 10px;\n  }\n}\n@media (max-width: 580px) {\n  .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .settings-form[_ngcontent-%COMP%], \n   .dialog-form[_ngcontent-%COMP%], \n   .filter-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .settings-form[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n   .settings-form[_ngcontent-%COMP%]    > .notification-setting[_ngcontent-%COMP%], \n   .settings-form[_ngcontent-%COMP%]    > .form-actions[_ngcontent-%COMP%], \n   .filter-actions[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .settings-form[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=administration-pages.component.css.map */'] });
var SystemSettingsComponent = _SystemSettingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SystemSettingsComponent, [{
    type: Component,
    args: [{ selector: "app-system-settings", standalone: true, imports: [MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatSnackBarModule, ReactiveFormsModule], template: '<section class="admin-page" aria-labelledby="system-settings-title">\r\n  <header class="page-heading"><div><p class="eyebrow">ADMINISTRATION</p><h1 id="system-settings-title">System Settings</h1><p>Configure organization defaults and notification preferences.</p></div></header>\r\n  @if (service.previewMode()) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Development preview</strong> Saved changes are temporary and are not sent to the server.</span></div> }\r\n  @if (loading) { <div class="state"><mat-progress-spinner diameter="34" mode="indeterminate"/><span>Loading system settings\u2026</span></div> }\r\n  @else if (loadError) { <div class="state error-state" role="alert"><mat-icon>error_outline</mat-icon><span>{{ loadError }}</span><button mat-stroked-button type="button" (click)="load()">Retry</button></div> }\r\n  @else {\r\n    <mat-card appearance="outlined" class="table-card"><form class="settings-form" [formGroup]="form" (ngSubmit)="save()">\r\n      <mat-form-field appearance="outline"><mat-label>Organization Name</mat-label><input matInput formControlName="organizationName" maxlength="100"><mat-error>Enter an organization name (up to 100 characters).</mat-error></mat-form-field>\r\n      <mat-form-field appearance="outline"><mat-label>Default Currency</mat-label><mat-select formControlName="defaultCurrency">@for (currency of currencies; track currency) { <mat-option [value]="currency">{{ currency }}</mat-option> }</mat-select><mat-error>Select a default currency.</mat-error></mat-form-field>\r\n      <mat-form-field appearance="outline"><mat-label>Date Format</mat-label><mat-select formControlName="dateFormat">@for (format of dateFormats; track format) { <mat-option [value]="format">{{ format }}</mat-option> }</mat-select><mat-error>Select a date format.</mat-error></mat-form-field>\r\n      <mat-form-field appearance="outline"><mat-label>Request Number Prefix</mat-label><input matInput formControlName="requestNumberPrefix" maxlength="8"><mat-hint>2\u20138 letters, numbers, or hyphens</mat-hint><mat-error>Enter a valid prefix between 2 and 8 characters.</mat-error></mat-form-field>\r\n      <h2>Notification Settings</h2><mat-divider/>\r\n      <label class="notification-setting"><span>Email notifications</span><mat-slide-toggle formControlName="email" aria-label="Email notifications"/></label>\r\n      <label class="notification-setting"><span>In-app notifications</span><mat-slide-toggle formControlName="inApp" aria-label="In-app notifications"/></label>\r\n      <label class="notification-setting"><span>Approval reminders</span><mat-slide-toggle formControlName="approvalReminders" aria-label="Approval reminders"/></label>\r\n      <div class="form-actions"><button mat-flat-button color="primary" type="submit" [disabled]="service.saving()"><mat-icon>save</mat-icon>Save Settings</button></div>\r\n    </form></mat-card>\r\n  }\r\n</section>', styles: ['/* src/app/features/administration/pages/administration-pages.component.scss */\n:host {\n  display: block;\n}\n.admin-page {\n  display: grid;\n  gap: 18px;\n}\n.page-heading {\n  padding: 8px 0 0;\n}\n.page-heading h1 {\n  margin: 0;\n  color: #20352a;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.page-heading p:last-child {\n  margin: 8px 0 0;\n  color: #718078;\n  font-size: 13px;\n}\n.eyebrow {\n  margin: 0 0 7px;\n  color: #71876f;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.table-card {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n}\n.table-card mat-card-content {\n  padding: 0;\n}\n.table-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  min-width: 860px;\n}\nth.mat-mdc-header-cell {\n  color: #68796d;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\ntd.mat-mdc-cell {\n  color: #35453a;\n  font-size: 12px;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 128px;\n}\n.row-actions button {\n  color: #597261;\n}\n.inactive-chip {\n  background: #f0f1ed !important;\n  color: #72776f !important;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 11px 13px;\n  border-radius: 5px;\n  background: #f1f5ef;\n  color: #596e5c;\n  font-size: 12px;\n}\n.preview-notice mat-icon,\n.error-notice mat-icon {\n  flex: 0 0 auto;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.error-notice {\n  background: #fff3f0;\n  color: #9d493e;\n}\n.state {\n  display: flex;\n  min-height: 170px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n  color: #768179;\n  font-size: 13px;\n}\n.error-state {\n  flex-wrap: wrap;\n  color: #9d493e;\n}\n.settings-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 16px;\n  padding: 20px;\n}\n.settings-form > h2,\n.settings-form > .notification-setting,\n.settings-form > .form-actions {\n  grid-column: 1/-1;\n}\n.settings-form h2 {\n  margin: 4px 0 0;\n  color: #34463a;\n  font-size: 14px;\n}\n.notification-setting {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 11px 0;\n  border-bottom: 1px solid #edf0ed;\n  color: #46584b;\n  font-size: 13px;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 12px;\n}\n.filter-form {\n  display: grid;\n  grid-template-columns: minmax(170px, 1.4fr) repeat(3, minmax(145px, 1fr)) auto;\n  align-items: start;\n  gap: 10px;\n  padding: 16px 16px 0;\n}\n.filter-form mat-form-field {\n  width: 100%;\n}\n.filter-actions {\n  display: flex;\n  gap: 6px;\n  padding-top: 5px;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 12px;\n  padding: 4px 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-chip.success {\n  background: #edf5ed;\n  color: #456d4a;\n}\n.status-chip.failed {\n  background: #fff0ed;\n  color: #a24d40;\n}\n.dialog-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 12px;\n  padding-top: 8px;\n}\n.dialog-form mat-form-field {\n  width: 100%;\n}\n.form-error {\n  grid-column: 1/-1;\n  margin: -8px 0 4px;\n  color: #a24d40;\n  font-size: 12px;\n}\n.dialog-form mat-slide-toggle {\n  align-self: center;\n  padding: 6px 0 18px;\n}\n@media (max-width: 850px) {\n  .filter-form {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .filter-actions {\n    grid-column: 1/-1;\n    padding: 0 0 10px;\n  }\n}\n@media (max-width: 580px) {\n  .page-heading h1 {\n    font-size: 24px;\n  }\n  .settings-form,\n  .dialog-form,\n  .filter-form {\n    grid-template-columns: 1fr;\n  }\n  .settings-form > h2,\n  .settings-form > .notification-setting,\n  .settings-form > .form-actions,\n  .filter-actions {\n    grid-column: auto;\n  }\n  .settings-form {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=administration-pages.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SystemSettingsComponent, { className: "SystemSettingsComponent", filePath: "src/app/features/administration/pages/system-settings.component.ts", lineNumber: 26 });
})();
export {
  SystemSettingsComponent
};
//# sourceMappingURL=chunk-BKKHTSRT.js.map
