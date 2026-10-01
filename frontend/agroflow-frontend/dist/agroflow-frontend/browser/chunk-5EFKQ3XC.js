import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-3KUWR5NY.js";
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
  MatTableModule
} from "./chunk-N2QZREPG.js";
import "./chunk-4V2R5SHM.js";
import {
  REQUEST_TYPES
} from "./chunk-ZID7AZMT.js";
import {
  MatDividerModule
} from "./chunk-N7METAUH.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-CEFQC7DY.js";
import "./chunk-XIFJHBZC.js";
import {
  AuthService
} from "./chunk-FVZ63Q7G.js";
import "./chunk-AW4U6G7T.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-IGEVX5VZ.js";
import {
  MatFormField,
  MatLabel
} from "./chunk-EVUGFGV4.js";
import "./chunk-WG4DC2AT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-WZQ4T6AT.js";
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
  CurrencyPipe,
  DatePipe,
  HttpClient,
  HttpParams
} from "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
  Injectable,
  catchError,
  finalize,
  inject,
  isDevMode,
  map,
  of,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/reports/models/report.model.ts
var REPORT_STATUSES = ["Draft", "Pending", "Approved", "Rejected", "Returned", "Cancelled", "Completed"];

// src/app/features/reports/data/report-preview.data.ts
var REPORT_PREVIEW_DATA = {
  requests: [
    { requestId: "REQ-2026-0508", requestType: "Procurement", requester: "Priya Shah", department: "Agriculture", amount: 4860, status: "Pending", submittedAt: "2026-09-27T09:20:00Z" },
    { requestId: "REQ-2026-0502", requestType: "IOU", requester: "Noah Williams", department: "Agriculture", amount: 1120, status: "Pending", submittedAt: "2026-09-26T14:40:00Z" },
    { requestId: "REQ-2026-0491", requestType: "Petty Cash", requester: "Mina Chen", department: "Operations", amount: 340, status: "Returned", submittedAt: "2026-09-24T10:00:00Z" },
    { requestId: "REQ-2026-0478", requestType: "Procurement", requester: "Jordan Lee", department: "Procurement", amount: 2320, status: "Approved", submittedAt: "2026-09-22T08:15:00Z" },
    { requestId: "REQ-2026-0469", requestType: "IOU", requester: "Amara Patel", department: "Finance", amount: 580, status: "Rejected", submittedAt: "2026-09-19T11:45:00Z" },
    { requestId: "REQ-2026-0452", requestType: "Petty Cash", requester: "Ethan Okafor", department: "Operations", amount: 175, status: "Draft", submittedAt: "2026-09-17T13:00:00Z" },
    { requestId: "REQ-2026-0438", requestType: "Procurement", requester: "Leila Hassan", department: "Agriculture", amount: 3840, status: "Completed", submittedAt: "2026-09-12T09:10:00Z" },
    { requestId: "REQ-2026-0420", requestType: "IOU", requester: "Mina Chen", department: "Finance", amount: 760, status: "Cancelled", submittedAt: "2026-09-09T10:30:00Z" },
    { requestId: "REQ-2026-0396", requestType: "Petty Cash", requester: "Priya Shah", department: "Procurement", amount: 245, status: "Approved", submittedAt: "2026-09-02T07:40:00Z" }
  ],
  approvalActivities: [
    { id: "activity-1", requestId: "REQ-2026-0508", requestType: "Procurement", approver: "Daniel Kim", action: "Approved", date: "2026-09-27T11:10:00Z", comment: "Within the approved equipment plan.", department: "Agriculture", requester: "Priya Shah" },
    { id: "activity-2", requestId: "REQ-2026-0491", requestType: "Petty Cash", approver: "Leila Hassan", action: "Returned", date: "2026-09-25T09:30:00Z", comment: "Please attach the itemized receipt.", department: "Operations", requester: "Mina Chen" },
    { id: "activity-3", requestId: "REQ-2026-0469", requestType: "IOU", approver: "Ravi Perera", action: "Rejected", date: "2026-09-20T08:55:00Z", comment: "Please reconcile the previous advance first.", department: "Finance", requester: "Amara Patel" },
    { id: "activity-4", requestId: "REQ-2026-0438", requestType: "Procurement", approver: "Amara Patel", action: "Approved", date: "2026-09-13T14:05:00Z", comment: "Approved after finance review.", department: "Agriculture", requester: "Leila Hassan" },
    { id: "activity-5", requestId: "REQ-2026-0396", requestType: "Petty Cash", approver: "Daniel Kim", action: "Approved", date: "2026-09-03T10:15:00Z", comment: "Within the department limit.", department: "Procurement", requester: "Priya Shah" }
  ]
};

