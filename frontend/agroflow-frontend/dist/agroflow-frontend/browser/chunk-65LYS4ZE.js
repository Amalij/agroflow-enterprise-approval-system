import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-S5Y7ZGUB.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-IGEVX5VZ.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-KV3NKOTC.js";
import {
  Component,
  Input,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N56IC4AV.js";

// src/app/features/requests/components/request-status-chip/request-status-chip.component.ts
var _RequestStatusChipComponent = class _RequestStatusChipComponent {
  get statusTone() {
    return this.status.toLocaleLowerCase();
  }
};
_RequestStatusChipComponent.\u0275fac = function RequestStatusChipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RequestStatusChipComponent)();
};
_RequestStatusChipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestStatusChipComponent, selectors: [["app-request-status-chip"]], inputs: { status: "status" }, decls: 3, vars: 3, template: function RequestStatusChipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip-set")(1, "mat-chip");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275classMap("status-chip " + ctx.statusTone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.status);
  }
}, dependencies: [MatChipsModule, MatChip, MatChipSet], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.status-chip[_ngcontent-%COMP%] {\n  min-height: 23px;\n  border-radius: 4px !important;\n  font-size: 9px;\n  font-weight: 700;\n}\n.status-chip.draft[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eef1ed;\n  --mdc-chip-label-text-color: #647267;\n}\n.status-chip.pending[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #fbf1df;\n  --mdc-chip-label-text-color: #936322;\n}\n.status-chip.approved[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.status-chip.rejected[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #f8eae8;\n  --mdc-chip-label-text-color: #9e504a;\n}\n.status-chip.cancelled[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #f0f1ef;\n  --mdc-chip-label-text-color: #667168;\n}\n.status-chip.returned[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf1f5;\n  --mdc-chip-label-text-color: #507389;\n}\n.status-chip.completed[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n/*# sourceMappingURL=request-status-chip.component.css.map */"] });
var RequestStatusChipComponent = _RequestStatusChipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestStatusChipComponent, [{
    type: Component,
    args: [{ selector: "app-request-status-chip", standalone: true, imports: [MatChipsModule], template: `<mat-chip-set><mat-chip [class]="'status-chip ' + statusTone">{{ status }}</mat-chip></mat-chip-set>`, styles: ["/* angular:styles/component:scss;34588b9a6f77e976032d3d6f14269e5b7b9fd5644d69b489e49cfaa78eee4591;C:/Users/R E V O/Desktop/Internship/agroflow-enterprise-approval-system/frontend/agroflow-frontend/src/app/features/requests/components/request-status-chip/request-status-chip.component.ts */\n:host {\n  display: inline-block;\n}\n.status-chip {\n  min-height: 23px;\n  border-radius: 4px !important;\n  font-size: 9px;\n  font-weight: 700;\n}\n.status-chip.draft {\n  --mdc-chip-elevated-container-color: #eef1ed;\n  --mdc-chip-label-text-color: #647267;\n}\n.status-chip.pending {\n  --mdc-chip-elevated-container-color: #fbf1df;\n  --mdc-chip-label-text-color: #936322;\n}\n.status-chip.approved {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.status-chip.rejected {\n  --mdc-chip-elevated-container-color: #f8eae8;\n  --mdc-chip-label-text-color: #9e504a;\n}\n.status-chip.cancelled {\n  --mdc-chip-elevated-container-color: #f0f1ef;\n  --mdc-chip-label-text-color: #667168;\n}\n.status-chip.returned {\n  --mdc-chip-elevated-container-color: #eaf1f5;\n  --mdc-chip-label-text-color: #507389;\n}\n.status-chip.completed {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n/*# sourceMappingURL=request-status-chip.component.css.map */\n"] }]
  }], null, { status: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestStatusChipComponent, { className: "RequestStatusChipComponent", filePath: "src/app/features/requests/components/request-status-chip/request-status-chip.component.ts", lineNumber: 23 });
})();

