import {
  DepartmentPreviewStore,
  DepartmentService
} from "./chunk-KG37TGCR.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-FEB7GDLY.js";
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
  MatTableDataSource,
  MatTableModule
} from "./chunk-N2QZREPG.js";
import "./chunk-4V2R5SHM.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-S5Y7ZGUB.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-VCKAT7IX.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-CEFQC7DY.js";
import "./chunk-XIFJHBZC.js";
import {
  USER_ROLES
} from "./chunk-AW4U6G7T.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-IGEVX5VZ.js";
import {
  MatError,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-EVUGFGV4.js";
import "./chunk-WG4DC2AT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
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
  HttpClient
} from "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
  Injectable,
  ViewChild,
  debounceTime,
  distinctUntilChanged,
  finalize,
  inject,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-N56IC4AV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/features/users/models/user-preview.data.ts
var USER_PREVIEW_DATA = [
  { id: 201, fullName: "Amara Patel", email: "amara.patel@agroflow.example", departmentId: 102, departmentName: "Finance", role: "Admin", active: true, createdAt: "2025-10-14T00:00:00Z" },
  { id: 202, fullName: "Daniel Kim", email: "daniel.kim@agroflow.example", departmentId: 101, departmentName: "Operations", role: "Manager", active: true, createdAt: "2025-11-02T00:00:00Z" },
  { id: 203, fullName: "Leila Hassan", email: "leila.hassan@agroflow.example", departmentId: 103, departmentName: "Agriculture", role: "Approver", active: true, createdAt: "2025-11-26T00:00:00Z" },
  { id: 204, fullName: "Noah Williams", email: "noah.williams@agroflow.example", departmentId: 104, departmentName: "Logistics", role: "Employee", active: true, createdAt: "2025-12-10T00:00:00Z" },
  { id: 205, fullName: "Sofia Garcia", email: "sofia.garcia@agroflow.example", departmentId: 106, departmentName: "Procurement", role: "Approver", active: false, createdAt: "2026-01-08T00:00:00Z" },
  { id: 206, fullName: "Ethan Okafor", email: "ethan.okafor@agroflow.example", departmentId: 105, departmentName: "People and Culture", role: "Manager", active: true, createdAt: "2026-01-22T00:00:00Z" },
  { id: 207, fullName: "Mina Chen", email: "mina.chen@agroflow.example", departmentId: 101, departmentName: "Operations", role: "Employee", active: false, createdAt: "2026-02-17T00:00:00Z" },
  { id: 208, fullName: "Ravi Perera", email: "ravi.perera@agroflow.example", departmentId: 102, departmentName: "Finance", role: "Approver", active: true, createdAt: "2026-03-12T00:00:00Z" }
];

