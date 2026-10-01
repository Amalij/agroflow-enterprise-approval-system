import {
  MatCard,
  MatCardModule
} from "./chunk-QXMR3LDA.js";
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
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/administration/pages/administration-dashboard.component.ts
var _forTrack0 = ($index, $item) => $item.route;
function AdministrationDashboardComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "mat-card", 6)(2, "span", 7)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 8)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-icon", 9);
    \u0275\u0275text(11, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r1.route);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(link_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(link_r1.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r1.description);
  }
}
var _AdministrationDashboardComponent = class _AdministrationDashboardComponent {
  constructor() {
    this.links = [
      { title: "User Management", description: "Manage accounts, access roles, and department assignments.", route: "/admin/users", icon: "group" },
      { title: "Role Management", description: "Review the standard access roles available in AgroFlow.", route: "/admin/roles", icon: "badge" },
      { title: "Department Management", description: "Maintain organizational departments.", route: "/admin/departments", icon: "account_tree" },
      { title: "Approval Configuration", description: "Manage approval levels and amount thresholds.", route: "/admin/approval-configuration", icon: "rule" },
      { title: "System Settings", description: "Configure organization, currency, and notifications.", route: "/admin/settings", icon: "tune" },
      { title: "Audit Logs", description: "Review administrative and system activity.", route: "/admin/audit-logs", icon: "history" }
    ];
  }
};
_AdministrationDashboardComponent.\u0275fac = function AdministrationDashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AdministrationDashboardComponent)();
};
_AdministrationDashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdministrationDashboardComponent, selectors: [["app-administration-dashboard"]], decls: 12, vars: 0, consts: [["aria-labelledby", "administration-title", 1, "administration-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "administration-title"], [1, "admin-grid"], [1, "admin-link", 3, "routerLink"], ["appearance", "outlined"], [1, "icon-wrap"], [1, "link-copy"], [1, "arrow"]], template: function AdministrationDashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "WORKSPACE CONTROL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "Administration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Manage system configuration and administrative settings.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 4);
    \u0275\u0275repeaterCreate(10, AdministrationDashboardComponent_For_11_Template, 12, 4, "a", 5, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx.links);
  }
}, dependencies: [MatCardModule, MatCard, MatIconModule, MatIcon, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.administration-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 22px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 8px 0 2px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #71876f;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #20352a;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin: 9px 0 0;\n  color: #718078;\n  font-size: 14px;\n}\n.admin-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.admin-link[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.admin-link[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  min-height: 105px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 15px;\n  padding: 17px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  transition: border-color 160ms ease, transform 160ms ease;\n}\n.admin-link[_ngcontent-%COMP%]:hover   mat-card[_ngcontent-%COMP%], \n.admin-link[_ngcontent-%COMP%]:focus-visible   mat-card[_ngcontent-%COMP%] {\n  border-color: #9bb69c;\n  transform: translateY(-2px);\n}\n.icon-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  place-items: center;\n  border-radius: 8px;\n  background: #edf4ed;\n  color: #476c4c;\n}\n.link-copy[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 0;\n  gap: 5px;\n}\n.link-copy[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #283a2f;\n  font-size: 14px;\n}\n.link-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #718078;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #819085;\n}\n@media (max-width: 620px) {\n  .admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .admin-link[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=administration-dashboard.component.css.map */'] });
var AdministrationDashboardComponent = _AdministrationDashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdministrationDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-administration-dashboard", standalone: true, imports: [MatCardModule, MatIconModule, RouterLink], template: '<section class="administration-page" aria-labelledby="administration-title">\r\n  <header class="page-heading">\r\n    <div><p class="eyebrow">WORKSPACE CONTROL</p><h1 id="administration-title">Administration</h1><p>Manage system configuration and administrative settings.</p></div>\r\n  </header>\r\n  <div class="admin-grid">\r\n    @for (link of links; track link.route) {\r\n      <a class="admin-link" [routerLink]="link.route">\r\n        <mat-card appearance="outlined">\r\n          <span class="icon-wrap"><mat-icon>{{ link.icon }}</mat-icon></span>\r\n          <span class="link-copy"><strong>{{ link.title }}</strong><span>{{ link.description }}</span></span>\r\n          <mat-icon class="arrow">arrow_forward</mat-icon>\r\n        </mat-card>\r\n      </a>\r\n    }\r\n  </div>\r\n</section>', styles: ['/* src/app/features/administration/pages/administration-dashboard.component.scss */\n:host {\n  display: block;\n}\n.administration-page {\n  display: grid;\n  gap: 22px;\n}\n.page-heading {\n  padding: 8px 0 2px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #71876f;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\nh1 {\n  margin: 0;\n  color: #20352a;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.page-heading p:last-child {\n  margin: 9px 0 0;\n  color: #718078;\n  font-size: 14px;\n}\n.admin-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n.admin-link {\n  color: inherit;\n  text-decoration: none;\n}\n.admin-link mat-card {\n  min-height: 105px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 15px;\n  padding: 17px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  transition: border-color 160ms ease, transform 160ms ease;\n}\n.admin-link:hover mat-card,\n.admin-link:focus-visible mat-card {\n  border-color: #9bb69c;\n  transform: translateY(-2px);\n}\n.icon-wrap {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  flex: 0 0 42px;\n  place-items: center;\n  border-radius: 8px;\n  background: #edf4ed;\n  color: #476c4c;\n}\n.link-copy {\n  display: grid;\n  min-width: 0;\n  gap: 5px;\n}\n.link-copy strong {\n  color: #283a2f;\n  font-size: 14px;\n}\n.link-copy > span {\n  color: #718078;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.arrow {\n  margin-left: auto;\n  color: #819085;\n}\n@media (max-width: 620px) {\n  .admin-grid {\n    grid-template-columns: 1fr;\n  }\n  h1 {\n    font-size: 26px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .admin-link mat-card {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=administration-dashboard.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdministrationDashboardComponent, { className: "AdministrationDashboardComponent", filePath: "src/app/features/administration/pages/administration-dashboard.component.ts", lineNumber: 20 });
})();
export {
  AdministrationDashboardComponent
};
//# sourceMappingURL=chunk-RKZCTVZR.js.map