// src/app/features/requests/components/cancel-request-dialog/cancel-request-dialog.component.ts
var _CancelRequestDialogComponent = class _CancelRequestDialogComponent {
  constructor() {
    this.data = inject(MAT_DIALOG_DATA);
    this.dialogRef = inject(MatDialogRef);
  }
  cancel() {
    this.dialogRef.close(false);
  }
  confirm() {
    this.dialogRef.close(true);
  }
};
_CancelRequestDialogComponent.\u0275fac = function CancelRequestDialogComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CancelRequestDialogComponent)();
};
_CancelRequestDialogComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CancelRequestDialogComponent, selectors: [["app-cancel-request-dialog"]], decls: 15, vars: 2, consts: [["mat-dialog-title", ""], [1, "dialog-note"], ["align", "end"], ["mat-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "warn", "type", "button", 3, "click"]], template: function CancelRequestDialogComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 0);
    \u0275\u0275text(1, "Cancel request?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-dialog-content")(3, "p");
    \u0275\u0275text(4, "Cancel ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 1);
    \u0275\u0275text(9, "The request will remain in your history with Cancelled status.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-dialog-actions", 2)(11, "button", 3);
    \u0275\u0275listener("click", function CancelRequestDialogComponent_Template_button_click_11_listener() {
      return ctx.cancel();
    });
    \u0275\u0275text(12, "Keep request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "button", 4);
    \u0275\u0275listener("click", function CancelRequestDialogComponent_Template_button_click_13_listener() {
      return ctx.confirm();
    });
    \u0275\u0275text(14, "Cancel Request");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.data.requestId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", \u201C", ctx.data.title, "\u201D?");
  }
}, dependencies: [MatButtonModule, MatButton, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: #27392e;\n  font: 600 19px/1.3 "Space Grotesk", sans-serif;\n}\nmat-dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #56655b;\n  font-size: 12px;\n  line-height: 1.6;\n}\nmat-dialog-content[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #2c4033;\n}\n.dialog-note[_ngcontent-%COMP%] {\n  color: #87928a;\n  font-size: 10px;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  padding: 10px 24px 18px;\n}\n/*# sourceMappingURL=cancel-request-dialog.component.css.map */'] });
var CancelRequestDialogComponent = _CancelRequestDialogComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CancelRequestDialogComponent, [{
    type: Component,
    args: [{ selector: "app-cancel-request-dialog", standalone: true, imports: [MatButtonModule, MatDialogModule], template: '<h2 mat-dialog-title>Cancel request?</h2>\r\n<mat-dialog-content>\r\n  <p>Cancel <strong>{{ data.requestId }}</strong>, \u201C{{ data.title }}\u201D?</p>\r\n  <p class="dialog-note">The request will remain in your history with Cancelled status.</p>\r\n</mat-dialog-content>\r\n<mat-dialog-actions align="end">\r\n  <button mat-button type="button" (click)="cancel()">Keep request</button>\r\n  <button mat-flat-button color="warn" type="button" (click)="confirm()">Cancel Request</button>\r\n</mat-dialog-actions>', styles: ['/* src/app/features/requests/components/cancel-request-dialog/cancel-request-dialog.component.scss */\n:host {\n  display: block;\n}\nh2[mat-dialog-title] {\n  color: #27392e;\n  font: 600 19px/1.3 "Space Grotesk", sans-serif;\n}\nmat-dialog-content p {\n  color: #56655b;\n  font-size: 12px;\n  line-height: 1.6;\n}\nmat-dialog-content strong {\n  color: #2c4033;\n}\n.dialog-note {\n  color: #87928a;\n  font-size: 10px;\n}\nmat-dialog-actions {\n  padding: 10px 24px 18px;\n}\n/*# sourceMappingURL=cancel-request-dialog.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CancelRequestDialogComponent, { className: "CancelRequestDialogComponent", filePath: "src/app/features/requests/components/cancel-request-dialog/cancel-request-dialog.component.ts", lineNumber: 17 });
})();

export {
  RequestStatusChipComponent,
  CancelRequestDialogComponent
};
//# sourceMappingURL=chunk-65LYS4ZE.js.map
