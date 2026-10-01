import {
  ActivatedRoute
} from "./chunk-PEU3H2UL.js";
import "./chunk-FWRROCAB.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/placeholder-page/placeholder-page.component.ts
var _PlaceholderPageComponent = class _PlaceholderPageComponent {
  constructor() {
    this.route = inject(ActivatedRoute);
  }
  get title() {
    return this.route.snapshot.data["title"] ?? "Workspace";
  }
};
_PlaceholderPageComponent.\u0275fac = function PlaceholderPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PlaceholderPageComponent)();
};
_PlaceholderPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaceholderPageComponent, selectors: [["app-placeholder-page"]], decls: 7, vars: 1, consts: [["aria-labelledby", "page-title", 1, "page-intro"], [1, "eyebrow"], ["id", "page-title"], [1, "intro-copy"]], template: function PlaceholderPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "section", 0)(1, "p", 1);
    \u0275\u0275text(2, "AGROFLOW WORKSPACE");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "h1", 2);
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "p", 3);
    \u0275\u0275text(6, "This area is ready for its feature view.");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.title);
  }
}, styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.page-intro[_ngcontent-%COMP%] {\n  padding: 12px 0 28px;\n  animation: _ngcontent-%COMP%_arrive 280ms ease-out both;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.intro-copy[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  color: #728078;\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(7px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .page-intro[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=placeholder-page.component.css.map */'] });
var PlaceholderPageComponent = _PlaceholderPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaceholderPageComponent, [{
    type: Component,
    args: [{ selector: "app-placeholder-page", standalone: true, template: `
    <section class="page-intro" aria-labelledby="page-title">
      <p class="eyebrow">AGROFLOW WORKSPACE</p>
      <h1 id="page-title">{{ title }}</h1>
      <p class="intro-copy">This area is ready for its feature view.</p>
    </section>
  `, styles: ['/* angular:styles/component:scss;8116cef44213ba420c6d7509893d845ed6fd63acdc944d6efa70bc4322f44adb;C:/Users/R E V O/Desktop/Internship/agroflow-enterprise-approval-system/frontend/agroflow-frontend/src/app/features/pages/placeholder-page/placeholder-page.component.ts */\n:host {\n  display: block;\n}\n.page-intro {\n  padding: 12px 0 28px;\n  animation: arrive 280ms ease-out both;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.intro-copy {\n  margin: 12px 0 0;\n  color: #728078;\n  font-size: 14px;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(7px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .page-intro {\n    animation: none;\n  }\n}\n/*# sourceMappingURL=placeholder-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaceholderPageComponent, { className: "PlaceholderPageComponent", filePath: "src/app/features/pages/placeholder-page/placeholder-page.component.ts", lineNumber: 24 });
})();
export {
  PlaceholderPageComponent
};
//# sourceMappingURL=chunk-P56LYMHT.js.map