// src/app/features/reports/services/report.service.ts
var REQUEST_TYPES2 = ["IOU", "Petty Cash", "Procurement"];
var _ReportService = class _ReportService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = "http://localhost:8080/api/reports";
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.previewMode = signal(false, ...ngDevMode ? [{ debugName: "previewMode" }] : []);
    this.errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
    this.departmentOptions = signal([], ...ngDevMode ? [{ debugName: "departmentOptions" }] : []);
    this.snapshot = signal(null, ...ngDevMode ? [{ debugName: "snapshot" }] : []);
  }
  loadReport(filters) {
    this.loading.set(true);
    this.errorMessage.set("");
    return this.http.get(this.apiUrl, { params: this.toHttpParams(filters) }).pipe(map((dataset) => {
      this.previewMode.set(false);
      this.updateDepartmentOptions(dataset);
      return this.aggregate(dataset, filters);
    }), catchError((error) => {
      if (isDevMode()) {
        this.previewMode.set(true);
        this.updateDepartmentOptions(REPORT_PREVIEW_DATA);
        return of(this.aggregate(REPORT_PREVIEW_DATA, filters));
      }
      this.previewMode.set(false);
      this.errorMessage.set("Reports could not be loaded. Please try again later.");
      return throwError(() => error);
    }), tap((snapshot) => this.snapshot.set(snapshot)), finalize(() => this.loading.set(false)));
  }
  buildPreview(filters) {
    return this.aggregate(REPORT_PREVIEW_DATA, filters);
  }
  aggregate(dataset, filters) {
    const requests = dataset.requests.filter((request) => this.matchesRequest(request, filters));
    const requestIds = new Set(requests.map((request) => request.requestId));
    const activities = dataset.approvalActivities.filter((activity) => requestIds.has(activity.requestId));
    const statusCounts = this.createStatusCounts();
    for (const request of requests)
      statusCounts[request.status] += 1;
    const summary = {
      totalRequests: requests.length,
      pendingRequests: statusCounts.Pending,
      approvedRequests: statusCounts.Approved,
      rejectedRequests: statusCounts.Rejected,
      totalRequestedAmount: this.sumAmounts(requests),
      statusCounts
    };
    return {
      summary,
      statusOverview: this.createStatusOverview(statusCounts, requests.length),
      departmentReports: this.groupByDepartment(requests),
      requestTypeReports: this.groupByRequestType(requests),
      approvalActivities: activities.sort((left, right) => Date.parse(right.date) - Date.parse(left.date))
    };
  }
  matchesRequest(request, filters) {
    const matchesDepartment = filters.department === "all" || request.department === filters.department;
    const matchesType = filters.requestType === "all" || request.requestType === filters.requestType;
    const matchesStatus = filters.status === "all" || request.status === filters.status;
    const matchesRequester = !filters.requestedBy || request.requester.toLocaleLowerCase().includes(filters.requestedBy.trim().toLocaleLowerCase());
    const requestDate = request.submittedAt.slice(0, 10);
    return matchesDepartment && matchesType && matchesStatus && matchesRequester && (!filters.dateFrom || requestDate >= filters.dateFrom) && (!filters.dateTo || requestDate <= filters.dateTo);
  }
  createStatusCounts() {
    return { Draft: 0, Pending: 0, Approved: 0, Rejected: 0, Returned: 0, Cancelled: 0, Completed: 0 };
  }
  createStatusOverview(statusCounts, total) {
    const statuses = ["Draft", "Pending", "Approved", "Rejected", "Returned", "Completed"];
    return statuses.map((status) => ({
      status,
      count: statusCounts[status],
      percentage: total ? Math.round(statusCounts[status] / total * 100) : 0
    }));
  }
  updateDepartmentOptions(dataset) {
    this.departmentOptions.set([...new Set(dataset.requests.map((request) => request.department))].sort());
  }
  groupByDepartment(requests) {
    const groups = /* @__PURE__ */ new Map();
    for (const request of requests)
      groups.set(request.department, [...groups.get(request.department) ?? [], request]);
    return [...groups.entries()].map(([department, records]) => ({
      department,
      totalRequests: records.length,
      pending: records.filter((record) => record.status === "Pending").length,
      approved: records.filter((record) => record.status === "Approved").length,
      rejected: records.filter((record) => record.status === "Rejected").length,
      totalAmount: this.sumAmounts(records)
    })).sort((left, right) => left.department.localeCompare(right.department));
  }
  groupByRequestType(requests) {
    return REQUEST_TYPES2.map((requestType) => {
      const records = requests.filter((request) => request.requestType === requestType);
      return {
        requestType,
        totalRequests: records.length,
        pending: records.filter((record) => record.status === "Pending").length,
        approved: records.filter((record) => record.status === "Approved").length,
        rejected: records.filter((record) => record.status === "Rejected").length,
        totalAmount: this.sumAmounts(records)
      };
    });
  }
  sumAmounts(requests) {
    return Math.round(requests.reduce((total, request) => total + request.amount, 0) * 100) / 100;
  }
  toHttpParams(filters) {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(filters)) {
      if (value && value !== "all")
        params = params.set(key, value);
    }
    return params;
  }
};
_ReportService.\u0275fac = function ReportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportService)();
};
_ReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportService, factory: _ReportService.\u0275fac, providedIn: "root" });
var ReportService = _ReportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/pages/reports/reports-page.component.ts
var _forTrack0 = ($index, $item) => $item.status;
function ReportsPageComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Development preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Report figures are temporary sample data.");
    \u0275\u0275elementEnd()();
  }
}
function ReportsPageComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon");
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function ReportsPageComponent_Conditional_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applyFilters());
    });
    \u0275\u0275text(6, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.reportService.errorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function ReportsPageComponent_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r3 = ctx.$implicit;
    \u0275\u0275property("value", department_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(department_r3);
  }
}
function ReportsPageComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r4 = ctx.$implicit;
    \u0275\u0275property("value", type_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r4);
  }
}
function ReportsPageComponent_For_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r5 = ctx.$implicit;
    \u0275\u0275property("value", status_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r5);
  }
}
function ReportsPageComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "Date From must be on or before Date To.");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-progress-spinner", 26);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading reports\u2026");
    \u0275\u0275elementEnd()();
  }
}
function ReportsPageComponent_Conditional_70_For_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const status_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap("status-segment " + ctx_r1.statusTone(status_r6.status));
    \u0275\u0275styleProp("flex", status_r6.count || 0.2);
  }
}
function ReportsPageComponent_Conditional_70_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "span");
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const status_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("legend-dot " + ctx_r1.statusTone(status_r7.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r7.status);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(status_r7.count);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", status_r7.percentage, "%");
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r8.department);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Total Requests");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r9.totalRequests);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Pending");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r10.pending);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Approved");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r11.approved);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Rejected");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r12.rejected);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Total Amount");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, row_r13.totalAmount, "USD", "symbol", "1.0-2"));
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 62);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 63);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "table", 44);
    \u0275\u0275elementContainerStart(2, 57);
    \u0275\u0275template(3, ReportsPageComponent_Conditional_70_Conditional_60_th_3_Template, 2, 0, "th", 46)(4, ReportsPageComponent_Conditional_70_Conditional_60_td_4_Template, 2, 1, "td", 47);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 48);
    \u0275\u0275template(6, ReportsPageComponent_Conditional_70_Conditional_60_th_6_Template, 2, 0, "th", 46)(7, ReportsPageComponent_Conditional_70_Conditional_60_td_7_Template, 2, 1, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 50);
    \u0275\u0275template(9, ReportsPageComponent_Conditional_70_Conditional_60_th_9_Template, 2, 0, "th", 46)(10, ReportsPageComponent_Conditional_70_Conditional_60_td_10_Template, 2, 1, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 51);
    \u0275\u0275template(12, ReportsPageComponent_Conditional_70_Conditional_60_th_12_Template, 2, 0, "th", 46)(13, ReportsPageComponent_Conditional_70_Conditional_60_td_13_Template, 2, 1, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 52);
    \u0275\u0275template(15, ReportsPageComponent_Conditional_70_Conditional_60_th_15_Template, 2, 0, "th", 46)(16, ReportsPageComponent_Conditional_70_Conditional_60_td_16_Template, 2, 1, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 53);
    \u0275\u0275template(18, ReportsPageComponent_Conditional_70_Conditional_60_th_18_Template, 2, 0, "th", 46)(19, ReportsPageComponent_Conditional_70_Conditional_60_td_19_Template, 3, 6, "td", 54);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, ReportsPageComponent_Conditional_70_Conditional_60_tr_20_Template, 1, 0, "tr", 55)(21, ReportsPageComponent_Conditional_70_Conditional_60_tr_21_Template, 1, 0, "tr", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const currentReport_r14 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", currentReport_r14.departmentReports);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.departmentColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.departmentColumns);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, "No department data matches these filters.");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_th_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Request Type");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_td_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r15.requestType);
  }
}
function ReportsPageComponent_Conditional_70_th_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Total Requests");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_td_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r16.totalRequests);
  }
}
function ReportsPageComponent_Conditional_70_th_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Pending");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_td_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r17.pending);
  }
}
function ReportsPageComponent_Conditional_70_th_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Approved");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_td_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r18.approved);
  }
}
function ReportsPageComponent_Conditional_70_th_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Rejected");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_td_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r19.rejected);
  }
}
function ReportsPageComponent_Conditional_70_th_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Total Amount");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_td_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, row_r20.totalAmount, "USD", "symbol", "1.0-2"));
  }
}
function ReportsPageComponent_Conditional_70_tr_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 62);
  }
}
function ReportsPageComponent_Conditional_70_tr_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 63);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Request ID");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r21.requestId);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Request Type");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r22 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r22.requestType);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Approver");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r23.approver);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60)(1, "mat-chip-set")(2, "mat-chip");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("activity-chip " + ctx_r1.statusTone(row_r24.action));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r24.action);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Date");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, row_r25.date, "mediumDate"));
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 58);
    \u0275\u0275text(1, "Comment");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 71);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r26 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r26.comment || "\u2014");
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 62);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 63);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "table", 64);
    \u0275\u0275elementContainerStart(2, 65);
    \u0275\u0275template(3, ReportsPageComponent_Conditional_70_Conditional_98_th_3_Template, 2, 0, "th", 46)(4, ReportsPageComponent_Conditional_70_Conditional_98_td_4_Template, 2, 1, "td", 47);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 45);
    \u0275\u0275template(6, ReportsPageComponent_Conditional_70_Conditional_98_th_6_Template, 2, 0, "th", 46)(7, ReportsPageComponent_Conditional_70_Conditional_98_td_7_Template, 2, 1, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 66);
    \u0275\u0275template(9, ReportsPageComponent_Conditional_70_Conditional_98_th_9_Template, 2, 0, "th", 46)(10, ReportsPageComponent_Conditional_70_Conditional_98_td_10_Template, 2, 1, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 67);
    \u0275\u0275template(12, ReportsPageComponent_Conditional_70_Conditional_98_th_12_Template, 2, 0, "th", 46)(13, ReportsPageComponent_Conditional_70_Conditional_98_td_13_Template, 4, 3, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 68);
    \u0275\u0275template(15, ReportsPageComponent_Conditional_70_Conditional_98_th_15_Template, 2, 0, "th", 46)(16, ReportsPageComponent_Conditional_70_Conditional_98_td_16_Template, 3, 4, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 69);
    \u0275\u0275template(18, ReportsPageComponent_Conditional_70_Conditional_98_th_18_Template, 2, 0, "th", 46)(19, ReportsPageComponent_Conditional_70_Conditional_98_td_19_Template, 2, 1, "td", 70);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, ReportsPageComponent_Conditional_70_Conditional_98_tr_20_Template, 1, 0, "tr", 55)(21, ReportsPageComponent_Conditional_70_Conditional_98_tr_21_Template, 1, 0, "tr", 56);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const currentReport_r14 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", currentReport_r14.approvalActivities);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.activityColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.activityColumns);
  }
}
function ReportsPageComponent_Conditional_70_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1, "No approval activity matches these filters.");
    \u0275\u0275elementEnd();
  }
}
function ReportsPageComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 27)(1, "mat-card", 28)(2, "span");
    \u0275\u0275text(3, "Total Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-card", 29)(9, "span");
    \u0275\u0275text(10, "Pending Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "pending_actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "mat-card", 30)(16, "span");
    \u0275\u0275text(17, "Approved Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "task_alt");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-card", 31)(23, "span");
    \u0275\u0275text(24, "Rejected Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28, "do_not_disturb_on");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-card", 32)(30, "span");
    \u0275\u0275text(31, "Total Requested Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "strong");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-icon");
    \u0275\u0275text(36, "payments");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(37, "mat-card", 33)(38, "div", 34)(39, "div")(40, "h2");
    \u0275\u0275text(41, "Request Status Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "p");
    \u0275\u0275text(43, "Distribution across filtered requests.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "span", 35);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 36)(47, "div", 37);
    \u0275\u0275repeaterCreate(48, ReportsPageComponent_Conditional_70_For_49_Template, 1, 4, "span", 38, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 39);
    \u0275\u0275repeaterCreate(51, ReportsPageComponent_Conditional_70_For_52_Template, 8, 5, "div", 40, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(53, "mat-card", 41)(54, "div", 34)(55, "div")(56, "h2");
    \u0275\u0275text(57, "Department Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p");
    \u0275\u0275text(59, "Request volume and amount by department.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(60, ReportsPageComponent_Conditional_70_Conditional_60_Template, 22, 3, "div", 42)(61, ReportsPageComponent_Conditional_70_Conditional_61_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "mat-card", 41)(63, "div", 34)(64, "div")(65, "h2");
    \u0275\u0275text(66, "Request Type Summary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "p");
    \u0275\u0275text(68, "Volume and amount across IOU, Petty Cash, and Procurement.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 42)(70, "table", 44);
    \u0275\u0275elementContainerStart(71, 45);
    \u0275\u0275template(72, ReportsPageComponent_Conditional_70_th_72_Template, 2, 0, "th", 46)(73, ReportsPageComponent_Conditional_70_td_73_Template, 2, 1, "td", 47);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(74, 48);
    \u0275\u0275template(75, ReportsPageComponent_Conditional_70_th_75_Template, 2, 0, "th", 46)(76, ReportsPageComponent_Conditional_70_td_76_Template, 2, 1, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(77, 50);
    \u0275\u0275template(78, ReportsPageComponent_Conditional_70_th_78_Template, 2, 0, "th", 46)(79, ReportsPageComponent_Conditional_70_td_79_Template, 2, 1, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(80, 51);
    \u0275\u0275template(81, ReportsPageComponent_Conditional_70_th_81_Template, 2, 0, "th", 46)(82, ReportsPageComponent_Conditional_70_td_82_Template, 2, 1, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(83, 52);
    \u0275\u0275template(84, ReportsPageComponent_Conditional_70_th_84_Template, 2, 0, "th", 46)(85, ReportsPageComponent_Conditional_70_td_85_Template, 2, 1, "td", 49);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(86, 53);
    \u0275\u0275template(87, ReportsPageComponent_Conditional_70_th_87_Template, 2, 0, "th", 46)(88, ReportsPageComponent_Conditional_70_td_88_Template, 3, 6, "td", 54);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(89, ReportsPageComponent_Conditional_70_tr_89_Template, 1, 0, "tr", 55)(90, ReportsPageComponent_Conditional_70_tr_90_Template, 1, 0, "tr", 56);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "mat-card", 41)(92, "div", 34)(93, "div")(94, "h2");
    \u0275\u0275text(95, "Approval Activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "p");
    \u0275\u0275text(97, "Recent decisions and reviewer comments.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(98, ReportsPageComponent_Conditional_70_Conditional_98_Template, 22, 3, "div", 42)(99, ReportsPageComponent_Conditional_70_Conditional_99_Template, 2, 0, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currentReport_r14 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentReport_r14.summary.totalRequests);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(currentReport_r14.summary.pendingRequests);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(currentReport_r14.summary.approvedRequests);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(currentReport_r14.summary.rejectedRequests);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(34, 11, currentReport_r14.summary.totalRequestedAmount, "USD", "symbol", "1.0-2"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1("", currentReport_r14.summary.totalRequests, " requests");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(currentReport_r14.statusOverview);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(currentReport_r14.statusOverview);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(currentReport_r14.departmentReports.length ? 60 : 61);
    \u0275\u0275advance(10);
    \u0275\u0275property("dataSource", currentReport_r14.requestTypeReports);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.requestTypeColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.requestTypeColumns);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(currentReport_r14.approvalActivities.length ? 98 : 99);
  }
}
var dateRangeValidator = (control) => {
  const { dateFrom, dateTo } = control.value;
  return dateFrom && dateTo && dateFrom > dateTo ? { invalidDateRange: true } : null;
};
var _ReportsPageComponent = class _ReportsPageComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.reportService = inject(ReportService);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.requestTypes = REQUEST_TYPES;
    this.statuses = REPORT_STATUSES;
    this.departmentColumns = ["department", "totalRequests", "pending", "approved", "rejected", "totalAmount"];
    this.requestTypeColumns = ["requestType", "totalRequests", "pending", "approved", "rejected", "totalAmount"];
    this.activityColumns = ["requestId", "requestType", "approver", "action", "date", "comment"];
    this.filters = new FormGroup({
      dateFrom: new FormControl("", { nonNullable: true }),
      dateTo: new FormControl("", { nonNullable: true }),
      department: new FormControl("all", { nonNullable: true }),
      requestType: new FormControl("all", { nonNullable: true }),
      status: new FormControl("all", { nonNullable: true }),
      requestedBy: new FormControl("", { nonNullable: true })
    }, { validators: dateRangeValidator });
    this.loading = false;
    this.hasLoaded = false;
  }
  ngOnInit() {
    this.applyFilters();
  }
  get report() {
    return this.reportService.snapshot();
  }
  get departmentOptions() {
    return this.reportService.departmentOptions();
  }
  get dateRangeInvalid() {
    return this.filters.hasError("invalidDateRange");
  }
  applyFilters() {
    if (this.dateRangeInvalid) {
      this.filters.controls.dateFrom.markAsTouched();
      this.filters.controls.dateTo.markAsTouched();
      return;
    }
    const user = this.authService.currentUser();
    if (!user)
      return;
    const filter = this.filters.getRawValue();
    this.loading = true;
    this.reportService.loadReport(filter).pipe(tap({ error: () => void 0 }), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.loading = false;
        this.hasLoaded = true;
      },
      error: () => {
        this.loading = false;
        this.hasLoaded = true;
      }
    });
  }
  resetFilters() {
    this.filters.reset({ dateFrom: "", dateTo: "", department: "all", requestType: "all", status: "all", requestedBy: "" });
    this.applyFilters();
  }
  exportReport() {
    const message = this.reportService.previewMode() ? "Export is unavailable for temporary preview data." : "Report export is not configured yet.";
    this.snackBar.open(message, "Dismiss", { duration: 3500 });
  }
  statusTone(status) {
    return status.toLocaleLowerCase();
  }
};
_ReportsPageComponent.\u0275fac = function ReportsPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsPageComponent)();
};
_ReportsPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsPageComponent, selectors: [["app-reports-page"]], decls: 71, vars: 8, consts: [["aria-labelledby", "reports-title", 1, "reports-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "reports-title"], [1, "description"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["role", "status", 1, "preview-notice"], ["role", "alert", 1, "error-notice"], ["appearance", "outlined", 1, "filter-card"], [1, "filter-heading"], [1, "filters-grid", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "type", "date", "formControlName", "dateFrom"], ["matInput", "", "type", "date", "formControlName", "dateTo"], ["formControlName", "department"], ["value", "all"], [3, "value"], ["formControlName", "requestType"], ["formControlName", "status"], ["matInput", "", "formControlName", "requestedBy", "placeholder", "Search requester"], ["role", "alert", 1, "filter-error"], [1, "filter-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "loading-state"], ["mat-button", "", "type", "button", 3, "click", "disabled"], ["mode", "indeterminate", "diameter", "36", "aria-label", "Loading reports"], ["aria-label", "Report summary", 1, "summary-grid"], ["appearance", "outlined", 1, "summary-card"], ["appearance", "outlined", 1, "summary-card", "pending"], ["appearance", "outlined", 1, "summary-card", "approved"], ["appearance", "outlined", 1, "summary-card", "rejected"], ["appearance", "outlined", 1, "summary-card", "amount"], ["appearance", "outlined", 1, "report-card", "status-card"], [1, "section-heading"], [1, "total-caption"], [1, "status-content"], ["role", "img", "aria-label", "Request status distribution", 1, "status-bar"], [3, "class", "flex"], [1, "status-legend"], [1, "legend-item"], ["appearance", "outlined", 1, "report-card", "table-card"], [1, "table-wrap"], [1, "small-empty"], ["mat-table", "", 1, "report-table", 3, "dataSource"], ["matColumnDef", "requestType"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "primary-cell", 4, "matCellDef"], ["matColumnDef", "totalRequests"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "pending"], ["matColumnDef", "approved"], ["matColumnDef", "rejected"], ["matColumnDef", "totalAmount"], ["mat-cell", "", "class", "amount-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["matColumnDef", "department"], ["mat-header-cell", ""], ["mat-cell", "", 1, "primary-cell"], ["mat-cell", ""], ["mat-cell", "", 1, "amount-cell"], ["mat-header-row", ""], ["mat-row", ""], ["mat-table", "", 1, "report-table", "activity-table", 3, "dataSource"], ["matColumnDef", "requestId"], ["matColumnDef", "approver"], ["matColumnDef", "action"], ["matColumnDef", "date"], ["matColumnDef", "comment"], ["mat-cell", "", "class", "comment-cell", 4, "matCellDef"], ["mat-cell", "", 1, "comment-cell"]], template: function ReportsPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "ANALYTICS WORKSPACE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "Reports");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, "View workflow, request and approval reports.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function ReportsPageComponent_Template_button_click_9_listener() {
      return ctx.exportReport();
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "Export Report");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, ReportsPageComponent_Conditional_13_Template, 7, 0, "div", 6);
    \u0275\u0275conditionalCreate(14, ReportsPageComponent_Conditional_14_Template, 7, 2, "div", 7);
    \u0275\u0275elementStart(15, "mat-card", 8)(16, "div", 9)(17, "div")(18, "h2");
    \u0275\u0275text(19, "Report Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21, "Set criteria, then apply to refresh all sections.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "form", 10);
    \u0275\u0275listener("ngSubmit", function ReportsPageComponent_Template_form_ngSubmit_22_listener() {
      return ctx.applyFilters();
    });
    \u0275\u0275elementStart(23, "mat-form-field", 11)(24, "mat-label");
    \u0275\u0275text(25, "Date From");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-form-field", 11)(28, "mat-label");
    \u0275\u0275text(29, "Date To");
    \u0275\u0275elementEnd();
    \u0275\u0275element(30, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 11)(32, "mat-label");
    \u0275\u0275text(33, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 14)(35, "mat-option", 15);
    \u0275\u0275text(36, "All departments");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(37, ReportsPageComponent_For_38_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "mat-form-field", 11)(40, "mat-label");
    \u0275\u0275text(41, "Request Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-select", 17)(43, "mat-option", 15);
    \u0275\u0275text(44, "All types");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(45, ReportsPageComponent_For_46_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "mat-form-field", 11)(48, "mat-label");
    \u0275\u0275text(49, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "mat-select", 18)(51, "mat-option", 15);
    \u0275\u0275text(52, "All statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(53, ReportsPageComponent_For_54_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "mat-form-field", 11)(56, "mat-label");
    \u0275\u0275text(57, "Requested By");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "input", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(59, ReportsPageComponent_Conditional_59_Template, 2, 0, "p", 20);
    \u0275\u0275elementStart(60, "div", 21)(61, "button", 22);
    \u0275\u0275listener("click", function ReportsPageComponent_Template_button_click_61_listener() {
      return ctx.resetFilters();
    });
    \u0275\u0275elementStart(62, "mat-icon");
    \u0275\u0275text(63, "restart_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, "Reset Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "button", 23)(66, "mat-icon");
    \u0275\u0275text(67, "filter_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(68, "Apply Filters");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(69, ReportsPageComponent_Conditional_69_Template, 4, 0, "div", 24);
    \u0275\u0275conditionalCreate(70, ReportsPageComponent_Conditional_70_Template, 100, 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", !ctx.report);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.reportService.previewMode() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.reportService.errorMessage() ? 14 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("formGroup", ctx.filters);
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx.departmentOptions);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.requestTypes);
    \u0275\u0275advance(8);
    \u0275\u0275repeater(ctx.statuses);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx.dateRangeInvalid ? 59 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275property("disabled", ctx.loading);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.loading && !ctx.report ? 69 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_10_0 = ctx.report) ? 70 : -1, tmp_10_0);
  }
}, dependencies: [MatButtonModule, MatButton, MatCardModule, MatCard, MatChipsModule, MatChip, MatChipSet, MatDividerModule, MatFormFieldModule, MatFormField, MatLabel, MatIconModule, MatIcon, MatInputModule, MatInput, MatProgressSpinnerModule, MatProgressSpinner, MatSelectModule, MatSelect, MatOption, MatSnackBarModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, CurrencyPipe, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.reports-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 18px;\n  padding: 3px 0 4px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.page-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 36px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.page-heading[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.filter-card[_ngcontent-%COMP%], \n.report-card[_ngcontent-%COMP%] {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.filter-card[_ngcontent-%COMP%] {\n  padding: 16px 17px 12px;\n}\n.filter-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2b3d32;\n  font: 600 13px/1.3 "Space Grotesk", sans-serif;\n}\n.filter-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 9px;\n}\n.filters-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  align-items: start;\n  gap: 5px 10px;\n  margin-top: 15px;\n}\n.filters-grid[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: -1.2em;\n}\n.filter-error[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin: 0 0 9px;\n  color: #a14d45;\n  font-size: 9px;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  grid-column: 1/-1;\n  padding-top: 5px;\n}\n.filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 9px;\n}\n.filter-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-right: 4px;\n  font-size: 15px;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.preview-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b86156;\n}\n.error-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.error-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #8b4d46;\n  font-size: 10px;\n}\n.summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 10px;\n}\n.summary-card[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 95px;\n  flex-direction: column;\n  padding: 13px;\n  border-color: #e2e9e3;\n  border-radius: 6px;\n  background: #fff;\n}\n.summary-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  max-width: calc(100% - 25px);\n  color: #718077;\n  font-size: 9px;\n  line-height: 1.3;\n}\n.summary-card[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  color: #24382b;\n  font: 600 22px/1 "Space Grotesk", sans-serif;\n}\n.summary-card[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 18px;\n  height: 18px;\n  color: #78a071;\n  font-size: 18px;\n}\n.summary-card.pending[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #c28a39;\n}\n.summary-card.approved[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #54845d;\n}\n.summary-card.rejected[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #b8665e;\n}\n.summary-card.amount[_ngcontent-%COMP%] {\n  grid-column: span 1;\n}\n.summary-card.amount[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.report-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 16px 17px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.total-caption[_ngcontent-%COMP%] {\n  color: #7e8b81;\n  font-size: 9px;\n}\n.status-content[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(170px, 0.7fr) minmax(0, 1.5fr);\n  align-items: center;\n  gap: 20px;\n}\n.status-bar[_ngcontent-%COMP%] {\n  display: flex;\n  height: 10px;\n  gap: 3px;\n  overflow: hidden;\n  border-radius: 5px;\n  background: #f0f3ef;\n}\n.status-segment[_ngcontent-%COMP%] {\n  min-width: 3px;\n  border-radius: 4px;\n}\n.status-segment.draft[_ngcontent-%COMP%], \n.legend-dot.draft[_ngcontent-%COMP%] {\n  background: #bcc9bc;\n}\n.status-segment.pending[_ngcontent-%COMP%], \n.legend-dot.pending[_ngcontent-%COMP%] {\n  background: #dba44e;\n}\n.status-segment.approved[_ngcontent-%COMP%], \n.legend-dot.approved[_ngcontent-%COMP%] {\n  background: #70a870;\n}\n.status-segment.rejected[_ngcontent-%COMP%], \n.legend-dot.rejected[_ngcontent-%COMP%] {\n  background: #cb7770;\n}\n.status-segment.returned[_ngcontent-%COMP%], \n.legend-dot.returned[_ngcontent-%COMP%] {\n  background: #7398aa;\n}\n.status-segment.completed[_ngcontent-%COMP%], \n.legend-dot.completed[_ngcontent-%COMP%] {\n  background: #4e7653;\n}\n.status-legend[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 9px 12px;\n}\n.legend-item[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 6px;\n}\n.legend-dot[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  flex: 0 0 7px;\n  border-radius: 50%;\n}\n.legend-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  overflow: hidden;\n  flex: 1;\n  color: #748078;\n  font-size: 9px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.legend-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #35483b;\n  font-size: 9px;\n}\n.legend-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #939d95;\n  font-size: 8px;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.report-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 680px;\n}\n.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 35px;\n  color: #7b887f;\n  background: #f8faf7;\n  font-size: 9px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 44px;\n  color: #5a685e;\n  font-size: 9px;\n}\n.report-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.report-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 14px;\n}\n.primary-cell[_ngcontent-%COMP%] {\n  color: #33483a !important;\n  font-weight: 600;\n}\n.amount-cell[_ngcontent-%COMP%] {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.activity-table[_ngcontent-%COMP%] {\n  min-width: 760px;\n}\n.comment-cell[_ngcontent-%COMP%] {\n  max-width: 270px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.activity-chip[_ngcontent-%COMP%] {\n  min-height: 21px;\n  border-radius: 4px !important;\n  font-size: 8px;\n  font-weight: 600;\n}\n.activity-chip.approved[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.activity-chip.rejected[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #f8eae8;\n  --mdc-chip-label-text-color: #9e504a;\n}\n.activity-chip.returned[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf1f5;\n  --mdc-chip-label-text-color: #507389;\n}\n.small-empty[_ngcontent-%COMP%] {\n  padding: 24px 10px;\n  color: #87928a;\n  font-size: 10px;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 140px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  gap: 9px;\n  color: #7c8980;\n  font-size: 10px;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .reports-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 1050px) {\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .status-content[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 720px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 13px;\n  }\n  .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .status-legend[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 480px) {\n  .reports-page[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .filters-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .filter-actions[_ngcontent-%COMP%] {\n    justify-content: stretch;\n  }\n  .filter-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    min-height: 90px;\n    padding: 11px;\n  }\n  .summary-card[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .summary-card.amount[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .report-card[_ngcontent-%COMP%] {\n    padding: 13px 12px;\n  }\n}\n/*# sourceMappingURL=reports-page.component.css.map */'] });
var ReportsPageComponent = _ReportsPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsPageComponent, [{
    type: Component,
    args: [{ selector: "app-reports-page", standalone: true, imports: [CurrencyPipe, DatePipe, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatTableModule, ReactiveFormsModule], template: `<section class="reports-page" aria-labelledby="reports-title">\r
  <header class="page-heading">\r
    <div><p class="eyebrow">ANALYTICS WORKSPACE</p><h1 id="reports-title">Reports</h1><p class="description">View workflow, request and approval reports.</p></div>\r
    <button mat-stroked-button type="button" (click)="exportReport()" [disabled]="!report"><mat-icon>download</mat-icon>Export Report</button>\r
  </header>\r
\r
  @if (reportService.previewMode()) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Development preview</strong> Report figures are temporary sample data.</span></div> }\r
  @if (reportService.errorMessage()) { <div class="error-notice" role="alert"><mat-icon>cloud_off</mat-icon><span>{{ reportService.errorMessage() }}</span><button mat-button type="button" (click)="applyFilters()" [disabled]="loading">Retry</button></div> }\r
\r
  <mat-card appearance="outlined" class="filter-card">\r
    <div class="filter-heading"><div><h2>Report Filters</h2><p>Set criteria, then apply to refresh all sections.</p></div></div>\r
    <form [formGroup]="filters" (ngSubmit)="applyFilters()" class="filters-grid">\r
      <mat-form-field appearance="outline"><mat-label>Date From</mat-label><input matInput type="date" formControlName="dateFrom"></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>Date To</mat-label><input matInput type="date" formControlName="dateTo"></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>Department</mat-label><mat-select formControlName="department"><mat-option value="all">All departments</mat-option>@for (department of departmentOptions; track department) { <mat-option [value]="department">{{ department }}</mat-option> }</mat-select></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>Request Type</mat-label><mat-select formControlName="requestType"><mat-option value="all">All types</mat-option>@for (type of requestTypes; track type) { <mat-option [value]="type">{{ type }}</mat-option> }</mat-select></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>Status</mat-label><mat-select formControlName="status"><mat-option value="all">All statuses</mat-option>@for (status of statuses; track status) { <mat-option [value]="status">{{ status }}</mat-option> }</mat-select></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>Requested By</mat-label><input matInput formControlName="requestedBy" placeholder="Search requester"></mat-form-field>\r
      @if (dateRangeInvalid) { <p class="filter-error" role="alert">Date From must be on or before Date To.</p> }\r
      <div class="filter-actions"><button mat-stroked-button type="button" (click)="resetFilters()"><mat-icon>restart_alt</mat-icon>Reset Filters</button><button mat-flat-button color="primary" type="submit" [disabled]="loading"><mat-icon>filter_alt</mat-icon>Apply Filters</button></div>\r
    </form>\r
  </mat-card>\r
\r
  @if (loading && !report) { <div class="loading-state"><mat-progress-spinner mode="indeterminate" diameter="36" aria-label="Loading reports"></mat-progress-spinner><span>Loading reports\u2026</span></div> }\r
\r
  @if (report; as currentReport) {\r
    <section class="summary-grid" aria-label="Report summary">\r
      <mat-card appearance="outlined" class="summary-card"><span>Total Requests</span><strong>{{ currentReport.summary.totalRequests }}</strong><mat-icon>description</mat-icon></mat-card>\r
      <mat-card appearance="outlined" class="summary-card pending"><span>Pending Requests</span><strong>{{ currentReport.summary.pendingRequests }}</strong><mat-icon>pending_actions</mat-icon></mat-card>\r
      <mat-card appearance="outlined" class="summary-card approved"><span>Approved Requests</span><strong>{{ currentReport.summary.approvedRequests }}</strong><mat-icon>task_alt</mat-icon></mat-card>\r
      <mat-card appearance="outlined" class="summary-card rejected"><span>Rejected Requests</span><strong>{{ currentReport.summary.rejectedRequests }}</strong><mat-icon>do_not_disturb_on</mat-icon></mat-card>\r
      <mat-card appearance="outlined" class="summary-card amount"><span>Total Requested Amount</span><strong>{{ currentReport.summary.totalRequestedAmount | currency: 'USD':'symbol':'1.0-2' }}</strong><mat-icon>payments</mat-icon></mat-card>\r
    </section>\r
\r
    <mat-card appearance="outlined" class="report-card status-card">\r
      <div class="section-heading"><div><h2>Request Status Overview</h2><p>Distribution across filtered requests.</p></div><span class="total-caption">{{ currentReport.summary.totalRequests }} requests</span></div>\r
      <div class="status-content">\r
        <div class="status-bar" role="img" aria-label="Request status distribution">@for (status of currentReport.statusOverview; track status.status) { <span [class]="'status-segment ' + statusTone(status.status)" [style.flex]="status.count || 0.2"></span> }</div>\r
        <div class="status-legend">@for (status of currentReport.statusOverview; track status.status) { <div class="legend-item"><span [class]="'legend-dot ' + statusTone(status.status)"></span><span>{{ status.status }}</span><strong>{{ status.count }}</strong><small>{{ status.percentage }}%</small></div> }</div>\r
      </div>\r
    </mat-card>\r
\r
    <mat-card appearance="outlined" class="report-card table-card">\r
      <div class="section-heading"><div><h2>Department Summary</h2><p>Request volume and amount by department.</p></div></div>\r
      @if (currentReport.departmentReports.length) {\r
        <div class="table-wrap"><table mat-table [dataSource]="currentReport.departmentReports" class="report-table">\r
          <ng-container matColumnDef="department"><th mat-header-cell *matHeaderCellDef>Department</th><td mat-cell *matCellDef="let row" class="primary-cell">{{ row.department }}</td></ng-container>\r
          <ng-container matColumnDef="totalRequests"><th mat-header-cell *matHeaderCellDef>Total Requests</th><td mat-cell *matCellDef="let row">{{ row.totalRequests }}</td></ng-container>\r
          <ng-container matColumnDef="pending"><th mat-header-cell *matHeaderCellDef>Pending</th><td mat-cell *matCellDef="let row">{{ row.pending }}</td></ng-container>\r
          <ng-container matColumnDef="approved"><th mat-header-cell *matHeaderCellDef>Approved</th><td mat-cell *matCellDef="let row">{{ row.approved }}</td></ng-container>\r
          <ng-container matColumnDef="rejected"><th mat-header-cell *matHeaderCellDef>Rejected</th><td mat-cell *matCellDef="let row">{{ row.rejected }}</td></ng-container>\r
          <ng-container matColumnDef="totalAmount"><th mat-header-cell *matHeaderCellDef>Total Amount</th><td mat-cell *matCellDef="let row" class="amount-cell">{{ row.totalAmount | currency: 'USD':'symbol':'1.0-2' }}</td></ng-container>\r
          <tr mat-header-row *matHeaderRowDef="departmentColumns"></tr><tr mat-row *matRowDef="let row; columns: departmentColumns"></tr>\r
        </table></div>\r
      } @else { <div class="small-empty">No department data matches these filters.</div> }\r
    </mat-card>\r
\r
    <mat-card appearance="outlined" class="report-card table-card">\r
      <div class="section-heading"><div><h2>Request Type Summary</h2><p>Volume and amount across IOU, Petty Cash, and Procurement.</p></div></div>\r
      <div class="table-wrap"><table mat-table [dataSource]="currentReport.requestTypeReports" class="report-table">\r
        <ng-container matColumnDef="requestType"><th mat-header-cell *matHeaderCellDef>Request Type</th><td mat-cell *matCellDef="let row" class="primary-cell">{{ row.requestType }}</td></ng-container>\r
        <ng-container matColumnDef="totalRequests"><th mat-header-cell *matHeaderCellDef>Total Requests</th><td mat-cell *matCellDef="let row">{{ row.totalRequests }}</td></ng-container>\r
        <ng-container matColumnDef="pending"><th mat-header-cell *matHeaderCellDef>Pending</th><td mat-cell *matCellDef="let row">{{ row.pending }}</td></ng-container>\r
        <ng-container matColumnDef="approved"><th mat-header-cell *matHeaderCellDef>Approved</th><td mat-cell *matCellDef="let row">{{ row.approved }}</td></ng-container>\r
        <ng-container matColumnDef="rejected"><th mat-header-cell *matHeaderCellDef>Rejected</th><td mat-cell *matCellDef="let row">{{ row.rejected }}</td></ng-container>\r
        <ng-container matColumnDef="totalAmount"><th mat-header-cell *matHeaderCellDef>Total Amount</th><td mat-cell *matCellDef="let row" class="amount-cell">{{ row.totalAmount | currency: 'USD':'symbol':'1.0-2' }}</td></ng-container>\r
        <tr mat-header-row *matHeaderRowDef="requestTypeColumns"></tr><tr mat-row *matRowDef="let row; columns: requestTypeColumns"></tr>\r
      </table></div>\r
    </mat-card>\r
\r
    <mat-card appearance="outlined" class="report-card table-card">\r
      <div class="section-heading"><div><h2>Approval Activity</h2><p>Recent decisions and reviewer comments.</p></div></div>\r
      @if (currentReport.approvalActivities.length) {\r
        <div class="table-wrap"><table mat-table [dataSource]="currentReport.approvalActivities" class="report-table activity-table">\r
          <ng-container matColumnDef="requestId"><th mat-header-cell *matHeaderCellDef>Request ID</th><td mat-cell *matCellDef="let row" class="primary-cell">{{ row.requestId }}</td></ng-container>\r
          <ng-container matColumnDef="requestType"><th mat-header-cell *matHeaderCellDef>Request Type</th><td mat-cell *matCellDef="let row">{{ row.requestType }}</td></ng-container>\r
          <ng-container matColumnDef="approver"><th mat-header-cell *matHeaderCellDef>Approver</th><td mat-cell *matCellDef="let row">{{ row.approver }}</td></ng-container>\r
          <ng-container matColumnDef="action"><th mat-header-cell *matHeaderCellDef>Action</th><td mat-cell *matCellDef="let row"><mat-chip-set><mat-chip [class]="'activity-chip ' + statusTone(row.action)">{{ row.action }}</mat-chip></mat-chip-set></td></ng-container>\r
          <ng-container matColumnDef="date"><th mat-header-cell *matHeaderCellDef>Date</th><td mat-cell *matCellDef="let row">{{ row.date | date: 'mediumDate' }}</td></ng-container>\r
          <ng-container matColumnDef="comment"><th mat-header-cell *matHeaderCellDef>Comment</th><td mat-cell *matCellDef="let row" class="comment-cell">{{ row.comment || '\u2014' }}</td></ng-container>\r
          <tr mat-header-row *matHeaderRowDef="activityColumns"></tr><tr mat-row *matRowDef="let row; columns: activityColumns"></tr>\r
        </table></div>\r
      } @else { <div class="small-empty">No approval activity matches these filters.</div> }\r
    </mat-card>\r
  }\r
</section>`, styles: ['/* src/app/features/pages/reports/reports-page.component.scss */\n:host {\n  display: block;\n}\n.reports-page {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  animation: arrive 260ms ease-out both;\n}\n.page-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 18px;\n  padding: 3px 0 4px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 8px 0 0;\n  color: #728078;\n  font-size: 12px;\n}\n.page-heading button {\n  min-height: 36px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.page-heading button mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.filter-card,\n.report-card {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.filter-card {\n  padding: 16px 17px 12px;\n}\n.filter-heading h2,\n.section-heading h2 {\n  margin: 0;\n  color: #2b3d32;\n  font: 600 13px/1.3 "Space Grotesk", sans-serif;\n}\n.filter-heading p,\n.section-heading p {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 9px;\n}\n.filters-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  align-items: start;\n  gap: 5px 10px;\n  margin-top: 15px;\n}\n.filters-grid mat-form-field {\n  width: 100%;\n  margin-bottom: -1.2em;\n}\n.filter-error {\n  grid-column: 1/-1;\n  margin: 0 0 9px;\n  color: #a14d45;\n  font-size: 9px;\n}\n.filter-actions {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 8px;\n  grid-column: 1/-1;\n  padding-top: 5px;\n}\n.filter-actions button {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 9px;\n}\n.filter-actions mat-icon {\n  width: 15px;\n  height: 15px;\n  margin-right: 4px;\n  font-size: 15px;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.preview-notice {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.preview-notice strong {\n  margin-right: 4px;\n}\n.error-notice {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice mat-icon {\n  color: #b86156;\n}\n.error-notice span {\n  flex: 1;\n}\n.error-notice button {\n  color: #8b4d46;\n  font-size: 10px;\n}\n.summary-grid {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 10px;\n}\n.summary-card {\n  position: relative;\n  display: flex;\n  min-width: 0;\n  min-height: 95px;\n  flex-direction: column;\n  padding: 13px;\n  border-color: #e2e9e3;\n  border-radius: 6px;\n  background: #fff;\n}\n.summary-card > span {\n  max-width: calc(100% - 25px);\n  color: #718077;\n  font-size: 9px;\n  line-height: 1.3;\n}\n.summary-card > strong {\n  margin-top: 12px;\n  color: #24382b;\n  font: 600 22px/1 "Space Grotesk", sans-serif;\n}\n.summary-card > mat-icon {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  width: 18px;\n  height: 18px;\n  color: #78a071;\n  font-size: 18px;\n}\n.summary-card.pending > mat-icon {\n  color: #c28a39;\n}\n.summary-card.approved > mat-icon {\n  color: #54845d;\n}\n.summary-card.rejected > mat-icon {\n  color: #b8665e;\n}\n.summary-card.amount {\n  grid-column: span 1;\n}\n.summary-card.amount > strong {\n  font-size: 17px;\n}\n.report-card {\n  min-width: 0;\n  padding: 16px 17px;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n.total-caption {\n  color: #7e8b81;\n  font-size: 9px;\n}\n.status-content {\n  display: grid;\n  grid-template-columns: minmax(170px, 0.7fr) minmax(0, 1.5fr);\n  align-items: center;\n  gap: 20px;\n}\n.status-bar {\n  display: flex;\n  height: 10px;\n  gap: 3px;\n  overflow: hidden;\n  border-radius: 5px;\n  background: #f0f3ef;\n}\n.status-segment {\n  min-width: 3px;\n  border-radius: 4px;\n}\n.status-segment.draft,\n.legend-dot.draft {\n  background: #bcc9bc;\n}\n.status-segment.pending,\n.legend-dot.pending {\n  background: #dba44e;\n}\n.status-segment.approved,\n.legend-dot.approved {\n  background: #70a870;\n}\n.status-segment.rejected,\n.legend-dot.rejected {\n  background: #cb7770;\n}\n.status-segment.returned,\n.legend-dot.returned {\n  background: #7398aa;\n}\n.status-segment.completed,\n.legend-dot.completed {\n  background: #4e7653;\n}\n.status-legend {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 9px 12px;\n}\n.legend-item {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  gap: 6px;\n}\n.legend-dot {\n  width: 7px;\n  height: 7px;\n  flex: 0 0 7px;\n  border-radius: 50%;\n}\n.legend-item span:nth-child(2) {\n  overflow: hidden;\n  flex: 1;\n  color: #748078;\n  font-size: 9px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.legend-item strong {\n  color: #35483b;\n  font-size: 9px;\n}\n.legend-item small {\n  color: #939d95;\n  font-size: 8px;\n}\n.table-wrap {\n  overflow-x: auto;\n}\n.report-table {\n  width: 100%;\n  min-width: 680px;\n}\n.report-table th {\n  height: 35px;\n  color: #7b887f;\n  background: #f8faf7;\n  font-size: 9px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.report-table td {\n  height: 44px;\n  color: #5a685e;\n  font-size: 9px;\n}\n.report-table th:first-child,\n.report-table td:first-child {\n  padding-left: 14px;\n}\n.primary-cell {\n  color: #33483a !important;\n  font-weight: 600;\n}\n.amount-cell {\n  font-variant-numeric: tabular-nums;\n  font-weight: 600;\n}\n.activity-table {\n  min-width: 760px;\n}\n.comment-cell {\n  max-width: 270px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.activity-chip {\n  min-height: 21px;\n  border-radius: 4px !important;\n  font-size: 8px;\n  font-weight: 600;\n}\n.activity-chip.approved {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.activity-chip.rejected {\n  --mdc-chip-elevated-container-color: #f8eae8;\n  --mdc-chip-label-text-color: #9e504a;\n}\n.activity-chip.returned {\n  --mdc-chip-elevated-container-color: #eaf1f5;\n  --mdc-chip-label-text-color: #507389;\n}\n.small-empty {\n  padding: 24px 10px;\n  color: #87928a;\n  font-size: 10px;\n  text-align: center;\n}\n.loading-state {\n  display: flex;\n  min-height: 140px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  gap: 9px;\n  color: #7c8980;\n  font-size: 10px;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .reports-page {\n    animation: none;\n  }\n}\n@media (max-width: 1050px) {\n  .summary-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .status-content {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n@media (max-width: 720px) {\n  .page-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 13px;\n  }\n  .filters-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .summary-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .status-legend {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 480px) {\n  .reports-page {\n    gap: 12px;\n  }\n  h1 {\n    font-size: 26px;\n  }\n  .filters-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .filter-actions {\n    justify-content: stretch;\n  }\n  .filter-actions button {\n    flex: 1;\n  }\n  .summary-card {\n    min-height: 90px;\n    padding: 11px;\n  }\n  .summary-card > strong {\n    font-size: 20px;\n  }\n  .summary-card.amount > strong {\n    font-size: 15px;\n  }\n  .report-card {\n    padding: 13px 12px;\n  }\n}\n/*# sourceMappingURL=reports-page.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsPageComponent, { className: "ReportsPageComponent", filePath: "src/app/features/pages/reports/reports-page.component.ts", lineNumber: 35 });
})();
export {
  ReportsPageComponent
};
//# sourceMappingURL=chunk-5EFKQ3XC.js.map
