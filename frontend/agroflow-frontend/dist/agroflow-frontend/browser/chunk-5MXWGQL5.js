import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-VHWOFMVY.js";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-S5Y7ZGUB.js";
import {
  MatError,
  MatFormField,
  MatLabel
} from "./chunk-EVUGFGV4.js";
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
  MatButton,
  MatButtonModule
} from "./chunk-KV3NKOTC.js";
import {
  Component,
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
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N56IC4AV.js";

// src/app/features/pages/approvals/approval-action-dialog.component.ts
function ApprovalActionDialogComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "A comment is required.");
    \u0275\u0275elementEnd();
  }
}
function ApprovalActionDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Use 1000 characters or fewer.");
    \u0275\u0275elementEnd();
  }
}
var _ApprovalActionDialogComponent = class _ApprovalActionDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef);
    this.form = new FormGroup({ comment: new FormControl("", { nonNullable: true, validators: [Validators.required, Validators.pattern(/\S/), Validators.maxLength(1e3)] }) });
  }
  get title() {
    return this.data.decision === "reject" ? "Reject request" : "Return request for changes";
  }
  get submitLabel() {
    return this.data.decision === "reject" ? "Reject Request" : "Return for Changes";
  }
  submit() {
    if (this.form.invalid) {
      this.form.controls.comment.markAsTouched();
      return;
    }
    this.dialogRef.close(this.form.controls.comment.value.trim());
  }
  close() {
    this.dialogRef.close();
  }
};
_ApprovalActionDialogComponent.\u0275fac = function ApprovalActionDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApprovalActionDialogComponent)();
};
_ApprovalActionDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApprovalActionDialogComponent, selectors: [["app-approval-action-dialog"]], decls: 20, vars: 9, consts: [["mat-dialog-title", ""], [3, "ngSubmit", "formGroup"], [1, "dialog-description"], ["appearance", "outline", 1, "comment-field"], ["matInput", "", "formControlName", "comment", "rows", "4", "maxlength", "1000", "placeholder", "Provide a clear reason for the requester"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "type", "submit", 3, "color", "disabled"]], template: function ApprovalActionDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 0);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "form", 1);
    \u0275\u0275listener("ngSubmit", function ApprovalActionDialogComponent_Template_form_ngSubmit_2_listener() {
      return ctx.submit();
    });
    \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p", 2);
    \u0275\u0275text(5, "Add a comment explaining your decision for ");
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 3)(10, "mat-label");
    \u0275\u0275text(11, "Comment / reason");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 4);
    \u0275\u0275conditionalCreate(13, ApprovalActionDialogComponent_Conditional_13_Template, 2, 0, "mat-error");
    \u0275\u0275conditionalCreate(14, ApprovalActionDialogComponent_Conditional_14_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-dialog-actions", 5)(16, "button", 6);
    \u0275\u0275listener("click", function ApprovalActionDialogComponent_Template_button_click_16_listener() {
      return ctx.close();
    });
    \u0275\u0275text(17, "Keep Reviewing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 7);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.title);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx.form);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.data.requestId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx.data.title);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.form.controls.comment.hasError("required") || ctx.form.controls.comment.hasError("pattern") ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.form.controls.comment.hasError("maxlength") ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("color", ctx.data.decision === "reject" ? "warn" : "primary")("disabled", ctx.form.invalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.submitLabel);
  }
}, dependencies: [MatButtonModule, MatButton, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatError, MatInputModule, MatInput, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, MaxLengthValidator, FormGroupDirective, FormControlName], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: #26392d;\n  font: 600 19px/1.3 "Space Grotesk", sans-serif;\n}\n.dialog-description[_ngcontent-%COMP%] {\n  color: #647268;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.dialog-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #34463a;\n}\n.comment-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 9px;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 10px 24px 18px;\n}\n/*# sourceMappingURL=approval-action-dialog.component.css.map */'] });
var ApprovalActionDialogComponent = _ApprovalActionDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApprovalActionDialogComponent, [{
    type: Component,
    args: [{ selector: "app-approval-action-dialog", standalone: true, imports: [MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule], template: `<h2 mat-dialog-title>{{ title }}</h2>\r
<form [formGroup]="form" (ngSubmit)="submit()">\r
  <mat-dialog-content>\r
    <p class="dialog-description">Add a comment explaining your decision for <strong>{{ data.requestId }}</strong> \xB7 {{ data.title }}</p>\r
    <mat-form-field appearance="outline" class="comment-field">\r
      <mat-label>Comment / reason</mat-label>\r
      <textarea matInput formControlName="comment" rows="4" maxlength="1000" placeholder="Provide a clear reason for the requester"></textarea>\r
      @if (form.controls.comment.hasError('required') || form.controls.comment.hasError('pattern')) {\r
        <mat-error>A comment is required.</mat-error>\r
      }\r
      @if (form.controls.comment.hasError('maxlength')) { <mat-error>Use 1000 characters or fewer.</mat-error> }\r
    </mat-form-field>\r
  </mat-dialog-content>\r
  <mat-dialog-actions align="end">\r
    <button mat-button type="button" (click)="close()">Keep Reviewing</button>\r
    <button mat-flat-button [color]="data.decision === 'reject' ? 'warn' : 'primary'" type="submit" [disabled]="form.invalid">{{ submitLabel }}</button>\r
  </mat-dialog-actions>\r
</form>`, styles: ['/* src/app/features/pages/approvals/approval-action-dialog.component.scss */\n:host {\n  display: block;\n}\nh2[mat-dialog-title] {\n  color: #26392d;\n  font: 600 19px/1.3 "Space Grotesk", sans-serif;\n}\n.dialog-description {\n  color: #647268;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.dialog-description strong {\n  color: #34463a;\n}\n.comment-field {\n  width: 100%;\n  margin-top: 9px;\n}\nmat-dialog-actions {\n  padding: 10px 24px 18px;\n}\n/*# sourceMappingURL=approval-action-dialog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApprovalActionDialogComponent, { className: "ApprovalActionDialogComponent", filePath: "src/app/features/pages/approvals/approval-action-dialog.component.ts", lineNumber: 23 });
})();

export {
  ApprovalActionDialogComponent
};
//# sourceMappingURL=chunk-5MXWGQL5.js.map
