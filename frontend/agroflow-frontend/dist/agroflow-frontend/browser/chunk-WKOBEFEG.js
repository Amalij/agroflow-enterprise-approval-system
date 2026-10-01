import {
  ApprovalPreviewStore,
  ApprovalService,
  ApprovalStatusChipComponent
} from "./chunk-L4UJCRES.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-FEB7GDLY.js";
import {
  MatTooltipModule
} from "./chunk-YM3RABSX.js";
import "./chunk-2DXKA2R6.js";
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
  MatTableDataSource,
  MatTableModule
} from "./chunk-N2QZREPG.js";
import "./chunk-4V2R5SHM.js";
import {
  REQUEST_TYPES
} from "./chunk-ZID7AZMT.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-VCKAT7IX.js";
import "./chunk-XIFJHBZC.js";
import {
  AuthService
} from "./chunk-FVZ63Q7G.js";
import "./chunk-AW4U6G7T.js";
import "./chunk-IGEVX5VZ.js";
import {
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-EVUGFGV4.js";
import "./chunk-WG4DC2AT.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlDirective,
  FormGroup,
  NgControlStatus,
  ReactiveFormsModule
} from "./chunk-WZQ4T6AT.js";
import {
  takeUntilDestroyed
} from "./chunk-35TXIJWI.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-KV3NKOTC.js";
import "./chunk-DBRYW4UZ.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-A3MOLE3M.js";
import {
  Router,
  RouterLink
} from "./chunk-PEU3H2UL.js";
import {
  CurrencyPipe,
  DatePipe
} from "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
  ViewChild,
  debounceTime,
  distinctUntilChanged,
  finalize,
  inject,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/approvals/pending-approvals.component.ts