// src/app/features/users/models/services/user-preview.store.ts
var _UserPreviewStore = class _UserPreviewStore {
  constructor() {
    this.users = USER_PREVIEW_DATA.map((user) => __spreadValues({}, user));
    this.nextId = Math.max(...this.users.map((user) => user.id)) + 1;
  }
  getAll() {
    return this.users.map((user) => __spreadValues({}, user));
  }
  create(payload, departmentName) {
    const user = __spreadProps(__spreadValues({
      id: this.nextId++
    }, payload), {
      departmentName,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    this.users = [user, ...this.users];
    return __spreadValues({}, user);
  }
  update(id, payload, departmentName) {
    const existing = this.users.find((user) => user.id === id);
    if (!existing)
      return void 0;
    const updated = __spreadProps(__spreadValues(__spreadValues({}, existing), payload), { departmentName });
    this.users = this.users.map((user) => user.id === id ? updated : user);
    return __spreadValues({}, updated);
  }
};
_UserPreviewStore.\u0275fac = function UserPreviewStore_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserPreviewStore)();
};
_UserPreviewStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserPreviewStore, factory: _UserPreviewStore.\u0275fac, providedIn: "root" });
var UserPreviewStore = _UserPreviewStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPreviewStore, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/users/models/services/user.service.ts
var _UserService = class _UserService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = "http://localhost:8080/api/users";
  }
  getUsers() {
    return this.http.get(this.apiUrl);
  }
  createUser(user) {
    return this.http.post(this.apiUrl, user);
  }
  updateUser(id, user) {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }
};
_UserService.\u0275fac = function UserService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserService)();
};
_UserService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
var UserService = _UserService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/pages/user-list/user-dialog.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function UserDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Full name is required.");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Use 120 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Email is required.");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Enter a valid email address.");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r1 = ctx.$implicit;
    \u0275\u0275property("value", department_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(department_r1.name);
  }
}
function UserDialogComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Select a department.");
    \u0275\u0275elementEnd();
  }
}
function UserDialogComponent_For_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275property("value", role_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r2);
  }
}
function UserDialogComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r2.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.data.mode === "create" ? "Add User" : "Save Changes", " ");
  }
}
var _UserDialogComponent = class _UserDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.roles = USER_ROLES;
    this.dialogRef = inject(MatDialogRef);
    this.form = new FormGroup({
      fullName: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.maxLength(120)] }),
      email: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.email, Validators.maxLength(254)] }),
      departmentId: new FormControl(0, { nonNullable: true, validators: [Validators.min(1)] }),
      role: new FormControl("Employee", { nonNullable: true, validators: [Validators.required] }),
      active: new FormControl(true, { nonNullable: true })
    });
  }
  get title() {
    if (this.data.mode === "create")
      return "Add User";
    if (this.data.mode === "edit")
      return "Edit User";
    return "User Details";
  }
  ngOnInit() {
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
    if (this.data.mode === "view")
      this.form.disable();
  }
  save() {
    if (this.form.invalid || this.data.mode === "view")
      return;
    this.dialogRef.close(this.form.getRawValue());
  }
  close() {
    this.dialogRef.close();
  }
};
_UserDialogComponent.\u0275fac = function UserDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserDialogComponent)();
};
_UserDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserDialogComponent, selectors: [["app-user-dialog"]], decls: 41, vars: 11, consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], [1, "form-content"], ["appearance", "outline"], ["matInput", "", "formControlName", "fullName", "maxlength", "120", "autocomplete", "name"], ["matInput", "", "type", "email", "formControlName", "email", "maxlength", "254", "autocomplete", "email"], ["formControlName", "departmentId"], [3, "value"], ["formControlName", "role"], ["formControlName", "active"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function UserDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "form", 1);
    \u0275\u0275listener("ngSubmit", function UserDialogComponent_Template_form_ngSubmit_2_listener() {
      return ctx.save();
    });
    \u0275\u0275elementStart(3, "mat-dialog-content", 2)(4, "mat-form-field", 3)(5, "mat-label");
    \u0275\u0275text(6, "Full Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 4);
    \u0275\u0275conditionalCreate(8, UserDialogComponent_Conditional_8_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(9, UserDialogComponent_Conditional_9_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 3)(11, "mat-label");
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "input", 5);
    \u0275\u0275conditionalCreate(14, UserDialogComponent_Conditional_14_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(15, UserDialogComponent_Conditional_15_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-form-field", 3)(17, "mat-label");
    \u0275\u0275text(18, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-select", 6);
    \u0275\u0275repeaterCreate(20, UserDialogComponent_For_21_Template, 2, 2, "mat-option", 7, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, UserDialogComponent_Conditional_22_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-form-field", 3)(24, "mat-label");
    \u0275\u0275text(25, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-select", 8);
    \u0275\u0275repeaterCreate(27, UserDialogComponent_For_28_Template, 2, 2, "mat-option", 7, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-form-field", 3)(30, "mat-label");
    \u0275\u0275text(31, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-select", 9)(33, "mat-option", 7);
    \u0275\u0275text(34, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-option", 7);
    \u0275\u0275text(36, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "mat-dialog-actions", 10)(38, "button", 11);
    \u0275\u0275listener("click", function UserDialogComponent_Template_button_click_38_listener() {
      return ctx.close();
    });
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(40, UserDialogComponent_Conditional_40_Template, 2, 2, "button", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.form.controls.fullName.hasError("required") && ctx.form.controls.fullName.touched ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.fullName.hasError("maxlength") ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.form.controls.email.hasError("required") && ctx.form.controls.email.touched ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.email.hasError("email") ? 15 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.data.departments);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.form.controls.departmentId.hasError("min") && ctx.form.controls.departmentId.touched ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx.roles);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.data.mode === "view" ? "Close" : "Cancel");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data.mode !== "view" ? 40 : -1);
  }
}, dependencies: [MatButtonModule, MatButton, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatError, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  margin: 0;\n  color: #26392d;\n  font: 600 19px/1.25 "Space Grotesk", sans-serif;\n}\n.form-content[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: min(440px, 100vw - 64px);\n  flex-direction: column;\n  gap: 7px;\n  padding-top: 14px;\n}\n.form-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 12px 24px 18px;\n}\n@media (max-width: 520px) {\n  .form-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  mat-dialog-actions[_ngcontent-%COMP%] {\n    padding-right: 16px;\n    padding-left: 16px;\n  }\n}\n/*# sourceMappingURL=user-dialog.component.css.map */'] });
var UserDialogComponent = _UserDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserDialogComponent, [{
    type: Component,
    args: [{ selector: "app-user-dialog", standalone: true, imports: [
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule
    ], template: `<h2 mat-dialog-title>{{ title }}</h2>\r
\r
<form [formGroup]="form" (ngSubmit)="save()">\r
  <mat-dialog-content class="form-content">\r
    <mat-form-field appearance="outline">\r
      <mat-label>Full Name</mat-label>\r
      <input matInput formControlName="fullName" maxlength="120" autocomplete="name">\r
      @if (form.controls.fullName.hasError('required') && form.controls.fullName.touched) {\r
        <mat-error>Full name is required.</mat-error>\r
      }\r
      @if (form.controls.fullName.hasError('maxlength')) {\r
        <mat-error>Use 120 characters or fewer.</mat-error>\r
      }\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Email</mat-label>\r
      <input matInput type="email" formControlName="email" maxlength="254" autocomplete="email">\r
      @if (form.controls.email.hasError('required') && form.controls.email.touched) {\r
        <mat-error>Email is required.</mat-error>\r
      }\r
      @if (form.controls.email.hasError('email')) {\r
        <mat-error>Enter a valid email address.</mat-error>\r
      }\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Department</mat-label>\r
      <mat-select formControlName="departmentId">\r
        @for (department of data.departments; track department.id) {\r
          <mat-option [value]="department.id">{{ department.name }}</mat-option>\r
        }\r
      </mat-select>\r
      @if (form.controls.departmentId.hasError('min') && form.controls.departmentId.touched) {\r
        <mat-error>Select a department.</mat-error>\r
      }\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Role</mat-label>\r
      <mat-select formControlName="role">\r
        @for (role of roles; track role) {\r
          <mat-option [value]="role">{{ role }}</mat-option>\r
        }\r
      </mat-select>\r
    </mat-form-field>\r
\r
    <mat-form-field appearance="outline">\r
      <mat-label>Status</mat-label>\r
      <mat-select formControlName="active">\r
        <mat-option [value]="true">Active</mat-option>\r
        <mat-option [value]="false">Inactive</mat-option>\r
      </mat-select>\r
    </mat-form-field>\r
  </mat-dialog-content>\r
\r
  <mat-dialog-actions align="end">\r
    <button mat-button type="button" (click)="close()">{{ data.mode === 'view' ? 'Close' : 'Cancel' }}</button>\r
    @if (data.mode !== 'view') {\r
      <button mat-flat-button color="primary" type="submit" [disabled]="form.invalid">\r
        {{ data.mode === 'create' ? 'Add User' : 'Save Changes' }}\r
      </button>\r
    }\r
  </mat-dialog-actions>\r
</form>`, styles: ['/* src/app/features/pages/user-list/user-dialog.component.scss */\n:host {\n  display: block;\n}\nh2[mat-dialog-title] {\n  margin: 0;\n  color: #26392d;\n  font: 600 19px/1.25 "Space Grotesk", sans-serif;\n}\n.form-content {\n  display: flex;\n  min-width: min(440px, 100vw - 64px);\n  flex-direction: column;\n  gap: 7px;\n  padding-top: 14px;\n}\n.form-content mat-form-field {\n  width: 100%;\n}\nmat-dialog-actions {\n  padding: 12px 24px 18px;\n}\n@media (max-width: 520px) {\n  .form-content {\n    min-width: 0;\n  }\n  mat-dialog-actions {\n    padding-right: 16px;\n    padding-left: 16px;\n  }\n}\n/*# sourceMappingURL=user-dialog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserDialogComponent, { className: "UserDialogComponent", filePath: "src/app/features/pages/user-list/user-dialog.component.ts", lineNumber: 34 });
})();

// src/app/features/pages/user-list/user-list.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function UserListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Preview data");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Changes are temporary and will not be sent to the server.");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1, "Department filter and form options are using the temporary department preview list.");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function UserListComponent_Conditional_15_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryUsers());
    });
    \u0275\u0275text(6, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function UserListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function UserListComponent_Conditional_24_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchControl.setValue(""));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r4 = ctx.$implicit;
    \u0275\u0275property("value", department_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(department_r4.name);
  }
}
function UserListComponent_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r5 = ctx.$implicit;
    \u0275\u0275property("value", role_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r5);
  }
}
function UserListComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 21);
  }
}
function UserListComponent_Conditional_53_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "User ID");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_Conditional_53_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r6.id);
  }
}
function UserListComponent_Conditional_53_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Full Name");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_Conditional_53_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44)(1, "span", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.fullName);
  }
}
function UserListComponent_Conditional_53_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_Conditional_53_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r8.email);
  }
}
function UserListComponent_Conditional_53_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_Conditional_53_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r9.departmentName || "Department unavailable");
  }
}
function UserListComponent_Conditional_53_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Role");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_Conditional_53_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44)(1, "span", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r10.role);
  }
}
function UserListComponent_Conditional_53_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function UserListComponent_Conditional_53_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44)(1, "mat-chip-set")(2, "mat-chip");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(user_r11.active ? "status-chip active" : "status-chip inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r11.active ? "Active" : "Inactive", " ");
  }
}
function UserListComponent_Conditional_53_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42)(1, "span", 48);
    \u0275\u0275text(2, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function UserListComponent_Conditional_53_td_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 49)(1, "button", 50);
    \u0275\u0275listener("click", function UserListComponent_Conditional_53_td_21_Template_button_click_1_listener() {
      const user_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openUserDialog("view", user_r13));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 51);
    \u0275\u0275listener("click", function UserListComponent_Conditional_53_td_21_Template_button_click_4_listener() {
      const user_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openUserDialog("edit", user_r13));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 52);
    \u0275\u0275listener("click", function UserListComponent_Conditional_53_td_21_Template_button_click_7_listener() {
      const user_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleUserStatus(user_r13));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "View " + user_r13.fullName);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275attribute("aria-label", "Edit " + user_r13.fullName);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275attribute("aria-label", (user_r13.active ? "Deactivate " : "Activate ") + user_r13.fullName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r13.active ? "person_off" : "person_check");
  }
}
function UserListComponent_Conditional_53_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function UserListComponent_Conditional_53_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function UserListComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 23);
    \u0275\u0275elementContainerStart(1, 28);
    \u0275\u0275template(2, UserListComponent_Conditional_53_th_2_Template, 2, 0, "th", 29)(3, UserListComponent_Conditional_53_td_3_Template, 2, 1, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 31);
    \u0275\u0275template(5, UserListComponent_Conditional_53_th_5_Template, 2, 0, "th", 29)(6, UserListComponent_Conditional_53_td_6_Template, 3, 1, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 33);
    \u0275\u0275template(8, UserListComponent_Conditional_53_th_8_Template, 2, 0, "th", 29)(9, UserListComponent_Conditional_53_td_9_Template, 2, 1, "td", 34);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 35);
    \u0275\u0275template(11, UserListComponent_Conditional_53_th_11_Template, 2, 0, "th", 29)(12, UserListComponent_Conditional_53_td_12_Template, 2, 1, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 36);
    \u0275\u0275template(14, UserListComponent_Conditional_53_th_14_Template, 2, 0, "th", 29)(15, UserListComponent_Conditional_53_td_15_Template, 3, 1, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 37);
    \u0275\u0275template(17, UserListComponent_Conditional_53_th_17_Template, 2, 0, "th", 29)(18, UserListComponent_Conditional_53_td_18_Template, 4, 3, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 38);
    \u0275\u0275template(20, UserListComponent_Conditional_53_th_20_Template, 3, 0, "th", 29)(21, UserListComponent_Conditional_53_td_21_Template, 10, 6, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(22, UserListComponent_Conditional_53_tr_22_Template, 1, 0, "tr", 40)(23, UserListComponent_Conditional_53_tr_23_Template, 1, 0, "tr", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(22);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
function UserListComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "search_off" : "group_off");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "No matching users" : "No users found");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "Try changing your search or filters." : "Users returned by your organization will appear here.");
  }
}
var _UserListComponent = class _UserListComponent {
  set paginator(paginator) {
    if (paginator)
      this.dataSource.paginator = paginator;
  }
  constructor() {
    this.userService = inject(UserService);
    this.userPreviewStore = inject(UserPreviewStore);
    this.departmentService = inject(DepartmentService);
    this.departmentPreviewStore = inject(DepartmentPreviewStore);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.dataSource = new MatTableDataSource([]);
    this.searchControl = new FormControl("", { nonNullable: true });
    this.roles = USER_ROLES;
    this.displayedColumns = ["id", "fullName", "email", "department", "role", "status", "actions"];
    this.pageSizeOptions = [5, 10, 20];
    this.departments = this.departmentPreviewStore.getAll();
    this.departmentFilter = "all";
    this.roleFilter = "all";
    this.statusFilter = "all";
    this.loading = true;
    this.saving = false;
    this.previewMode = false;
    this.departmentOptionsArePreview = true;
    this.errorMessage = "";
    this.dataSource.filterPredicate = (user, filter) => {
      const [search, departmentId, role, status] = filter.split("\0");
      const matchesSearch = `${user.fullName} ${user.email}`.toLocaleLowerCase().includes(search);
      const matchesDepartment = departmentId === "all" || user.departmentId === Number(departmentId);
      const matchesRole = role === "all" || user.role === role;
      const matchesStatus = status === "all" || (status === "active" ? user.active : !user.active);
      return matchesSearch && matchesDepartment && matchesRole && matchesStatus;
    };
  }
  ngOnInit() {
    this.searchControl.valueChanges.pipe(startWith(this.searchControl.value), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.applyFilters());
    this.loadDepartments();
    this.loadUsers();
  }
  ngAfterViewInit() {
    this.dataSource.paginator?.firstPage();
  }
  onDepartmentFilterChange(event) {
    this.departmentFilter = event.value;
    this.applyFilters();
  }
  onRoleFilterChange(event) {
    this.roleFilter = event.value;
    this.applyFilters();
  }
  onStatusFilterChange(event) {
    this.statusFilter = event.value;
    this.applyFilters();
  }
  retryUsers() {
    this.loadUsers();
  }
  openUserDialog(mode, user) {
    const data = { mode, user, departments: this.departments };
    this.dialog.open(UserDialogComponent, {
      width: "min(540px, calc(100vw - 32px))",
      maxWidth: "calc(100vw - 32px)",
      data,
      autoFocus: "first-tabbable"
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((payload) => {
      if (payload)
        this.saveUser(mode, user, payload);
    });
  }
  toggleUserStatus(user) {
    const payload = {
      fullName: user.fullName,
      email: user.email,
      departmentId: user.departmentId,
      role: user.role,
      active: !user.active
    };
    this.saveUser("edit", user, payload, true);
  }
  loadDepartments() {
    this.departmentService.getDepartments().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (departments) => {
        this.departments = departments;
        this.departmentOptionsArePreview = false;
        this.dataSource.data = this.dataSource.data.map((user) => this.withDepartmentName(user));
      },
      error: () => {
        this.departments = this.departmentPreviewStore.getAll();
        this.departmentOptionsArePreview = true;
        this.dataSource.data = this.dataSource.data.map((user) => this.withDepartmentName(user));
      }
    });
  }
  loadUsers() {
    this.loading = true;
    this.errorMessage = "";
    this.userService.getUsers().pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (users) => {
        this.previewMode = false;
        this.dataSource.data = users.map((user) => this.withDepartmentName(user));
      },
      error: () => {
        this.previewMode = true;
        this.dataSource.data = this.userPreviewStore.getAll();
        this.errorMessage = "The Users API is unavailable. Showing temporary preview data; changes will not be sent to the server.";
      }
    });
  }
  applyFilters() {
    this.dataSource.filter = [
      this.searchControl.value.trim().toLocaleLowerCase(),
      this.departmentFilter,
      this.roleFilter,
      this.statusFilter
    ].join("\0");
    this.dataSource.paginator?.firstPage();
  }
  saveUser(mode, user, payload, statusChange = false) {
    if (this.saving)
      return;
    if (this.previewMode) {
      const departmentName = this.departments.find((department) => department.id === payload.departmentId)?.name ?? "Department unavailable";
      const saved = mode === "create" ? this.userPreviewStore.create(payload, departmentName) : user ? this.userPreviewStore.update(user.id, payload, departmentName) : void 0;
      if (saved)
        this.upsertUser(saved);
      this.showMessage(statusChange ? `User ${payload.active ? "activated" : "deactivated"} in preview data.` : mode === "create" ? "User added to preview data." : "User updated in preview data.");
      return;
    }
    this.saving = true;
    const request = mode === "create" ? this.userService.createUser(payload) : user ? this.userService.updateUser(user.id, payload) : void 0;
    if (!request) {
      this.saving = false;
      this.showMessage("Unable to save this user.");
      return;
    }
    request.pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (savedUser) => {
        this.upsertUser(this.withDepartmentName(savedUser));
        this.showMessage(statusChange ? `User ${payload.active ? "activated" : "deactivated"}.` : mode === "create" ? "User added." : "User updated.");
      },
      error: () => this.showMessage("The user could not be saved. Please try again.")
    });
  }
  upsertUser(user) {
    const users = [...this.dataSource.data];
    const existingIndex = users.findIndex((item) => item.id === user.id);
    if (existingIndex === -1)
      users.unshift(user);
    else
      users[existingIndex] = user;
    this.dataSource.data = users;
    this.applyFilters();
  }
  withDepartmentName(user) {
    return __spreadProps(__spreadValues({}, user), {
      departmentName: user.departmentName ?? this.departments.find((department) => department.id === user.departmentId)?.name
    });
  }
  showMessage(message) {
    this.snackBar.open(message, "Dismiss", { duration: 3500 });
  }
};
_UserListComponent.\u0275fac = function UserListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _UserListComponent)();
};
_UserListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserListComponent, selectors: [["app-user-list"]], viewQuery: function UserListComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
  }
}, decls: 56, vars: 14, consts: [["aria-labelledby", "users-title", 1, "users-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "users-title"], [1, "description"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["role", "status", 1, "preview-notice"], [1, "source-note"], ["role", "alert", 1, "error-notice"], ["aria-label", "System users", 1, "users-panel"], [1, "filters"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Name or email", 3, "formControl"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search"], ["appearance", "outline"], [3, "selectionChange", "value"], ["value", "all"], [3, "value"], ["value", "active"], ["value", "inactive"], ["mode", "indeterminate", "aria-label", "Loading users"], [1, "table-wrap"], ["mat-table", "", 1, "users-table", 3, "dataSource"], [1, "empty-state"], ["aria-label", "Select user page", 3, "pageSize", "pageSizeOptions", "showFirstLastButtons"], ["mat-button", "", "type", "button", 3, "click", "disabled"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search", 3, "click"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "id-cell", 4, "matCellDef"], ["matColumnDef", "fullName"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "email"], ["mat-cell", "", "class", "email-cell", 4, "matCellDef"], ["matColumnDef", "department"], ["matColumnDef", "role"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "actions-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "id-cell"], ["mat-cell", ""], [1, "user-name"], ["mat-cell", "", 1, "email-cell"], [1, "role-label"], [1, "visually-hidden"], ["mat-cell", "", 1, "actions-cell"], ["mat-icon-button", "", "type", "button", "matTooltip", "View user", 3, "click"], ["mat-icon-button", "", "type", "button", "matTooltip", "Edit user", 3, "click", "disabled"], ["mat-icon-button", "", "type", "button", "matTooltip", "Toggle user status", 3, "click", "disabled"], ["mat-header-row", ""], ["mat-row", ""]], template: function UserListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "ACCESS MANAGEMENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, "Manage system users and their access.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function UserListComponent_Template_button_click_9_listener() {
      return ctx.openUserDialog("create");
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Add User ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, UserListComponent_Conditional_13_Template, 7, 0, "div", 6);
    \u0275\u0275conditionalCreate(14, UserListComponent_Conditional_14_Template, 2, 0, "p", 7);
    \u0275\u0275conditionalCreate(15, UserListComponent_Conditional_15_Template, 7, 2, "div", 8);
    \u0275\u0275elementStart(16, "section", 9)(17, "div", 10)(18, "mat-form-field", 11)(19, "mat-label");
    \u0275\u0275text(20, "Search by name or email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-icon", 12);
    \u0275\u0275text(22, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 13);
    \u0275\u0275conditionalCreate(24, UserListComponent_Conditional_24_Template, 3, 0, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 15)(26, "mat-label");
    \u0275\u0275text(27, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-select", 16);
    \u0275\u0275listener("selectionChange", function UserListComponent_Template_mat_select_selectionChange_28_listener($event) {
      return ctx.onDepartmentFilterChange($event);
    });
    \u0275\u0275elementStart(29, "mat-option", 17);
    \u0275\u0275text(30, "All departments");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, UserListComponent_For_32_Template, 2, 2, "mat-option", 18, _forTrack02);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "mat-form-field", 15)(34, "mat-label");
    \u0275\u0275text(35, "Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-select", 16);
    \u0275\u0275listener("selectionChange", function UserListComponent_Template_mat_select_selectionChange_36_listener($event) {
      return ctx.onRoleFilterChange($event);
    });
    \u0275\u0275elementStart(37, "mat-option", 17);
    \u0275\u0275text(38, "All roles");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(39, UserListComponent_For_40_Template, 2, 2, "mat-option", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "mat-form-field", 15)(42, "mat-label");
    \u0275\u0275text(43, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "mat-select", 16);
    \u0275\u0275listener("selectionChange", function UserListComponent_Template_mat_select_selectionChange_44_listener($event) {
      return ctx.onStatusFilterChange($event);
    });
    \u0275\u0275elementStart(45, "mat-option", 17);
    \u0275\u0275text(46, "All statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-option", 19);
    \u0275\u0275text(48, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "mat-option", 20);
    \u0275\u0275text(50, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(51, UserListComponent_Conditional_51_Template, 1, 0, "mat-progress-bar", 21);
    \u0275\u0275elementStart(52, "div", 22);
    \u0275\u0275conditionalCreate(53, UserListComponent_Conditional_53_Template, 24, 3, "table", 23)(54, UserListComponent_Conditional_54_Template, 7, 3, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275element(55, "mat-paginator", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx.saving || ctx.departments.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.previewMode ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.departmentOptionsArePreview ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.errorMessage ? 15 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("formControl", ctx.searchControl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.searchControl.value ? 24 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.departmentFilter);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.departments);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx.roleFilter);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.roles);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx.statusFilter);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.loading ? 51 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.dataSource.filteredData.length > 0 ? 53 : !ctx.loading ? 54 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSize", 10)("pageSizeOptions", ctx.pageSizeOptions)("showFirstLastButtons", true);
  }
}, dependencies: [
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatChipsModule,
  MatChip,
  MatChipSet,
  MatDialogModule,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix,
  MatIconModule,
  MatIcon,
  MatInputModule,
  MatInput,
  MatPaginatorModule,
  MatPaginator,
  MatProgressBarModule,
  MatProgressBar,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatSnackBarModule,
  MatTableModule,
  MatTable,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRow,
  MatRow,
  MatTooltipModule,
  MatTooltip,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  FormControlDirective
], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.users-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_arrive 280ms ease-out both;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 4px 0 5px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.page-heading[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  min-height: 38px;\n  flex: 0 0 auto;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.page-heading[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n  font-size: 18px;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 13px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.preview-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.source-note[_ngcontent-%COMP%] {\n  margin: -9px 0 0;\n  color: #8a958d;\n  font-size: 10px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b86156;\n}\n.error-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.error-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #8b4d46;\n  font-size: 11px;\n}\n.users-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(220px, 1.6fr) repeat(3, minmax(145px, 1fr));\n  align-items: center;\n  gap: 10px;\n  padding: 17px 18px 4px;\n}\n.filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: -1.25em;\n}\n.filters[_ngcontent-%COMP%]   mat-icon[matPrefix][_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #839087;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-x: auto;\n}\n.users-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 920px;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 42px;\n  color: #748078;\n  background: #f8faf7;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 58px;\n  color: #536259;\n  font-size: 11px;\n}\n.users-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.users-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.id-cell[_ngcontent-%COMP%] {\n  color: #59705f !important;\n  font-variant-numeric: tabular-nums;\n}\n.user-name[_ngcontent-%COMP%] {\n  color: #304238;\n  font-size: 11px;\n  font-weight: 600;\n}\n.email-cell[_ngcontent-%COMP%] {\n  color: #68766d !important;\n}\n.role-label[_ngcontent-%COMP%] {\n  color: #455c4b;\n  font-size: 10px;\n  font-weight: 600;\n}\n.status-chip[_ngcontent-%COMP%] {\n  min-height: 23px;\n  border-radius: 4px !important;\n  font-size: 9px;\n  font-weight: 700;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.status-chip.inactive[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #f0f1ef;\n  --mdc-chip-label-text-color: #667168;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: #75837a;\n}\n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 190px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  margin-bottom: 9px;\n  color: #89a47c;\n  font-size: 26px;\n}\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #35483b;\n  font-size: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 11px;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  border-top: 1px solid #edf1ed;\n  background: #fff;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(7px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .users-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 1100px) {\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 700px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 15px;\n  }\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 8px;\n    padding: 16px 14px 5px;\n  }\n  .users-table[_ngcontent-%COMP%] {\n    min-width: 900px;\n  }\n}\n@media (max-width: 480px) {\n  .users-page[_ngcontent-%COMP%] {\n    gap: 13px;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n  .error-notice[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .error-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    min-width: calc(100% - 40px);\n  }\n}\n/*# sourceMappingURL=user-list.component.css.map */'] });
var UserListComponent = _UserListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserListComponent, [{
    type: Component,
    args: [{ selector: "app-user-list", standalone: true, imports: [
      MatButtonModule,
      MatChipsModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatSelectModule,
      MatSnackBarModule,
      MatTableModule,
      MatTooltipModule,
      ReactiveFormsModule
    ], template: `<section class="users-page" aria-labelledby="users-title">\r
  <header class="page-heading">\r
    <div>\r
      <p class="eyebrow">ACCESS MANAGEMENT</p>\r
      <h1 id="users-title">Users</h1>\r
      <p class="description">Manage system users and their access.</p>\r
    </div>\r
    <button mat-flat-button color="primary" type="button" (click)="openUserDialog('create')" [disabled]="saving || departments.length === 0">\r
      <mat-icon>person_add</mat-icon>\r
      Add User\r
    </button>\r
  </header>\r
\r
  @if (previewMode) {\r
    <div class="preview-notice" role="status">\r
      <mat-icon>info</mat-icon>\r
      <span><strong>Preview data</strong> Changes are temporary and will not be sent to the server.</span>\r
    </div>\r
  }\r
\r
  @if (departmentOptionsArePreview) {\r
    <p class="source-note">Department filter and form options are using the temporary department preview list.</p>\r
  }\r
\r
  @if (errorMessage) {\r
    <div class="error-notice" role="alert">\r
      <mat-icon>cloud_off</mat-icon>\r
      <span>{{ errorMessage }}</span>\r
      <button mat-button type="button" (click)="retryUsers()" [disabled]="loading">Retry</button>\r
    </div>\r
  }\r
\r
  <section class="users-panel" aria-label="System users">\r
    <div class="filters">\r
      <mat-form-field appearance="outline" class="search-field">\r
        <mat-label>Search by name or email</mat-label>\r
        <mat-icon matPrefix>search</mat-icon>\r
        <input matInput [formControl]="searchControl" placeholder="Name or email">\r
        @if (searchControl.value) {\r
          <button mat-icon-button matSuffix type="button" aria-label="Clear search" (click)="searchControl.setValue('')">\r
            <mat-icon>close</mat-icon>\r
          </button>\r
        }\r
      </mat-form-field>\r
\r
      <mat-form-field appearance="outline">\r
        <mat-label>Department</mat-label>\r
        <mat-select [value]="departmentFilter" (selectionChange)="onDepartmentFilterChange($event)">\r
          <mat-option value="all">All departments</mat-option>\r
          @for (department of departments; track department.id) {\r
            <mat-option [value]="department.id">{{ department.name }}</mat-option>\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
\r
      <mat-form-field appearance="outline">\r
        <mat-label>Role</mat-label>\r
        <mat-select [value]="roleFilter" (selectionChange)="onRoleFilterChange($event)">\r
          <mat-option value="all">All roles</mat-option>\r
          @for (role of roles; track role) {\r
            <mat-option [value]="role">{{ role }}</mat-option>\r
          }\r
        </mat-select>\r
      </mat-form-field>\r
\r
      <mat-form-field appearance="outline">\r
        <mat-label>Status</mat-label>\r
        <mat-select [value]="statusFilter" (selectionChange)="onStatusFilterChange($event)">\r
          <mat-option value="all">All statuses</mat-option>\r
          <mat-option value="active">Active</mat-option>\r
          <mat-option value="inactive">Inactive</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
    </div>\r
\r
    @if (loading) {\r
      <mat-progress-bar mode="indeterminate" aria-label="Loading users"></mat-progress-bar>\r
    }\r
\r
    <div class="table-wrap">\r
      @if (dataSource.filteredData.length > 0) {\r
        <table mat-table [dataSource]="dataSource" class="users-table">\r
          <ng-container matColumnDef="id">\r
            <th mat-header-cell *matHeaderCellDef>User ID</th>\r
            <td mat-cell *matCellDef="let user" class="id-cell">{{ user.id }}</td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="fullName">\r
            <th mat-header-cell *matHeaderCellDef>Full Name</th>\r
            <td mat-cell *matCellDef="let user">\r
              <span class="user-name">{{ user.fullName }}</span>\r
            </td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="email">\r
            <th mat-header-cell *matHeaderCellDef>Email</th>\r
            <td mat-cell *matCellDef="let user" class="email-cell">{{ user.email }}</td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="department">\r
            <th mat-header-cell *matHeaderCellDef>Department</th>\r
            <td mat-cell *matCellDef="let user">{{ user.departmentName || 'Department unavailable' }}</td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="role">\r
            <th mat-header-cell *matHeaderCellDef>Role</th>\r
            <td mat-cell *matCellDef="let user"><span class="role-label">{{ user.role }}</span></td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="status">\r
            <th mat-header-cell *matHeaderCellDef>Status</th>\r
            <td mat-cell *matCellDef="let user">\r
              <mat-chip-set>\r
                <mat-chip [class]="user.active ? 'status-chip active' : 'status-chip inactive'">\r
                  {{ user.active ? 'Active' : 'Inactive' }}\r
                </mat-chip>\r
              </mat-chip-set>\r
            </td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="actions">\r
            <th mat-header-cell *matHeaderCellDef><span class="visually-hidden">Actions</span></th>\r
            <td mat-cell *matCellDef="let user" class="actions-cell">\r
              <button mat-icon-button type="button" matTooltip="View user" [attr.aria-label]="'View ' + user.fullName" (click)="openUserDialog('view', user)">\r
                <mat-icon>visibility</mat-icon>\r
              </button>\r
              <button mat-icon-button type="button" matTooltip="Edit user" [attr.aria-label]="'Edit ' + user.fullName" (click)="openUserDialog('edit', user)" [disabled]="saving">\r
                <mat-icon>edit</mat-icon>\r
              </button>\r
              <button mat-icon-button type="button" matTooltip="Toggle user status" [attr.aria-label]="(user.active ? 'Deactivate ' : 'Activate ') + user.fullName" (click)="toggleUserStatus(user)" [disabled]="saving">\r
                <mat-icon>{{ user.active ? 'person_off' : 'person_check' }}</mat-icon>\r
              </button>\r
            </td>\r
          </ng-container>\r
\r
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
        </table>\r
      } @else if (!loading) {\r
        <div class="empty-state">\r
          <mat-icon>{{ dataSource.data.length ? 'search_off' : 'group_off' }}</mat-icon>\r
          <strong>{{ dataSource.data.length ? 'No matching users' : 'No users found' }}</strong>\r
          <span>{{ dataSource.data.length ? 'Try changing your search or filters.' : 'Users returned by your organization will appear here.' }}</span>\r
        </div>\r
      }\r
    </div>\r
\r
    <mat-paginator [pageSize]="10" [pageSizeOptions]="pageSizeOptions" [showFirstLastButtons]="true" aria-label="Select user page"></mat-paginator>\r
  </section>\r
</section>`, styles: ['/* src/app/features/pages/user-list/user-list.component.scss */\n:host {\n  display: block;\n}\n.users-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: arrive 280ms ease-out both;\n}\n.page-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 4px 0 5px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.page-heading > button {\n  min-height: 38px;\n  flex: 0 0 auto;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.page-heading > button mat-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n  font-size: 18px;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 13px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.preview-notice {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.preview-notice strong {\n  margin-right: 4px;\n}\n.source-note {\n  margin: -9px 0 0;\n  color: #8a958d;\n  font-size: 10px;\n}\n.error-notice {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice mat-icon {\n  color: #b86156;\n}\n.error-notice span {\n  flex: 1;\n}\n.error-notice button {\n  flex: 0 0 auto;\n  color: #8b4d46;\n  font-size: 11px;\n}\n.users-panel {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.filters {\n  display: grid;\n  grid-template-columns: minmax(220px, 1.6fr) repeat(3, minmax(145px, 1fr));\n  align-items: center;\n  gap: 10px;\n  padding: 17px 18px 4px;\n}\n.filters mat-form-field {\n  width: 100%;\n  margin-bottom: -1.25em;\n}\n.filters mat-icon[matPrefix] {\n  margin-right: 8px;\n  color: #839087;\n}\n.table-wrap {\n  min-width: 0;\n  overflow-x: auto;\n}\n.users-table {\n  width: 100%;\n  min-width: 920px;\n}\n.users-table th {\n  height: 42px;\n  color: #748078;\n  background: #f8faf7;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.users-table td {\n  height: 58px;\n  color: #536259;\n  font-size: 11px;\n}\n.users-table th:first-child,\n.users-table td:first-child {\n  padding-left: 20px;\n}\n.id-cell {\n  color: #59705f !important;\n  font-variant-numeric: tabular-nums;\n}\n.user-name {\n  color: #304238;\n  font-size: 11px;\n  font-weight: 600;\n}\n.email-cell {\n  color: #68766d !important;\n}\n.role-label {\n  color: #455c4b;\n  font-size: 10px;\n  font-weight: 600;\n}\n.status-chip {\n  min-height: 23px;\n  border-radius: 4px !important;\n  font-size: 9px;\n  font-weight: 700;\n}\n.status-chip.active {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.status-chip.inactive {\n  --mdc-chip-elevated-container-color: #f0f1ef;\n  --mdc-chip-label-text-color: #667168;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.actions-cell button {\n  width: 32px;\n  height: 32px;\n  color: #75837a;\n}\n.actions-cell button mat-icon {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.empty-state {\n  display: flex;\n  min-height: 190px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.empty-state mat-icon {\n  width: 26px;\n  height: 26px;\n  margin-bottom: 9px;\n  color: #89a47c;\n  font-size: 26px;\n}\n.empty-state strong {\n  color: #35483b;\n  font-size: 12px;\n}\n.empty-state span {\n  margin-top: 5px;\n  font-size: 11px;\n}\nmat-paginator {\n  border-top: 1px solid #edf1ed;\n  background: #fff;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(7px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .users-page {\n    animation: none;\n  }\n}\n@media (max-width: 1100px) {\n  .filters {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 700px) {\n  .page-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 15px;\n  }\n  .filters {\n    grid-template-columns: 1fr;\n    gap: 8px;\n    padding: 16px 14px 5px;\n  }\n  .users-table {\n    min-width: 900px;\n  }\n}\n@media (max-width: 480px) {\n  .users-page {\n    gap: 13px;\n  }\n  h1 {\n    font-size: 27px;\n  }\n  .error-notice {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .error-notice span {\n    min-width: calc(100% - 40px);\n  }\n}\n/*# sourceMappingURL=user-list.component.css.map */\n'] }]
  }], () => [], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserListComponent, { className: "UserListComponent", filePath: "src/app/features/pages/user-list/user-list.component.ts", lineNumber: 51 });
})();
export {
  UserListComponent
};
//# sourceMappingURL=chunk-LZOKYFCB.js.map
