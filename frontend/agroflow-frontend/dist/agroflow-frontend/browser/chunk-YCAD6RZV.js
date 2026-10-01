import {
  AUDIT_LOG_PREVIEW
} from "./chunk-ONRSG33Q.js";
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
  MatDivider,
  MatDividerModule
} from "./chunk-N7METAUH.js";
import "./chunk-XIFJHBZC.js";
import {
  MatChipsModule
} from "./chunk-IGEVX5VZ.js";
import {
  MatFormField,
  MatLabel,
  MatPrefix
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
  MatCardContent,
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
  of,
  setClassMetadata,
  signal,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N56IC4AV.js";
import {
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/features/administration/services/audit-log.service.ts
var _AuditLogService = class _AuditLogService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = "http://localhost:8080/api/admin/audit-logs";
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
    this.previewMode = signal(false, ...ngDevMode ? [{ debugName: "previewMode" }] : []);
    this.errorMessage = signal("", ...ngDevMode ? [{ debugName: "errorMessage" }] : []);
  }
  getAuditLogs(filters) {
    this.loading.set(true);
    this.errorMessage.set("");
    let params = new HttpParams();
    for (const [key, value] of Object.entries(filters)) {
      if (value.trim())
        params = params.set(key, value.trim());
    }
    return this.http.get(this.apiUrl, { params }).pipe(tap(() => this.previewMode.set(false)), catchError((error) => {
      if (isDevMode()) {
        this.previewMode.set(true);
        return of(this.filterPreview(filters));
      }
      this.previewMode.set(false);
      this.errorMessage.set("Audit logs could not be loaded. Please try again.");
      return throwError(() => error);
    }), finalize(() => this.loading.set(false)));
  }
  filterPreview(filters) {
    const search = filters.search.trim().toLocaleLowerCase();
    const user = filters.user.trim().toLocaleLowerCase();
    return AUDIT_LOG_PREVIEW.filter((log) => {
      const matchesSearch = !search || `${log.id} ${log.action} ${log.module} ${log.description} ${log.ipAddress}`.toLocaleLowerCase().includes(search);
      const matchesModule = !filters.module || log.module === filters.module;
      const matchesDate = !filters.date || log.timestamp.slice(0, 10) === filters.date;
      const matchesUser = !user || log.user.toLocaleLowerCase().includes(user);
      return matchesSearch && matchesModule && matchesDate && matchesUser;
    }).map((log) => __spreadValues({}, log));
  }
};
_AuditLogService.\u0275fac = function AuditLogService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuditLogService)();
};
_AuditLogService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuditLogService, factory: _AuditLogService.\u0275fac, providedIn: "root" });
var AuditLogService = _AuditLogService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditLogService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/administration/pages/audit-logs.component.ts
function AuditLogsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Development preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " These sample audit events are temporary.");
    \u0275\u0275elementEnd()();
  }
}
function AuditLogsComponent_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const module_r1 = ctx.$implicit;
    \u0275\u0275property("value", module_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(module_r1);
  }
}
function AuditLogsComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-progress-spinner", 21);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading audit logs\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AuditLogsComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function AuditLogsComponent_Conditional_44_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.load());
    });
    \u0275\u0275text(6, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.errorMessage);
  }
}
function AuditLogsComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "mat-icon");
    \u0275\u0275text(2, "manage_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "No audit logs match these filters.");
    \u0275\u0275elementEnd()();
  }
}
function AuditLogsComponent_Conditional_46_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Log ID");
    \u0275\u0275elementEnd();
  }
}
function AuditLogsComponent_Conditional_46_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r4.id);
  }
}
function AuditLogsComponent_Conditional_46_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "User");
    \u0275\u0275elementEnd();
  }
}
function AuditLogsComponent_Conditional_46_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r5.user);
  }
}
function AuditLogsComponent_Conditional_46_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Action");
    \u0275\u0275elementEnd();
  }
}
function AuditLogsComponent_Conditional_46_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r6.action);
  }
}
function AuditLogsComponent_Conditional_46_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Module");
    \u0275\u0275elementEnd();
  }
}
function AuditLogsComponent_Conditional_46_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r7.module);
  }
}
function AuditLogsComponent_Conditional_46_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Description");
    \u0275\u0275elementEnd();
  }
}
function AuditLogsComponent_Conditional_46_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r8.description);
  }
}
function AuditLogsComponent_Conditional_46_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Date/Time");
    \u0275\u0275elementEnd();
  }
}
function AuditLogsComponent_Conditional_46_td_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, log_r9.timestamp, "medium"));
  }
}
function AuditLogsComponent_Conditional_46_th_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "IP Address");
    \u0275\u0275elementEnd();
  }
}
function AuditLogsComponent_Conditional_46_td_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const log_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r10.ipAddress);
  }
}
function AuditLogsComponent_Conditional_46_th_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 36);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AuditLogsComponent_Conditional_46_td_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 37)(1, "span", 38);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const log_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("success", log_r11.status === "Success")("failed", log_r11.status === "Failed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(log_r11.status);
  }
}
function AuditLogsComponent_Conditional_46_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 39);
  }
}
function AuditLogsComponent_Conditional_46_tr_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 40);
  }
}
function AuditLogsComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "table", 23);
    \u0275\u0275elementContainerStart(2, 24);
    \u0275\u0275template(3, AuditLogsComponent_Conditional_46_th_3_Template, 2, 0, "th", 25)(4, AuditLogsComponent_Conditional_46_td_4_Template, 2, 1, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 27);
    \u0275\u0275template(6, AuditLogsComponent_Conditional_46_th_6_Template, 2, 0, "th", 25)(7, AuditLogsComponent_Conditional_46_td_7_Template, 2, 1, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 28);
    \u0275\u0275template(9, AuditLogsComponent_Conditional_46_th_9_Template, 2, 0, "th", 25)(10, AuditLogsComponent_Conditional_46_td_10_Template, 2, 1, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 29);
    \u0275\u0275template(12, AuditLogsComponent_Conditional_46_th_12_Template, 2, 0, "th", 25)(13, AuditLogsComponent_Conditional_46_td_13_Template, 2, 1, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 30);
    \u0275\u0275template(15, AuditLogsComponent_Conditional_46_th_15_Template, 2, 0, "th", 25)(16, AuditLogsComponent_Conditional_46_td_16_Template, 2, 1, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 31);
    \u0275\u0275template(18, AuditLogsComponent_Conditional_46_th_18_Template, 2, 0, "th", 25)(19, AuditLogsComponent_Conditional_46_td_19_Template, 3, 4, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(20, 32);
    \u0275\u0275template(21, AuditLogsComponent_Conditional_46_th_21_Template, 2, 0, "th", 25)(22, AuditLogsComponent_Conditional_46_td_22_Template, 2, 1, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(23, 33);
    \u0275\u0275template(24, AuditLogsComponent_Conditional_46_th_24_Template, 2, 0, "th", 25)(25, AuditLogsComponent_Conditional_46_td_25_Template, 3, 5, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(26, AuditLogsComponent_Conditional_46_tr_26_Template, 1, 0, "tr", 34)(27, AuditLogsComponent_Conditional_46_tr_27_Template, 1, 0, "tr", 35);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r2.logs);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r2.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r2.displayedColumns);
  }
}
var _AuditLogsComponent = class _AuditLogsComponent {
  constructor() {
    this.service = inject(AuditLogService);
    this.destroyRef = inject(DestroyRef);
    this.modules = ["Approval Configuration", "Approvals", "Authentication", "Departments", "Requests", "System Settings", "Users"];
    this.displayedColumns = ["id", "user", "action", "module", "description", "timestamp", "ipAddress", "status"];
    this.filters = new FormGroup({
      search: new FormControl("", { nonNullable: true }),
      module: new FormControl("", { nonNullable: true }),
      date: new FormControl("", { nonNullable: true }),
      user: new FormControl("", { nonNullable: true })
    });
    this.logs = [];
    this.loading = false;
    this.errorMessage = "";
  }
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.errorMessage = "";
    this.service.getAuditLogs(this.filters.getRawValue()).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (logs) => {
        this.logs = logs;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.errorMessage = this.service.errorMessage();
      }
    });
  }
  reset() {
    this.filters.reset({ search: "", module: "", date: "", user: "" });
    this.load();
  }
};
_AuditLogsComponent.\u0275fac = function AuditLogsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AuditLogsComponent)();
};
_AuditLogsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AuditLogsComponent, selectors: [["app-audit-logs"]], decls: 47, vars: 3, consts: [["aria-labelledby", "audit-logs-title", 1, "admin-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "audit-logs-title"], ["role", "status", 1, "preview-notice"], ["appearance", "outlined", 1, "table-card"], [1, "filter-form", 3, "ngSubmit", "formGroup"], ["appearance", "outline"], ["matInput", "", "formControlName", "search", "placeholder", "Log ID, action, description"], ["matPrefix", ""], ["formControlName", "module"], ["value", ""], [3, "value"], ["matInput", "", "type", "date", "formControlName", "date"], ["matInput", "", "formControlName", "user", "placeholder", "Filter by user"], [1, "filter-actions"], ["mat-flat-button", "", "color", "primary", "type", "submit"], ["mat-button", "", "type", "button", 3, "click"], [1, "state"], ["role", "alert", 1, "state", "error-state"], [1, "table-scroll"], ["diameter", "34", "mode", "indeterminate"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-table", "", "aria-label", "Audit log events", 3, "dataSource"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "user"], ["matColumnDef", "action"], ["matColumnDef", "module"], ["matColumnDef", "description"], ["matColumnDef", "timestamp"], ["matColumnDef", "ipAddress"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "status-chip"], ["mat-header-row", ""], ["mat-row", ""]], template: function AuditLogsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "ADMINISTRATION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "Audit Logs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Review account, request, and configuration activity.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, AuditLogsComponent_Conditional_9_Template, 7, 0, "div", 4);
    \u0275\u0275elementStart(10, "mat-card", 5)(11, "form", 6);
    \u0275\u0275listener("ngSubmit", function AuditLogsComponent_Template_form_ngSubmit_11_listener() {
      return ctx.load();
    });
    \u0275\u0275elementStart(12, "mat-form-field", 7)(13, "mat-label");
    \u0275\u0275text(14, "Search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "input", 8);
    \u0275\u0275elementStart(16, "mat-icon", 9);
    \u0275\u0275text(17, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "mat-form-field", 7)(19, "mat-label");
    \u0275\u0275text(20, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-select", 10)(22, "mat-option", 11);
    \u0275\u0275text(23, "All modules");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(24, AuditLogsComponent_For_25_Template, 2, 2, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-form-field", 7)(27, "mat-label");
    \u0275\u0275text(28, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "mat-form-field", 7)(31, "mat-label");
    \u0275\u0275text(32, "User");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 15)(35, "button", 16)(36, "mat-icon");
    \u0275\u0275text(37, "filter_list");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, "Apply");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 17);
    \u0275\u0275listener("click", function AuditLogsComponent_Template_button_click_39_listener() {
      return ctx.reset();
    });
    \u0275\u0275text(40, "Reset");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(41, "mat-divider");
    \u0275\u0275elementStart(42, "mat-card-content");
    \u0275\u0275conditionalCreate(43, AuditLogsComponent_Conditional_43_Template, 4, 0, "div", 18)(44, AuditLogsComponent_Conditional_44_Template, 7, 1, "div", 19)(45, AuditLogsComponent_Conditional_45_Template, 5, 0, "div", 18)(46, AuditLogsComponent_Conditional_46_Template, 28, 3, "div", 20);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.service.previewMode() ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx.filters);
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx.modules);
    \u0275\u0275advance(19);
    \u0275\u0275conditional(ctx.loading ? 43 : ctx.errorMessage ? 44 : !ctx.logs.length ? 45 : 46);
  }
}, dependencies: [MatButtonModule, MatButton, MatCardModule, MatCard, MatCardContent, MatChipsModule, MatDividerModule, MatDivider, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatIconModule, MatIcon, MatInputModule, MatInput, MatProgressSpinnerModule, MatProgressSpinner, MatSelectModule, MatSelect, MatOption, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.admin-page[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 8px 0 0;\n}\n.page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #20352a;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.page-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin: 8px 0 0;\n  color: #718078;\n  font-size: 13px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  color: #71876f;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.table-card[_ngcontent-%COMP%] {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n}\n.table-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 860px;\n}\nth.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  color: #68796d;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\ntd.mat-mdc-cell[_ngcontent-%COMP%] {\n  color: #35453a;\n  font-size: 12px;\n}\n.row-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 128px;\n}\n.row-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: #597261;\n}\n.inactive-chip[_ngcontent-%COMP%] {\n  background: #f0f1ed !important;\n  color: #72776f !important;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 11px 13px;\n  border-radius: 5px;\n  background: #f1f5ef;\n  color: #596e5c;\n  font-size: 12px;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  background: #fff3f0;\n  color: #9d493e;\n}\n.state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 170px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n  color: #768179;\n  font-size: 13px;\n}\n.error-state[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  color: #9d493e;\n}\n.settings-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 16px;\n  padding: 20px;\n}\n.settings-form[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n.settings-form[_ngcontent-%COMP%]    > .notification-setting[_ngcontent-%COMP%], \n.settings-form[_ngcontent-%COMP%]    > .form-actions[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.settings-form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #34463a;\n  font-size: 14px;\n}\n.notification-setting[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 11px 0;\n  border-bottom: 1px solid #edf0ed;\n  color: #46584b;\n  font-size: 13px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 12px;\n}\n.filter-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(170px, 1.4fr) repeat(3, minmax(145px, 1fr)) auto;\n  align-items: start;\n  gap: 10px;\n  padding: 16px 16px 0;\n}\n.filter-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  padding-top: 5px;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 12px;\n  padding: 4px 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-chip.success[_ngcontent-%COMP%] {\n  background: #edf5ed;\n  color: #456d4a;\n}\n.status-chip.failed[_ngcontent-%COMP%] {\n  background: #fff0ed;\n  color: #a24d40;\n}\n.dialog-form[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 12px;\n  padding-top: 8px;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-error[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin: -8px 0 4px;\n  color: #a24d40;\n  font-size: 12px;\n}\n.dialog-form[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 6px 0 18px;\n}\n@media (max-width: 850px) {\n  .filter-form[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .filter-actions[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n    padding: 0 0 10px;\n  }\n}\n@media (max-width: 580px) {\n  .page-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .settings-form[_ngcontent-%COMP%], \n   .dialog-form[_ngcontent-%COMP%], \n   .filter-form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .settings-form[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], \n   .settings-form[_ngcontent-%COMP%]    > .notification-setting[_ngcontent-%COMP%], \n   .settings-form[_ngcontent-%COMP%]    > .form-actions[_ngcontent-%COMP%], \n   .filter-actions[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .settings-form[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=administration-pages.component.css.map */'] });
var AuditLogsComponent = _AuditLogsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuditLogsComponent, [{
    type: Component,
    args: [{ selector: "app-audit-logs", standalone: true, imports: [DatePipe, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatProgressSpinnerModule, MatSelectModule, MatTableModule, ReactiveFormsModule], template: `<section class="admin-page" aria-labelledby="audit-logs-title">\r
  <header class="page-heading"><div><p class="eyebrow">ADMINISTRATION</p><h1 id="audit-logs-title">Audit Logs</h1><p>Review account, request, and configuration activity.</p></div></header>\r
  @if (service.previewMode()) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Development preview</strong> These sample audit events are temporary.</span></div> }\r
  <mat-card appearance="outlined" class="table-card">\r
    <form class="filter-form" [formGroup]="filters" (ngSubmit)="load()">\r
      <mat-form-field appearance="outline"><mat-label>Search</mat-label><input matInput formControlName="search" placeholder="Log ID, action, description"><mat-icon matPrefix>search</mat-icon></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>Module</mat-label><mat-select formControlName="module"><mat-option value="">All modules</mat-option>@for (module of modules; track module) { <mat-option [value]="module">{{ module }}</mat-option> }</mat-select></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>Date</mat-label><input matInput type="date" formControlName="date"></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>User</mat-label><input matInput formControlName="user" placeholder="Filter by user"></mat-form-field>\r
      <div class="filter-actions"><button mat-flat-button color="primary" type="submit"><mat-icon>filter_list</mat-icon>Apply</button><button mat-button type="button" (click)="reset()">Reset</button></div>\r
    </form>\r
    <mat-divider/>\r
    <mat-card-content>\r
      @if (loading) { <div class="state"><mat-progress-spinner diameter="34" mode="indeterminate"/><span>Loading audit logs\u2026</span></div> }\r
      @else if (errorMessage) { <div class="state error-state" role="alert"><mat-icon>error_outline</mat-icon><span>{{ errorMessage }}</span><button mat-stroked-button type="button" (click)="load()">Retry</button></div> }\r
      @else if (!logs.length) { <div class="state"><mat-icon>manage_search</mat-icon><span>No audit logs match these filters.</span></div> }\r
      @else { <div class="table-scroll"><table mat-table [dataSource]="logs" aria-label="Audit log events">\r
        <ng-container matColumnDef="id"><th mat-header-cell *matHeaderCellDef>Log ID</th><td mat-cell *matCellDef="let log">{{ log.id }}</td></ng-container>\r
        <ng-container matColumnDef="user"><th mat-header-cell *matHeaderCellDef>User</th><td mat-cell *matCellDef="let log">{{ log.user }}</td></ng-container>\r
        <ng-container matColumnDef="action"><th mat-header-cell *matHeaderCellDef>Action</th><td mat-cell *matCellDef="let log">{{ log.action }}</td></ng-container>\r
        <ng-container matColumnDef="module"><th mat-header-cell *matHeaderCellDef>Module</th><td mat-cell *matCellDef="let log">{{ log.module }}</td></ng-container>\r
        <ng-container matColumnDef="description"><th mat-header-cell *matHeaderCellDef>Description</th><td mat-cell *matCellDef="let log">{{ log.description }}</td></ng-container>\r
        <ng-container matColumnDef="timestamp"><th mat-header-cell *matHeaderCellDef>Date/Time</th><td mat-cell *matCellDef="let log">{{ log.timestamp | date:'medium' }}</td></ng-container>\r
        <ng-container matColumnDef="ipAddress"><th mat-header-cell *matHeaderCellDef>IP Address</th><td mat-cell *matCellDef="let log">{{ log.ipAddress }}</td></ng-container>\r
        <ng-container matColumnDef="status"><th mat-header-cell *matHeaderCellDef>Status</th><td mat-cell *matCellDef="let log"><span class="status-chip" [class.success]="log.status === 'Success'" [class.failed]="log.status === 'Failed'">{{ log.status }}</span></td></ng-container>\r
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr><tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
      </table></div> }\r
    </mat-card-content>\r
  </mat-card>\r
</section>`, styles: ['/* src/app/features/administration/pages/administration-pages.component.scss */\n:host {\n  display: block;\n}\n.admin-page {\n  display: grid;\n  gap: 18px;\n}\n.page-heading {\n  padding: 8px 0 0;\n}\n.page-heading h1 {\n  margin: 0;\n  color: #20352a;\n  font: 600 28px/1.2 "Space Grotesk", sans-serif;\n}\n.page-heading p:last-child {\n  margin: 8px 0 0;\n  color: #718078;\n  font-size: 13px;\n}\n.eyebrow {\n  margin: 0 0 7px;\n  color: #71876f;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1px;\n}\n.table-card {\n  border-color: #e2e9e3;\n  border-radius: 7px;\n}\n.table-card mat-card-content {\n  padding: 0;\n}\n.table-scroll {\n  overflow-x: auto;\n}\ntable {\n  width: 100%;\n  min-width: 860px;\n}\nth.mat-mdc-header-cell {\n  color: #68796d;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\ntd.mat-mdc-cell {\n  color: #35453a;\n  font-size: 12px;\n}\n.row-actions {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  min-width: 128px;\n}\n.row-actions button {\n  color: #597261;\n}\n.inactive-chip {\n  background: #f0f1ed !important;\n  color: #72776f !important;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 11px 13px;\n  border-radius: 5px;\n  background: #f1f5ef;\n  color: #596e5c;\n  font-size: 12px;\n}\n.preview-notice mat-icon,\n.error-notice mat-icon {\n  flex: 0 0 auto;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.error-notice {\n  background: #fff3f0;\n  color: #9d493e;\n}\n.state {\n  display: flex;\n  min-height: 170px;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 20px;\n  color: #768179;\n  font-size: 13px;\n}\n.error-state {\n  flex-wrap: wrap;\n  color: #9d493e;\n}\n.settings-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 16px;\n  padding: 20px;\n}\n.settings-form > h2,\n.settings-form > .notification-setting,\n.settings-form > .form-actions {\n  grid-column: 1/-1;\n}\n.settings-form h2 {\n  margin: 4px 0 0;\n  color: #34463a;\n  font-size: 14px;\n}\n.notification-setting {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 11px 0;\n  border-bottom: 1px solid #edf0ed;\n  color: #46584b;\n  font-size: 13px;\n}\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  padding-top: 12px;\n}\n.filter-form {\n  display: grid;\n  grid-template-columns: minmax(170px, 1.4fr) repeat(3, minmax(145px, 1fr)) auto;\n  align-items: start;\n  gap: 10px;\n  padding: 16px 16px 0;\n}\n.filter-form mat-form-field {\n  width: 100%;\n}\n.filter-actions {\n  display: flex;\n  gap: 6px;\n  padding-top: 5px;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  border-radius: 12px;\n  padding: 4px 9px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-chip.success {\n  background: #edf5ed;\n  color: #456d4a;\n}\n.status-chip.failed {\n  background: #fff0ed;\n  color: #a24d40;\n}\n.dialog-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 4px 12px;\n  padding-top: 8px;\n}\n.dialog-form mat-form-field {\n  width: 100%;\n}\n.form-error {\n  grid-column: 1/-1;\n  margin: -8px 0 4px;\n  color: #a24d40;\n  font-size: 12px;\n}\n.dialog-form mat-slide-toggle {\n  align-self: center;\n  padding: 6px 0 18px;\n}\n@media (max-width: 850px) {\n  .filter-form {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .filter-actions {\n    grid-column: 1/-1;\n    padding: 0 0 10px;\n  }\n}\n@media (max-width: 580px) {\n  .page-heading h1 {\n    font-size: 24px;\n  }\n  .settings-form,\n  .dialog-form,\n  .filter-form {\n    grid-template-columns: 1fr;\n  }\n  .settings-form > h2,\n  .settings-form > .notification-setting,\n  .settings-form > .form-actions,\n  .filter-actions {\n    grid-column: auto;\n  }\n  .settings-form {\n    padding: 16px;\n  }\n}\n/*# sourceMappingURL=administration-pages.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AuditLogsComponent, { className: "AuditLogsComponent", filePath: "src/app/features/administration/pages/audit-logs.component.ts", lineNumber: 26 });
})();
export {
  AuditLogsComponent
};
//# sourceMappingURL=chunk-YCAD6RZV.js.map