var _c0 = (a0) => ["/approvals", a0];
function PendingApprovalsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Preview data");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Decisions in this view are temporary.");
    \u0275\u0275elementEnd()();
  }
}
function PendingApprovalsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 22);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Conditional_10_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(6, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.loading);
  }
}
function PendingApprovalsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function PendingApprovalsComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filters.controls.query.setValue(""));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function PendingApprovalsComponent_For_27_Template(rf, ctx) {
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
function PendingApprovalsComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const department_r5 = ctx.$implicit;
    \u0275\u0275property("value", department_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(department_r5);
  }
}
function PendingApprovalsComponent_For_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r6 = ctx.$implicit;
    \u0275\u0275property("value", status_r6);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r6);
  }
}
function PendingApprovalsComponent_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r7 = ctx.$implicit;
    \u0275\u0275property("value", level_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(level_r7);
  }
}
function PendingApprovalsComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 17);
  }
}
function PendingApprovalsComponent_Conditional_54_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Request ID");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_Conditional_54_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const approval_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(approval_r8.id);
  }
}
function PendingApprovalsComponent_Conditional_54_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Request Type");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_Conditional_54_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const approval_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(approval_r9.requestType);
  }
}
function PendingApprovalsComponent_Conditional_54_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Requested By");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_Conditional_54_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const approval_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(approval_r10.requester.fullName);
  }
}
function PendingApprovalsComponent_Conditional_54_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_Conditional_54_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const approval_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(approval_r11.departmentName);
  }
}
function PendingApprovalsComponent_Conditional_54_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_Conditional_54_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const approval_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, approval_r12.amount, approval_r12.currency, "symbol", "1.0-2"));
  }
}
function PendingApprovalsComponent_Conditional_54_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Submitted Date");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_Conditional_54_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const approval_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, approval_r13.submittedAt, "mediumDate"));
  }
}
function PendingApprovalsComponent_Conditional_54_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Current Approval Level");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_Conditional_54_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const approval_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(approval_r14.currentApprovalLevel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", approval_r14.levelNumber, " of ", approval_r14.totalLevels);
  }
}
function PendingApprovalsComponent_Conditional_54_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function PendingApprovalsComponent_Conditional_54_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41);
    \u0275\u0275element(1, "app-approval-status-chip", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const approval_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("status", approval_r15.status);
  }
}
function PendingApprovalsComponent_Conditional_54_th_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 39)(1, "span", 45);
    \u0275\u0275text(2, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function PendingApprovalsComponent_Conditional_54_td_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 41)(1, "a", 46);
    \u0275\u0275text(2, "Review");
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "arrow_forward");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const approval_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, approval_r16.id));
  }
}
function PendingApprovalsComponent_Conditional_54_tr_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 47);
  }
}
function PendingApprovalsComponent_Conditional_54_tr_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 48);
  }
}
function PendingApprovalsComponent_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 19);
    \u0275\u0275elementContainerStart(1, 24);
    \u0275\u0275template(2, PendingApprovalsComponent_Conditional_54_th_2_Template, 2, 0, "th", 25)(3, PendingApprovalsComponent_Conditional_54_td_3_Template, 2, 1, "td", 26);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 27);
    \u0275\u0275template(5, PendingApprovalsComponent_Conditional_54_th_5_Template, 2, 0, "th", 25)(6, PendingApprovalsComponent_Conditional_54_td_6_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 29);
    \u0275\u0275template(8, PendingApprovalsComponent_Conditional_54_th_8_Template, 2, 0, "th", 25)(9, PendingApprovalsComponent_Conditional_54_td_9_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 30);
    \u0275\u0275template(11, PendingApprovalsComponent_Conditional_54_th_11_Template, 2, 0, "th", 25)(12, PendingApprovalsComponent_Conditional_54_td_12_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 31);
    \u0275\u0275template(14, PendingApprovalsComponent_Conditional_54_th_14_Template, 2, 0, "th", 25)(15, PendingApprovalsComponent_Conditional_54_td_15_Template, 3, 6, "td", 32);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 33);
    \u0275\u0275template(17, PendingApprovalsComponent_Conditional_54_th_17_Template, 2, 0, "th", 25)(18, PendingApprovalsComponent_Conditional_54_td_18_Template, 3, 4, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 34);
    \u0275\u0275template(20, PendingApprovalsComponent_Conditional_54_th_20_Template, 2, 0, "th", 25)(21, PendingApprovalsComponent_Conditional_54_td_21_Template, 4, 3, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22, 35);
    \u0275\u0275template(23, PendingApprovalsComponent_Conditional_54_th_23_Template, 2, 0, "th", 25)(24, PendingApprovalsComponent_Conditional_54_td_24_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(25, 36);
    \u0275\u0275template(26, PendingApprovalsComponent_Conditional_54_th_26_Template, 3, 0, "th", 25)(27, PendingApprovalsComponent_Conditional_54_td_27_Template, 5, 3, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(28, PendingApprovalsComponent_Conditional_54_tr_28_Template, 1, 0, "tr", 37)(29, PendingApprovalsComponent_Conditional_54_tr_29_Template, 1, 0, "tr", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(28);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
function PendingApprovalsComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "filter_list_off" : "task_alt");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "No matching approvals" : "You\u2019re all caught up");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "Adjust filters to see more approvals." : "Requests assigned to you will appear here.");
  }
}
var _PendingApprovalsComponent = class _PendingApprovalsComponent {
  set paginator(paginator) {
    if (paginator)
      this.dataSource.paginator = paginator;
  }
  constructor() {
    this.authService = inject(AuthService);
    this.approvalService = inject(ApprovalService);
    this.previewStore = inject(ApprovalPreviewStore);
    this.router = inject(Router);
    this.destroyRef = inject(DestroyRef);
    this.dataSource = new MatTableDataSource([]);
    this.requestTypes = REQUEST_TYPES;
    this.statuses = ["Pending", "Changes Requested", "Approved", "Rejected"];
    this.pageSizeOptions = [5, 10, 20];
    this.displayedColumns = ["id", "requestType", "requester", "department", "amount", "submittedAt", "level", "status", "actions"];
    this.filters = new FormGroup({
      query: new FormControl("", { nonNullable: true }),
      requestType: new FormControl("all", { nonNullable: true }),
      department: new FormControl("all", { nonNullable: true }),
      status: new FormControl("all", { nonNullable: true }),
      approvalLevel: new FormControl("all", { nonNullable: true })
    });
    this.loading = true;
    this.previewMode = false;
    this.errorMessage = "";
    this.approverEmail = "";
    this.dataSource.filterPredicate = (approval, serializedFilters) => {
      try {
        return this.approvalService.matchesFilters(approval, JSON.parse(serializedFilters));
      } catch {
        return true;
      }
    };
  }
  ngOnInit() {
    this.filters.valueChanges.pipe(startWith(this.filters.getRawValue()), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.applyFilters());
    this.loadApprovals();
  }
  ngAfterViewInit() {
    this.dataSource.paginator?.firstPage();
  }
  get departments() {
    return [...new Set(this.dataSource.data.map((approval) => approval.departmentName))].sort();
  }
  get approvalLevels() {
    return [...new Set(this.dataSource.data.map((approval) => approval.currentApprovalLevel))].sort();
  }
  retry() {
    this.loadApprovals();
  }
  loadApprovals() {
    const user = this.authService.currentUser();
    if (!user) {
      void this.router.navigate(["/login"], { queryParams: { returnUrl: "/approvals/pending" } });
      return;
    }
    this.approverEmail = user.email;
    this.loading = true;
    this.errorMessage = "";
    this.approvalService.getAssignedPendingApprovals(this.approverEmail).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (approvals) => {
        this.previewMode = false;
        this.dataSource.data = approvals;
        this.applyFilters();
      },
      error: () => {
        this.previewMode = true;
        this.dataSource.data = this.previewStore.getForApprover(this.approverEmail);
        this.errorMessage = "The Approvals API is unavailable. Showing temporary approval data assigned to your account; decisions are not sent to the server.";
        this.applyFilters();
      }
    });
  }
  applyFilters() {
    this.dataSource.filter = JSON.stringify(this.filters.getRawValue());
    this.dataSource.paginator?.firstPage();
  }
};
_PendingApprovalsComponent.\u0275fac = function PendingApprovalsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PendingApprovalsComponent)();
};
_PendingApprovalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingApprovalsComponent, selectors: [["app-pending-approvals"]], viewQuery: function PendingApprovalsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
  }
}, decls: 57, vars: 13, consts: [["aria-labelledby", "approvals-title", 1, "approvals-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "approvals-title"], [1, "description"], ["role", "status", 1, "preview-notice"], ["role", "alert", 1, "error-notice"], ["aria-label", "Pending approval queue", 1, "approval-panel"], [1, "filters"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Request, requester, or department", 3, "formControl"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search"], ["appearance", "outline"], [3, "selectionChange", "value"], ["value", "all"], [3, "value"], ["mode", "indeterminate", "aria-label", "Loading approvals"], [1, "table-wrap"], ["mat-table", "", 1, "approvals-table", 3, "dataSource"], [1, "empty-state"], ["aria-label", "Select approval page", 3, "pageSize", "pageSizeOptions", "showFirstLastButtons"], ["mat-button", "", "type", "button", 3, "click", "disabled"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search", 3, "click"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "id-cell", 4, "matCellDef"], ["matColumnDef", "requestType"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "requester"], ["matColumnDef", "department"], ["matColumnDef", "amount"], ["mat-cell", "", "class", "amount-cell", 4, "matCellDef"], ["matColumnDef", "submittedAt"], ["matColumnDef", "level"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "id-cell"], ["mat-cell", ""], ["mat-cell", "", 1, "amount-cell"], [1, "level-count"], [3, "status"], [1, "visually-hidden"], ["mat-flat-button", "", "color", "primary", 1, "review-button", 3, "routerLink"], ["mat-header-row", ""], ["mat-row", ""]], template: function PendingApprovalsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "APPROVAL WORKSPACE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "Approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, "Review and process requests awaiting approval.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(9, PendingApprovalsComponent_Conditional_9_Template, 7, 0, "div", 5);
    \u0275\u0275conditionalCreate(10, PendingApprovalsComponent_Conditional_10_Template, 7, 2, "div", 6);
    \u0275\u0275elementStart(11, "section", 7)(12, "div", 8)(13, "mat-form-field", 9)(14, "mat-label");
    \u0275\u0275text(15, "Search approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "mat-icon", 10);
    \u0275\u0275text(17, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "input", 11);
    \u0275\u0275conditionalCreate(19, PendingApprovalsComponent_Conditional_19_Template, 3, 0, "button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 13)(21, "mat-label");
    \u0275\u0275text(22, "Request Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "mat-select", 14);
    \u0275\u0275listener("selectionChange", function PendingApprovalsComponent_Template_mat_select_selectionChange_23_listener($event) {
      return ctx.filters.controls.requestType.setValue($event.value);
    });
    \u0275\u0275elementStart(24, "mat-option", 15);
    \u0275\u0275text(25, "All types");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, PendingApprovalsComponent_For_27_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "mat-form-field", 13)(29, "mat-label");
    \u0275\u0275text(30, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-select", 14);
    \u0275\u0275listener("selectionChange", function PendingApprovalsComponent_Template_mat_select_selectionChange_31_listener($event) {
      return ctx.filters.controls.department.setValue($event.value);
    });
    \u0275\u0275elementStart(32, "mat-option", 15);
    \u0275\u0275text(33, "All departments");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(34, PendingApprovalsComponent_For_35_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "mat-form-field", 13)(37, "mat-label");
    \u0275\u0275text(38, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "mat-select", 14);
    \u0275\u0275listener("selectionChange", function PendingApprovalsComponent_Template_mat_select_selectionChange_39_listener($event) {
      return ctx.filters.controls.status.setValue($event.value);
    });
    \u0275\u0275elementStart(40, "mat-option", 15);
    \u0275\u0275text(41, "All statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(42, PendingApprovalsComponent_For_43_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "mat-form-field", 13)(45, "mat-label");
    \u0275\u0275text(46, "Approval Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "mat-select", 14);
    \u0275\u0275listener("selectionChange", function PendingApprovalsComponent_Template_mat_select_selectionChange_47_listener($event) {
      return ctx.filters.controls.approvalLevel.setValue($event.value);
    });
    \u0275\u0275elementStart(48, "mat-option", 15);
    \u0275\u0275text(49, "All levels");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(50, PendingApprovalsComponent_For_51_Template, 2, 2, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(52, PendingApprovalsComponent_Conditional_52_Template, 1, 0, "mat-progress-bar", 17);
    \u0275\u0275elementStart(53, "div", 18);
    \u0275\u0275conditionalCreate(54, PendingApprovalsComponent_Conditional_54_Template, 30, 3, "table", 19)(55, PendingApprovalsComponent_Conditional_55_Template, 7, 3, "div", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "mat-paginator", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275conditional(ctx.previewMode ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.errorMessage ? 10 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("formControl", ctx.filters.controls.query);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.filters.controls.query.value ? 19 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.filters.controls.requestType.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.requestTypes);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx.filters.controls.department.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.departments);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx.filters.controls.status.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.statuses);
    \u0275\u0275advance(5);
    \u0275\u0275property("value", ctx.filters.controls.approvalLevel.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.approvalLevels);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.loading ? 52 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.dataSource.filteredData.length > 0 ? 54 : !ctx.loading ? 55 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSize", 10)("pageSizeOptions", ctx.pageSizeOptions)("showFirstLastButtons", true);
  }
}, dependencies: [
  ApprovalStatusChipComponent,
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix,
  MatIconModule,
  MatIcon,
  MatInputModule,
  MatInput,
  MatPaginatorModule,
  MatPaginator,
  MatProgressBarModule,
  MatProgressBar,
  MatSelectModule,
  MatSelect,
  MatOption,
  MatTableModule,
  MatTable,
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatHeaderCell,
  MatCell,
  MatHeaderRow,
  MatRow,
  MatTooltipModule,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  FormControlDirective,
  RouterLink,
  CurrencyPipe,
  DatePipe
], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.approvals-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_arrive 280ms ease-out both;\n}\n.page-heading[_ngcontent-%COMP%] {\n  padding: 4px 0 5px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 13px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.preview-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b86156;\n}\n.error-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.error-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #8b4d46;\n  font-size: 11px;\n}\n.approval-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(210px, 1.5fr) repeat(4, minmax(135px, 1fr));\n  align-items: center;\n  gap: 9px;\n  padding: 17px 18px 4px;\n}\n.filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: -1.25em;\n}\n.filters[_ngcontent-%COMP%]   mat-icon[matPrefix][_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #839087;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-x: auto;\n}\n.approvals-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1320px;\n}\n.approvals-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 42px;\n  color: #748078;\n  background: #f8faf7;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.approvals-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 59px;\n  color: #536259;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.approvals-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.approvals-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.id-cell[_ngcontent-%COMP%] {\n  color: #59705f !important;\n  font-variant-numeric: tabular-nums;\n}\n.amount-cell[_ngcontent-%COMP%] {\n  color: #33483a !important;\n  font-variant-numeric: tabular-nums;\n  font-weight: 700;\n}\n.level-count[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: #8a958d;\n  font-size: 9px;\n}\n.review-button[_ngcontent-%COMP%] {\n  min-height: 30px;\n  border-radius: 4px;\n  font-size: 9px;\n}\n.review-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  margin-left: 4px;\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 220px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  margin-bottom: 9px;\n  color: #6e9a6f;\n  font-size: 28px;\n}\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #35483b;\n  font-size: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 11px;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  border-top: 1px solid #edf1ed;\n  background: #fff;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(7px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .approvals-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 1100px) {\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .search-field[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 700px) {\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    padding: 16px 14px 5px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .approvals-table[_ngcontent-%COMP%] {\n    min-width: 1280px;\n  }\n}\n/*# sourceMappingURL=pending-approvals.component.css.map */'] });
var PendingApprovalsComponent = _PendingApprovalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingApprovalsComponent, [{
    type: Component,
    args: [{ selector: "app-pending-approvals", standalone: true, imports: [
      ApprovalStatusChipComponent,
      CurrencyPipe,
      DatePipe,
      MatButtonModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatSelectModule,
      MatTableModule,
      MatTooltipModule,
      ReactiveFormsModule,
      RouterLink
    ], template: `<section class="approvals-page" aria-labelledby="approvals-title">\r
  <header class="page-heading">\r
    <div>\r
      <p class="eyebrow">APPROVAL WORKSPACE</p>\r
      <h1 id="approvals-title">Approvals</h1>\r
      <p class="description">Review and process requests awaiting approval.</p>\r
    </div>\r
  </header>\r
\r
  @if (previewMode) {\r
    <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Preview data</strong> Decisions in this view are temporary.</span></div>\r
  }\r
  @if (errorMessage) {\r
    <div class="error-notice" role="alert"><mat-icon>cloud_off</mat-icon><span>{{ errorMessage }}</span><button mat-button type="button" (click)="retry()" [disabled]="loading">Retry</button></div>\r
  }\r
\r
  <section class="approval-panel" aria-label="Pending approval queue">\r
    <div class="filters">\r
      <mat-form-field appearance="outline" class="search-field">\r
        <mat-label>Search approvals</mat-label><mat-icon matPrefix>search</mat-icon>\r
        <input matInput [formControl]="filters.controls.query" placeholder="Request, requester, or department">\r
        @if (filters.controls.query.value) {\r
          <button mat-icon-button matSuffix type="button" aria-label="Clear search" (click)="filters.controls.query.setValue('')"><mat-icon>close</mat-icon></button>\r
        }\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Request Type</mat-label>\r
        <mat-select [value]="filters.controls.requestType.value" (selectionChange)="filters.controls.requestType.setValue($event.value)">\r
          <mat-option value="all">All types</mat-option>\r
          @for (type of requestTypes; track type) { <mat-option [value]="type">{{ type }}</mat-option> }\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Department</mat-label>\r
        <mat-select [value]="filters.controls.department.value" (selectionChange)="filters.controls.department.setValue($event.value)">\r
          <mat-option value="all">All departments</mat-option>\r
          @for (department of departments; track department) { <mat-option [value]="department">{{ department }}</mat-option> }\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Status</mat-label>\r
        <mat-select [value]="filters.controls.status.value" (selectionChange)="filters.controls.status.setValue($event.value)">\r
          <mat-option value="all">All statuses</mat-option>\r
          @for (status of statuses; track status) { <mat-option [value]="status">{{ status }}</mat-option> }\r
        </mat-select>\r
      </mat-form-field>\r
      <mat-form-field appearance="outline">\r
        <mat-label>Approval Level</mat-label>\r
        <mat-select [value]="filters.controls.approvalLevel.value" (selectionChange)="filters.controls.approvalLevel.setValue($event.value)">\r
          <mat-option value="all">All levels</mat-option>\r
          @for (level of approvalLevels; track level) { <mat-option [value]="level">{{ level }}</mat-option> }\r
        </mat-select>\r
      </mat-form-field>\r
    </div>\r
\r
    @if (loading) { <mat-progress-bar mode="indeterminate" aria-label="Loading approvals"></mat-progress-bar> }\r
    <div class="table-wrap">\r
      @if (dataSource.filteredData.length > 0) {\r
        <table mat-table [dataSource]="dataSource" class="approvals-table">\r
          <ng-container matColumnDef="id"><th mat-header-cell *matHeaderCellDef>Request ID</th><td mat-cell *matCellDef="let approval" class="id-cell">{{ approval.id }}</td></ng-container>\r
          <ng-container matColumnDef="requestType"><th mat-header-cell *matHeaderCellDef>Request Type</th><td mat-cell *matCellDef="let approval">{{ approval.requestType }}</td></ng-container>\r
          <ng-container matColumnDef="requester"><th mat-header-cell *matHeaderCellDef>Requested By</th><td mat-cell *matCellDef="let approval">{{ approval.requester.fullName }}</td></ng-container>\r
          <ng-container matColumnDef="department"><th mat-header-cell *matHeaderCellDef>Department</th><td mat-cell *matCellDef="let approval">{{ approval.departmentName }}</td></ng-container>\r
          <ng-container matColumnDef="amount"><th mat-header-cell *matHeaderCellDef>Amount</th><td mat-cell *matCellDef="let approval" class="amount-cell">{{ approval.amount | currency: approval.currency:'symbol':'1.0-2' }}</td></ng-container>\r
          <ng-container matColumnDef="submittedAt"><th mat-header-cell *matHeaderCellDef>Submitted Date</th><td mat-cell *matCellDef="let approval">{{ approval.submittedAt | date: 'mediumDate' }}</td></ng-container>\r
          <ng-container matColumnDef="level"><th mat-header-cell *matHeaderCellDef>Current Approval Level</th><td mat-cell *matCellDef="let approval">{{ approval.currentApprovalLevel }}<span class="level-count">{{ approval.levelNumber }} of {{ approval.totalLevels }}</span></td></ng-container>\r
          <ng-container matColumnDef="status"><th mat-header-cell *matHeaderCellDef>Status</th><td mat-cell *matCellDef="let approval"><app-approval-status-chip [status]="approval.status" /></td></ng-container>\r
          <ng-container matColumnDef="actions"><th mat-header-cell *matHeaderCellDef><span class="visually-hidden">Actions</span></th><td mat-cell *matCellDef="let approval"><a mat-flat-button color="primary" class="review-button" [routerLink]="['/approvals', approval.id]">Review<mat-icon>arrow_forward</mat-icon></a></td></ng-container>\r
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
          <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
        </table>\r
      } @else if (!loading) {\r
        <div class="empty-state"><mat-icon>{{ dataSource.data.length ? 'filter_list_off' : 'task_alt' }}</mat-icon><strong>{{ dataSource.data.length ? 'No matching approvals' : 'You\u2019re all caught up' }}</strong><span>{{ dataSource.data.length ? 'Adjust filters to see more approvals.' : 'Requests assigned to you will appear here.' }}</span></div>\r
      }\r
    </div>\r
    <mat-paginator [pageSize]="10" [pageSizeOptions]="pageSizeOptions" [showFirstLastButtons]="true" aria-label="Select approval page"></mat-paginator>\r
  </section>\r
</section>`, styles: ['/* src/app/features/pages/approvals/pending-approvals.component.scss */\n:host {\n  display: block;\n}\n.approvals-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: arrive 280ms ease-out both;\n}\n.page-heading {\n  padding: 4px 0 5px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 13px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.preview-notice {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.preview-notice strong {\n  margin-right: 4px;\n}\n.error-notice {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice mat-icon {\n  color: #b86156;\n}\n.error-notice span {\n  flex: 1;\n}\n.error-notice button {\n  flex: 0 0 auto;\n  color: #8b4d46;\n  font-size: 11px;\n}\n.approval-panel {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.filters {\n  display: grid;\n  grid-template-columns: minmax(210px, 1.5fr) repeat(4, minmax(135px, 1fr));\n  align-items: center;\n  gap: 9px;\n  padding: 17px 18px 4px;\n}\n.filters mat-form-field {\n  width: 100%;\n  margin-bottom: -1.25em;\n}\n.filters mat-icon[matPrefix] {\n  margin-right: 8px;\n  color: #839087;\n}\n.table-wrap {\n  min-width: 0;\n  overflow-x: auto;\n}\n.approvals-table {\n  width: 100%;\n  min-width: 1320px;\n}\n.approvals-table th {\n  height: 42px;\n  color: #748078;\n  background: #f8faf7;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.approvals-table td {\n  height: 59px;\n  color: #536259;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.approvals-table th:first-child,\n.approvals-table td:first-child {\n  padding-left: 20px;\n}\n.id-cell {\n  color: #59705f !important;\n  font-variant-numeric: tabular-nums;\n}\n.amount-cell {\n  color: #33483a !important;\n  font-variant-numeric: tabular-nums;\n  font-weight: 700;\n}\n.level-count {\n  display: block;\n  margin-top: 4px;\n  color: #8a958d;\n  font-size: 9px;\n}\n.review-button {\n  min-height: 30px;\n  border-radius: 4px;\n  font-size: 9px;\n}\n.review-button mat-icon {\n  width: 14px;\n  height: 14px;\n  margin-left: 4px;\n  font-size: 14px;\n}\n.empty-state {\n  display: flex;\n  min-height: 220px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.empty-state mat-icon {\n  width: 28px;\n  height: 28px;\n  margin-bottom: 9px;\n  color: #6e9a6f;\n  font-size: 28px;\n}\n.empty-state strong {\n  color: #35483b;\n  font-size: 12px;\n}\n.empty-state span {\n  margin-top: 6px;\n  font-size: 11px;\n}\nmat-paginator {\n  border-top: 1px solid #edf1ed;\n  background: #fff;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(7px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .approvals-page {\n    animation: none;\n  }\n}\n@media (max-width: 1100px) {\n  .filters {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .search-field {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 700px) {\n  .filters {\n    grid-template-columns: minmax(0, 1fr);\n    padding: 16px 14px 5px;\n  }\n  .search-field {\n    grid-column: auto;\n  }\n  .approvals-table {\n    min-width: 1280px;\n  }\n}\n/*# sourceMappingURL=pending-approvals.component.css.map */\n'] }]
  }], () => [], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingApprovalsComponent, { className: "PendingApprovalsComponent", filePath: "src/app/features/pages/approvals/pending-approvals.component.ts", lineNumber: 46 });
})();
export {
  PendingApprovalsComponent
};
//# sourceMappingURL=chunk-WKOBEFEG.js.map
