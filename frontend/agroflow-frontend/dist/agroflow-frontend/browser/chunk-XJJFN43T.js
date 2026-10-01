import {
  MatDivider,
  MatDividerModule
} from "./chunk-N7METAUH.js";
import {
  RequestPreviewStore,
  RequestService
} from "./chunk-WVXE4JGC.js";
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
import "./chunk-EVUGFGV4.js";
import "./chunk-WG4DC2AT.js";
import "./chunk-WZQ4T6AT.js";
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
  ActivatedRoute,
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
  finalize,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/request-details/request-details.component.ts
function RequestDetailsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 2);
  }
}
function RequestDetailsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Request unavailable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function RequestDetailsComponent_Conditional_6_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.retry());
    });
    \u0275\u0275text(8, "Retry");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function RequestDetailsComponent_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Viewing temporary preview data for your signed-in account.");
    \u0275\u0275elementEnd()();
  }
}
function RequestDetailsComponent_Conditional_7_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function RequestDetailsComponent_Conditional_7_Conditional_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editDraft());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Edit Draft");
    \u0275\u0275elementEnd();
  }
}
function RequestDetailsComponent_Conditional_7_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function RequestDetailsComponent_Conditional_7_Conditional_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.cancelRequest());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Cancel Request");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", ctx_r1.cancelling);
  }
}
function RequestDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 5)(1, "div")(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "app-request-status-chip", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, RequestDetailsComponent_Conditional_7_Conditional_9_Template, 5, 0, "div", 10);
    \u0275\u0275elementStart(10, "mat-card", 11)(11, "div", 12)(12, "div", 13)(13, "span");
    \u0275\u0275text(14, "Request Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 13)(18, "span");
    \u0275\u0275text(19, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "strong");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 13)(23, "span");
    \u0275\u0275text(24, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 13)(29, "span");
    \u0275\u0275text(30, "Submitted Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "strong");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(34, "mat-divider");
    \u0275\u0275elementStart(35, "div", 14)(36, "h2");
    \u0275\u0275text(37, "Title / Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "p");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 15);
    \u0275\u0275conditionalCreate(41, RequestDetailsComponent_Conditional_7_Conditional_41_Template, 4, 0, "button", 16);
    \u0275\u0275conditionalCreate(42, RequestDetailsComponent_Conditional_7_Conditional_42_Template, 4, 1, "button", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currentRequest_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", currentRequest_r5.type, " REQUEST");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currentRequest_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currentRequest_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("status", currentRequest_r5.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.previewMode ? 9 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(currentRequest_r5.type);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentRequest_r5.departmentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(27, 12, currentRequest_r5.amount, currentRequest_r5.currency, "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(33, 17, currentRequest_r5.submittedAt, "mediumDate"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(currentRequest_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEdit ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canCancel ? 42 : -1);
  }
}
var _RequestDetailsComponent = class _RequestDetailsComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.requestService = inject(RequestService);
    this.previewStore = inject(RequestPreviewStore);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.loading = true;
    this.previewMode = false;
    this.errorMessage = "";
    this.cancelling = false;
  }
  ngOnInit() {
    this.loadRequest();
  }
  get canEdit() {
    return this.request?.status === "Draft";
  }
  get canCancel() {
    return this.request?.status === "Draft" || this.request?.status === "Pending";
  }
  retry() {
    this.loadRequest();
  }
  editDraft() {
    if (!this.request || !this.canEdit)
      return;
    void this.router.navigate(["/requests/create"], {
      queryParams: { draftId: this.request.id, type: this.request.type }
    });
  }
  cancelRequest() {
    const request = this.request;
    if (!request || !this.canCancel || this.cancelling)
      return;
    const data = { requestId: request.id, title: request.title };
    this.dialog.open(CancelRequestDialogComponent, {
      width: "min(440px, calc(100vw - 32px))",
      maxWidth: "calc(100vw - 32px)",
      data,
      autoFocus: false
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((confirmed) => {
      if (confirmed)
        this.performCancellation(request);
    });
  }
  loadRequest() {
    const ownerEmail = this.authService.currentUser()?.email;
    const requestId = this.route.snapshot.paramMap.get("requestId");
    if (!ownerEmail) {
      void this.router.navigate(["/login"], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    if (!requestId) {
      this.loading = false;
      this.errorMessage = "A request ID is required.";
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.requestService.getMyRequest(requestId, ownerEmail).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (request) => {
        this.request = request;
        this.previewMode = false;
      },
      error: () => {
        const previewRequest = this.previewStore.getById(ownerEmail, requestId);
        if (previewRequest) {
          this.request = previewRequest;
          this.previewMode = true;
          this.errorMessage = "";
        } else {
          this.errorMessage = "This request could not be found in your account.";
        }
      }
    });
  }
  performCancellation(request) {
    const ownerEmail = this.authService.currentUser()?.email;
    if (!ownerEmail)
      return;
    if (this.previewMode) {
      const updated = this.previewStore.cancel(ownerEmail, request.id);
      if (updated)
        this.request = updated;
      return;
    }
    this.cancelling = true;
    this.requestService.cancelRequest(request.id, ownerEmail).pipe(finalize(() => this.cancelling = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.request = updated;
        this.snackBar.open("Request cancelled.", "Dismiss", { duration: 3500 });
      },
      error: () => this.snackBar.open("The request could not be cancelled. Please try again.", "Dismiss", { duration: 3500 })
    });
  }
};
_RequestDetailsComponent.\u0275fac = function RequestDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RequestDetailsComponent)();
};
_RequestDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RequestDetailsComponent, selectors: [["app-request-details"]], decls: 8, vars: 3, consts: [["aria-labelledby", "details-title", 1, "details-page"], ["routerLink", "/requests", 1, "back-link"], ["mode", "indeterminate", "aria-label", "Loading request details"], ["role", "alert", 1, "error-state"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "page-heading"], [1, "eyebrow"], ["id", "details-title"], [1, "request-id"], [3, "status"], ["role", "status", 1, "preview-notice"], ["appearance", "outlined", 1, "details-card"], [1, "details-grid"], [1, "detail-field"], [1, "description-block"], [1, "detail-actions"], ["mat-stroked-button", "", "type", "button"], ["mat-button", "", "type", "button", 1, "cancel-button", 3, "disabled"], ["mat-button", "", "type", "button", 1, "cancel-button", 3, "click", "disabled"]], template: function RequestDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "a", 1)(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Back to My Requests");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, RequestDetailsComponent_Conditional_5_Template, 1, 0, "mat-progress-bar", 2);
    \u0275\u0275conditionalCreate(6, RequestDetailsComponent_Conditional_6_Template, 9, 1, "div", 3);
    \u0275\u0275conditionalCreate(7, RequestDetailsComponent_Conditional_7_Template, 43, 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.loading ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.errorMessage && !ctx.request && !ctx.loading ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx.request) ? 7 : -1, tmp_2_0);
  }
}, dependencies: [
  MatButtonModule,
  MatButton,
  MatCardModule,
  MatCard,
  MatDialogModule,
  MatDividerModule,
  MatDivider,
  MatIconModule,
  MatIcon,
  MatProgressBarModule,
  MatProgressBar,
  MatSnackBarModule,
  RequestStatusChipComponent,
  RouterLink,
  CurrencyPipe,
  DatePipe
], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.details-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 17px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 2px 0 3px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 26px/1.25 "Space Grotesk", sans-serif;\n}\n.request-id[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: #829087;\n  font-size: 10px;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid #e8dcc2;\n  border-radius: 6px;\n  color: #725b36;\n  background: #fbf6eb;\n  font-size: 10px;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.details-card[_ngcontent-%COMP%] {\n  padding: 22px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n}\n.details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 22px;\n  padding: 4px 0 22px;\n}\n.detail-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.detail-field[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n.detail-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 6px;\n  color: #839087;\n  font-size: 10px;\n}\n.detail-field[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #34463a;\n  font-size: 12px;\n  font-weight: 600;\n}\n.description-block[_ngcontent-%COMP%] {\n  padding-top: 18px;\n}\n.description-block[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #435449;\n  font-size: 11px;\n  font-weight: 700;\n}\n.description-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #66756b;\n  font-size: 12px;\n  line-height: 1.65;\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n}\n.detail-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 36px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.detail-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.cancel-button[_ngcontent-%COMP%] {\n  color: #a35b53;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 300px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.error-state[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #b66a60;\n}\n.error-state[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 11px 0 0;\n  font-size: 21px;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.error-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .details-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 560px) {\n  .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 17px;\n  }\n  .details-card[_ngcontent-%COMP%] {\n    padding: 17px;\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n}\n/*# sourceMappingURL=request-details.component.css.map */'] });
var RequestDetailsComponent = _RequestDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-request-details", standalone: true, imports: [
      CurrencyPipe,
      DatePipe,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatDividerModule,
      MatIconModule,
      MatProgressBarModule,
      MatSnackBarModule,
      RequestStatusChipComponent,
      RouterLink
    ], template: `<section class="details-page" aria-labelledby="details-title">\r
  <a class="back-link" routerLink="/requests"><mat-icon>arrow_back</mat-icon>Back to My Requests</a>\r
\r
  @if (loading) { <mat-progress-bar mode="indeterminate" aria-label="Loading request details"></mat-progress-bar> }\r
\r
  @if (errorMessage && !request && !loading) {\r
    <div class="error-state" role="alert">\r
      <mat-icon>error_outline</mat-icon>\r
      <h1>Request unavailable</h1>\r
      <p>{{ errorMessage }}</p>\r
      <button mat-stroked-button type="button" (click)="retry()">Retry</button>\r
    </div>\r
  }\r
\r
  @if (request; as currentRequest) {\r
    <header class="page-heading">\r
      <div>\r
        <p class="eyebrow">{{ currentRequest.type }} REQUEST</p>\r
        <h1 id="details-title">{{ currentRequest.title }}</h1>\r
        <p class="request-id">{{ currentRequest.id }}</p>\r
      </div>\r
      <app-request-status-chip [status]="currentRequest.status" />\r
    </header>\r
\r
    @if (previewMode) {\r
      <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span>Viewing temporary preview data for your signed-in account.</span></div>\r
    }\r
\r
    <mat-card appearance="outlined" class="details-card">\r
      <div class="details-grid">\r
        <div class="detail-field"><span>Request Type</span><strong>{{ currentRequest.type }}</strong></div>\r
        <div class="detail-field"><span>Department</span><strong>{{ currentRequest.departmentName }}</strong></div>\r
        <div class="detail-field"><span>Amount</span><strong>{{ currentRequest.amount | currency: currentRequest.currency:'symbol':'1.0-2' }}</strong></div>\r
        <div class="detail-field"><span>Submitted Date</span><strong>{{ currentRequest.submittedAt | date: 'mediumDate' }}</strong></div>\r
      </div>\r
      <mat-divider></mat-divider>\r
      <div class="description-block"><h2>Title / Description</h2><p>{{ currentRequest.description }}</p></div>\r
    </mat-card>\r
\r
    <div class="detail-actions">\r
      @if (canEdit) {\r
        <button mat-stroked-button type="button" (click)="editDraft()"><mat-icon>edit</mat-icon>Edit Draft</button>\r
      }\r
      @if (canCancel) {\r
        <button mat-button type="button" class="cancel-button" (click)="cancelRequest()" [disabled]="cancelling"><mat-icon>cancel</mat-icon>Cancel Request</button>\r
      }\r
    </div>\r
  }\r
</section>`, styles: ['/* src/app/features/pages/request-details/request-details.component.scss */\n:host {\n  display: block;\n}\n.details-page {\n  display: flex;\n  flex-direction: column;\n  gap: 17px;\n  animation: arrive 260ms ease-out both;\n}\n.back-link {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link mat-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 2px 0 3px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 26px/1.25 "Space Grotesk", sans-serif;\n}\n.request-id {\n  margin: 7px 0 0;\n  color: #829087;\n  font-size: 10px;\n}\n.preview-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid #e8dcc2;\n  border-radius: 6px;\n  color: #725b36;\n  background: #fbf6eb;\n  font-size: 10px;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.details-card {\n  padding: 22px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n}\n.details-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 22px;\n  padding: 4px 0 22px;\n}\n.detail-field span,\n.detail-field strong {\n  display: block;\n}\n.detail-field span {\n  margin-bottom: 6px;\n  color: #839087;\n  font-size: 10px;\n}\n.detail-field strong {\n  color: #34463a;\n  font-size: 12px;\n  font-weight: 600;\n}\n.description-block {\n  padding-top: 18px;\n}\n.description-block h2 {\n  margin: 0;\n  color: #435449;\n  font-size: 11px;\n  font-weight: 700;\n}\n.description-block p {\n  margin: 8px 0 0;\n  color: #66756b;\n  font-size: 12px;\n  line-height: 1.65;\n}\n.detail-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 9px;\n}\n.detail-actions button {\n  min-height: 36px;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.detail-actions mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 4px;\n  font-size: 16px;\n}\n.cancel-button {\n  color: #a35b53;\n}\n.error-state {\n  display: flex;\n  min-height: 300px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.error-state > mat-icon {\n  color: #b66a60;\n}\n.error-state h1 {\n  margin: 11px 0 0;\n  font-size: 21px;\n}\n.error-state p {\n  font-size: 11px;\n}\n.error-state button {\n  margin-top: 8px;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .details-page {\n    animation: none;\n  }\n}\n@media (max-width: 560px) {\n  .page-heading {\n    flex-direction: column;\n  }\n  .details-grid {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 17px;\n  }\n  .details-card {\n    padding: 17px;\n  }\n  h1 {\n    font-size: 23px;\n  }\n}\n/*# sourceMappingURL=request-details.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RequestDetailsComponent, { className: "RequestDetailsComponent", filePath: "src/app/features/pages/request-details/request-details.component.ts", lineNumber: 40 });
})();
export {
  RequestDetailsComponent
};
//# sourceMappingURL=chunk-XJJFN43T.js.map
