import {
  PETTY_CASH_STATUSES
} from "./chunk-EXL73QZT.js";
import {
  PettyCashPreviewStore,
  PettyCashService
} from "./chunk-AXXMCM3X.js";
import {
  MatPaginator,
  MatPaginatorModule
} from "./chunk-FEB7GDLY.js";
import {
  MatTooltipModule
} from "./chunk-YM3RABSX.js";
import {
  MatTooltip
} from "./chunk-2DXKA2R6.js";
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
  CancelRequestDialogComponent,
  RequestStatusChipComponent
} from "./chunk-65LYS4ZE.js";
import {
  MatDialog,
  MatDialogModule
} from "./chunk-S5Y7ZGUB.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-VCKAT7IX.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-CEFQC7DY.js";
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
  isDevMode,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵviewQuery
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/petty-cash/petty-cash-list.component.ts
var _c0 = (a0) => ["/petty-cash", a0];
var _c1 = (a0) => ({ draftId: a0 });
function PettyCashListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Preview data");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Requests are scoped to your account; changes are temporary.");
    \u0275\u0275elementEnd()();
  }
}
function PettyCashListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon");
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function PettyCashListComponent_Conditional_14_Template_button_click_5_listener() {
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
function PettyCashListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function PettyCashListComponent_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filters.controls.query.setValue(""));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function PettyCashListComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r4 = ctx.$implicit;
    \u0275\u0275property("value", status_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(status_r4);
  }
}
function PettyCashListComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 19);
  }
}
function PettyCashListComponent_Conditional_42_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Request ID");
    \u0275\u0275elementEnd();
  }
}
function PettyCashListComponent_Conditional_42_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(request_r5.id);
  }
}
function PettyCashListComponent_Conditional_42_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Requester");
    \u0275\u0275elementEnd();
  }
}
function PettyCashListComponent_Conditional_42_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(request_r6.requesterName);
  }
}
function PettyCashListComponent_Conditional_42_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Department");
    \u0275\u0275elementEnd();
  }
}
function PettyCashListComponent_Conditional_42_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(request_r7.departmentName);
  }
}
function PettyCashListComponent_Conditional_42_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Purpose");
    \u0275\u0275elementEnd();
  }
}
function PettyCashListComponent_Conditional_42_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(request_r8.purpose);
  }
}
function PettyCashListComponent_Conditional_42_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Amount");
    \u0275\u0275elementEnd();
  }
}
function PettyCashListComponent_Conditional_42_td_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(2, 1, request_r9.amount, request_r9.currency, "symbol", "1.0-2"));
  }
}
function PettyCashListComponent_Conditional_42_th_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Request Date");
    \u0275\u0275elementEnd();
  }
}
function PettyCashListComponent_Conditional_42_td_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, request_r10.requestDate, "mediumDate"));
  }
}
function PettyCashListComponent_Conditional_42_th_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function PettyCashListComponent_Conditional_42_td_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 44);
    \u0275\u0275element(1, "app-request-status-chip", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("status", request_r11.status);
  }
}
function PettyCashListComponent_Conditional_42_th_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 42)(1, "span", 48);
    \u0275\u0275text(2, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function PettyCashListComponent_Conditional_42_td_24_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51)(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(2, _c1, request_r12.id));
    \u0275\u0275attribute("aria-label", "Edit " + request_r12.id);
  }
}
function PettyCashListComponent_Conditional_42_td_24_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 53);
    \u0275\u0275listener("click", function PettyCashListComponent_Conditional_42_td_24_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const request_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelRequest(request_r12));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.cancelling);
    \u0275\u0275attribute("aria-label", "Cancel " + request_r12.id);
  }
}
function PettyCashListComponent_Conditional_42_td_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 49)(1, "a", 50)(2, "mat-icon");
    \u0275\u0275text(3, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, PettyCashListComponent_Conditional_42_td_24_Conditional_4_Template, 3, 4, "a", 51);
    \u0275\u0275conditionalCreate(5, PettyCashListComponent_Conditional_42_td_24_Conditional_5_Template, 3, 2, "button", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const request_r12 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(4, _c0, request_r12.id));
    \u0275\u0275attribute("aria-label", "View " + request_r12.id);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.canEdit(request_r12) ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canCancel(request_r12) ? 5 : -1);
  }
}
function PettyCashListComponent_Conditional_42_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 54);
  }
}
function PettyCashListComponent_Conditional_42_tr_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 55);
  }
}
function PettyCashListComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 21);
    \u0275\u0275elementContainerStart(1, 26);
    \u0275\u0275template(2, PettyCashListComponent_Conditional_42_th_2_Template, 2, 0, "th", 27)(3, PettyCashListComponent_Conditional_42_td_3_Template, 2, 1, "td", 28);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 29);
    \u0275\u0275template(5, PettyCashListComponent_Conditional_42_th_5_Template, 2, 0, "th", 27)(6, PettyCashListComponent_Conditional_42_td_6_Template, 2, 1, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 31);
    \u0275\u0275template(8, PettyCashListComponent_Conditional_42_th_8_Template, 2, 0, "th", 27)(9, PettyCashListComponent_Conditional_42_td_9_Template, 2, 1, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 32);
    \u0275\u0275template(11, PettyCashListComponent_Conditional_42_th_11_Template, 2, 0, "th", 27)(12, PettyCashListComponent_Conditional_42_td_12_Template, 2, 1, "td", 33);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 34);
    \u0275\u0275template(14, PettyCashListComponent_Conditional_42_th_14_Template, 2, 0, "th", 27)(15, PettyCashListComponent_Conditional_42_td_15_Template, 3, 6, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(16, 36);
    \u0275\u0275template(17, PettyCashListComponent_Conditional_42_th_17_Template, 2, 0, "th", 27)(18, PettyCashListComponent_Conditional_42_td_18_Template, 3, 4, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(19, 37);
    \u0275\u0275template(20, PettyCashListComponent_Conditional_42_th_20_Template, 2, 0, "th", 27)(21, PettyCashListComponent_Conditional_42_td_21_Template, 2, 1, "td", 30);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(22, 38);
    \u0275\u0275template(23, PettyCashListComponent_Conditional_42_th_23_Template, 3, 0, "th", 27)(24, PettyCashListComponent_Conditional_42_td_24_Template, 6, 6, "td", 39);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(25, PettyCashListComponent_Conditional_42_tr_25_Template, 1, 0, "tr", 40)(26, PettyCashListComponent_Conditional_42_tr_26_Template, 1, 0, "tr", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(25);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
  }
}
function PettyCashListComponent_Conditional_43_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 56)(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Create Petty Cash Request");
    \u0275\u0275elementEnd();
  }
}
function PettyCashListComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, PettyCashListComponent_Conditional_43_Conditional_7_Template, 4, 0, "a", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "search_off" : "payments");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "No matching requests" : "No Petty Cash requests yet");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.dataSource.data.length ? "Adjust the search or filters." : "Create a request to start a Petty Cash approval workflow.");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.dataSource.data.length ? 7 : -1);
  }
}
var _PettyCashListComponent = class _PettyCashListComponent {
  set paginator(paginator) {
    if (paginator)
      this.dataSource.paginator = paginator;
  }
  constructor() {
    this.authService = inject(AuthService);
    this.pettyCashService = inject(PettyCashService);
    this.previewStore = inject(PettyCashPreviewStore);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.router = inject(Router);
    this.destroyRef = inject(DestroyRef);
    this.dataSource = new MatTableDataSource([]);
    this.statuses = PETTY_CASH_STATUSES;
    this.pageSizeOptions = [5, 10, 20];
    this.displayedColumns = ["id", "requester", "department", "purpose", "amount", "requestDate", "status", "actions"];
    this.filters = new FormGroup({
      query: new FormControl("", { nonNullable: true }),
      status: new FormControl("all", { nonNullable: true }),
      dateFrom: new FormControl("", { nonNullable: true }),
      dateTo: new FormControl("", { nonNullable: true })
    });
    this.loading = true;
    this.previewMode = false;
    this.cancelling = false;
    this.errorMessage = "";
    this.ownerEmail = "";
    this.dataSource.filterPredicate = (request, serializedFilters) => {
      try {
        return this.pettyCashService.matchesFilters(request, JSON.parse(serializedFilters));
      } catch {
        return true;
      }
    };
  }
  ngOnInit() {
    this.filters.valueChanges.pipe(startWith(this.filters.getRawValue()), debounceTime(150), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.applyFilters());
    this.loadRequests();
  }
  ngAfterViewInit() {
    this.dataSource.paginator?.firstPage();
  }
  retry() {
    this.loadRequests();
  }
  canEdit(request) {
    return request.status === "Draft";
  }
  canCancel(request) {
    return ["Draft", "Pending", "Returned"].includes(request.status);
  }
  cancelRequest(request) {
    if (!this.canCancel(request) || this.cancelling)
      return;
    const data = { requestId: request.id, title: request.purpose };
    this.dialog.open(CancelRequestDialogComponent, {
      width: "min(440px, calc(100vw - 32px))",
      maxWidth: "calc(100vw - 32px)",
      data,
      autoFocus: false
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((confirmed) => {
      if (confirmed)
        this.performCancel(request);
    });
  }
  loadRequests() {
    const user = this.authService.currentUser();
    if (!user) {
      void this.router.navigate(["/login"], { queryParams: { returnUrl: "/petty-cash" } });
      return;
    }
    this.ownerEmail = user.email;
    this.loading = true;
    this.errorMessage = "";
    this.pettyCashService.getMyRequests(user.email).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (requests) => {
        this.previewMode = false;
        this.dataSource.data = requests;
        this.applyFilters();
      },
      error: () => {
        if (isDevMode()) {
          this.previewMode = true;
          this.dataSource.data = this.previewStore.getForOwner(user.email, user.displayName);
          this.errorMessage = "The Petty Cash API is unavailable. Showing development preview data scoped to your account; changes stay local.";
        } else {
          this.previewMode = false;
          this.dataSource.data = [];
          this.errorMessage = "The Petty Cash service is unavailable. Please try again later.";
        }
        this.applyFilters();
      }
    });
  }
  applyFilters() {
    this.dataSource.filter = JSON.stringify(this.filters.getRawValue());
    this.dataSource.paginator?.firstPage();
  }
  performCancel(request) {
    if (this.previewMode) {
      const updated = this.previewStore.cancel(this.ownerEmail, request.id);
      if (updated)
        this.replaceRequest(updated);
      return;
    }
    this.cancelling = true;
    this.pettyCashService.cancel(request.id).pipe(finalize(() => this.cancelling = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.replaceRequest(updated);
        this.snackBar.open("Petty Cash request cancelled.", "Dismiss", { duration: 3500 });
      },
      error: () => this.snackBar.open("The request could not be cancelled. Please try again.", "Dismiss", { duration: 3500 })
    });
  }
  replaceRequest(updated) {
    this.dataSource.data = this.dataSource.data.map((request) => request.id === updated.id ? updated : request);
  }
};
_PettyCashListComponent.\u0275fac = function PettyCashListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PettyCashListComponent)();
};
_PettyCashListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PettyCashListComponent, selectors: [["app-petty-cash-list"]], viewQuery: function PettyCashListComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
  }
}, decls: 45, vars: 12, consts: [["aria-labelledby", "petty-title", 1, "petty-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "petty-title"], [1, "description"], ["mat-flat-button", "", "color", "primary", "routerLink", "/petty-cash/create"], ["role", "status", 1, "preview-notice"], ["role", "alert", 1, "error-notice"], ["aria-label", "Petty Cash requests", 1, "petty-panel"], [1, "filters"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "ID, requester, purpose, or department", 3, "formControl"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search"], ["appearance", "outline"], [3, "selectionChange", "value"], ["value", "all"], [3, "value"], ["matInput", "", "type", "date", 3, "formControl"], ["mode", "indeterminate", "aria-label", "Loading Petty Cash requests"], [1, "table-wrap"], ["mat-table", "", 1, "petty-table", 3, "dataSource"], [1, "empty-state"], ["aria-label", "Select Petty Cash page", 3, "pageSize", "pageSizeOptions", "showFirstLastButtons"], ["mat-button", "", "type", "button", 3, "click", "disabled"], ["mat-icon-button", "", "matSuffix", "", "type", "button", "aria-label", "Clear search", 3, "click"], ["matColumnDef", "id"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "id-cell", 4, "matCellDef"], ["matColumnDef", "requester"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "department"], ["matColumnDef", "purpose"], ["mat-cell", "", "class", "purpose-cell", 4, "matCellDef"], ["matColumnDef", "amount"], ["mat-cell", "", "class", "amount-cell", 4, "matCellDef"], ["matColumnDef", "requestDate"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "actions-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", "", 1, "id-cell"], ["mat-cell", ""], ["mat-cell", "", 1, "purpose-cell"], ["mat-cell", "", 1, "amount-cell"], [3, "status"], [1, "visually-hidden"], ["mat-cell", "", 1, "actions-cell"], ["mat-icon-button", "", "matTooltip", "View request", 3, "routerLink"], ["mat-icon-button", "", "routerLink", "/petty-cash/create", "matTooltip", "Edit draft", 3, "queryParams"], ["mat-icon-button", "", "type", "button", "matTooltip", "Cancel request", 1, "cancel-action", 3, "disabled"], ["mat-icon-button", "", "type", "button", "matTooltip", "Cancel request", 1, "cancel-action", 3, "click", "disabled"], ["mat-header-row", ""], ["mat-row", ""], ["mat-stroked-button", "", "routerLink", "/petty-cash/create"]], template: function PettyCashListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "FINANCE WORKSPACE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "Petty Cash Management");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, "Create and manage petty cash requests.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "a", 5)(10, "mat-icon");
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "Create Petty Cash Request");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, PettyCashListComponent_Conditional_13_Template, 7, 0, "div", 6);
    \u0275\u0275conditionalCreate(14, PettyCashListComponent_Conditional_14_Template, 7, 2, "div", 7);
    \u0275\u0275elementStart(15, "section", 8)(16, "div", 9)(17, "mat-form-field", 10)(18, "mat-label");
    \u0275\u0275text(19, "Search requests");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-icon", 11);
    \u0275\u0275text(21, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 12);
    \u0275\u0275conditionalCreate(23, PettyCashListComponent_Conditional_23_Template, 3, 0, "button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-form-field", 14)(25, "mat-label");
    \u0275\u0275text(26, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "mat-select", 15);
    \u0275\u0275listener("selectionChange", function PettyCashListComponent_Template_mat_select_selectionChange_27_listener($event) {
      return ctx.filters.controls.status.setValue($event.value);
    });
    \u0275\u0275elementStart(28, "mat-option", 16);
    \u0275\u0275text(29, "All statuses");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(30, PettyCashListComponent_For_31_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "mat-form-field", 14)(33, "mat-label");
    \u0275\u0275text(34, "From date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(35, "input", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-form-field", 14)(37, "mat-label");
    \u0275\u0275text(38, "To date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(40, PettyCashListComponent_Conditional_40_Template, 1, 0, "mat-progress-bar", 19);
    \u0275\u0275elementStart(41, "div", 20);
    \u0275\u0275conditionalCreate(42, PettyCashListComponent_Conditional_42_Template, 27, 3, "table", 21)(43, PettyCashListComponent_Conditional_43_Template, 8, 4, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275element(44, "mat-paginator", 23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275conditional(ctx.previewMode ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.errorMessage ? 14 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275property("formControl", ctx.filters.controls.query);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.filters.controls.query.value ? 23 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.filters.controls.status.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.statuses);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControl", ctx.filters.controls.dateFrom);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControl", ctx.filters.controls.dateTo);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading ? 40 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.dataSource.filteredData.length > 0 ? 42 : !ctx.loading ? 43 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("pageSize", 10)("pageSizeOptions", ctx.pageSizeOptions)("showFirstLastButtons", true);
  }
}, dependencies: [
  MatButtonModule,
  MatButton,
  MatIconButton,
  MatDialogModule,
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
  MatSnackBarModule,
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
  MatTooltip,
  ReactiveFormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  FormControlDirective,
  RequestStatusChipComponent,
  RouterLink,
  CurrencyPipe,
  DatePipe
], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.petty-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: _ngcontent-%COMP%_arrive 280ms ease-out both;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 4px 0 5px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.page-heading[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  min-height: 38px;\n  flex: 0 0 auto;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.page-heading[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n  font-size: 18px;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 13px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.preview-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b86156;\n}\n.error-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.error-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #8b4d46;\n  font-size: 11px;\n}\n.petty-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(210px, 1.5fr) repeat(3, minmax(140px, 0.75fr));\n  align-items: center;\n  gap: 9px;\n  padding: 17px 18px 4px;\n}\n.filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: -1.25em;\n}\n.filters[_ngcontent-%COMP%]   mat-icon[matPrefix][_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #839087;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-x: auto;\n}\n.petty-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 1120px;\n}\n.petty-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 42px;\n  color: #748078;\n  background: #f8faf7;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.petty-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 59px;\n  color: #536259;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.petty-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.petty-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.id-cell[_ngcontent-%COMP%] {\n  color: #59705f !important;\n  font-variant-numeric: tabular-nums;\n}\n.purpose-cell[_ngcontent-%COMP%] {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.amount-cell[_ngcontent-%COMP%] {\n  color: #33483a !important;\n  font-variant-numeric: tabular-nums;\n  font-weight: 700;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.actions-cell[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: #75837a;\n}\n.actions-cell[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.actions-cell[_ngcontent-%COMP%]   .cancel-action[_ngcontent-%COMP%] {\n  color: #a35b53;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 220px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  margin-bottom: 9px;\n  color: #89a47c;\n  font-size: 28px;\n}\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #35483b;\n  font-size: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 6px 0 14px;\n  font-size: 11px;\n}\n.empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  border-top: 1px solid #edf1ed;\n  background: #fff;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(7px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .petty-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 900px) {\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .search-field[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 650px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 15px;\n  }\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    padding: 16px 14px 5px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .petty-table[_ngcontent-%COMP%] {\n    min-width: 1080px;\n  }\n}\n@media (max-width: 480px) {\n  .petty-page[_ngcontent-%COMP%] {\n    gap: 13px;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n  .error-notice[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .error-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    min-width: calc(100% - 40px);\n  }\n}\n/*# sourceMappingURL=petty-cash-list.component.css.map */'] });
var PettyCashListComponent = _PettyCashListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PettyCashListComponent, [{
    type: Component,
    args: [{ selector: "app-petty-cash-list", standalone: true, imports: [
      CurrencyPipe,
      DatePipe,
      MatButtonModule,
      MatDialogModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatPaginatorModule,
      MatProgressBarModule,
      MatSelectModule,
      MatSnackBarModule,
      MatTableModule,
      MatTooltipModule,
      ReactiveFormsModule,
      RequestStatusChipComponent,
      RouterLink
    ], template: `<section class="petty-page" aria-labelledby="petty-title">\r
  <header class="page-heading"><div><p class="eyebrow">FINANCE WORKSPACE</p><h1 id="petty-title">Petty Cash Management</h1><p class="description">Create and manage petty cash requests.</p></div><a mat-flat-button color="primary" routerLink="/petty-cash/create"><mat-icon>add</mat-icon>Create Petty Cash Request</a></header>\r
  @if (previewMode) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Preview data</strong> Requests are scoped to your account; changes are temporary.</span></div> }\r
  @if (errorMessage) { <div class="error-notice" role="alert"><mat-icon>cloud_off</mat-icon><span>{{ errorMessage }}</span><button mat-button type="button" (click)="retry()" [disabled]="loading">Retry</button></div> }\r
\r
  <section class="petty-panel" aria-label="Petty Cash requests">\r
    <div class="filters">\r
      <mat-form-field appearance="outline" class="search-field"><mat-label>Search requests</mat-label><mat-icon matPrefix>search</mat-icon><input matInput [formControl]="filters.controls.query" placeholder="ID, requester, purpose, or department">@if (filters.controls.query.value) { <button mat-icon-button matSuffix type="button" aria-label="Clear search" (click)="filters.controls.query.setValue('')"><mat-icon>close</mat-icon></button> }</mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>Status</mat-label><mat-select [value]="filters.controls.status.value" (selectionChange)="filters.controls.status.setValue($event.value)"><mat-option value="all">All statuses</mat-option>@for (status of statuses; track status) { <mat-option [value]="status">{{ status }}</mat-option> }</mat-select></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>From date</mat-label><input matInput type="date" [formControl]="filters.controls.dateFrom"></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>To date</mat-label><input matInput type="date" [formControl]="filters.controls.dateTo"></mat-form-field>\r
    </div>\r
    @if (loading) { <mat-progress-bar mode="indeterminate" aria-label="Loading Petty Cash requests"></mat-progress-bar> }\r
    <div class="table-wrap">\r
      @if (dataSource.filteredData.length > 0) {\r
        <table mat-table [dataSource]="dataSource" class="petty-table">\r
          <ng-container matColumnDef="id"><th mat-header-cell *matHeaderCellDef>Request ID</th><td mat-cell *matCellDef="let request" class="id-cell">{{ request.id }}</td></ng-container>\r
          <ng-container matColumnDef="requester"><th mat-header-cell *matHeaderCellDef>Requester</th><td mat-cell *matCellDef="let request">{{ request.requesterName }}</td></ng-container>\r
          <ng-container matColumnDef="department"><th mat-header-cell *matHeaderCellDef>Department</th><td mat-cell *matCellDef="let request">{{ request.departmentName }}</td></ng-container>\r
          <ng-container matColumnDef="purpose"><th mat-header-cell *matHeaderCellDef>Purpose</th><td mat-cell *matCellDef="let request" class="purpose-cell">{{ request.purpose }}</td></ng-container>\r
          <ng-container matColumnDef="amount"><th mat-header-cell *matHeaderCellDef>Amount</th><td mat-cell *matCellDef="let request" class="amount-cell">{{ request.amount | currency: request.currency:'symbol':'1.0-2' }}</td></ng-container>\r
          <ng-container matColumnDef="requestDate"><th mat-header-cell *matHeaderCellDef>Request Date</th><td mat-cell *matCellDef="let request">{{ request.requestDate | date: 'mediumDate' }}</td></ng-container>\r
          <ng-container matColumnDef="status"><th mat-header-cell *matHeaderCellDef>Status</th><td mat-cell *matCellDef="let request"><app-request-status-chip [status]="request.status" /></td></ng-container>\r
          <ng-container matColumnDef="actions"><th mat-header-cell *matHeaderCellDef><span class="visually-hidden">Actions</span></th><td mat-cell *matCellDef="let request" class="actions-cell">\r
            <a mat-icon-button [routerLink]="['/petty-cash', request.id]" matTooltip="View request" [attr.aria-label]="'View ' + request.id"><mat-icon>visibility</mat-icon></a>\r
            @if (canEdit(request)) { <a mat-icon-button routerLink="/petty-cash/create" [queryParams]="{ draftId: request.id }" matTooltip="Edit draft" [attr.aria-label]="'Edit ' + request.id"><mat-icon>edit</mat-icon></a> }\r
            @if (canCancel(request)) { <button mat-icon-button type="button" class="cancel-action" matTooltip="Cancel request" [attr.aria-label]="'Cancel ' + request.id" (click)="cancelRequest(request)" [disabled]="cancelling"><mat-icon>cancel</mat-icon></button> }\r
          </td></ng-container>\r
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr><tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
        </table>\r
      } @else if (!loading) {\r
        <div class="empty-state"><mat-icon>{{ dataSource.data.length ? 'search_off' : 'payments' }}</mat-icon><strong>{{ dataSource.data.length ? 'No matching requests' : 'No Petty Cash requests yet' }}</strong><span>{{ dataSource.data.length ? 'Adjust the search or filters.' : 'Create a request to start a Petty Cash approval workflow.' }}</span>@if (!dataSource.data.length) { <a mat-stroked-button routerLink="/petty-cash/create"><mat-icon>add</mat-icon>Create Petty Cash Request</a> }</div>\r
      }\r
    </div>\r
    <mat-paginator [pageSize]="10" [pageSizeOptions]="pageSizeOptions" [showFirstLastButtons]="true" aria-label="Select Petty Cash page"></mat-paginator>\r
  </section>\r
</section>`, styles: ['/* src/app/features/pages/petty-cash/petty-cash-list.component.scss */\n:host {\n  display: block;\n}\n.petty-page {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  animation: arrive 280ms ease-out both;\n}\n.page-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 4px 0 5px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.page-heading > a {\n  min-height: 38px;\n  flex: 0 0 auto;\n  border-radius: 5px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.page-heading > a mat-icon {\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n  font-size: 18px;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 11px 13px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.preview-notice {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.preview-notice strong {\n  margin-right: 4px;\n}\n.error-notice {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice mat-icon {\n  color: #b86156;\n}\n.error-notice span {\n  flex: 1;\n}\n.error-notice button {\n  flex: 0 0 auto;\n  color: #8b4d46;\n  font-size: 11px;\n}\n.petty-panel {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.filters {\n  display: grid;\n  grid-template-columns: minmax(210px, 1.5fr) repeat(3, minmax(140px, 0.75fr));\n  align-items: center;\n  gap: 9px;\n  padding: 17px 18px 4px;\n}\n.filters mat-form-field {\n  width: 100%;\n  margin-bottom: -1.25em;\n}\n.filters mat-icon[matPrefix] {\n  margin-right: 8px;\n  color: #839087;\n}\n.table-wrap {\n  min-width: 0;\n  overflow-x: auto;\n}\n.petty-table {\n  width: 100%;\n  min-width: 1120px;\n}\n.petty-table th {\n  height: 42px;\n  color: #748078;\n  background: #f8faf7;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.petty-table td {\n  height: 59px;\n  color: #536259;\n  font-size: 10px;\n  white-space: nowrap;\n}\n.petty-table th:first-child,\n.petty-table td:first-child {\n  padding-left: 20px;\n}\n.id-cell {\n  color: #59705f !important;\n  font-variant-numeric: tabular-nums;\n}\n.purpose-cell {\n  max-width: 200px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.amount-cell {\n  color: #33483a !important;\n  font-variant-numeric: tabular-nums;\n  font-weight: 700;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.actions-cell a,\n.actions-cell button {\n  width: 32px;\n  height: 32px;\n  color: #75837a;\n}\n.actions-cell mat-icon {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.actions-cell .cancel-action {\n  color: #a35b53;\n}\n.empty-state {\n  display: flex;\n  min-height: 220px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.empty-state > mat-icon {\n  width: 28px;\n  height: 28px;\n  margin-bottom: 9px;\n  color: #89a47c;\n  font-size: 28px;\n}\n.empty-state strong {\n  color: #35483b;\n  font-size: 12px;\n}\n.empty-state span {\n  margin: 6px 0 14px;\n  font-size: 11px;\n}\n.empty-state a {\n  min-height: 34px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.empty-state a mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\nmat-paginator {\n  border-top: 1px solid #edf1ed;\n  background: #fff;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(7px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .petty-page {\n    animation: none;\n  }\n}\n@media (max-width: 900px) {\n  .filters {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .search-field {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 650px) {\n  .page-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 15px;\n  }\n  .filters {\n    grid-template-columns: minmax(0, 1fr);\n    padding: 16px 14px 5px;\n  }\n  .search-field {\n    grid-column: auto;\n  }\n  .petty-table {\n    min-width: 1080px;\n  }\n}\n@media (max-width: 480px) {\n  .petty-page {\n    gap: 13px;\n  }\n  h1 {\n    font-size: 27px;\n  }\n  .error-notice {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .error-notice span {\n    min-width: calc(100% - 40px);\n  }\n}\n/*# sourceMappingURL=petty-cash-list.component.css.map */\n'] }]
  }], () => [], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PettyCashListComponent, { className: "PettyCashListComponent", filePath: "src/app/features/pages/petty-cash/petty-cash-list.component.ts", lineNumber: 37 });
})();
export {
  PettyCashListComponent
};
//# sourceMappingURL=chunk-YFZHCFWL.js.map
