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
  RouterLink
} from "./chunk-PEU3H2UL.js";
import "./chunk-FWRROCAB.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/access-denied/access-denied.component.ts
var _AccessDeniedComponent = class _AccessDeniedComponent {
};
_AccessDeniedComponent.\u0275fac = function AccessDeniedComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccessDeniedComponent)();
};
_AccessDeniedComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessDeniedComponent, selectors: [["app-access-denied"]], decls: 12, vars: 0, consts: [["aria-labelledby", "access-title", 1, "access-denied"], [1, "access-icon"], [1, "eyebrow"], ["id", "access-title"], ["mat-flat-button", "", "color", "primary", "routerLink", "/dashboard"]], template: function AccessDeniedComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "span", 1)(2, "mat-icon");
    \u0275\u0275text(3, "lock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "p", 2);
    \u0275\u0275text(5, "ACCESS RESTRICTED");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h1", 3);
    \u0275\u0275text(7, "You don't have approval access");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Your account does not have permission to open this approval workspace.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 4);
    \u0275\u0275text(11, "Return to Dashboard");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [MatButtonModule, MatButton, MatIconModule, MatIcon, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.access-denied[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 380px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 36px 20px;\n  text-align: center;\n}\n.access-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 18px;\n  place-items: center;\n  border-radius: 12px;\n  color: #a45b53;\n  background: #f8eae8;\n}\n.access-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  font-size: 23px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #8b6d56;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #26382d;\n  font: 600 24px/1.25 "Space Grotesk", sans-serif;\n}\np[_ngcontent-%COMP%]:not(.eyebrow) {\n  max-width: 390px;\n  margin: 10px 0 20px;\n  color: #78847b;\n  font-size: 12px;\n  line-height: 1.6;\n}\na[_ngcontent-%COMP%] {\n  min-height: 38px;\n  border-radius: 5px;\n  font-size: 11px;\n}\n/*# sourceMappingURL=access-denied.component.css.map */'] });
var AccessDeniedComponent = _AccessDeniedComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessDeniedComponent, [{
    type: Component,
    args: [{ selector: "app-access-denied", standalone: true, imports: [MatButtonModule, MatIconModule, RouterLink], template: `
    <section class="access-denied" aria-labelledby="access-title">
      <span class="access-icon"><mat-icon>lock</mat-icon></span>
      <p class="eyebrow">ACCESS RESTRICTED</p>
      <h1 id="access-title">You don't have approval access</h1>
      <p>Your account does not have permission to open this approval workspace.</p>
      <a mat-flat-button color="primary" routerLink="/dashboard">Return to Dashboard</a>
    </section>
  `, styles: ['/* angular:styles/component:scss;7a55886e3c307cedf91ab88dfb17b26381f59c039d97d506f194ce8bfb096ff4;C:/Users/R E V O/Desktop/Internship/agroflow-enterprise-approval-system/frontend/agroflow-frontend/src/app/features/pages/access-denied/access-denied.component.ts */\n:host {\n  display: block;\n}\n.access-denied {\n  display: flex;\n  min-height: 380px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 36px 20px;\n  text-align: center;\n}\n.access-icon {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 18px;\n  place-items: center;\n  border-radius: 12px;\n  color: #a45b53;\n  background: #f8eae8;\n}\n.access-icon mat-icon {\n  width: 23px;\n  height: 23px;\n  font-size: 23px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #8b6d56;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1 {\n  margin: 0;\n  color: #26382d;\n  font: 600 24px/1.25 "Space Grotesk", sans-serif;\n}\np:not(.eyebrow) {\n  max-width: 390px;\n  margin: 10px 0 20px;\n  color: #78847b;\n  font-size: 12px;\n  line-height: 1.6;\n}\na {\n  min-height: 38px;\n  border-radius: 5px;\n  font-size: 11px;\n}\n/*# sourceMappingURL=access-denied.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessDeniedComponent, { className: "AccessDeniedComponent", filePath: "src/app/features/pages/access-denied/access-denied.component.ts", lineNumber: 30 });
})();
export {
  AccessDeniedComponent
};
//# sourceMappingURL=chunk-YJZNZEQP.js.map
