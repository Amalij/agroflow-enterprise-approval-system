import {
  MatDivider,
  MatDividerModule
} from "./chunk-N7METAUH.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-IGEVX5VZ.js";
import "./chunk-EVUGFGV4.js";
import "./chunk-WZQ4T6AT.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-QXMR3LDA.js";
import "./chunk-DBRYW4UZ.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-A3MOLE3M.js";
import "./chunk-FWRROCAB.js";
import {
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/roles/roles-page.component.ts
var _forTrack0 = ($index, $item) => $item.name;
function RolesPageComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 6)(1, "div", 7)(2, "span", 8)(3, "mat-icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-chip-set")(6, "mat-chip", 9);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "mat-divider");
    \u0275\u0275elementStart(13, "div", 10)(14, "mat-icon");
    \u0275\u0275text(15, "lock_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17, "Access is assigned by an administrator.");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap("role-icon " + role_r1.tone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r1.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r1.scope);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(role_r1.description);
  }
}
var _RolesPageComponent = class _RolesPageComponent {
  constructor() {
    this.roles = [
      { name: "Admin", description: "Manage access and organization-wide configuration.", scope: "System administration", icon: "admin_panel_settings", tone: "forest" },
      { name: "Manager", description: "Coordinate department operations and review team activity.", scope: "Department oversight", icon: "manage_accounts", tone: "blue" },
      { name: "Approver", description: "Review assigned requests and record approval decisions.", scope: "Approval workflow", icon: "task_alt", tone: "amber" },
      { name: "Employee", description: "Create and track requests within the organization.", scope: "Standard access", icon: "person", tone: "sage" }
    ];
  }
};
_RolesPageComponent.\u0275fac = function RolesPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RolesPageComponent)();
};
_RolesPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RolesPageComponent, selectors: [["app-roles-page"]], decls: 12, vars: 0, consts: [["aria-labelledby", "roles-title", 1, "roles-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "roles-title"], [1, "description"], [1, "roles-grid"], ["appearance", "outlined", 1, "role-card"], [1, "role-card-heading"], [1, "role-icon"], [1, "role-chip"], [1, "role-footnote"]], template: function RolesPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "ACCESS MANAGEMENT");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, "Review the standard access roles available in AgroFlow.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275repeaterCreate(10, RolesPageComponent_For_11_Template, 18, 6, "mat-card", 6, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx.roles);
  }
}, dependencies: [MatCardModule, MatCard, MatChipsModule, MatChip, MatChipSet, MatDividerModule, MatDivider, MatIconModule, MatIcon], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.roles-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 4px 0 5px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.roles-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 13px;\n}\n.role-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 19px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.role-card-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.role-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 36px;\n  height: 36px;\n  flex: 0 0 36px;\n  place-items: center;\n  border-radius: 8px;\n}\n.role-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.role-icon.forest[_ngcontent-%COMP%] {\n  color: #37714e;\n  background: #eaf3e7;\n}\n.role-icon.blue[_ngcontent-%COMP%] {\n  color: #426f88;\n  background: #e8f1f5;\n}\n.role-icon.amber[_ngcontent-%COMP%] {\n  color: #a66c24;\n  background: #fbf0dd;\n}\n.role-icon.sage[_ngcontent-%COMP%] {\n  color: #687f5b;\n  background: #eef3e9;\n}\n.role-chip[_ngcontent-%COMP%] {\n  min-height: 24px;\n  border-radius: 4px !important;\n  color: #68776c;\n  background: #f2f5f1 !important;\n  font-size: 9px;\n  font-weight: 600;\n}\n.role-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 17px 0 6px;\n  color: #2a3c31;\n  font: 600 17px/1.25 "Space Grotesk", sans-serif;\n}\n.role-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  min-height: 38px;\n  margin: 0 0 16px;\n  color: #728078;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.role-footnote[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-top: 12px;\n  color: #8a958d;\n  font-size: 9px;\n}\n.role-footnote[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .roles-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 700px) {\n  .roles-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .role-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=roles-page.component.css.map */'] });
var RolesPageComponent = _RolesPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RolesPageComponent, [{
    type: Component,
    args: [{ selector: "app-roles-page", standalone: true, imports: [MatCardModule, MatChipsModule, MatDividerModule, MatIconModule], template: `<section class="roles-page" aria-labelledby="roles-title">\r
  <header class="page-heading">\r
    <div>\r
      <p class="eyebrow">ACCESS MANAGEMENT</p>\r
      <h1 id="roles-title">Roles</h1>\r
      <p class="description">Review the standard access roles available in AgroFlow.</p>\r
    </div>\r
  </header>\r
\r
  <div class="roles-grid">\r
    @for (role of roles; track role.name) {\r
      <mat-card class="role-card" appearance="outlined">\r
        <div class="role-card-heading">\r
          <span class="role-icon" [class]="'role-icon ' + role.tone"><mat-icon>{{ role.icon }}</mat-icon></span>\r
          <mat-chip-set><mat-chip class="role-chip">{{ role.scope }}</mat-chip></mat-chip-set>\r
        </div>\r
        <h2>{{ role.name }}</h2>\r
        <p>{{ role.description }}</p>\r
        <mat-divider></mat-divider>\r
        <div class="role-footnote"><mat-icon>lock_outline</mat-icon><span>Access is assigned by an administrator.</span></div>\r
      </mat-card>\r
    }\r
  </div>\r
</section>`, styles: ['/* src/app/features/pages/roles/roles-page.component.scss */\n:host {\n  display: block;\n}\n.roles-page {\n  display: flex;\n  flex-direction: column;\n  gap: 19px;\n  animation: arrive 260ms ease-out both;\n}\n.page-heading {\n  padding: 4px 0 5px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.roles-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 13px;\n}\n.role-card {\n  min-width: 0;\n  padding: 19px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.role-card-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n}\n.role-icon {\n  display: grid;\n  width: 36px;\n  height: 36px;\n  flex: 0 0 36px;\n  place-items: center;\n  border-radius: 8px;\n}\n.role-icon mat-icon {\n  width: 20px;\n  height: 20px;\n  font-size: 20px;\n}\n.role-icon.forest {\n  color: #37714e;\n  background: #eaf3e7;\n}\n.role-icon.blue {\n  color: #426f88;\n  background: #e8f1f5;\n}\n.role-icon.amber {\n  color: #a66c24;\n  background: #fbf0dd;\n}\n.role-icon.sage {\n  color: #687f5b;\n  background: #eef3e9;\n}\n.role-chip {\n  min-height: 24px;\n  border-radius: 4px !important;\n  color: #68776c;\n  background: #f2f5f1 !important;\n  font-size: 9px;\n  font-weight: 600;\n}\n.role-card h2 {\n  margin: 17px 0 6px;\n  color: #2a3c31;\n  font: 600 17px/1.25 "Space Grotesk", sans-serif;\n}\n.role-card > p {\n  min-height: 38px;\n  margin: 0 0 16px;\n  color: #728078;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.role-footnote {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-top: 12px;\n  color: #8a958d;\n  font-size: 9px;\n}\n.role-footnote mat-icon {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .roles-page {\n    animation: none;\n  }\n}\n@media (max-width: 700px) {\n  .roles-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .role-card {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=roles-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RolesPageComponent, { className: "RolesPageComponent", filePath: "src/app/features/pages/roles/roles-page.component.ts", lineNumber: 24 });
})();
export {
  RolesPageComponent
};
//# sourceMappingURL=chunk-C62BNDET.js.map
