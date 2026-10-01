import {
  MatIcon,
  MatIconModule
} from "./chunk-A3MOLE3M.js";
import {
  DatePipe
} from "./chunk-FWRROCAB.js";
import {
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N56IC4AV.js";

// src/app/features/approvals/components/approval-workflow-progress/approval-workflow-progress.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function ApprovalWorkflowProgressComponent_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function ApprovalWorkflowProgressComponent_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "close");
    \u0275\u0275elementEnd();
  }
}
function ApprovalWorkflowProgressComponent_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const $index_r1 = \u0275\u0275nextContext().$index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate($index_r1 + 1);
  }
}
function ApprovalWorkflowProgressComponent_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(step_r2.actorName);
  }
}
function ApprovalWorkflowProgressComponent_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, step_r2.completedAt, "mediumDate"));
  }
}
function ApprovalWorkflowProgressComponent_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 6);
    \u0275\u0275text(1, "Current step");
    \u0275\u0275elementEnd();
  }
}
function ApprovalWorkflowProgressComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 2)(1, "span", 3);
    \u0275\u0275conditionalCreate(2, ApprovalWorkflowProgressComponent_For_2_Conditional_2_Template, 2, 0, "mat-icon")(3, ApprovalWorkflowProgressComponent_For_2_Conditional_3_Template, 2, 0, "mat-icon")(4, ApprovalWorkflowProgressComponent_For_2_Conditional_4_Template, 2, 1, "span", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 5)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ApprovalWorkflowProgressComponent_For_2_Conditional_8_Template, 2, 1, "small");
    \u0275\u0275conditionalCreate(9, ApprovalWorkflowProgressComponent_For_2_Conditional_9_Template, 3, 4, "small");
    \u0275\u0275conditionalCreate(10, ApprovalWorkflowProgressComponent_For_2_Conditional_10_Template, 2, 0, "small", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const step_r2 = ctx.$implicit;
    const \u0275$index_3_r3 = ctx.$index;
    const \u0275$count_3_r4 = ctx.$count;
    \u0275\u0275classMap("workflow-step " + step_r2.state);
    \u0275\u0275classProp("last-step", \u0275$index_3_r3 === \u0275$count_3_r4 - 1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(step_r2.state === "complete" ? 2 : step_r2.state === "rejected" ? 3 : 4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(step_r2.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r2.actorName ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r2.completedAt ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r2.state === "current" ? 10 : -1);
  }
}
var _ApprovalWorkflowProgressComponent = class _ApprovalWorkflowProgressComponent {
  constructor() {
    this.steps = [];
  }
};
_ApprovalWorkflowProgressComponent.\u0275fac = function ApprovalWorkflowProgressComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApprovalWorkflowProgressComponent)();
};
_ApprovalWorkflowProgressComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApprovalWorkflowProgressComponent, selectors: [["app-approval-workflow-progress"]], inputs: { steps: "steps" }, decls: 3, vars: 0, consts: [["aria-label", "Approval workflow progress", 1, "workflow"], [1, "workflow-step", 3, "class", "last-step"], [1, "workflow-step"], [1, "step-marker"], [1, "step-number"], [1, "step-copy"], [1, "current-label"]], template: function ApprovalWorkflowProgressComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 0);
    \u0275\u0275repeaterCreate(1, ApprovalWorkflowProgressComponent_For_2_Template, 11, 9, "li", 1, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.steps);
  }
}, dependencies: [MatIconModule, MatIcon, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.workflow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin: 0;\n  padding: 8px 0;\n  list-style: none;\n}\n.workflow-step[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n}\n.workflow-step[_ngcontent-%COMP%]:not(.last-step)::after {\n  position: absolute;\n  z-index: 0;\n  top: 15px;\n  left: calc(50% + 16px);\n  width: calc(100% - 32px);\n  height: 2px;\n  background: #dce7dc;\n  content: "";\n}\n.workflow-step.complete[_ngcontent-%COMP%]:not(.last-step)::after {\n  background: #76a176;\n}\n.step-marker[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: grid;\n  width: 32px;\n  height: 32px;\n  flex: 0 0 32px;\n  place-items: center;\n  border: 1px solid #d8e1d8;\n  border-radius: 50%;\n  color: #77857a;\n  background: #fff;\n}\n.step-marker[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  color: #4d8154;\n  font-size: 17px;\n}\n.step-number[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n}\n.workflow-step.complete[_ngcontent-%COMP%]   .step-marker[_ngcontent-%COMP%] {\n  border-color: #94b791;\n  background: #eff6ed;\n}\n.workflow-step.current[_ngcontent-%COMP%]   .step-marker[_ngcontent-%COMP%] {\n  border: 2px solid #4b8051;\n  color: #376d43;\n  background: #f1f7ed;\n  box-shadow: 0 0 0 4px #edf4e9;\n}\n.workflow-step.rejected[_ngcontent-%COMP%]   .step-marker[_ngcontent-%COMP%] {\n  border-color: #c77d73;\n  color: #a4544d;\n  background: #fbefed;\n}\n.workflow-step.rejected[_ngcontent-%COMP%]   .step-marker[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #a4544d;\n}\n.step-copy[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 4px;\n  padding: 12px 5px 0;\n}\n.step-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #58665d;\n  font-size: 9px;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.step-copy[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #87928a;\n  font-size: 8px;\n  line-height: 1.35;\n}\n.workflow-step.complete[_ngcontent-%COMP%]   .step-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.workflow-step.current[_ngcontent-%COMP%]   .step-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #344a39;\n}\n.step-copy[_ngcontent-%COMP%]   .current-label[_ngcontent-%COMP%] {\n  color: #3d784a;\n  font-weight: 700;\n}\n@media (max-width: 520px) {\n  .workflow[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 0;\n    padding: 4px 0;\n  }\n  .workflow-step[_ngcontent-%COMP%] {\n    min-height: 58px;\n    flex: initial;\n    align-items: flex-start;\n    flex-direction: row;\n    gap: 11px;\n    text-align: left;\n  }\n  .workflow-step[_ngcontent-%COMP%]:not(.last-step)::after {\n    top: 32px;\n    left: 15px;\n    width: 2px;\n    height: calc(100% - 5px);\n  }\n  .step-copy[_ngcontent-%COMP%] {\n    padding: 2px 0 12px;\n  }\n}\n/*# sourceMappingURL=approval-workflow-progress.component.css.map */'] });
var ApprovalWorkflowProgressComponent = _ApprovalWorkflowProgressComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApprovalWorkflowProgressComponent, [{
    type: Component,
    args: [{ selector: "app-approval-workflow-progress", standalone: true, imports: [DatePipe, MatIconModule], template: `<ol class="workflow" aria-label="Approval workflow progress">\r
  @for (step of steps; track step.name; let last = $last) {\r
    <li class="workflow-step" [class]="'workflow-step ' + step.state" [class.last-step]="last">\r
      <span class="step-marker">\r
        @if (step.state === 'complete') { <mat-icon>check</mat-icon> }\r
        @else if (step.state === 'rejected') { <mat-icon>close</mat-icon> }\r
        @else { <span class="step-number">{{ $index + 1 }}</span> }\r
      </span>\r
      <span class="step-copy">\r
        <strong>{{ step.name }}</strong>\r
        @if (step.actorName) { <small>{{ step.actorName }}</small> }\r
        @if (step.completedAt) { <small>{{ step.completedAt | date: 'mediumDate' }}</small> }\r
        @if (step.state === 'current') { <small class="current-label">Current step</small> }\r
      </span>\r
    </li>\r
  }\r
</ol>`, styles: ['/* src/app/features/approvals/components/approval-workflow-progress/approval-workflow-progress.component.scss */\n:host {\n  display: block;\n}\n.workflow {\n  display: flex;\n  align-items: flex-start;\n  margin: 0;\n  padding: 8px 0;\n  list-style: none;\n}\n.workflow-step {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  flex: 1;\n  align-items: center;\n  flex-direction: column;\n  text-align: center;\n}\n.workflow-step:not(.last-step)::after {\n  position: absolute;\n  z-index: 0;\n  top: 15px;\n  left: calc(50% + 16px);\n  width: calc(100% - 32px);\n  height: 2px;\n  background: #dce7dc;\n  content: "";\n}\n.workflow-step.complete:not(.last-step)::after {\n  background: #76a176;\n}\n.step-marker {\n  z-index: 1;\n  display: grid;\n  width: 32px;\n  height: 32px;\n  flex: 0 0 32px;\n  place-items: center;\n  border: 1px solid #d8e1d8;\n  border-radius: 50%;\n  color: #77857a;\n  background: #fff;\n}\n.step-marker mat-icon {\n  width: 17px;\n  height: 17px;\n  color: #4d8154;\n  font-size: 17px;\n}\n.step-number {\n  font-size: 10px;\n  font-weight: 700;\n}\n.workflow-step.complete .step-marker {\n  border-color: #94b791;\n  background: #eff6ed;\n}\n.workflow-step.current .step-marker {\n  border: 2px solid #4b8051;\n  color: #376d43;\n  background: #f1f7ed;\n  box-shadow: 0 0 0 4px #edf4e9;\n}\n.workflow-step.rejected .step-marker {\n  border-color: #c77d73;\n  color: #a4544d;\n  background: #fbefed;\n}\n.workflow-step.rejected .step-marker mat-icon {\n  color: #a4544d;\n}\n.step-copy {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 4px;\n  padding: 12px 5px 0;\n}\n.step-copy strong {\n  color: #58665d;\n  font-size: 9px;\n  font-weight: 600;\n  line-height: 1.35;\n}\n.step-copy small {\n  color: #87928a;\n  font-size: 8px;\n  line-height: 1.35;\n}\n.workflow-step.complete .step-copy strong,\n.workflow-step.current .step-copy strong {\n  color: #344a39;\n}\n.step-copy .current-label {\n  color: #3d784a;\n  font-weight: 700;\n}\n@media (max-width: 520px) {\n  .workflow {\n    align-items: stretch;\n    flex-direction: column;\n    gap: 0;\n    padding: 4px 0;\n  }\n  .workflow-step {\n    min-height: 58px;\n    flex: initial;\n    align-items: flex-start;\n    flex-direction: row;\n    gap: 11px;\n    text-align: left;\n  }\n  .workflow-step:not(.last-step)::after {\n    top: 32px;\n    left: 15px;\n    width: 2px;\n    height: calc(100% - 5px);\n  }\n  .step-copy {\n    padding: 2px 0 12px;\n  }\n}\n/*# sourceMappingURL=approval-workflow-progress.component.css.map */\n'] }]
  }], null, { steps: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApprovalWorkflowProgressComponent, { className: "ApprovalWorkflowProgressComponent", filePath: "src/app/features/approvals/components/approval-workflow-progress/approval-workflow-progress.component.ts", lineNumber: 14 });
})();

export {
  ApprovalWorkflowProgressComponent
};
//# sourceMappingURL=chunk-T4QWBYES.js.map
