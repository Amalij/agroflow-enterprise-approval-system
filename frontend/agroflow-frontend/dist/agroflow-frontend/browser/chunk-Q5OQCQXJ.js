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
  MatTableModule
} from "./chunk-N2QZREPG.js";
import "./chunk-4V2R5SHM.js";
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
import "./chunk-WG4DC2AT.js";
import "./chunk-WZQ4T6AT.js";
import {
  MatCard,
  MatCardModule
} from "./chunk-QXMR3LDA.js";
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
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/dashboard/dashboard-page.component.ts
var _forTrack0 = ($index, $item) => $item.label;
function DashboardPageComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 12)(1, "div", 43)(2, "span", 44);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 45)(5, "mat-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 46);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 47);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const metric_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(metric_r1.label);
    \u0275\u0275advance();
    \u0275\u0275classMap("metric-icon " + metric_r1.tone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(metric_r1.caption);
  }
}
function DashboardPageComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275classMap("status-segment " + item_r2.tone);
    \u0275\u0275styleProp("flex", item_r2.count);
  }
}
function DashboardPageComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "span");
    \u0275\u0275elementStart(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classMap("legend-dot " + item_r3.tone);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r3.count);
  }
}
function DashboardPageComponent_th_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Request ID");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.requestId);
  }
}
function DashboardPageComponent_th_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Request Type");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.requestType);
  }
}
function DashboardPageComponent_th_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.department);
  }
}
function DashboardPageComponent_th_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r7.amount);
  }
}
function DashboardPageComponent_th_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50)(1, "mat-chip-set")(2, "mat-chip");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-chip " + row_r8.statusTone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.status);
  }
}
function DashboardPageComponent_th_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.date);
  }
}
function DashboardPageComponent_tr_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 52);
  }
}
function DashboardPageComponent_tr_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
function DashboardPageComponent_th_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Request ID");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.requestId);
  }
}
function DashboardPageComponent_th_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Request Type");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.requestType);
  }
}
function DashboardPageComponent_th_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Requested by");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r12.requestedBy);
  }
}
function DashboardPageComponent_th_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 51);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r13.amount);
  }
}
function DashboardPageComponent_th_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49);
    \u0275\u0275text(1, "Submitted Date");
    \u0275\u0275elementEnd();
  }
}
function DashboardPageComponent_td_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r14.submittedDate);
  }
}
function DashboardPageComponent_th_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 49)(1, "span", 54);
    \u0275\u0275text(2, "Action");
    \u0275\u0275elementEnd()();
  }
}
function DashboardPageComponent_td_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50)(1, "a", 55);
    \u0275\u0275text(2, "Review");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", "/approvals/pending");
    \u0275\u0275attribute("aria-label", "Review " + row_r15.reference);
  }
}
function DashboardPageComponent_tr_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 52);
  }
}
function DashboardPageComponent_tr_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 53);
  }
}
var _DashboardPageComponent = class _DashboardPageComponent {
  constructor() {
    this.metrics = [
      { label: "My Requests", value: "18", caption: "Across all request types", icon: "description", tone: "green" },
      { label: "Pending Approvals", value: "06", caption: "Waiting for your review", icon: "pending_actions", tone: "amber" },
      { label: "Approved Requests", value: "42", caption: "Completed this month", icon: "task_alt", tone: "blue" },
      { label: "Rejected Requests", value: "03", caption: "Returned for follow-up", icon: "do_not_disturb_on", tone: "rose" }
    ];
    this.statusItems = [
      { label: "Pending", count: 9, tone: "pending" },
      { label: "Approved", count: 31, tone: "approved" },
      { label: "Rejected", count: 3, tone: "rejected" },
      { label: "Draft", count: 5, tone: "draft" }
    ];
    this.recentRequests = [
      { requestId: "REQ-2481", requestType: "Equipment Purchase", department: "Operations", amount: "$3,840.00", status: "Pending", statusTone: "pending", date: "28 Sep 2026" },
      { requestId: "REQ-2478", requestType: "Travel Advance", department: "Sales", amount: "$1,250.00", status: "Approved", statusTone: "approved", date: "27 Sep 2026" },
      { requestId: "REQ-2472", requestType: "Seed Inventory", department: "Agriculture", amount: "$6,780.00", status: "Draft", statusTone: "draft", date: "18 Sep 2026" },
      { requestId: "REQ-2465", requestType: "Vehicle Maintenance", department: "Logistics", amount: "$920.00", status: "Rejected", statusTone: "rejected", date: "16 Sep 2026" }
    ];
    this.pendingApprovals = [
      { requestId: "REQ-2484", requestType: "Safety Supplies", requestedBy: "Jordan Lee", amount: "$2,460.00", submittedDate: "28 Sep 2026" },
      { requestId: "REQ-2482", requestType: "Soil Testing", requestedBy: "Priya Shah", amount: "$1,875.00", submittedDate: "28 Sep 2026" },
      { requestId: "REQ-2479", requestType: "Equipment Repair", requestedBy: "Mateo Cruz", amount: "$4,320.00", submittedDate: "27 Sep 2026" }
    ];
    this.requestColumns = ["requestId", "requestType", "department", "amount", "status", "date"];
    this.approvalColumns = ["requestId", "requestType", "requestedBy", "amount", "submittedDate", "action"];
  }
  get statusTotal() {
    return this.statusItems.reduce((total, item) => total + item.count, 0);
  }
};
_DashboardPageComponent.\u0275fac = function DashboardPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardPageComponent)();
};
_DashboardPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardPageComponent, selectors: [["app-dashboard-page"]], decls: 113, vars: 7, consts: [["aria-labelledby", "dashboard-title", 1, "dashboard"], [1, "dashboard-header"], [1, "welcome-copy"], [1, "eyebrow"], ["id", "dashboard-title"], [1, "welcome-description"], ["aria-label", "Dashboard actions", 1, "quick-actions"], ["mat-flat-button", "", "color", "primary", "routerLink", "/requests/create"], ["mat-stroked-button", "", "routerLink", "/requests"], ["mat-stroked-button", "", "routerLink", "/approvals/pending"], [1, "dashboard-divider"], ["aria-label", "Request summary", 1, "metrics-grid"], ["appearance", "outlined", 1, "metric-card"], ["aria-label", "Request activity overview", 1, "overview-grid"], ["appearance", "outlined", 1, "panel", "status-panel"], [1, "panel-heading"], [1, "period-tag"], [1, "status-total"], ["role", "img", "aria-label", "Request status distribution", 1, "status-bar"], [3, "class", "flex"], [1, "status-legend"], [1, "legend-item"], ["appearance", "outlined", 1, "panel", "recent-panel"], ["routerLink", "/requests", 1, "text-link"], [1, "table-scroll"], ["mat-table", "", 1, "dashboard-table", "recent-table", 3, "dataSource"], ["matColumnDef", "requestId"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "requestType"], ["matColumnDef", "department"], ["matColumnDef", "amount"], ["mat-cell", "", "class", "amount-cell", 4, "matCellDef"], ["matColumnDef", "status"], ["matColumnDef", "date"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["appearance", "outlined", 1, "panel", "approvals-panel"], ["routerLink", "/approvals/pending", 1, "text-link"], ["mat-table", "", 1, "dashboard-table", "approval-table", 3, "dataSource"], ["matColumnDef", "requestedBy"], ["matColumnDef", "submittedDate"], ["matColumnDef", "action"], [1, "metric-topline"], [1, "metric-label"], [1, "metric-icon"], [1, "metric-value"], [1, "metric-caption"], [1, "legend-label"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-cell", "", 1, "amount-cell"], ["mat-header-row", ""], ["mat-row", ""], [1, "visually-hidden"], ["mat-button", "", 1, "review-link", 3, "routerLink"]], template: function DashboardPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div", 2)(3, "p", 3);
    \u0275\u0275text(4, "AGROFLOW WORKSPACE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 4);
    \u0275\u0275text(6, "Welcome to AgroFlow");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8, "Enterprise Workflow & Approval Management System");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "nav", 6)(10, "a", 7)(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " Create Request ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "a", 8)(15, "mat-icon");
    \u0275\u0275text(16, "list_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17, " My Requests ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "a", 9)(19, "mat-icon");
    \u0275\u0275text(20, "fact_check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Pending Approvals ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(22, "mat-divider", 10);
    \u0275\u0275elementStart(23, "section", 11);
    \u0275\u0275repeaterCreate(24, DashboardPageComponent_For_25_Template, 11, 6, "mat-card", 12, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "section", 13)(27, "mat-card", 14)(28, "div", 15)(29, "div")(30, "h2");
    \u0275\u0275text(31, "Request Status Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33, "All requests ");
    \u0275\u0275elementStart(34, "span", 16);
    \u0275\u0275text(35, "This month");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(36, "div", 17)(37, "strong");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span");
    \u0275\u0275text(40, "total requests");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 18);
    \u0275\u0275repeaterCreate(42, DashboardPageComponent_For_43_Template, 1, 4, "span", 19, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 20);
    \u0275\u0275repeaterCreate(45, DashboardPageComponent_For_46_Template, 6, 4, "div", 21, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "mat-card", 22)(48, "div", 15)(49, "div")(50, "h2");
    \u0275\u0275text(51, "Recent Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p");
    \u0275\u0275text(53, "Your latest submissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "a", 23);
    \u0275\u0275text(55, "View all ");
    \u0275\u0275elementStart(56, "mat-icon");
    \u0275\u0275text(57, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 24)(59, "table", 25);
    \u0275\u0275elementContainerStart(60, 26);
    \u0275\u0275template(61, DashboardPageComponent_th_61_Template, 2, 0, "th", 27)(62, DashboardPageComponent_td_62_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(63, 29);
    \u0275\u0275template(64, DashboardPageComponent_th_64_Template, 2, 0, "th", 27)(65, DashboardPageComponent_td_65_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(66, 30);
    \u0275\u0275template(67, DashboardPageComponent_th_67_Template, 2, 0, "th", 27)(68, DashboardPageComponent_td_68_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(69, 31);
    \u0275\u0275template(70, DashboardPageComponent_th_70_Template, 2, 0, "th", 27)(71, DashboardPageComponent_td_71_Template, 2, 1, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(72, 33);
    \u0275\u0275template(73, DashboardPageComponent_th_73_Template, 2, 0, "th", 27)(74, DashboardPageComponent_td_74_Template, 4, 3, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(75, 34);
    \u0275\u0275template(76, DashboardPageComponent_th_76_Template, 2, 0, "th", 27)(77, DashboardPageComponent_td_77_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(78, DashboardPageComponent_tr_78_Template, 1, 0, "tr", 35)(79, DashboardPageComponent_tr_79_Template, 1, 0, "tr", 36);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(80, "mat-card", 37)(81, "div", 15)(82, "div")(83, "h2");
    \u0275\u0275text(84, "Pending Approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "p");
    \u0275\u0275text(86, "Requests assigned to you for review");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(87, "a", 38);
    \u0275\u0275text(88, "View queue ");
    \u0275\u0275elementStart(89, "mat-icon");
    \u0275\u0275text(90, "arrow_forward");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "div", 24)(92, "table", 39);
    \u0275\u0275elementContainerStart(93, 26);
    \u0275\u0275template(94, DashboardPageComponent_th_94_Template, 2, 0, "th", 27)(95, DashboardPageComponent_td_95_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(96, 29);
    \u0275\u0275template(97, DashboardPageComponent_th_97_Template, 2, 0, "th", 27)(98, DashboardPageComponent_td_98_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(99, 40);
    \u0275\u0275template(100, DashboardPageComponent_th_100_Template, 2, 0, "th", 27)(101, DashboardPageComponent_td_101_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(102, 31);
    \u0275\u0275template(103, DashboardPageComponent_th_103_Template, 2, 0, "th", 27)(104, DashboardPageComponent_td_104_Template, 2, 1, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(105, 41);
    \u0275\u0275template(106, DashboardPageComponent_th_106_Template, 2, 0, "th", 27)(107, DashboardPageComponent_td_107_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(108, 42);
    \u0275\u0275template(109, DashboardPageComponent_th_109_Template, 3, 0, "th", 27)(110, DashboardPageComponent_td_110_Template, 3, 2, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(111, DashboardPageComponent_tr_111_Template, 1, 0, "tr", 35)(112, DashboardPageComponent_tr_112_Template, 1, 0, "tr", 36);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(24);
    \u0275\u0275repeater(ctx.metrics);
    \u0275\u0275advance(14);
    \u0275\u0275textInterpolate(ctx.statusTotal);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx.statusItems);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.statusItems);
    \u0275\u0275advance(14);
    \u0275\u0275property("dataSource", ctx.recentRequests);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx.requestColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.requestColumns);
    \u0275\u0275advance(13);
    \u0275\u0275property("dataSource", ctx.pendingApprovals);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx.approvalColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx.approvalColumns);
  }
}, dependencies: [MatButtonModule, MatButton, MatCardModule, MatCard, MatChipsModule, MatChip, MatChipSet, MatDividerModule, MatDivider, MatIconModule, MatIcon, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.dashboard[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 4px 0 3px;\n}\n.dashboard-divider[_ngcontent-%COMP%] {\n  border-top-color: #e2e9e3;\n}\n.welcome-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #708c68;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 29px/1.15 "Space Grotesk", sans-serif;\n}\n.welcome-description[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.quick-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 37px;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.quick-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  margin-right: 4px;\n  font-size: 17px;\n}\n.metrics-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.metric-card[_ngcontent-%COMP%], \n.panel[_ngcontent-%COMP%] {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.metric-card[_ngcontent-%COMP%] {\n  min-height: 126px;\n  padding: 15px 16px 13px;\n}\n.metric-topline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.metric-label[_ngcontent-%COMP%] {\n  color: #65746a;\n  font-size: 11px;\n  font-weight: 600;\n}\n.metric-icon[_ngcontent-%COMP%] {\n  display: grid;\n  width: 29px;\n  height: 29px;\n  flex: 0 0 29px;\n  place-items: center;\n  border-radius: 7px;\n}\n.metric-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.metric-icon.green[_ngcontent-%COMP%] {\n  color: #38744f;\n  background: #eaf3e7;\n}\n.metric-icon.amber[_ngcontent-%COMP%] {\n  color: #a66c24;\n  background: #fbf0dd;\n}\n.metric-icon.blue[_ngcontent-%COMP%] {\n  color: #426f88;\n  background: #e8f1f5;\n}\n.metric-icon.rose[_ngcontent-%COMP%] {\n  color: #a3544d;\n  background: #f8eae8;\n}\n.metric-value[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #20352a;\n  font: 600 26px/1 "Space Grotesk", sans-serif;\n}\n.metric-caption[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  color: #89948c;\n  font-size: 10px;\n}\n.overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(230px, 0.72fr) minmax(0, 1.7fr);\n  align-items: stretch;\n  gap: 12px;\n}\n.panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 17px 18px;\n}\n.panel-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.panel-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2a3c31;\n  font: 600 14px/1.3 "Space Grotesk", sans-serif;\n}\n.panel-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 10px;\n}\n.period-tag[_ngcontent-%COMP%] {\n  margin-left: 5px;\n  padding: 3px 6px;\n  border-radius: 3px;\n  color: #70846c;\n  background: #f0f5ed;\n  font-size: 9px;\n}\n.status-total[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 7px;\n  margin-top: 22px;\n}\n.status-total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #26392d;\n  font: 600 26px/1 "Space Grotesk", sans-serif;\n}\n.status-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8a958d;\n  font-size: 10px;\n}\n.status-bar[_ngcontent-%COMP%] {\n  display: flex;\n  height: 8px;\n  gap: 3px;\n  overflow: hidden;\n  margin-top: 13px;\n  border-radius: 5px;\n  background: #eff2ee;\n}\n.status-segment[_ngcontent-%COMP%] {\n  min-width: 4px;\n  border-radius: 5px;\n}\n.status-segment.draft[_ngcontent-%COMP%], \n.legend-dot.draft[_ngcontent-%COMP%] {\n  background: #bcc9bc;\n}\n.status-segment.pending[_ngcontent-%COMP%], \n.legend-dot.pending[_ngcontent-%COMP%] {\n  background: #dba44e;\n}\n.status-segment.approved[_ngcontent-%COMP%], \n.legend-dot.approved[_ngcontent-%COMP%] {\n  background: #70a870;\n}\n.status-segment.rejected[_ngcontent-%COMP%], \n.legend-dot.rejected[_ngcontent-%COMP%] {\n  background: #cb7770;\n}\n.status-legend[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 12px;\n  margin-top: 20px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 7px;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  flex: 0 0 7px;\n  border-radius: 50%;\n}\n.legend-label[_ngcontent-%COMP%] {\n  overflow: hidden;\n  flex: 1;\n  color: #76837a;\n  font-size: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.legend-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #35463b;\n  font-size: 10px;\n}\n.text-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #39734f;\n  font-size: 10px;\n  font-weight: 700;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.text-link[_ngcontent-%COMP%]:hover, \n.review-link[_ngcontent-%COMP%]:hover {\n  color: #1d4d35;\n}\n.text-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n}\n.table-scroll[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n  margin-top: 12px;\n}\n.dashboard-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: transparent;\n}\n.dashboard-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 31px;\n  color: #8a958d;\n  background: #f8faf7;\n  font-size: 9px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.dashboard-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 48px;\n  border-bottom-color: #edf1ed;\n  color: #69766d;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.dashboard-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.recent-table[_ngcontent-%COMP%] {\n  min-width: 760px;\n}\n.approval-table[_ngcontent-%COMP%] {\n  min-width: 780px;\n}\n.status-chip[_ngcontent-%COMP%] {\n  min-height: 23px;\n  border-radius: 4px !important;\n  font-size: 9px;\n  font-weight: 600;\n}\n.status-chip.pending[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #fbf1df;\n  --mdc-chip-label-text-color: #936322;\n}\n.status-chip.approved[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.status-chip.draft[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eef1ed;\n  --mdc-chip-label-text-color: #647267;\n}\n.status-chip.rejected[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #f8eae8;\n  --mdc-chip-label-text-color: #9e504a;\n}\n.amount-cell[_ngcontent-%COMP%] {\n  color: #33483a !important;\n  font-weight: 700;\n}\n.review-link[_ngcontent-%COMP%] {\n  min-width: auto;\n  padding: 0 8px;\n  color: #39734f;\n  font-size: 10px;\n  font-weight: 700;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .dashboard[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 1100px) {\n  .dashboard-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);\n  }\n}\n@media (max-width: 760px) {\n  .metrics-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .status-panel[_ngcontent-%COMP%] {\n    min-height: 230px;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard[_ngcontent-%COMP%] {\n    gap: 13px;\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    gap: 17px;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .welcome-description[_ngcontent-%COMP%] {\n    max-width: 300px;\n    line-height: 1.5;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    display: grid;\n    width: 100%;\n    grid-template-columns: 1fr 1fr;\n  }\n  .quick-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 0 8px;\n    font-size: 10px;\n  }\n  .quick-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child {\n    grid-column: 1/-1;\n  }\n  .metrics-grid[_ngcontent-%COMP%] {\n    gap: 9px;\n  }\n  .metric-card[_ngcontent-%COMP%] {\n    min-height: 118px;\n    padding: 12px;\n  }\n  .metric-label[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .metric-caption[_ngcontent-%COMP%] {\n    min-height: 24px;\n    line-height: 1.3;\n  }\n  .panel[_ngcontent-%COMP%] {\n    padding: 14px 13px;\n  }\n  .status-legend[_ngcontent-%COMP%] {\n    gap: 13px 8px;\n  }\n}\n/*# sourceMappingURL=dashboard-page.component.css.map */'] });
var DashboardPageComponent = _DashboardPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardPageComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-page", standalone: true, imports: [MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule, MatTableModule, RouterLink], template: `<section class="dashboard" aria-labelledby="dashboard-title">\r
  <header class="dashboard-header">\r
    <div class="welcome-copy">\r
      <p class="eyebrow">AGROFLOW WORKSPACE</p>\r
      <h1 id="dashboard-title">Welcome to AgroFlow</h1>\r
      <p class="welcome-description">Enterprise Workflow &amp; Approval Management System</p>\r
    </div>\r
    <nav class="quick-actions" aria-label="Dashboard actions">\r
      <a mat-flat-button color="primary" routerLink="/requests/create">\r
        <mat-icon>add</mat-icon>\r
        Create Request\r
      </a>\r
      <a mat-stroked-button routerLink="/requests">\r
        <mat-icon>list_alt</mat-icon>\r
        My Requests\r
      </a>\r
      <a mat-stroked-button routerLink="/approvals/pending">\r
        <mat-icon>fact_check</mat-icon>\r
        Pending Approvals\r
      </a>\r
    </nav>\r
  </header>\r
  <mat-divider class="dashboard-divider"></mat-divider>\r
\r
  <section class="metrics-grid" aria-label="Request summary">\r
    @for (metric of metrics; track metric.label) {\r
      <mat-card class="metric-card" appearance="outlined">\r
        <div class="metric-topline">\r
          <span class="metric-label">{{ metric.label }}</span>\r
          <span class="metric-icon" [class]="'metric-icon ' + metric.tone">\r
            <mat-icon>{{ metric.icon }}</mat-icon>\r
          </span>\r
        </div>\r
        <div class="metric-value">{{ metric.value }}</div>\r
        <div class="metric-caption">{{ metric.caption }}</div>\r
      </mat-card>\r
    }\r
  </section>\r
\r
  <section class="overview-grid" aria-label="Request activity overview">\r
    <mat-card class="panel status-panel" appearance="outlined">\r
      <div class="panel-heading">\r
        <div>\r
          <h2>Request Status Overview</h2>\r
          <p>All requests <span class="period-tag">This month</span></p>\r
        </div>\r
      </div>\r
\r
      <div class="status-total"><strong>{{ statusTotal }}</strong><span>total requests</span></div>\r
      <div class="status-bar" role="img" aria-label="Request status distribution">\r
        @for (item of statusItems; track item.label) {\r
          <span [class]="'status-segment ' + item.tone" [style.flex]="item.count"></span>\r
        }\r
      </div>\r
      <div class="status-legend">\r
        @for (item of statusItems; track item.label) {\r
          <div class="legend-item">\r
            <span [class]="'legend-dot ' + item.tone"></span>\r
            <span class="legend-label">{{ item.label }}</span>\r
            <strong>{{ item.count }}</strong>\r
          </div>\r
        }\r
      </div>\r
    </mat-card>\r
\r
    <mat-card class="panel recent-panel" appearance="outlined">\r
      <div class="panel-heading">\r
        <div>\r
          <h2>Recent Requests</h2>\r
          <p>Your latest submissions</p>\r
        </div>\r
        <a class="text-link" routerLink="/requests">View all <mat-icon>arrow_forward</mat-icon></a>\r
      </div>\r
\r
      <div class="table-scroll">\r
        <table mat-table [dataSource]="recentRequests" class="dashboard-table recent-table">\r
          <ng-container matColumnDef="requestId">\r
            <th mat-header-cell *matHeaderCellDef>Request ID</th>\r
            <td mat-cell *matCellDef="let row">{{ row.requestId }}</td>\r
          </ng-container>\r
          <ng-container matColumnDef="requestType">\r
            <th mat-header-cell *matHeaderCellDef>Request Type</th>\r
            <td mat-cell *matCellDef="let row">{{ row.requestType }}</td>\r
          </ng-container>\r
          <ng-container matColumnDef="department">\r
            <th mat-header-cell *matHeaderCellDef>Department</th>\r
            <td mat-cell *matCellDef="let row">{{ row.department }}</td>\r
          </ng-container>\r
          <ng-container matColumnDef="amount">\r
            <th mat-header-cell *matHeaderCellDef>Amount</th>\r
            <td mat-cell *matCellDef="let row" class="amount-cell">{{ row.amount }}</td>\r
          </ng-container>\r
          <ng-container matColumnDef="status">\r
            <th mat-header-cell *matHeaderCellDef>Status</th>\r
            <td mat-cell *matCellDef="let row">\r
              <mat-chip-set>\r
                <mat-chip [class]="'status-chip ' + row.statusTone">{{ row.status }}</mat-chip>\r
              </mat-chip-set>\r
            </td>\r
          </ng-container>\r
          <ng-container matColumnDef="date">\r
            <th mat-header-cell *matHeaderCellDef>Date</th>\r
            <td mat-cell *matCellDef="let row">{{ row.date }}</td>\r
          </ng-container>\r
          <tr mat-header-row *matHeaderRowDef="requestColumns"></tr>\r
          <tr mat-row *matRowDef="let row; columns: requestColumns"></tr>\r
        </table>\r
      </div>\r
    </mat-card>\r
  </section>\r
\r
  <mat-card class="panel approvals-panel" appearance="outlined">\r
    <div class="panel-heading">\r
      <div>\r
        <h2>Pending Approvals</h2>\r
        <p>Requests assigned to you for review</p>\r
      </div>\r
      <a class="text-link" routerLink="/approvals/pending">View queue <mat-icon>arrow_forward</mat-icon></a>\r
    </div>\r
\r
    <div class="table-scroll">\r
      <table mat-table [dataSource]="pendingApprovals" class="dashboard-table approval-table">\r
        <ng-container matColumnDef="requestId">\r
          <th mat-header-cell *matHeaderCellDef>Request ID</th>\r
          <td mat-cell *matCellDef="let row">{{ row.requestId }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="requestType">\r
          <th mat-header-cell *matHeaderCellDef>Request Type</th>\r
          <td mat-cell *matCellDef="let row">{{ row.requestType }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="requestedBy">\r
          <th mat-header-cell *matHeaderCellDef>Requested by</th>\r
          <td mat-cell *matCellDef="let row">{{ row.requestedBy }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="amount">\r
          <th mat-header-cell *matHeaderCellDef>Amount</th>\r
          <td mat-cell *matCellDef="let row" class="amount-cell">{{ row.amount }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="submittedDate">\r
          <th mat-header-cell *matHeaderCellDef>Submitted Date</th>\r
          <td mat-cell *matCellDef="let row">{{ row.submittedDate }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="action">\r
          <th mat-header-cell *matHeaderCellDef><span class="visually-hidden">Action</span></th>\r
          <td mat-cell *matCellDef="let row">\r
            <a mat-button class="review-link" [routerLink]="'/approvals/pending'" [attr.aria-label]="'Review ' + row.reference">Review</a>\r
          </td>\r
        </ng-container>\r
        <tr mat-header-row *matHeaderRowDef="approvalColumns"></tr>\r
        <tr mat-row *matRowDef="let row; columns: approvalColumns"></tr>\r
      </table>\r
    </div>\r
  </mat-card>\r
</section>`, styles: ['/* src/app/features/pages/dashboard/dashboard-page.component.scss */\n:host {\n  display: block;\n}\n.dashboard {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n  animation: arrive 260ms ease-out both;\n}\n.dashboard-header {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 4px 0 3px;\n}\n.dashboard-divider {\n  border-top-color: #e2e9e3;\n}\n.welcome-copy {\n  min-width: 0;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #708c68;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 29px/1.15 "Space Grotesk", sans-serif;\n}\n.welcome-description {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.quick-actions {\n  display: flex;\n  flex: 0 0 auto;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  gap: 8px;\n}\n.quick-actions a {\n  min-height: 37px;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.quick-actions mat-icon {\n  width: 17px;\n  height: 17px;\n  margin-right: 4px;\n  font-size: 17px;\n}\n.metrics-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.metric-card,\n.panel {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.metric-card {\n  min-height: 126px;\n  padding: 15px 16px 13px;\n}\n.metric-topline {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n.metric-label {\n  color: #65746a;\n  font-size: 11px;\n  font-weight: 600;\n}\n.metric-icon {\n  display: grid;\n  width: 29px;\n  height: 29px;\n  flex: 0 0 29px;\n  place-items: center;\n  border-radius: 7px;\n}\n.metric-icon mat-icon {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.metric-icon.green {\n  color: #38744f;\n  background: #eaf3e7;\n}\n.metric-icon.amber {\n  color: #a66c24;\n  background: #fbf0dd;\n}\n.metric-icon.blue {\n  color: #426f88;\n  background: #e8f1f5;\n}\n.metric-icon.rose {\n  color: #a3544d;\n  background: #f8eae8;\n}\n.metric-value {\n  margin-top: 10px;\n  color: #20352a;\n  font: 600 26px/1 "Space Grotesk", sans-serif;\n}\n.metric-caption {\n  margin-top: 7px;\n  color: #89948c;\n  font-size: 10px;\n}\n.overview-grid {\n  display: grid;\n  grid-template-columns: minmax(230px, 0.72fr) minmax(0, 1.7fr);\n  align-items: stretch;\n  gap: 12px;\n}\n.panel {\n  min-width: 0;\n  padding: 17px 18px;\n}\n.panel-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n}\n.panel-heading h2 {\n  margin: 0;\n  color: #2a3c31;\n  font: 600 14px/1.3 "Space Grotesk", sans-serif;\n}\n.panel-heading p {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 10px;\n}\n.period-tag {\n  margin-left: 5px;\n  padding: 3px 6px;\n  border-radius: 3px;\n  color: #70846c;\n  background: #f0f5ed;\n  font-size: 9px;\n}\n.status-total {\n  display: flex;\n  align-items: baseline;\n  gap: 7px;\n  margin-top: 22px;\n}\n.status-total strong {\n  color: #26392d;\n  font: 600 26px/1 "Space Grotesk", sans-serif;\n}\n.status-total span {\n  color: #8a958d;\n  font-size: 10px;\n}\n.status-bar {\n  display: flex;\n  height: 8px;\n  gap: 3px;\n  overflow: hidden;\n  margin-top: 13px;\n  border-radius: 5px;\n  background: #eff2ee;\n}\n.status-segment {\n  min-width: 4px;\n  border-radius: 5px;\n}\n.status-segment.draft,\n.legend-dot.draft {\n  background: #bcc9bc;\n}\n.status-segment.pending,\n.legend-dot.pending {\n  background: #dba44e;\n}\n.status-segment.approved,\n.legend-dot.approved {\n  background: #70a870;\n}\n.status-segment.rejected,\n.legend-dot.rejected {\n  background: #cb7770;\n}\n.status-legend {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 14px 12px;\n  margin-top: 20px;\n}\n.legend-item {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 7px;\n}\n.legend-dot {\n  width: 7px;\n  height: 7px;\n  flex: 0 0 7px;\n  border-radius: 50%;\n}\n.legend-label {\n  overflow: hidden;\n  flex: 1;\n  color: #76837a;\n  font-size: 10px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.legend-item strong {\n  color: #35463b;\n  font-size: 10px;\n}\n.text-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #39734f;\n  font-size: 10px;\n  font-weight: 700;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.text-link:hover,\n.review-link:hover {\n  color: #1d4d35;\n}\n.text-link mat-icon {\n  width: 14px;\n  height: 14px;\n  font-size: 14px;\n}\n.table-scroll {\n  width: 100%;\n  overflow-x: auto;\n  margin-top: 12px;\n}\n.dashboard-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: transparent;\n}\n.dashboard-table th {\n  height: 31px;\n  color: #8a958d;\n  background: #f8faf7;\n  font-size: 9px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.dashboard-table td {\n  height: 48px;\n  border-bottom-color: #edf1ed;\n  color: #69766d;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.dashboard-table tr:last-child td {\n  border-bottom: 0;\n}\n.recent-table {\n  min-width: 760px;\n}\n.approval-table {\n  min-width: 780px;\n}\n.status-chip {\n  min-height: 23px;\n  border-radius: 4px !important;\n  font-size: 9px;\n  font-weight: 600;\n}\n.status-chip.pending {\n  --mdc-chip-elevated-container-color: #fbf1df;\n  --mdc-chip-label-text-color: #936322;\n}\n.status-chip.approved {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.status-chip.draft {\n  --mdc-chip-elevated-container-color: #eef1ed;\n  --mdc-chip-label-text-color: #647267;\n}\n.status-chip.rejected {\n  --mdc-chip-elevated-container-color: #f8eae8;\n  --mdc-chip-label-text-color: #9e504a;\n}\n.amount-cell {\n  color: #33483a !important;\n  font-weight: 700;\n}\n.review-link {\n  min-width: auto;\n  padding: 0 8px;\n  color: #39734f;\n  font-size: 10px;\n  font-weight: 700;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .dashboard {\n    animation: none;\n  }\n}\n@media (max-width: 1100px) {\n  .dashboard-header {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .quick-actions {\n    justify-content: flex-start;\n  }\n  .overview-grid {\n    grid-template-columns: minmax(220px, 0.7fr) minmax(0, 1.3fr);\n  }\n}\n@media (max-width: 760px) {\n  .metrics-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .overview-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .status-panel {\n    min-height: 230px;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard {\n    gap: 13px;\n  }\n  .dashboard-header {\n    gap: 17px;\n  }\n  h1 {\n    font-size: 26px;\n  }\n  .welcome-description {\n    max-width: 300px;\n    line-height: 1.5;\n  }\n  .quick-actions {\n    display: grid;\n    width: 100%;\n    grid-template-columns: 1fr 1fr;\n  }\n  .quick-actions a {\n    justify-content: center;\n    padding: 0 8px;\n    font-size: 10px;\n  }\n  .quick-actions a:last-child {\n    grid-column: 1/-1;\n  }\n  .metrics-grid {\n    gap: 9px;\n  }\n  .metric-card {\n    min-height: 118px;\n    padding: 12px;\n  }\n  .metric-label {\n    font-size: 10px;\n  }\n  .metric-caption {\n    min-height: 24px;\n    line-height: 1.3;\n  }\n  .panel {\n    padding: 14px 13px;\n  }\n  .status-legend {\n    gap: 13px 8px;\n  }\n}\n/*# sourceMappingURL=dashboard-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardPageComponent, { className: "DashboardPageComponent", filePath: "src/app/features/pages/dashboard/dashboard-page.component.ts", lineNumber: 53 });
})();
export {
  DashboardPageComponent
};
//# sourceMappingURL=chunk-Q5OQCQXJ.js.map
