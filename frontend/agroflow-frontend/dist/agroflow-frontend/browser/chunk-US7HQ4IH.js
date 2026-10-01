import {
  MatListModule,
  NotificationService
} from "./chunk-P63RXISL.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-3KUWR5NY.js";
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
  MatDivider,
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
  MatLabel,
  MatPrefix
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
  MatCard,
  MatCardModule
} from "./chunk-QXMR3LDA.js";
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
  Router
} from "./chunk-PEU3H2UL.js";
import {
  DatePipe
} from "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
  ViewChild,
  debounceTime,
  distinctUntilChanged,
  inject,
  setClassMetadata,
  startWith,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
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
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/notifications/models/notification.model.ts
var NOTIFICATION_TYPES = [
  "Approval Request",
  "Request Approved",
  "Request Rejected",
  "Request Returned",
  "Request Submitted",
  "System Notification"
];

// src/app/features/pages/notifications/notifications-page.component.ts
function NotificationsPageComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5, "Development preview");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Changes are temporary and won't be sent to the server.");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsPageComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-icon");
    \u0275\u0275text(2, "cloud_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 23);
    \u0275\u0275listener("click", function NotificationsPageComponent_Conditional_14_Template_button_click_5_listener() {
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
    \u0275\u0275textInterpolate(ctx_r1.notificationService.errorMessage());
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.notificationService.loading());
  }
}
function NotificationsPageComponent_For_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r3 = ctx.$implicit;
    \u0275\u0275property("value", type_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(type_r3);
  }
}
function NotificationsPageComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "mat-progress-spinner", 24);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading notifications\u2026");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsPageComponent_Conditional_49_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Notification");
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_Conditional_49_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r4 = ctx.$implicit;
    \u0275\u0275classProp("unread-row", notification_r4.status === "Unread");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r4.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r4.message);
  }
}
function NotificationsPageComponent_Conditional_49_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_Conditional_49_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45)(1, "span", 46);
    \u0275\u0275element(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const notification_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("unread", notification_r5.status === "Unread");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r5.status);
  }
}
function NotificationsPageComponent_Conditional_49_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_Conditional_49_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45)(1, "mat-chip-set")(2, "mat-chip");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notification_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("type-chip " + ctx_r1.typeTone(notification_r6.type));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(notification_r6.type);
  }
}
function NotificationsPageComponent_Conditional_49_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Related Request");
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_Conditional_49_td_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 49);
    \u0275\u0275listener("click", function NotificationsPageComponent_Conditional_49_td_13_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const notification_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.openRelatedRequest(notification_r8));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(notification_r8.relatedRequestId);
  }
}
function NotificationsPageComponent_Conditional_49_td_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 48);
    \u0275\u0275text(1, "None");
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_Conditional_49_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 45);
    \u0275\u0275conditionalCreate(1, NotificationsPageComponent_Conditional_49_td_13_Conditional_1_Template, 2, 1, "button", 47)(2, NotificationsPageComponent_Conditional_49_td_13_Conditional_2_Template, 2, 0, "span", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(notification_r8.relatedRequestId ? 1 : 2);
  }
}
function NotificationsPageComponent_Conditional_49_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41);
    \u0275\u0275text(1, "Date and Time");
    \u0275\u0275elementEnd();
  }
}
function NotificationsPageComponent_Conditional_49_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notification_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, notification_r9.createdAt, "medium"));
  }
}
function NotificationsPageComponent_Conditional_49_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 41)(1, "span", 51);
    \u0275\u0275text(2, "Actions");
    \u0275\u0275elementEnd()();
  }
}
function NotificationsPageComponent_Conditional_49_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 52)(1, "button", 53);
    \u0275\u0275listener("click", function NotificationsPageComponent_Conditional_49_td_19_Template_button_click_1_listener() {
      const notification_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setReadStatus(notification_r11, notification_r11.status === "Unread" ? "Read" : "Unread"));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 54);
    \u0275\u0275listener("click", function NotificationsPageComponent_Conditional_49_td_19_Template_button_click_4_listener() {
      const notification_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.deleteNotification(notification_r11));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "delete_outline");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const notification_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", notification_r11.status === "Unread" ? "Mark as read" : "Mark as unread");
    \u0275\u0275attribute("aria-label", notification_r11.status === "Unread" ? "Mark " + notification_r11.title + " as read" : "Mark " + notification_r11.title + " as unread");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(notification_r11.status === "Unread" ? "mark_email_read" : "mark_email_unread");
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "Delete " + notification_r11.title);
  }
}
function NotificationsPageComponent_Conditional_49_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 55);
  }
}
function NotificationsPageComponent_Conditional_49_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 56);
  }
}
function NotificationsPageComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "table", 26);
    \u0275\u0275elementContainerStart(2, 27);
    \u0275\u0275template(3, NotificationsPageComponent_Conditional_49_th_3_Template, 2, 0, "th", 28)(4, NotificationsPageComponent_Conditional_49_td_4_Template, 5, 4, "td", 29);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 30);
    \u0275\u0275template(6, NotificationsPageComponent_Conditional_49_th_6_Template, 2, 0, "th", 28)(7, NotificationsPageComponent_Conditional_49_td_7_Template, 4, 3, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 32);
    \u0275\u0275template(9, NotificationsPageComponent_Conditional_49_th_9_Template, 2, 0, "th", 28)(10, NotificationsPageComponent_Conditional_49_td_10_Template, 4, 3, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 33);
    \u0275\u0275template(12, NotificationsPageComponent_Conditional_49_th_12_Template, 2, 0, "th", 28)(13, NotificationsPageComponent_Conditional_49_td_13_Template, 3, 1, "td", 31);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 34);
    \u0275\u0275template(15, NotificationsPageComponent_Conditional_49_th_15_Template, 2, 0, "th", 28)(16, NotificationsPageComponent_Conditional_49_td_16_Template, 3, 4, "td", 35);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 36);
    \u0275\u0275template(18, NotificationsPageComponent_Conditional_49_th_18_Template, 3, 0, "th", 28)(19, NotificationsPageComponent_Conditional_49_td_19_Template, 7, 4, "td", 37);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, NotificationsPageComponent_Conditional_49_tr_20_Template, 1, 0, "tr", 38)(21, NotificationsPageComponent_Conditional_49_tr_21_Template, 1, 0, "tr", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(22, "mat-paginator", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r1.dataSource);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r1.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("pageSize", 10)("pageSizeOptions", ctx_r1.pageSizeOptions)("showFirstLastButtons", true);
  }
}
function NotificationsPageComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-icon");
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
    \u0275\u0275textInterpolate(ctx_r1.notificationService.notifications().length ? "filter_list_off" : "notifications_none");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.notificationService.notifications().length ? "No matching notifications" : "You\u2019re all caught up");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.notificationService.notifications().length ? "Try changing the filters or search." : "New system updates will appear here.");
  }
}
var _NotificationsPageComponent = class _NotificationsPageComponent {
  set paginator(paginator) {
    if (paginator)
      this.dataSource.paginator = paginator;
  }
  constructor() {
    this.authService = inject(AuthService);
    this.notificationService = inject(NotificationService);
    this.router = inject(Router);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.dataSource = new MatTableDataSource([]);
    this.notificationTypes = NOTIFICATION_TYPES;
    this.pageSizeOptions = [10, 20, 50];
    this.displayedColumns = ["notification", "type", "relatedRequest", "createdAt", "status", "actions"];
    this.filters = new FormGroup({
      readStatus: new FormControl("all", { nonNullable: true }),
      type: new FormControl("all", { nonNullable: true }),
      query: new FormControl("", { nonNullable: true })
    });
    this.dataSource.filterPredicate = (notification, serializedFilters) => {
      try {
        return this.notificationService.matchesFiltersForRecord(notification, JSON.parse(serializedFilters));
      } catch {
        return true;
      }
    };
  }
  ngOnInit() {
    this.filters.valueChanges.pipe(startWith(this.filters.getRawValue()), debounceTime(120), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef)).subscribe(() => this.applyFilters());
    const user = this.authService.currentUser();
    if (!user) {
      void this.router.navigate(["/login"], { queryParams: { returnUrl: "/notifications" } });
      return;
    }
    this.notificationService.loadForUser(user.email).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.refreshRows());
  }
  retry() {
    const user = this.authService.currentUser();
    if (!user)
      return;
    this.notificationService.loadForUser(user.email).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.refreshRows());
  }
  markAllAsRead() {
    this.notificationService.markAllAsRead().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.refreshRows();
        this.showMessage("All notifications marked as read.");
      },
      error: () => this.showMessage("Notifications could not be updated. Please try again.")
    });
  }
  setReadStatus(notification, status) {
    const request = status === "Read" ? this.notificationService.markAsRead(notification.id) : this.notificationService.markAsUnread(notification.id);
    request.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.refreshRows();
        this.showMessage(status === "Read" ? "Notification marked as read." : "Notification marked as unread.");
      },
      error: () => this.showMessage("Notification could not be updated.")
    });
  }
  deleteNotification(notification) {
    this.notificationService.delete(notification.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => {
        this.refreshRows();
        this.showMessage("Notification deleted.");
      },
      error: () => this.showMessage("Notification could not be deleted.")
    });
  }
  openRelatedRequest(notification) {
    if (notification.relatedRequestPath)
      void this.router.navigateByUrl(notification.relatedRequestPath);
  }
  typeTone(type) {
    return type.toLocaleLowerCase().replaceAll(" ", "-");
  }
  applyFilters() {
    this.dataSource.filter = JSON.stringify(this.filters.getRawValue());
    this.dataSource.paginator?.firstPage();
  }
  refreshRows() {
    this.dataSource.data = this.notificationService.notifications();
    this.applyFilters();
  }
  showMessage(message) {
    this.snackBar.open(message, "Dismiss", { duration: 3e3 });
  }
};
_NotificationsPageComponent.\u0275fac = function NotificationsPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NotificationsPageComponent)();
};
_NotificationsPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsPageComponent, selectors: [["app-notifications-page"]], viewQuery: function NotificationsPageComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MatPaginator, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.paginator = _t.first);
  }
}, decls: 51, vars: 10, consts: [["aria-labelledby", "notifications-title", 1, "notifications-page"], [1, "page-heading"], [1, "eyebrow"], ["id", "notifications-title"], [1, "description"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["role", "status", 1, "preview-notice"], ["role", "alert", 1, "error-notice"], [1, "notification-summary"], [1, "unread-indicator"], ["appearance", "outlined", "aria-label", "Notification list", 1, "notifications-panel"], [1, "filters"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Title, message, or related request", 3, "formControl"], ["appearance", "outline"], [3, "selectionChange", "value"], ["value", "all"], ["value", "unread"], ["value", "read"], [3, "value"], [1, "loading-state"], [1, "empty-state"], ["mat-button", "", "type", "button", 3, "click", "disabled"], ["mode", "indeterminate", "diameter", "34", "aria-label", "Loading notifications"], [1, "table-wrap"], ["mat-table", "", 1, "notifications-table", 3, "dataSource"], ["matColumnDef", "notification"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "notification-cell", 3, "unread-row", 4, "matCellDef"], ["matColumnDef", "status"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "type"], ["matColumnDef", "relatedRequest"], ["matColumnDef", "createdAt"], ["mat-cell", "", "class", "date-cell", 4, "matCellDef"], ["matColumnDef", "actions"], ["mat-cell", "", "class", "actions-cell", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select notification page", 3, "pageSize", "pageSizeOptions", "showFirstLastButtons"], ["mat-header-cell", ""], ["mat-cell", "", 1, "notification-cell"], [1, "notification-title"], [1, "notification-message"], ["mat-cell", ""], [1, "read-state"], ["mat-button", "", "type", "button", 1, "request-link"], [1, "muted"], ["mat-button", "", "type", "button", 1, "request-link", 3, "click"], ["mat-cell", "", 1, "date-cell"], [1, "visually-hidden"], ["mat-cell", "", 1, "actions-cell"], ["mat-icon-button", "", "type", "button", 3, "click", "matTooltip"], ["mat-icon-button", "", "type", "button", "matTooltip", "Delete notification", 1, "delete-button", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function NotificationsPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "header", 1)(2, "div")(3, "p", 2);
    \u0275\u0275text(4, "WORKSPACE ACTIVITY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 3);
    \u0275\u0275text(6, "Notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 4);
    \u0275\u0275text(8, "View and manage system notifications.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 5);
    \u0275\u0275listener("click", function NotificationsPageComponent_Template_button_click_9_listener() {
      return ctx.markAllAsRead();
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "Mark All as Read");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(13, NotificationsPageComponent_Conditional_13_Template, 7, 0, "div", 6);
    \u0275\u0275conditionalCreate(14, NotificationsPageComponent_Conditional_14_Template, 7, 2, "div", 7);
    \u0275\u0275elementStart(15, "div", 8);
    \u0275\u0275element(16, "span", 9);
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "mat-card", 10)(22, "div", 11)(23, "mat-form-field", 12)(24, "mat-label");
    \u0275\u0275text(25, "Search notifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-icon", 13);
    \u0275\u0275text(27, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "mat-form-field", 15)(30, "mat-label");
    \u0275\u0275text(31, "Read status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-select", 16);
    \u0275\u0275listener("selectionChange", function NotificationsPageComponent_Template_mat_select_selectionChange_32_listener($event) {
      return ctx.filters.controls.readStatus.setValue($event.value);
    });
    \u0275\u0275elementStart(33, "mat-option", 17);
    \u0275\u0275text(34, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-option", 18);
    \u0275\u0275text(36, "Unread");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-option", 19);
    \u0275\u0275text(38, "Read");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "mat-form-field", 15)(40, "mat-label");
    \u0275\u0275text(41, "Notification type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-select", 16);
    \u0275\u0275listener("selectionChange", function NotificationsPageComponent_Template_mat_select_selectionChange_42_listener($event) {
      return ctx.filters.controls.type.setValue($event.value);
    });
    \u0275\u0275elementStart(43, "mat-option", 17);
    \u0275\u0275text(44, "All types");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(45, NotificationsPageComponent_For_46_Template, 2, 2, "mat-option", 20, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(47, "mat-divider");
    \u0275\u0275conditionalCreate(48, NotificationsPageComponent_Conditional_48_Template, 4, 0, "div", 21);
    \u0275\u0275conditionalCreate(49, NotificationsPageComponent_Conditional_49_Template, 23, 6)(50, NotificationsPageComponent_Conditional_50_Template, 7, 3, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx.notificationService.unreadCount() === 0 || ctx.notificationService.loading());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.notificationService.previewMode() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.notificationService.errorMessage() ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx.notificationService.unreadCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("unread notification", ctx.notificationService.unreadCount() === 1 ? "" : "s");
    \u0275\u0275advance(8);
    \u0275\u0275property("formControl", ctx.filters.controls.query);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx.filters.controls.readStatus.value);
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx.filters.controls.type.value);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.notificationTypes);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx.notificationService.loading() ? 48 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.notificationService.loading() && ctx.dataSource.filteredData.length > 0 ? 49 : !ctx.notificationService.loading() ? 50 : -1);
  }
}, dependencies: [MatButtonModule, MatButton, MatIconButton, MatCardModule, MatCard, MatChipsModule, MatChip, MatChipSet, MatDividerModule, MatDivider, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatIconModule, MatIcon, MatInputModule, MatInput, MatListModule, MatPaginatorModule, MatPaginator, MatProgressSpinnerModule, MatProgressSpinner, MatSelectModule, MatSelect, MatOption, MatSnackBarModule, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatTooltipModule, MatTooltip, ReactiveFormsModule, DefaultValueAccessor, NgControlStatus, FormControlDirective, DatePipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.notifications-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 4px 0 5px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.page-heading[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%] {\n  min-height: 37px;\n  flex: 0 0 auto;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.page-heading[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  margin-right: 4px;\n  font-size: 17px;\n}\n.preview-notice[_ngcontent-%COMP%], \n.error-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 13px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.preview-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-right: 4px;\n}\n.error-notice[_ngcontent-%COMP%] {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #b86156;\n}\n.error-notice[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.error-notice[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #8b4d46;\n  font-size: 10px;\n}\n.notification-summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  color: #7c8980;\n  font-size: 10px;\n}\n.notification-summary[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #33483a;\n  font-size: 12px;\n}\n.unread-indicator[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #d99342;\n}\n.notifications-panel[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  padding: 0;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(220px, 1.5fr) minmax(170px, 0.8fr) minmax(220px, 1fr);\n  align-items: center;\n  gap: 10px;\n  padding: 16px 18px 4px;\n}\n.filters[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: -1.25em;\n}\n.filters[_ngcontent-%COMP%]   mat-icon[matPrefix][_ngcontent-%COMP%] {\n  margin-right: 8px;\n  color: #839087;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow-x: auto;\n}\n.notifications-table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 900px;\n}\n.notifications-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  height: 42px;\n  color: #748078;\n  background: #f8faf7;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.notifications-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  height: 66px;\n  color: #536259;\n  font-size: 10px;\n}\n.notifications-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.notifications-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  padding-left: 20px;\n}\n.notification-cell[_ngcontent-%COMP%] {\n  max-width: 380px;\n}\n.notification-title[_ngcontent-%COMP%], \n.notification-message[_ngcontent-%COMP%] {\n  display: block;\n}\n.notification-title[_ngcontent-%COMP%] {\n  color: #34463a;\n  font-weight: 600;\n}\n.notification-message[_ngcontent-%COMP%] {\n  max-width: 360px;\n  margin-top: 4px;\n  overflow: hidden;\n  color: #839087;\n  font-size: 9px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.unread-row[_ngcontent-%COMP%]   .notification-title[_ngcontent-%COMP%] {\n  color: #20382a;\n  font-weight: 700;\n}\n.type-chip[_ngcontent-%COMP%] {\n  min-height: 22px;\n  border-radius: 4px !important;\n  font-size: 8px;\n  font-weight: 600;\n}\n.type-chip.approval-request[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #fbf1df;\n  --mdc-chip-label-text-color: #936322;\n}\n.type-chip.request-approved[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.type-chip.request-rejected[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #f8eae8;\n  --mdc-chip-label-text-color: #9e504a;\n}\n.type-chip.request-returned[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf1f5;\n  --mdc-chip-label-text-color: #507389;\n}\n.type-chip.request-submitted[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eef1ed;\n  --mdc-chip-label-text-color: #647267;\n}\n.type-chip.system-notification[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #f0f1ef;\n  --mdc-chip-label-text-color: #667168;\n}\n.request-link[_ngcontent-%COMP%] {\n  min-width: auto;\n  padding: 0 4px;\n  color: #3d7551;\n  font-size: 9px;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #a2aaa4;\n  font-size: 9px;\n}\n.date-cell[_ngcontent-%COMP%] {\n  min-width: 145px;\n  color: #738078 !important;\n  font-size: 9px !important;\n}\n.read-state[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #829087;\n  font-size: 9px;\n}\n.read-state[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #c6cec7;\n}\n.read-state.unread[_ngcontent-%COMP%] {\n  color: #765421;\n  font-weight: 700;\n}\n.read-state.unread[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #d99342;\n}\n.actions-cell[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  color: #75837a;\n}\n.actions-cell[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.actions-cell[_ngcontent-%COMP%]   .delete-button[_ngcontent-%COMP%] {\n  color: #a35b53;\n}\n.loading-state[_ngcontent-%COMP%], \n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 220px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  color: #748078;\n  text-align: center;\n}\n.loading-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n.empty-state[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n  color: #89a47c;\n  font-size: 28px;\n}\n.empty-state[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #35483b;\n  font-size: 12px;\n}\n.empty-state[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\nmat-paginator[_ngcontent-%COMP%] {\n  border-top: 1px solid #edf1ed;\n  background: #fff;\n}\n.visually-hidden[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .notifications-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 900px) {\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .search-field[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 620px) {\n  .page-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 13px;\n  }\n  .filters[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    padding: 15px 13px 4px;\n  }\n  .search-field[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .notifications-table[_ngcontent-%COMP%] {\n    min-width: 880px;\n  }\n}\n@media (max-width: 480px) {\n  .notifications-page[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n}\n/*# sourceMappingURL=notifications-page.component.css.map */'] });
var NotificationsPageComponent = _NotificationsPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsPageComponent, [{
    type: Component,
    args: [{ selector: "app-notifications-page", standalone: true, imports: [DatePipe, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatTooltipModule, ReactiveFormsModule], template: `<section class="notifications-page" aria-labelledby="notifications-title">\r
  <header class="page-heading">\r
    <div><p class="eyebrow">WORKSPACE ACTIVITY</p><h1 id="notifications-title">Notifications</h1><p class="description">View and manage system notifications.</p></div>\r
    <button mat-stroked-button type="button" (click)="markAllAsRead()" [disabled]="notificationService.unreadCount() === 0 || notificationService.loading()"><mat-icon>done_all</mat-icon>Mark All as Read</button>\r
  </header>\r
\r
  @if (notificationService.previewMode()) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span><strong>Development preview</strong> Changes are temporary and won't be sent to the server.</span></div> }\r
  @if (notificationService.errorMessage()) { <div class="error-notice" role="alert"><mat-icon>cloud_off</mat-icon><span>{{ notificationService.errorMessage() }}</span><button mat-button type="button" (click)="retry()" [disabled]="notificationService.loading()">Retry</button></div> }\r
\r
  <div class="notification-summary"><span class="unread-indicator"></span><strong>{{ notificationService.unreadCount() }}</strong><span>unread notification{{ notificationService.unreadCount() === 1 ? '' : 's' }}</span></div>\r
\r
  <mat-card appearance="outlined" class="notifications-panel" aria-label="Notification list">\r
    <div class="filters">\r
      <mat-form-field appearance="outline" class="search-field"><mat-label>Search notifications</mat-label><mat-icon matPrefix>search</mat-icon><input matInput [formControl]="filters.controls.query" placeholder="Title, message, or related request"></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>Read status</mat-label><mat-select [value]="filters.controls.readStatus.value" (selectionChange)="filters.controls.readStatus.setValue($event.value)"><mat-option value="all">All</mat-option><mat-option value="unread">Unread</mat-option><mat-option value="read">Read</mat-option></mat-select></mat-form-field>\r
      <mat-form-field appearance="outline"><mat-label>Notification type</mat-label><mat-select [value]="filters.controls.type.value" (selectionChange)="filters.controls.type.setValue($event.value)"><mat-option value="all">All types</mat-option>@for (type of notificationTypes; track type) { <mat-option [value]="type">{{ type }}</mat-option> }</mat-select></mat-form-field>\r
    </div>\r
    <mat-divider></mat-divider>\r
\r
    @if (notificationService.loading()) { <div class="loading-state"><mat-progress-spinner mode="indeterminate" diameter="34" aria-label="Loading notifications"></mat-progress-spinner><span>Loading notifications\u2026</span></div> }\r
\r
    @if (!notificationService.loading() && dataSource.filteredData.length > 0) {\r
      <div class="table-wrap">\r
        <table mat-table [dataSource]="dataSource" class="notifications-table">\r
          <ng-container matColumnDef="notification"><th mat-header-cell *matHeaderCellDef>Notification</th><td mat-cell *matCellDef="let notification" class="notification-cell" [class.unread-row]="notification.status === 'Unread'"><span class="notification-title">{{ notification.title }}</span><span class="notification-message">{{ notification.message }}</span></td></ng-container>\r
                    <ng-container matColumnDef="status"><th mat-header-cell *matHeaderCellDef>Status</th><td mat-cell *matCellDef="let notification"><span class="read-state" [class.unread]="notification.status === 'Unread'"><span></span>{{ notification.status }}</span></td></ng-container>\r
          <ng-container matColumnDef="type"><th mat-header-cell *matHeaderCellDef>Type</th><td mat-cell *matCellDef="let notification"><mat-chip-set><mat-chip [class]="'type-chip ' + typeTone(notification.type)">{{ notification.type }}</mat-chip></mat-chip-set></td></ng-container>\r
          <ng-container matColumnDef="relatedRequest"><th mat-header-cell *matHeaderCellDef>Related Request</th><td mat-cell *matCellDef="let notification">@if (notification.relatedRequestId) { <button mat-button class="request-link" type="button" (click)="openRelatedRequest(notification)">{{ notification.relatedRequestId }}</button> } @else { <span class="muted">None</span> }</td></ng-container>\r
          <ng-container matColumnDef="createdAt"><th mat-header-cell *matHeaderCellDef>Date and Time</th><td mat-cell *matCellDef="let notification" class="date-cell">{{ notification.createdAt | date: 'medium' }}</td></ng-container>\r
          <ng-container matColumnDef="actions"><th mat-header-cell *matHeaderCellDef><span class="visually-hidden">Actions</span></th><td mat-cell *matCellDef="let notification" class="actions-cell"><button mat-icon-button type="button" [matTooltip]="notification.status === 'Unread' ? 'Mark as read' : 'Mark as unread'" [attr.aria-label]="notification.status === 'Unread' ? 'Mark ' + notification.title + ' as read' : 'Mark ' + notification.title + ' as unread'" (click)="setReadStatus(notification, notification.status === 'Unread' ? 'Read' : 'Unread')"><mat-icon>{{ notification.status === 'Unread' ? 'mark_email_read' : 'mark_email_unread' }}</mat-icon></button><button mat-icon-button type="button" class="delete-button" matTooltip="Delete notification" [attr.aria-label]="'Delete ' + notification.title" (click)="deleteNotification(notification)"><mat-icon>delete_outline</mat-icon></button></td></ng-container>\r
          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr><tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
        </table>\r
      </div>\r
      <mat-paginator [pageSize]="10" [pageSizeOptions]="pageSizeOptions" [showFirstLastButtons]="true" aria-label="Select notification page"></mat-paginator>\r
    } @else if (!notificationService.loading()) {\r
      <div class="empty-state"><mat-icon>{{ notificationService.notifications().length ? 'filter_list_off' : 'notifications_none' }}</mat-icon><strong>{{ notificationService.notifications().length ? 'No matching notifications' : 'You\u2019re all caught up' }}</strong><span>{{ notificationService.notifications().length ? 'Try changing the filters or search.' : 'New system updates will appear here.' }}</span></div>\r
    }\r
  </mat-card>\r
</section>`, styles: ['/* src/app/features/pages/notifications/notifications-page.component.scss */\n:host {\n  display: block;\n}\n.notifications-page {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  animation: arrive 260ms ease-out both;\n}\n.page-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 4px 0 5px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 30px/1.2 "Space Grotesk", sans-serif;\n}\n.description {\n  margin: 9px 0 0;\n  color: #728078;\n  font-size: 13px;\n}\n.page-heading > button {\n  min-height: 37px;\n  flex: 0 0 auto;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.page-heading > button mat-icon {\n  width: 17px;\n  height: 17px;\n  margin-right: 4px;\n  font-size: 17px;\n}\n.preview-notice,\n.error-notice {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 13px;\n  border: 1px solid;\n  border-radius: 6px;\n  font-size: 10px;\n  line-height: 1.5;\n}\n.preview-notice {\n  border-color: #e8dcc2;\n  color: #725b36;\n  background: #fbf6eb;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.preview-notice strong {\n  margin-right: 4px;\n}\n.error-notice {\n  border-color: #edd6d2;\n  color: #8b4d46;\n  background: #fdf3f1;\n}\n.error-notice mat-icon {\n  color: #b86156;\n}\n.error-notice span {\n  flex: 1;\n}\n.error-notice button {\n  flex: 0 0 auto;\n  color: #8b4d46;\n  font-size: 10px;\n}\n.notification-summary {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  color: #7c8980;\n  font-size: 10px;\n}\n.notification-summary strong {\n  color: #33483a;\n  font-size: 12px;\n}\n.unread-indicator {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #d99342;\n}\n.notifications-panel {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  padding: 0;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.filters {\n  display: grid;\n  grid-template-columns: minmax(220px, 1.5fr) minmax(170px, 0.8fr) minmax(220px, 1fr);\n  align-items: center;\n  gap: 10px;\n  padding: 16px 18px 4px;\n}\n.filters mat-form-field {\n  width: 100%;\n  margin-bottom: -1.25em;\n}\n.filters mat-icon[matPrefix] {\n  margin-right: 8px;\n  color: #839087;\n}\n.table-wrap {\n  min-width: 0;\n  overflow-x: auto;\n}\n.notifications-table {\n  width: 100%;\n  min-width: 900px;\n}\n.notifications-table th {\n  height: 42px;\n  color: #748078;\n  background: #f8faf7;\n  font-size: 10px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n.notifications-table td {\n  height: 66px;\n  color: #536259;\n  font-size: 10px;\n}\n.notifications-table th:first-child,\n.notifications-table td:first-child {\n  padding-left: 20px;\n}\n.notification-cell {\n  max-width: 380px;\n}\n.notification-title,\n.notification-message {\n  display: block;\n}\n.notification-title {\n  color: #34463a;\n  font-weight: 600;\n}\n.notification-message {\n  max-width: 360px;\n  margin-top: 4px;\n  overflow: hidden;\n  color: #839087;\n  font-size: 9px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.unread-row .notification-title {\n  color: #20382a;\n  font-weight: 700;\n}\n.type-chip {\n  min-height: 22px;\n  border-radius: 4px !important;\n  font-size: 8px;\n  font-weight: 600;\n}\n.type-chip.approval-request {\n  --mdc-chip-elevated-container-color: #fbf1df;\n  --mdc-chip-label-text-color: #936322;\n}\n.type-chip.request-approved {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.type-chip.request-rejected {\n  --mdc-chip-elevated-container-color: #f8eae8;\n  --mdc-chip-label-text-color: #9e504a;\n}\n.type-chip.request-returned {\n  --mdc-chip-elevated-container-color: #eaf1f5;\n  --mdc-chip-label-text-color: #507389;\n}\n.type-chip.request-submitted {\n  --mdc-chip-elevated-container-color: #eef1ed;\n  --mdc-chip-label-text-color: #647267;\n}\n.type-chip.system-notification {\n  --mdc-chip-elevated-container-color: #f0f1ef;\n  --mdc-chip-label-text-color: #667168;\n}\n.request-link {\n  min-width: auto;\n  padding: 0 4px;\n  color: #3d7551;\n  font-size: 9px;\n}\n.muted {\n  color: #a2aaa4;\n  font-size: 9px;\n}\n.date-cell {\n  min-width: 145px;\n  color: #738078 !important;\n  font-size: 9px !important;\n}\n.read-state {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #829087;\n  font-size: 9px;\n}\n.read-state > span {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #c6cec7;\n}\n.read-state.unread {\n  color: #765421;\n  font-weight: 700;\n}\n.read-state.unread > span {\n  background: #d99342;\n}\n.actions-cell {\n  white-space: nowrap;\n}\n.actions-cell button {\n  width: 32px;\n  height: 32px;\n  color: #75837a;\n}\n.actions-cell button mat-icon {\n  width: 17px;\n  height: 17px;\n  font-size: 17px;\n}\n.actions-cell .delete-button {\n  color: #a35b53;\n}\n.loading-state,\n.empty-state {\n  display: flex;\n  min-height: 220px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  gap: 10px;\n  color: #748078;\n  text-align: center;\n}\n.loading-state span {\n  font-size: 10px;\n}\n.empty-state > mat-icon {\n  width: 28px;\n  height: 28px;\n  color: #89a47c;\n  font-size: 28px;\n}\n.empty-state strong {\n  color: #35483b;\n  font-size: 12px;\n}\n.empty-state span {\n  font-size: 10px;\n}\nmat-paginator {\n  border-top: 1px solid #edf1ed;\n  background: #fff;\n}\n.visually-hidden {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .notifications-page {\n    animation: none;\n  }\n}\n@media (max-width: 900px) {\n  .filters {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .search-field {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 620px) {\n  .page-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 13px;\n  }\n  .filters {\n    grid-template-columns: minmax(0, 1fr);\n    padding: 15px 13px 4px;\n  }\n  .search-field {\n    grid-column: auto;\n  }\n  .notifications-table {\n    min-width: 880px;\n  }\n}\n@media (max-width: 480px) {\n  .notifications-page {\n    gap: 12px;\n  }\n  h1 {\n    font-size: 27px;\n  }\n}\n/*# sourceMappingURL=notifications-page.component.css.map */\n'] }]
  }], () => [], { paginator: [{
    type: ViewChild,
    args: [MatPaginator]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsPageComponent, { className: "NotificationsPageComponent", filePath: "src/app/features/pages/notifications/notifications-page.component.ts", lineNumber: 33 });
})();
export {
  NotificationsPageComponent
};
//# sourceMappingURL=chunk-US7HQ4IH.js.map
