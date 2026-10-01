import {
  REQUEST_TYPES
} from "./chunk-ZID7AZMT.js";
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
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-PEU3H2UL.js";
import "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/request-type-selection/request-type-selection.component.ts
var _c0 = (a0) => ["/requests/create", a0];
var _c1 = (a0) => ({ draftId: a0 });
var _forTrack0 = ($index, $item) => $item.type;
function RequestTypeSelectionComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "edit_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Draft ", ctx_r0.draftId, " selected. Draft forms are not available yet.");
  }
}
function RequestTypeSelectionComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.selectedType, " selected. The request form will be available in a future workflow update.");
  }
}
function RequestTypeSelectionComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 9)(1, "span", 10)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(option_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r2.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r2.description);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c0, option_r2.path))("queryParams", ctx_r0.draftId ? \u0275\u0275pureFunction1(8, _c1, ctx_r0.draftId) : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Select ", option_r2.type, " ");
  }
}
var _RequestTypeSelectionComponent = class _RequestTypeSelectionComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
    this.destroyRef = inject(DestroyRef);
    this.requestTypes = REQUEST_TYPES;
    this.options = [
      { type: "IOU", path: "iou", icon: "account_balance_wallet", description: "Request a cash advance for approved business expenses." },
      { type: "Petty Cash", path: "petty-cash", icon: "payments", description: "Request funds for small operational purchases." },
      { type: "Procurement", path: "procurement", icon: "inventory_2", description: "Start a purchase request for goods or services." }
    ];
    this.draftId = "";
  }
  ngOnInit() {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      const pathType = params.get("type");
      this.selectedType = this.options.find((option) => option.path === pathType)?.type;
    });
    this.route.queryParamMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params) => {
      this.draftId = params.get("draftId") ?? "";
    });
  }
};
_RequestTypeSelectionComponent.\u0275fac = function RequestTypeSelectionComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RequestTypeSelectionComponent)();
};
_RequestTypeSelectionComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestTypeSelectionComponent, selectors: [["app-request-type-selection"]], decls: 17, vars: 3, consts: [["aria-labelledby", "type-title", 1, "type-page"], ["routerLink", "/requests", 1, "back-link"], [1, "page-heading"], [1, "eyebrow"], ["id", "type-title"], [1, "description"], ["role", "status", 1, "draft-notice"], ["role", "status", 1, "selection-notice"], [1, "type-grid"], ["appearance", "outlined", 1, "type-card"], [1, "type-icon"], ["mat-stroked-button", "", 3, "routerLink", "queryParams"]], template: function RequestTypeSelectionComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "a", 1)(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Back to My Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "header", 2)(6, "p", 3);
    \u0275\u0275text(7, "REQUEST WORKFLOW");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 4);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 5);
    \u0275\u0275text(11, "Choose a request type to continue.");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(12, RequestTypeSelectionComponent_Conditional_12_Template, 5, 1, "div", 6);
    \u0275\u0275conditionalCreate(13, RequestTypeSelectionComponent_Conditional_13_Template, 5, 1, "div", 7);
    \u0275\u0275elementStart(14, "div", 8);
    \u0275\u0275repeaterCreate(15, RequestTypeSelectionComponent_For_16_Template, 12, 10, "mat-card", 9, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx.selectedType ? ctx.selectedType + " request" : "Create Request");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.draftId ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.selectedType ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.options);
  }
}, dependencies: [MatButtonModule, MatButton, MatCardModule, MatCard, MatIconModule, MatIcon, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.type-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 2px 0 3px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.draft-notice[_ngcontent-%COMP%], \n.selection-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid #e2e9e3;\n  border-radius: 6px;\n  color: #627367;\n  background: #fff;\n  font-size: 10px;\n}\n.draft-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9b773b;\n}\n.selection-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #5e9460;\n}\n.type-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 13px;\n}\n.type-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  min-height: 225px;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 20px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.type-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 37px;\n  height: 37px;\n  place-items: center;\n  border-radius: 8px;\n  color: #37714e;\n  background: #eaf3e7;\n}\n.type-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.type-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 16px 0 7px;\n  color: #2a3c31;\n  font: 600 16px/1.25 "Space Grotesk", sans-serif;\n}\n.type-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 0 16px;\n  color: #728078;\n  font-size: 10px;\n  line-height: 1.6;\n}\n.type-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.type-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-left: 5px;\n  font-size: 15px;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .type-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 850px) {\n  .type-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 580px) {\n  .type-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .type-card[_ngcontent-%COMP%] {\n    min-height: 0;\n    padding: 17px;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=request-type-selection.component.css.map */'] });
var RequestTypeSelectionComponent = _RequestTypeSelectionComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestTypeSelectionComponent, [{
    type: Component,
    args: [{ selector: "app-request-type-selection", standalone: true, imports: [MatButtonModule, MatCardModule, MatIconModule, RouterLink], template: `<section class="type-page" aria-labelledby="type-title">\r
  <a class="back-link" routerLink="/requests"><mat-icon>arrow_back</mat-icon>Back to My Requests</a>\r
  <header class="page-heading">\r
    <p class="eyebrow">REQUEST WORKFLOW</p>\r
    <h1 id="type-title">{{ selectedType ? selectedType + ' request' : 'Create Request' }}</h1>\r
    <p class="description">Choose a request type to continue.</p>\r
  </header>\r
\r
  @if (draftId) {\r
    <div class="draft-notice" role="status"><mat-icon>edit_note</mat-icon><span>Draft {{ draftId }} selected. Draft forms are not available yet.</span></div>\r
  }\r
\r
  @if (selectedType) {\r
    <div class="selection-notice" role="status">\r
      <mat-icon>check_circle</mat-icon>\r
      <span>{{ selectedType }} selected. The request form will be available in a future workflow update.</span>\r
    </div>\r
  }\r
\r
  <div class="type-grid">\r
    @for (option of options; track option.type) {\r
      <mat-card class="type-card" appearance="outlined">\r
        <span class="type-icon"><mat-icon>{{ option.icon }}</mat-icon></span>\r
        <h2>{{ option.type }}</h2>\r
        <p>{{ option.description }}</p>\r
        <a mat-stroked-button [routerLink]="['/requests/create', option.path]" [queryParams]="draftId ? { draftId } : null">\r
          Select {{ option.type }}\r
          <mat-icon>arrow_forward</mat-icon>\r
        </a>\r
      </mat-card>\r
    }\r
  </div>\r
</section>`, styles: ['/* src/app/features/pages/request-type-selection/request-type-selection.component.scss */\n:host {\n  display: block;\n}\n.type-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: arrive 260ms ease-out both;\n}\n.back-link {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link mat-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading {\n  padding: 2px 0 3px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.draft-notice,\n.selection-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid #e2e9e3;\n  border-radius: 6px;\n  color: #627367;\n  background: #fff;\n  font-size: 10px;\n}\n.draft-notice mat-icon {\n  color: #9b773b;\n}\n.selection-notice mat-icon {\n  color: #5e9460;\n}\n.type-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 13px;\n}\n.type-card {\n  display: flex;\n  min-width: 0;\n  min-height: 225px;\n  align-items: flex-start;\n  flex-direction: column;\n  padding: 20px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.type-icon {\n  display: grid;\n  width: 37px;\n  height: 37px;\n  place-items: center;\n  border-radius: 8px;\n  color: #37714e;\n  background: #eaf3e7;\n}\n.type-icon mat-icon {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.type-card h2 {\n  margin: 16px 0 7px;\n  color: #2a3c31;\n  font: 600 16px/1.25 "Space Grotesk", sans-serif;\n}\n.type-card p {\n  flex: 1;\n  margin: 0 0 16px;\n  color: #728078;\n  font-size: 10px;\n  line-height: 1.6;\n}\n.type-card a {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.type-card a mat-icon {\n  width: 15px;\n  height: 15px;\n  margin-left: 5px;\n  font-size: 15px;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .type-page {\n    animation: none;\n  }\n}\n@media (max-width: 850px) {\n  .type-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 580px) {\n  .type-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .type-card {\n    min-height: 0;\n    padding: 17px;\n  }\n  h1 {\n    font-size: 24px;\n  }\n}\n/*# sourceMappingURL=request-type-selection.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestTypeSelectionComponent, { className: "RequestTypeSelectionComponent", filePath: "src/app/features/pages/request-type-selection/request-type-selection.component.ts", lineNumber: 24 });
})();
export {
  RequestTypeSelectionComponent
};
//# sourceMappingURL=chunk-TFRDY2NB.js.map
