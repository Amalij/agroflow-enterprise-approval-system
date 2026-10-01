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
  DatePipe
} from "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
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
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/department-list/department-dialog.component.ts
function DepartmentDialogComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-dialog-content")(1, "p", 2);
    \u0275\u0275text(2, "Delete ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, "? This action cannot be undone.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-dialog-actions", 3)(7, "button", 4);
    \u0275\u0275listener("click", function DepartmentDialogComponent_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(8, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function DepartmentDialogComponent_Conditional_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmDelete());
    });
    \u0275\u0275text(10, "Delete Department");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.data.department == null ? null : ctx_r1.data.department.name);
  }
}
function DepartmentDialogComponent_Conditional_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Department name is required.");
    \u0275\u0275elementEnd();
  }
}
function DepartmentDialogComponent_Conditional_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Use 120 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function DepartmentDialogComponent_Conditional_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Use 500 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
function DepartmentDialogComponent_Conditional_3_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.data.mode === "create" ? "Add Department" : "Save Changes", " ");
  }
}
function DepartmentDialogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 6);
    \u0275\u0275listener("ngSubmit", function DepartmentDialogComponent_Conditional_3_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(1, "mat-dialog-content", 7)(2, "mat-form-field", 8)(3, "mat-label");
    \u0275\u0275text(4, "Department Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 9);
    \u0275\u0275conditionalCreate(6, DepartmentDialogComponent_Conditional_3_Conditional_6_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(7, DepartmentDialogComponent_Conditional_3_Conditional_7_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 8)(9, "mat-label");
    \u0275\u0275text(10, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "textarea", 10);
    \u0275\u0275conditionalCreate(12, DepartmentDialogComponent_Conditional_3_Conditional_12_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 8)(14, "mat-label");
    \u0275\u0275text(15, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-select", 11)(17, "mat-option", 12);
    \u0275\u0275text(18, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-option", 12);
    \u0275\u0275text(20, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(21, "mat-dialog-actions", 3)(22, "button", 4);
    \u0275\u0275listener("click", function DepartmentDialogComponent_Conditional_3_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close());
    });
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, DepartmentDialogComponent_Conditional_3_Conditional_24_Template, 2, 2, "button", 13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.form.controls.name.hasError("required") && ctx_r1.form.controls.name.touched ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.controls.name.hasError("maxlength") ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.description.hasError("maxlength") ? 12 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.data.mode === "view" ? "Close" : "Cancel");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.data.mode !== "view" ? 24 : -1);
  }
}
var _DepartmentDialogComponent = class _DepartmentDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef);
    this.form = new FormGroup({
      name: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.maxLength(120)] }),
      description: new FormControl("", { nonNullable: true, validators: [Validators.maxLength(500)] }),
      active: new FormControl(true, { nonNullable: true })
    });
  }
  get title() {
    switch (this.data.mode) {
      case "create":
        return "Add Department";
      case "edit":
        return "Edit Department";
      case "delete":
        return "Delete Department";
      default:
        return "Department Details";
    }
  }
  ngOnInit() {
    const department = this.data.department;
    if (department) {
      this.form.setValue({
        name: department.name,
        description: department.description ?? "",
        active: department.active
      });
    }
    if (this.data.mode === "view")
      this.form.disable();
  }
  save() {
    if (this.form.invalid || this.data.mode === "view")
      return;
    this.dialogRef.close({ action: "save", department: this.form.getRawValue() });
  }
  confirmDelete() {
    this.dialogRef.close({ action: "delete" });
  }
  close() {
    this.dialogRef.close();
  }
};
_DepartmentDialogComponent.\u0275fac = function DepartmentDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepartmentDialogComponent)();
};
_DepartmentDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentDialogComponent, selectors: [["app-department-dialog"]], decls: 4, vars: 2, consts: [["mat-dialog-title", ""], [3, "formGroup"], [1, "delete-copy"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"], [3, "ngSubmit", "formGroup"], [1, "form-content"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "maxlength", "120", "placeholder", "e.g. Operations"], ["matInput", "", "formControlName", "description", "rows", "3", "maxlength", "500", "placeholder", "Describe the department's responsibilities"], ["formControlName", "active"], [3, "value"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"]], template: function DepartmentDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, DepartmentDialogComponent_Conditional_2_Template, 11, 1)(3, DepartmentDialogComponent_Conditional_3_Template, 25, 8, "form", 1);
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.data.mode === "delete" ? 2 : 3);
  }
}, dependencies: [MatButtonModule, MatButton, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatError, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  margin: 0;\n  color: #26392d;\n  font: 600 19px/1.25 "Space Grotesk", sans-serif;\n}\n.form-content[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: min(440px, 100vw - 64px);\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 14px;\n}\n.form-content[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.delete-copy[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #66756a;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.delete-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #293a30;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 12px 24px 18px;\n}\n@media (max-width: 520px) {\n  .form-content[_ngcontent-%COMP%] {\n    min-width: 0;\n  }\n  mat-dialog-actions[_ngcontent-%COMP%] {\n    padding-right: 16px;\n    padding-left: 16px;\n  }\n}\n/*# sourceMappingURL=department-dialog.component.css.map */'] });
var DepartmentDialogComponent = _DepartmentDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentDialogComponent, [{
    type: Component,
    args: [{ selector: "app-department-dialog", standalone: true, imports: [
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      ReactiveFormsModule
    ], template: `<h2 mat-dialog-title>{{ title }}</h2>\r
\r
@if (data.mode === 'delete') {\r
  <mat-dialog-content>\r
    <p class="delete-copy">Delete <strong>{{ data.department?.name }}</strong>? This action cannot be undone.</p>\r
  </mat-dialog-content>\r
  <mat-dialog-actions align="end">\r
    <button mat-button type="button" (click)="close()">Cancel</button>\r
    <button mat-flat-button color="warn" type="button" (click)="confirmDelete()">Delete Department</button>\r
  </mat-dialog-actions>\r
} @else {\r
  <form [formGroup]="form" (ngSubmit)="save()">\r
    <mat-dialog-content class="form-content">\r
      <mat-form-field appearance="outline">\r
        <mat-label>Department Name</mat-label>\r
        <input matInput formControlName="name" maxlength="120" placeholder="e.g. Operations">\r
        @if (form.controls.name.hasError('required') && form.controls.name.touched) {\r
          <mat-error>Department name is required.</mat-error>\r
        }\r
        @if (form.controls.name.hasError('maxlength')) {\r
          <mat-error>Use 120 characters or fewer.</mat-error>\r
        }\r
      </mat-form-field>\r
\r
      <mat-form-field appearance="outline">\r
        <mat-label>Description</mat-label>\r
        <textarea matInput formControlName="description" rows="3" maxlength="500" placeholder="Describe the department's responsibilities"></textarea>\r
        @if (form.controls.description.hasError('maxlength')) {\r
          <mat-error>Use 500 characters or fewer.</mat-error>\r
        }\r
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
          {{ data.mode === 'create' ? 'Add Department' : 'Save Changes' }}\r
        </button>\r
      }\r
    </mat-dialog-actions>\r
  </form>\r
}`, styles: ['/* src/app/features/pages/department-list/department-dialog.component.scss */\n:host {\n  display: block;\n}\nh2[mat-dialog-title] {\n  margin: 0;\n  color: #26392d;\n  font: 600 19px/1.25 "Space Grotesk", sans-serif;\n}\n.form-content {\n  display: flex;\n  min-width: min(440px, 100vw - 64px);\n  flex-direction: column;\n  gap: 8px;\n  padding-top: 14px;\n}\n.form-content mat-form-field {\n  width: 100%;\n}\n.delete-copy {\n  margin: 8px 0;\n  color: #66756a;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.delete-copy strong {\n  color: #293a30;\n}\nmat-dialog-actions {\n  padding: 12px 24px 18px;\n}\n@media (max-width: 520px) {\n  .form-content {\n    min-width: 0;\n  }\n  mat-dialog-actions {\n    padding-right: 16px;\n    padding-left: 16px;\n  }\n}\n/*# sourceMappingURL=department-dialog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentDialogComponent, { className: "DepartmentDialogComponent", filePath: "src/app/features/pages/department-list/department-dialog.component.ts", lineNumber: 36 });
})();

// src/app/features/pages/department-list/department-list.component.ts
function DepartmentListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Preview data");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Changes are temporary and will not be saved to the server.");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon");
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function DepartmentListComponent_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retryDepartments());
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
function DepartmentListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function DepartmentListComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.searchControl.setValue(""));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 19);
  }
}
function DepartmentListComponent_Conditional_36_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Department ID");
    \u0275\u0275elementEnd();
  }
}
function DepartmentListComponent_Conditional_36_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(department_r4.id);
  }
}
function DepartmentListComponent_Conditional_36_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Department Name");
    \u0275\u0275elementEnd();
  }
}
function DepartmentListComponent_Conditional_36_td_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(department_r5.code);
  }
}
function DepartmentListComponent_Conditional_36_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "span", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DepartmentListComponent_Conditional_36_td_6_Conditional_3_Template, 2, 1, "span", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(department_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(department_r5.code ? 3 : -1);
  }
}
function DepartmentListComponent_Conditional_36_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function DepartmentListComponent_Conditional_36_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", department_r6.description || "No description provided", " ");
  }
}
function DepartmentListComponent_Conditional_36_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function DepartmentListComponent_Conditional_36_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "mat-chip-set")(2, "mat-chip");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const department_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap(department_r7.active ? "status-chip active" : "status-chip inactive");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", department_r7.active ? "Active" : "Inactive", " ");
  }
}
function DepartmentListComponent_Conditional_36_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Created Date");
    \u0275\u0275elementEnd();
  }
}
function DepartmentListComponent_Conditional_36_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", department_r8.createdAt ? \u0275\u0275pipeBind2(2, 1, department_r8.createdAt, "mediumDate") : "\u2014", " ");
  }
}
function DepartmentListComponent_Conditional_36_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39)(1, "span", 45);
    \u0275\u0275text(2, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function DepartmentListComponent_Conditional_36_td_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 46)(1, "button", 47);
    \u0275\u0275listener("click", function DepartmentListComponent_Conditional_36_td_18_Template_button_click_1_listener() {
      const department_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDialog("view", department_r10));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 48);
    \u0275\u0275listener("click", function DepartmentListComponent_Conditional_36_td_18_Template_button_click_4_listener() {
      const department_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDialog("edit", department_r10));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 49);
    \u0275\u0275listener("click", function DepartmentListComponent_Conditional_36_td_18_Template_button_click_7_listener() {
      const department_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openDialog("delete", department_r10));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const department_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "View " + department_r10.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275attribute("aria-label", "Edit " + department_r10.name);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275attribute("aria-label", "Delete " + department_r10.name);
  }
}
function DepartmentListComponent_Conditional_36_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 50);
  }
}
function DepartmentListComponent_Conditional_36_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 51);
  }
}
function DepartmentListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 21);
    \u0275\u0275elementContainerStart(1, 26);
    \u0275\u0275template(2, DepartmentListComponent_Conditional_36_th_2_Template, 2, 0, "th", 27)(3, DepartmentListComponent_Conditional_36_td_3_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 29);
    \u0275\u0275template(5, DepartmentListComponent_Conditional_36_th_5_Template, 2, 0, "th", 27)(6, DepartmentListComponent_Conditional_36_td_6_Template, 4, 2, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 31);
    \u0275\u0275template(8, DepartmentListComponent_Conditional_36_th_8_Template, 2, 0, "th", 27)(9, DepartmentListComponent_Conditional_36_td_9_Template, 2, 1, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 33);
    \u0275\u0275template(11, DepartmentListComponent_Conditional_36_th_11_Template, 2, 0, "th", 27)(12, DepartmentListComponent_Conditional_36_td_12_Template, 4, 3, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 34);
    \u0275\u0275template(14, DepartmentListComponent_Conditional_36_th_14_Template, 2, 0, "th", 27)(15, DepartmentListComponent_Conditional_36_td_15_Template, 3, 4, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 35);
    \u0275\u0275template(17, DepartmentListComponent_Conditional_36_th_17_Template, 3, 0, "th", 27)(18, DepartmentListComponent_Conditional_36_td_18_Template, 10, 5, "td", 36);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(19, DepartmentListComponent_Conditional_36_tr_19_Template, 1, 0, "tr", 37)(20, DepartmentListComponent_Conditional_36_tr_20_Template, 1, 0, "tr", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
function DepartmentListComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-icon");
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
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "search_off" : "corporate_fare");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "No matching departments" : "No departments found");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "Try changing your search or status filter." : "Departments from your organization will appear here.");
  }
}
var _DepartmentListComponent = class _DepartmentListComponent {
  set paginator(paginator) {
    if (paginator)
      this.dataSource.paginator = paginator;
  }
  constructor() {
    this.departmentService = inject(DepartmentService);
    this.previewStore = inject(DepartmentPreviewStore);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.dataSource = new MatTableDataSource([]);
    this.searchControl = new FormControl("", { nonNullable: true });
    this.displayedColumns = ["id", "name", "description", "status", "createdAt", "actions"];
    this.pageSizeOptions = [5, 10, 20];
    this.statusFilter = "all";
    this.loading = true;
    this.saving = false;
    this.previewMode = false;
    this.errorMessage = "";
    this.dataSource.filterPredicate = (department, filter) => {
      const [search, status] = filter.split("\0");
      const searchText = [department.id, department.code, department.name, department.description].filter((value) => value !== void 0).join(" ").toLocaleLowerCase();
      const matchesSearch = searchText.includes(search);
      const matchesStatus = status === "all" || (status === "active" ? department.active : !department.active);
      return matchesSearch && matchesStatus;
    };
  }
  ngOnInit() {
    this.searchControl.valueChanges.pipe(startWith(this.searchControl.value), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.applyFilters());
    this.loadDepartments();
  }
  ngAfterViewInit() {
    this.dataSource.paginator?.firstPage();
  }
  onStatusFilterChange(event) {
    this.statusFilter = event.value;
    this.applyFilters();
  }
  retryDepartments() {
    this.loadDepartments();
  }
  openDialog(mode, department) {
    const data = { mode, department };
    this.dialog.open(DepartmentDialogComponent, {
      width: "min(520px, calc(100vw - 32px))",
      maxWidth: "calc(100vw - 32px)",
      data,
      autoFocus: mode === "delete" ? false : "first-tabbable"
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((result) => {
      if (!result)
        return;
      if (result.action === "delete" && department)
        this.deleteDepartment(department);
      if (result.action === "save")
        this.saveDepartment(mode, department, result.department);
    });
  }
  loadDepartments() {
    this.loading = true;
    this.errorMessage = "";
    this.departmentService.getDepartments().pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (data) => {
        this.previewMode = false;
        this.dataSource.data = data;
      },
      error: () => {
        this.previewMode = true;
        this.dataSource.data = this.previewStore.getAll();
        this.errorMessage = "The Departments API is unavailable. Showing temporary preview data; changes will stay in this browser session.";
      }
    });
  }
  applyFilters() {
    this.dataSource.filter = `${this.searchControl.value.trim().toLocaleLowerCase()}\0${this.statusFilter}`;
    this.dataSource.paginator?.firstPage();
  }
  saveDepartment(mode, department, payload) {
    if (this.saving)
      return;
    if (this.previewMode) {
      const updated = mode === "create" ? this.previewStore.create(payload) : department ? this.previewStore.update(department.id, payload) : void 0;
      if (updated)
        this.upsertDepartment(updated);
      this.showMessage(mode === "create" ? "Department added to preview data." : "Department updated in preview data.");
      return;
    }
    this.saving = true;
    const request = mode === "create" ? this.departmentService.createDepartment(payload) : department ? this.departmentService.updateDepartment(department.id, payload) : void 0;
    if (!request) {
      this.saving = false;
      this.showMessage("Unable to save this department.");
      return;
    }
    request.pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (savedDepartment) => {
        this.upsertDepartment(savedDepartment);
        this.showMessage(mode === "create" ? "Department added." : "Department updated.");
      },
      error: () => this.showMessage("The department could not be saved. Please try again.")
    });
  }
  deleteDepartment(department) {
    if (this.saving)
      return;
    if (this.previewMode) {
      if (this.previewStore.delete(department.id)) {
        this.dataSource.data = this.previewStore.getAll();
        this.showMessage("Department removed from preview data.");
      }
      return;
    }
    this.saving = true;
    this.departmentService.deleteDepartment(department.id).pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.dataSource.data = this.dataSource.data.filter((item) => item.id !== department.id);
        this.showMessage("Department deleted.");
      },
      error: () => this.showMessage("The department could not be deleted. Please try again.")
    });
  }
  upsertDepartment(department) {
    const existingIndex = this.dataSource.data.findIndex((item) => item.id === department.id);
    const departments = [...this.dataSource.data];
    if (existingIndex === -1)
      departments.unshift(department);
    else
      departments[existingIndex] = department;
    this.dataSource.data = departments;
    this.applyFilters();
  }
  showMessage(message) {
    this.snackBar.open(message, "Dismiss", { duration: 3500 });
  }
};
_DepartmentListComponent.\u0275fac = function DepartmentListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepartmentListComponent)();
};
_DepartmentListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DepartmentListComponent, selectors: [["app-department-list"]], viewQuery: function DepartmentListComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
  }
}, decls: 39, vars: 11, consts: [["aria-labelledby", "departments-title", 1, "department-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "departments-title"], [1, "description"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["role", "status", 1, "preview-notice"], ["role", "alert", 1, "error-notice"], ["aria-label", "Department list", 1, "department-panel"], [1, "toolbar"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Name, ID, code, or description", 3, "formControl"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search"], ["appearance", "outline", 1, "status-field"], [3, "selectionChange", "value"], ["value", "all"], ["value", "active"], ["value", "inactive"], ["mode", "indeterminate", "aria-label", "Loading departments"], [1, "table-wrap"], ["mat-table", "", 1, "department-table", 3, "dataSource"], [1, "empty-state"], ["aria-label", "Select department page", 3, "pageSize", "pageSizeOptions", "showFirstLastButtons"], ["mat-button", "", "type", "button", 3, "click", "disabled"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search", 3, "click"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "id-cell", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-cell", "", "class", "description-cell", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "createdAt"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "actions-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "id-cell"], ["mat-cell", ""], [1, "department-name"], [1, "department-code"], ["mat-cell", "", 1, "description-cell"], [1, "visually-hidden"], ["mat-cell", "", 1, "actions-cell"], ["mat-icon-button", "", "type", "button", "matTooltip", "View department", 3, "click"], ["mat-icon-button", "", "type", "button", "matTooltip", "Edit department", 3, "click", "disabled"], ["mat-icon-button", "", "type", "button", "matTooltip", "Delete department", 1, "delete-action", 3, "click", "disabled"], ["mat-header-row", ""], ["mat-row", ""]], template: function DepartmentListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "ORGANIZATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "Departments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, "Manage organizational departments.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function DepartmentListComponent_Template_button_click_9_listener() {
      return ctx.openDialog("create");
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Add Department ");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, DepartmentListComponent_Conditional_13_Template, 7, 0, "div", 6);
    \u0275\u0275conditionalCreate(14, DepartmentListComponent_Conditional_14_Template, 7, 2, "div", 7);
    \u0275\u0275elementStart(15, "section", 8)(16, "div", 9)(17, "mat-form-field", 10)(18, "mat-label");
    \u0275\u0275text(19, "Search departments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-icon", 11);
    \u0275\u0275text(21, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 12);
    \u0275\u0275conditionalCreate(23, DepartmentListComponent_Conditional_23_Template, 3, 0, "button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 14)(25, "mat-label");
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-select", 15);
    \u0275\u0275listener("selectionChange", function DepartmentListComponent_Template_mat_select_selectionChange_27_listener($event) {
      return ctx.onStatusFilterChange($event);
    });
    \u0275\u0275elementStart(28, "mat-option", 16);
    \u0275\u0275text(29, "All statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-option", 17);
    \u0275\u0275text(31, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-option", 18);
    \u0275\u0275text(33, "Inactive");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(34, DepartmentListComponent_Conditional_34_Template, 1, 0, "mat-progress-bar", 19);
    \u0275\u0275elementStart(35, "div", 20);
    \u0275\u0275conditionalCreate(36, DepartmentListComponent_Conditional_36_Template, 21, 3, "table", 21)(37, DepartmentListComponent_Conditional_37_Template, 7, 3, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "mat-paginator", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx.saving);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.previewMode ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.errorMessage ? 14 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("formControl", ctx.searchControl);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.searchControl.value ? 23 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.statusFilter);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx.loading ? 34 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.dataSource.filteredData.length > 0 ? 36 : !ctx.loading ? 37 : -1);
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
  FormControlDirective,
  DatePipe
], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.department-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_arrive 280ms ease-out both;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 4px 0 5px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.page-heading[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  min-height: 38px;\n  flex: 0 0 auto;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.page-heading[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n  font-size: 18px;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 13px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.preview-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b86156;\n}\n.error-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.error-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #8b4d46;\n  font-size: 11px;\n}\n.department-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 17px 18px 4px;\n}\n.toolbar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-bottom: -1.25em;\n}\n.search-field[_ngcontent-%COMP%] {\n  width: min(100%, 360px);\n}\n.status-field[_ngcontent-%COMP%] {\n  width: 160px;\n}\n.toolbar[_ngcontent-%COMP%]   mat-icon[matPrefix][_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #839087;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  overflow-x: auto;\n}\n.department-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 890px;\n}\n.department-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 42px;\n  color: #748078;\n  background: #f8faf7;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.department-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 58px;\n  color: #536259;\n  font-size: 11px;\n}\n.department-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.department-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.id-cell[_ngcontent-%COMP%] {\n  color: #59705f !important;\n  font-variant-numeric: tabular-nums;\n}\n.department-name[_ngcontent-%COMP%], \n.department-code[_ngcontent-%COMP%] {\n  display: block;\n}\n.department-name[_ngcontent-%COMP%] {\n  color: #304238;\n  font-size: 11px;\n  font-weight: 600;\n}\n.department-code[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #909b92;\n  font-size: 9px;\n}\n.description-cell[_ngcontent-%COMP%] {\n  max-width: 275px;\n  overflow: hidden;\n  color: #758179 !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-chip[_ngcontent-%COMP%] {\n  min-height: 23px;\n  border-radius: 4px !important;\n  font-size: 9px;\n  font-weight: 700;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.status-chip.inactive[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #f0f1ef;\n  --mdc-chip-label-text-color: #667168;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: #75837a;\n}\n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.actions-cell[_ngcontent-%COMP%]   .delete-action[_ngcontent-%COMP%] {\n  color: #a35b53;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 190px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 26px;\n  margin-bottom: 9px;\n  color: #89a47c;\n  font-size: 26px;\n}\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #35483b;\n  font-size: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  font-size: 11px;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  border-top: 1px solid #edf1ed;\n  background: #fff;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(7px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .department-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 700px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 15px;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 8px;\n    padding: 16px 14px 5px;\n  }\n  .search-field[_ngcontent-%COMP%], \n   .status-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .department-table[_ngcontent-%COMP%] {\n    min-width: 840px;\n  }\n}\n@media (max-width: 480px) {\n  .department-page[_ngcontent-%COMP%] {\n    gap: 13px;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n  .error-notice[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .error-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    min-width: calc(100% - 40px);\n  }\n  .department-table[_ngcontent-%COMP%] {\n    min-width: 820px;\n  }\n}\n/*# sourceMappingURL=department-list.component.css.map */'] });
var DepartmentListComponent = _DepartmentListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentListComponent, [{
    type: Component,
    args: [{ selector: "app-department-list", standalone: true, imports: [
      DatePipe,
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
    ], template: `<section class="department-page" aria-labelledby="departments-title">\r
  <header class="page-heading">\r
    <div>\r
      <p class="eyebrow">ORGANIZATION</p>\r
      <h1 id="departments-title">Departments</h1>\r
      <p class="description">Manage organizational departments.</p>\r
    </div>\r
    <button mat-flat-button color="primary" type="button" (click)="openDialog('create')" [disabled]="saving">\r
      <mat-icon>add</mat-icon>\r
      Add Department\r
    </button>\r
  </header>\r
\r
  @if (previewMode) {\r
    <div class="preview-notice" role="status">\r
      <mat-icon>info</mat-icon>\r
      <span><strong>Preview data</strong> Changes are temporary and will not be saved to the server.</span>\r
    </div>\r
  }\r
\r
  @if (errorMessage) {\r
    <div class="error-notice" role="alert">\r
      <mat-icon>cloud_off</mat-icon>\r
      <span>{{ errorMessage }}</span>\r
      <button mat-button type="button" (click)="retryDepartments()" [disabled]="loading">Retry</button>\r
    </div>\r
  }\r
\r
  <section class="department-panel" aria-label="Department list">\r
    <div class="toolbar">\r
      <mat-form-field appearance="outline" class="search-field">\r
        <mat-label>Search departments</mat-label>\r
        <mat-icon matPrefix>search</mat-icon>\r
        <input matInput [formControl]="searchControl" placeholder="Name, ID, code, or description">\r
        @if (searchControl.value) {\r
          <button mat-icon-button matSuffix type="button" aria-label="Clear search" (click)="searchControl.setValue('')">\r
            <mat-icon>close</mat-icon>\r
          </button>\r
        }\r
      </mat-form-field>\r
\r
      <mat-form-field appearance="outline" class="status-field">\r
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
      <mat-progress-bar mode="indeterminate" aria-label="Loading departments"></mat-progress-bar>\r
    }\r
\r
    <div class="table-wrap">\r
      @if (dataSource.filteredData.length > 0) {\r
        <table mat-table [dataSource]="dataSource" class="department-table">\r
          <ng-container matColumnDef="id">\r
            <th mat-header-cell *matHeaderCellDef>Department ID</th>\r
            <td mat-cell *matCellDef="let department" class="id-cell">{{ department.id }}</td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="name">\r
            <th mat-header-cell *matHeaderCellDef>Department Name</th>\r
            <td mat-cell *matCellDef="let department">\r
              <span class="department-name">{{ department.name }}</span>\r
              @if (department.code) {\r
                <span class="department-code">{{ department.code }}</span>\r
              }\r
            </td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="description">\r
            <th mat-header-cell *matHeaderCellDef>Description</th>\r
            <td mat-cell *matCellDef="let department" class="description-cell">\r
              {{ department.description || 'No description provided' }}\r
            </td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="status">\r
            <th mat-header-cell *matHeaderCellDef>Status</th>\r
            <td mat-cell *matCellDef="let department">\r
              <mat-chip-set>\r
                <mat-chip [class]="department.active ? 'status-chip active' : 'status-chip inactive'">\r
                  {{ department.active ? 'Active' : 'Inactive' }}\r
                </mat-chip>\r
              </mat-chip-set>\r
            </td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="createdAt">\r
            <th mat-header-cell *matHeaderCellDef>Created Date</th>\r
            <td mat-cell *matCellDef="let department">\r
              {{ department.createdAt ? (department.createdAt | date: 'mediumDate') : '\u2014' }}\r
            </td>\r
          </ng-container>\r
\r
          <ng-container matColumnDef="actions">\r
            <th mat-header-cell *matHeaderCellDef><span class="visually-hidden">Actions</span></th>\r
            <td mat-cell *matCellDef="let department" class="actions-cell">\r
              <button mat-icon-button type="button" matTooltip="View department" [attr.aria-label]="'View ' + department.name" (click)="openDialog('view', department)">\r
                <mat-icon>visibility</mat-icon>\r
              </button>\r
              <button mat-icon-button type="button" matTooltip="Edit department" [attr.aria-label]="'Edit ' + department.name" (click)="openDialog('edit', department)" [disabled]="saving">\r
                <mat-icon>edit</mat-icon>\r
              </button>\r
              <button mat-icon-button type="button" class="delete-action" matTooltip="Delete department" [attr.aria-label]="'Delete ' + department.name" (click)="openDialog('delete', department)" [disabled]="saving">\r
                <mat-icon>delete_outline</mat-icon>\r
              </button>\r
            </td>\r
          </ng-container>\r
\r
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
        </table>\r
      } @else if (!loading) {\r
        <div class="empty-state">\r
          <mat-icon>{{ dataSource.data.length ? 'search_off' : 'corporate_fare' }}</mat-icon>\r
          <strong>{{ dataSource.data.length ? 'No matching departments' : 'No departments found' }}</strong>\r
          <span>{{ dataSource.data.length ? 'Try changing your search or status filter.' : 'Departments from your organization will appear here.' }}</span>\r
        </div>\r
      }\r
    </div>\r
\r
    <mat-paginator\r
      [pageSize]="10"\r
      [pageSizeOptions]="pageSizeOptions"\r
      [showFirstLastButtons]="true"\r
      aria-label="Select department page">\r
    </mat-paginator>\r
  </section>\r
</section>\r
`, styles: ['/* src/app/features/pages/department-list/department-list.component.scss */\n:host {\n  display: block;\n}\n.department-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: arrive 280ms ease-out both;\n}\n.page-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 4px 0 5px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.page-heading > button {\n  min-height: 38px;\n  flex: 0 0 auto;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.page-heading > button mat-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n  font-size: 18px;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 13px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.preview-notice {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.preview-notice strong {\n  margin-right: 4px;\n}\n.error-notice {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice mat-icon {\n  color: #b86156;\n}\n.error-notice span {\n  flex: 1;\n}\n.error-notice button {\n  flex: 0 0 auto;\n  color: #8b4d46;\n  font-size: 11px;\n}\n.department-panel {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.toolbar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 17px 18px 4px;\n}\n.toolbar mat-form-field {\n  margin-bottom: -1.25em;\n}\n.search-field {\n  width: min(100%, 360px);\n}\n.status-field {\n  width: 160px;\n}\n.toolbar mat-icon[matPrefix] {\n  margin-right: 8px;\n  color: #839087;\n}\n.table-wrap {\n  position: relative;\n  min-width: 0;\n  overflow-x: auto;\n}\n.department-table {\n  width: 100%;\n  min-width: 890px;\n}\n.department-table th {\n  height: 42px;\n  color: #748078;\n  background: #f8faf7;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.department-table td {\n  height: 58px;\n  color: #536259;\n  font-size: 11px;\n}\n.department-table th:first-child,\n.department-table td:first-child {\n  padding-left: 20px;\n}\n.id-cell {\n  color: #59705f !important;\n  font-variant-numeric: tabular-nums;\n}\n.department-name,\n.department-code {\n  display: block;\n}\n.department-name {\n  color: #304238;\n  font-size: 11px;\n  font-weight: 600;\n}\n.department-code {\n  margin-top: 4px;\n  color: #909b92;\n  font-size: 9px;\n}\n.description-cell {\n  max-width: 275px;\n  overflow: hidden;\n  color: #758179 !important;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-chip {\n  min-height: 23px;\n  border-radius: 4px !important;\n  font-size: 9px;\n  font-weight: 700;\n}\n.status-chip.active {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.status-chip.inactive {\n  --mdc-chip-elevated-container-color: #f0f1ef;\n  --mdc-chip-label-text-color: #667168;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.actions-cell button {\n  width: 32px;\n  height: 32px;\n  color: #75837a;\n}\n.actions-cell button mat-icon {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.actions-cell .delete-action {\n  color: #a35b53;\n}\n.empty-state {\n  display: flex;\n  min-height: 190px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.empty-state mat-icon {\n  width: 26px;\n  height: 26px;\n  margin-bottom: 9px;\n  color: #89a47c;\n  font-size: 26px;\n}\n.empty-state strong {\n  color: #35483b;\n  font-size: 12px;\n}\n.empty-state span {\n  margin-top: 5px;\n  font-size: 11px;\n}\nmat-paginator {\n  border-top: 1px solid #edf1ed;\n  background: #fff;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(7px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .department-page {\n    animation: none;\n  }\n}\n@media (max-width: 700px) {\n  .page-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 15px;\n  }\n  .toolbar {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 8px;\n    padding: 16px 14px 5px;\n  }\n  .search-field,\n  .status-field {\n    width: 100%;\n  }\n  .department-table {\n    min-width: 840px;\n  }\n}\n@media (max-width: 480px) {\n  .department-page {\n    gap: 13px;\n  }\n  h1 {\n    font-size: 27px;\n  }\n  .error-notice {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .error-notice span {\n    min-width: calc(100% - 40px);\n  }\n  .department-table {\n    min-width: 820px;\n  }\n}\n/*# sourceMappingURL=department-list.component.css.map */\n'] }]
  }], () => [], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DepartmentListComponent, { className: "DepartmentListComponent", filePath: "src/app/features/pages/department-list/department-list.component.ts", lineNumber: 53 });
})();
export {
  DepartmentListComponent
};
//# sourceMappingURL=chunk-MQCA6CJN.js.map
