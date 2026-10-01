import {
  ApprovalActionDialogComponent
} from "./chunk-5MXWGQL5.js";
import {
  ApprovalPreviewStore,
  ApprovalService,
  ApprovalStatusChipComponent
} from "./chunk-L4UJCRES.js";
import "./chunk-VHWOFMVY.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-N7METAUH.js";
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
  DatePipe,
  DecimalPipe
} from "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
  finalize,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/approvals/approval-details.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ApprovalDetailsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 2);
  }
}
function ApprovalDetailsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "Approval unavailable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function ApprovalDetailsComponent_Conditional_6_Template_button_click_7_listener() {
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
function ApprovalDetailsComponent_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "This is temporary approval preview data. Decisions remain local to this session.");
    \u0275\u0275elementEnd()();
  }
}
function ApprovalDetailsComponent_Conditional_7_Conditional_54_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "blockquote");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r3.comment);
  }
}
function ApprovalDetailsComponent_Conditional_7_Conditional_54_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 30)(1, "span", 31)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 32)(5, "div", 33)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ApprovalDetailsComponent_Conditional_7_Conditional_54_For_2_Conditional_12_Template, 2, 1, "blockquote");
    \u0275\u0275elementStart(13, "time");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r3 = ctx.$implicit;
    const \u0275$index_127_r4 = ctx.$index;
    const \u0275$count_127_r5 = ctx.$count;
    \u0275\u0275classProp("last-item", \u0275$index_127_r4 === \u0275$count_127_r5 - 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r3.action === "Rejected" ? "cancel" : entry_r3.action === "Returned" ? "undo" : entry_r3.action === "Approved" ? "check_circle" : "send");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r3.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r3.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", entry_r3.actorName, " \xB7 ", entry_r3.actorRole);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r3.comment ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275attribute("datetime", entry_r3.createdAt);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 10, entry_r3.createdAt, "medium"));
  }
}
function ApprovalDetailsComponent_Conditional_7_Conditional_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 18);
    \u0275\u0275repeaterCreate(1, ApprovalDetailsComponent_Conditional_7_Conditional_54_For_2_Template, 16, 13, "li", 29, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currentApproval_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(currentApproval_r6.history);
  }
}
function ApprovalDetailsComponent_Conditional_7_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "No approval actions have been recorded yet.");
    \u0275\u0275elementEnd();
  }
}
function ApprovalDetailsComponent_Conditional_7_Conditional_76_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "mat-icon");
    \u0275\u0275text(2, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "number");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const attachment_r7 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(attachment_r7.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 2, attachment_r7.sizeBytes / 1024, "1.0-0"), " KB");
  }
}
function ApprovalDetailsComponent_Conditional_7_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ApprovalDetailsComponent_Conditional_7_Conditional_76_For_1_Template, 9, 5, "div", 34, _forTrack0);
  }
  if (rf & 2) {
    const currentApproval_r6 = \u0275\u0275nextContext();
    \u0275\u0275repeater(currentApproval_r6.attachments);
  }
}
function ApprovalDetailsComponent_Conditional_7_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27);
    \u0275\u0275text(1, "No attachments were included.");
    \u0275\u0275elementEnd();
  }
}
function ApprovalDetailsComponent_Conditional_7_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 35);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "button", 37);
    \u0275\u0275listener("click", function ApprovalDetailsComponent_Conditional_7_Conditional_78_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.returnForChanges());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "Return / Request Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 38);
    \u0275\u0275listener("click", function ApprovalDetailsComponent_Conditional_7_Conditional_78_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reject());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, "Reject");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 39);
    \u0275\u0275listener("click", function ApprovalDetailsComponent_Conditional_7_Conditional_78_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approve());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, "Approve");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const currentApproval_r6 = \u0275\u0275nextContext();
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Decision for ", currentApproval_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
  }
}
function ApprovalDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 5)(1, "div")(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "app-approval-status-chip", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ApprovalDetailsComponent_Conditional_7_Conditional_7_Template, 5, 0, "div", 9);
    \u0275\u0275elementStart(8, "div", 10)(9, "div", 11)(10, "mat-card", 12)(11, "h2");
    \u0275\u0275text(12, "Request Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13)(14, "div")(15, "span");
    \u0275\u0275text(16, "Request Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "span");
    \u0275\u0275text(21, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div")(25, "span");
    \u0275\u0275text(26, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "span");
    \u0275\u0275text(32, "Submitted Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 14)(37, "span");
    \u0275\u0275text(38, "Current Approval Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "strong");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(41, "mat-divider");
    \u0275\u0275elementStart(42, "div", 15)(43, "h3");
    \u0275\u0275text(44, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "p");
    \u0275\u0275text(46);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "mat-card", 16)(48, "div", 17)(49, "div")(50, "h2");
    \u0275\u0275text(51, "Approval History");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p");
    \u0275\u0275text(53, "Review previous decisions and comments.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(54, ApprovalDetailsComponent_Conditional_7_Conditional_54_Template, 3, 0, "ol", 18)(55, ApprovalDetailsComponent_Conditional_7_Conditional_55_Template, 2, 0, "p", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "aside", 20)(57, "mat-card", 21)(58, "h2");
    \u0275\u0275text(59, "Requester Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 22)(61, "mat-icon");
    \u0275\u0275text(62, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "strong", 23);
    \u0275\u0275text(64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "a", 24);
    \u0275\u0275text(66);
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "mat-divider");
    \u0275\u0275elementStart(68, "div", 25)(69, "span");
    \u0275\u0275text(70, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "strong");
    \u0275\u0275text(72);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "mat-card", 26)(74, "h2");
    \u0275\u0275text(75, "Attachments");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(76, ApprovalDetailsComponent_Conditional_7_Conditional_76_Template, 2, 0)(77, ApprovalDetailsComponent_Conditional_7_Conditional_77_Template, 2, 0, "p", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(78, ApprovalDetailsComponent_Conditional_7_Conditional_78_Template, 16, 4, "div", 28);
  }
  if (rf & 2) {
    const currentApproval_r6 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", currentApproval_r6.requestType, " REQUEST \xB7 ", currentApproval_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currentApproval_r6.title);
    \u0275\u0275advance();
    \u0275\u0275property("status", currentApproval_r6.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.previewMode ? 7 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(currentApproval_r6.requestType);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentApproval_r6.departmentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(29, 20, currentApproval_r6.amount, currentApproval_r6.currency, "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(35, 25, currentApproval_r6.submittedAt, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate3("", currentApproval_r6.currentApprovalLevel, " \xB7 ", currentApproval_r6.levelNumber, " of ", currentApproval_r6.totalLevels);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(currentApproval_r6.description);
    \u0275\u0275advance(8);
    \u0275\u0275conditional(currentApproval_r6.history.length > 0 ? 54 : 55);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(currentApproval_r6.requester.fullName);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + currentApproval_r6.requester.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(currentApproval_r6.requester.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(currentApproval_r6.departmentName);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(currentApproval_r6.attachments.length > 0 ? 76 : 77);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canDecide ? 78 : -1);
  }
}
var _ApprovalDetailsComponent = class _ApprovalDetailsComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.approvalService = inject(ApprovalService);
    this.previewStore = inject(ApprovalPreviewStore);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.loading = true;
    this.previewMode = false;
    this.saving = false;
    this.errorMessage = "";
  }
  ngOnInit() {
    this.loadApproval();
  }
  get canDecide() {
    return this.approval?.status === "Pending" || this.approval?.status === "Changes Requested";
  }
  retry() {
    this.loadApproval();
  }
  approve() {
    this.processDecision({ decision: "approve" });
  }
  reject() {
    this.openCommentDialog("reject");
  }
  returnForChanges() {
    this.openCommentDialog("return");
  }
  loadApproval() {
    const email = this.authService.currentUser()?.email;
    const approvalId = this.route.snapshot.paramMap.get("approvalId");
    if (!email) {
      void this.router.navigate(["/login"], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    if (!approvalId) {
      this.loading = false;
      this.errorMessage = "An approval ID is required.";
      return;
    }
    this.loading = true;
    this.errorMessage = "";
    this.approvalService.getAssignedApproval(approvalId, email).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (approval) => {
        this.approval = approval;
        this.previewMode = false;
      },
      error: () => {
        const preview = this.previewStore.getById(email, approvalId);
        if (preview) {
          this.approval = preview;
          this.previewMode = true;
        } else {
          this.errorMessage = "This request is not assigned to your approval queue.";
        }
      }
    });
  }
  openCommentDialog(decision) {
    const approval = this.approval;
    if (!approval || !this.canDecide || this.saving)
      return;
    const data = { decision, requestId: approval.id, title: approval.title };
    this.dialog.open(ApprovalActionDialogComponent, {
      width: "min(500px, calc(100vw - 32px))",
      maxWidth: "calc(100vw - 32px)",
      data,
      autoFocus: "first-tabbable"
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((comment) => {
      if (comment)
        this.processDecision({ decision, comment });
    });
  }
  processDecision(payload) {
    const approval = this.approval;
    const user = this.authService.currentUser();
    if (!approval || !user || !this.canDecide || this.saving)
      return;
    if (this.previewMode) {
      const updated = this.previewStore.decide(user.email, approval.id, payload, user.displayName);
      if (updated) {
        this.approval = updated;
        this.showMessage("Decision saved to temporary preview data.");
      }
      return;
    }
    this.saving = true;
    this.approvalService.submitDecision(approval.id, user.email, payload).pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.approval = updated;
        this.showMessage("Approval decision recorded.");
      },
      error: () => this.showMessage("The decision could not be recorded. Please try again.")
    });
  }
  showMessage(message) {
    this.snackBar.open(message, "Dismiss", { duration: 3500 });
  }
};
_ApprovalDetailsComponent.\u0275fac = function ApprovalDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApprovalDetailsComponent)();
};
_ApprovalDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApprovalDetailsComponent, selectors: [["app-approval-details"]], decls: 8, vars: 3, consts: [["aria-labelledby", "approval-title", 1, "approval-details-page"], ["routerLink", "/approvals/pending", 1, "back-link"], ["mode", "indeterminate", "aria-label", "Loading approval"], ["role", "alert", 1, "error-state"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "page-heading"], [1, "eyebrow"], ["id", "approval-title"], [3, "status"], ["role", "status", 1, "preview-notice"], [1, "details-layout"], [1, "details-column"], ["appearance", "outlined", 1, "details-card"], [1, "information-grid"], [1, "level-detail"], [1, "description-block"], ["appearance", "outlined", 1, "details-card", "history-card"], [1, "section-heading"], [1, "history-list"], [1, "no-history"], [1, "side-column"], ["appearance", "outlined", 1, "details-card", "requester-card"], [1, "requester-avatar"], [1, "requester-name"], [1, "requester-email", 3, "href"], [1, "department-info"], ["appearance", "outlined", 1, "details-card", "attachment-card"], [1, "no-attachments"], ["aria-label", "Approval actions", 1, "decision-bar"], [1, "history-item", 3, "last-item"], [1, "history-item"], [1, "history-marker"], [1, "history-content"], [1, "history-title"], [1, "attachment-row"], [1, "decision-hint"], [1, "decision-actions"], ["mat-stroked-button", "", "type", "button", 1, "return-button", 3, "click", "disabled"], ["mat-stroked-button", "", "type", "button", 1, "reject-button", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"]], template: function ApprovalDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "a", 1)(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Back to Approvals");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ApprovalDetailsComponent_Conditional_5_Template, 1, 0, "mat-progress-bar", 2);
    \u0275\u0275conditionalCreate(6, ApprovalDetailsComponent_Conditional_6_Template, 9, 1, "div", 3);
    \u0275\u0275conditionalCreate(7, ApprovalDetailsComponent_Conditional_7_Template, 79, 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.loading ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.errorMessage && !ctx.approval && !ctx.loading ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx.approval) ? 7 : -1, tmp_2_0);
  }
}, dependencies: [
  ApprovalStatusChipComponent,
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
  RouterLink,
  CurrencyPipe,
  DatePipe,
  DecimalPipe
], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.approval-details-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-bottom: 4px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 2px 0 3px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 25px/1.25 "Space Grotesk", sans-serif;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid #e8dcc2;\n  border-radius: 6px;\n  color: #725b36;\n  background: #fbf6eb;\n  font-size: 10px;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.details-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.6fr) minmax(250px, 0.85fr);\n  align-items: start;\n  gap: 13px;\n}\n.details-column[_ngcontent-%COMP%], \n.side-column[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 13px;\n}\n.details-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 19px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.details-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2b3d32;\n  font: 600 14px/1.3 "Space Grotesk", sans-serif;\n}\n.information-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 17px 14px;\n  padding: 18px 0;\n}\n.information-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.information-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.department-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.department-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n.information-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.department-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #87928a;\n  font-size: 9px;\n}\n.information-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.department-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #35483b;\n  font-size: 11px;\n  font-weight: 600;\n}\n.level-detail[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.description-block[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.description-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #435449;\n  font-size: 10px;\n  font-weight: 700;\n}\n.description-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: #68766d;\n  font-size: 11px;\n  line-height: 1.65;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 9px;\n}\n.history-list[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.history-item[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 23px minmax(0, 1fr);\n  gap: 10px;\n  padding-bottom: 19px;\n}\n.history-item[_ngcontent-%COMP%]:not(.last-item)::before {\n  position: absolute;\n  top: 24px;\n  bottom: -1px;\n  left: 10px;\n  width: 1px;\n  background: #e3eae3;\n  content: "";\n}\n.history-marker[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: grid;\n  width: 22px;\n  height: 22px;\n  place-items: center;\n  border: 1px solid #dce8dc;\n  border-radius: 50%;\n  color: #56815b;\n  background: #f0f5ed;\n}\n.history-marker[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  font-size: 13px;\n}\n.history-content[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding-top: 2px;\n}\n.history-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 7px;\n}\n.history-title[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #34463a;\n  font-size: 10px;\n}\n.history-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #809087;\n  font-size: 9px;\n}\n.history-content[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  color: #7b887f;\n  font-size: 9px;\n}\n.history-content[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  margin: 7px 0;\n  padding: 8px 10px;\n  border-left: 2px solid #d7e4d4;\n  color: #5f6f63;\n  background: #f7f9f6;\n  font-size: 9px;\n  line-height: 1.5;\n}\n.history-content[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  color: #99a29b;\n  font-size: 8px;\n}\n.no-history[_ngcontent-%COMP%], \n.no-attachments[_ngcontent-%COMP%] {\n  margin: 14px 0 2px;\n  color: #87928a;\n  font-size: 10px;\n}\n.requester-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n.requester-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  margin: 17px 0 9px;\n  place-items: center;\n  border-radius: 50%;\n  color: #39734f;\n  background: #eaf3e7;\n}\n.requester-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.requester-name[_ngcontent-%COMP%] {\n  color: #34463a;\n  font-size: 11px;\n}\n.requester-email[_ngcontent-%COMP%] {\n  margin: 4px 0 15px;\n  color: #64806b;\n  font-size: 9px;\n  text-decoration: none;\n  overflow-wrap: anywhere;\n}\n.department-info[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-top: 14px;\n}\n.attachment-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.attachment-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 9px 0;\n  border-top: 1px solid #edf1ed;\n}\n.attachment-row[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #73867a;\n}\n.attachment-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.attachment-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.attachment-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  min-width: 0;\n}\n.attachment-row[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  overflow: hidden;\n  color: #45574a;\n  font-size: 9px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.attachment-row[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: #8b978e;\n  font-size: 8px;\n}\n.decision-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n  padding: 12px 14px;\n  border: 1px solid #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n}\n.decision-hint[_ngcontent-%COMP%] {\n  color: #78857b;\n  font-size: 9px;\n}\n.decision-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.decision-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 35px;\n  border-radius: 5px;\n  font-size: 9px;\n}\n.decision-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-right: 4px;\n  font-size: 15px;\n}\n.return-button[_ngcontent-%COMP%] {\n  color: #946d32;\n}\n.reject-button[_ngcontent-%COMP%] {\n  color: #a3544d;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 280px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.error-state[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #b66a60;\n}\n.error-state[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 20px;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .approval-details-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 850px) {\n  .details-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .side-column[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 620px) {\n  .side-column[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .decision-bar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .decision-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .decision-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=approval-details.component.css.map */'] });
var ApprovalDetailsComponent = _ApprovalDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApprovalDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-approval-details", standalone: true, imports: [
      ApprovalStatusChipComponent,
      CurrencyPipe,
      DatePipe,
      DecimalPipe,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatDividerModule,
      MatIconModule,
      MatProgressBarModule,
      MatSnackBarModule,
      RouterLink
    ], template: `<section class="approval-details-page" aria-labelledby="approval-title">\r
  <a class="back-link" routerLink="/approvals/pending"><mat-icon>arrow_back</mat-icon>Back to Approvals</a>\r
  @if (loading) { <mat-progress-bar mode="indeterminate" aria-label="Loading approval"></mat-progress-bar> }\r
\r
  @if (errorMessage && !approval && !loading) {\r
    <div class="error-state" role="alert"><mat-icon>error_outline</mat-icon><h1>Approval unavailable</h1><p>{{ errorMessage }}</p><button mat-stroked-button type="button" (click)="retry()">Retry</button></div>\r
  }\r
\r
  @if (approval; as currentApproval) {\r
    <header class="page-heading">\r
      <div><p class="eyebrow">{{ currentApproval.requestType }} REQUEST \xB7 {{ currentApproval.id }}</p><h1 id="approval-title">{{ currentApproval.title }}</h1></div>\r
      <app-approval-status-chip [status]="currentApproval.status" />\r
    </header>\r
\r
    @if (previewMode) {\r
      <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span>This is temporary approval preview data. Decisions remain local to this session.</span></div>\r
    }\r
\r
    <div class="details-layout">\r
      <div class="details-column">\r
        <mat-card appearance="outlined" class="details-card">\r
          <h2>Request Information</h2>\r
          <div class="information-grid">\r
            <div><span>Request Type</span><strong>{{ currentApproval.requestType }}</strong></div>\r
            <div><span>Department</span><strong>{{ currentApproval.departmentName }}</strong></div>\r
            <div><span>Amount</span><strong>{{ currentApproval.amount | currency: currentApproval.currency:'symbol':'1.0-2' }}</strong></div>\r
            <div><span>Submitted Date</span><strong>{{ currentApproval.submittedAt | date: 'mediumDate' }}</strong></div>\r
            <div class="level-detail"><span>Current Approval Level</span><strong>{{ currentApproval.currentApprovalLevel }} \xB7 {{ currentApproval.levelNumber }} of {{ currentApproval.totalLevels }}</strong></div>\r
          </div>\r
          <mat-divider></mat-divider>\r
          <div class="description-block"><h3>Description</h3><p>{{ currentApproval.description }}</p></div>\r
        </mat-card>\r
\r
        <mat-card appearance="outlined" class="details-card history-card">\r
          <div class="section-heading"><div><h2>Approval History</h2><p>Review previous decisions and comments.</p></div></div>\r
          @if (currentApproval.history.length > 0) {\r
            <ol class="history-list">\r
              @for (entry of currentApproval.history; track entry.id; let last = $last) {\r
                <li class="history-item" [class.last-item]="last">\r
                  <span class="history-marker"><mat-icon>{{ entry.action === 'Rejected' ? 'cancel' : entry.action === 'Returned' ? 'undo' : entry.action === 'Approved' ? 'check_circle' : 'send' }}</mat-icon></span>\r
                  <div class="history-content">\r
                    <div class="history-title"><strong>{{ entry.action }}</strong><span>{{ entry.level }}</span></div>\r
                    <p>{{ entry.actorName }} \xB7 {{ entry.actorRole }}</p>\r
                    @if (entry.comment) { <blockquote>{{ entry.comment }}</blockquote> }\r
                    <time [attr.datetime]="entry.createdAt">{{ entry.createdAt | date: 'medium' }}</time>\r
                  </div>\r
                </li>\r
              }\r
            </ol>\r
          } @else {\r
            <p class="no-history">No approval actions have been recorded yet.</p>\r
          }\r
        </mat-card>\r
      </div>\r
\r
      <aside class="side-column">\r
        <mat-card appearance="outlined" class="details-card requester-card">\r
          <h2>Requester Information</h2>\r
          <div class="requester-avatar"><mat-icon>person</mat-icon></div>\r
          <strong class="requester-name">{{ currentApproval.requester.fullName }}</strong>\r
          <a class="requester-email" [href]="'mailto:' + currentApproval.requester.email">{{ currentApproval.requester.email }}</a>\r
          <mat-divider></mat-divider>\r
          <div class="department-info"><span>Department</span><strong>{{ currentApproval.departmentName }}</strong></div>\r
        </mat-card>\r
\r
        <mat-card appearance="outlined" class="details-card attachment-card">\r
          <h2>Attachments</h2>\r
          @if (currentApproval.attachments.length > 0) {\r
            @for (attachment of currentApproval.attachments; track attachment.id) {\r
              <div class="attachment-row"><mat-icon>attach_file</mat-icon><span><strong>{{ attachment.fileName }}</strong><small>{{ attachment.sizeBytes / 1024 | number: '1.0-0' }} KB</small></span></div>\r
            }\r
          } @else {\r
            <p class="no-attachments">No attachments were included.</p>\r
          }\r
        </mat-card>\r
      </aside>\r
    </div>\r
\r
    @if (canDecide) {\r
      <div class="decision-bar" aria-label="Approval actions">\r
        <span class="decision-hint">Decision for {{ currentApproval.id }}</span>\r
        <div class="decision-actions">\r
          <button mat-stroked-button class="return-button" type="button" (click)="returnForChanges()" [disabled]="saving"><mat-icon>undo</mat-icon>Return / Request Changes</button>\r
          <button mat-stroked-button class="reject-button" type="button" (click)="reject()" [disabled]="saving"><mat-icon>cancel</mat-icon>Reject</button>\r
          <button mat-flat-button color="primary" type="button" (click)="approve()" [disabled]="saving"><mat-icon>check</mat-icon>Approve</button>\r
        </div>\r
      </div>\r
    }\r
  }\r
</section>`, styles: ['/* src/app/features/pages/approvals/approval-details.component.scss */\n:host {\n  display: block;\n}\n.approval-details-page {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-bottom: 4px;\n  animation: arrive 260ms ease-out both;\n}\n.back-link {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link mat-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 2px 0 3px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 25px/1.25 "Space Grotesk", sans-serif;\n}\n.preview-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid #e8dcc2;\n  border-radius: 6px;\n  color: #725b36;\n  background: #fbf6eb;\n  font-size: 10px;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.details-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1.6fr) minmax(250px, 0.85fr);\n  align-items: start;\n  gap: 13px;\n}\n.details-column,\n.side-column {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 13px;\n}\n.details-card {\n  min-width: 0;\n  padding: 19px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.details-card h2 {\n  margin: 0;\n  color: #2b3d32;\n  font: 600 14px/1.3 "Space Grotesk", sans-serif;\n}\n.information-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 17px 14px;\n  padding: 18px 0;\n}\n.information-grid > div span,\n.information-grid > div strong,\n.department-info span,\n.department-info strong {\n  display: block;\n}\n.information-grid > div span,\n.department-info span {\n  margin-bottom: 5px;\n  color: #87928a;\n  font-size: 9px;\n}\n.information-grid > div strong,\n.department-info strong {\n  color: #35483b;\n  font-size: 11px;\n  font-weight: 600;\n}\n.level-detail {\n  grid-column: 1/-1;\n}\n.description-block {\n  padding-top: 15px;\n}\n.description-block h3 {\n  margin: 0;\n  color: #435449;\n  font-size: 10px;\n  font-weight: 700;\n}\n.description-block p {\n  margin: 7px 0 0;\n  color: #68766d;\n  font-size: 11px;\n  line-height: 1.65;\n}\n.section-heading {\n  margin-bottom: 15px;\n}\n.section-heading h2 {\n  margin: 0;\n}\n.section-heading p {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 9px;\n}\n.history-list {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.history-item {\n  position: relative;\n  display: grid;\n  grid-template-columns: 23px minmax(0, 1fr);\n  gap: 10px;\n  padding-bottom: 19px;\n}\n.history-item:not(.last-item)::before {\n  position: absolute;\n  top: 24px;\n  bottom: -1px;\n  left: 10px;\n  width: 1px;\n  background: #e3eae3;\n  content: "";\n}\n.history-marker {\n  z-index: 1;\n  display: grid;\n  width: 22px;\n  height: 22px;\n  place-items: center;\n  border: 1px solid #dce8dc;\n  border-radius: 50%;\n  color: #56815b;\n  background: #f0f5ed;\n}\n.history-marker mat-icon {\n  width: 13px;\n  height: 13px;\n  font-size: 13px;\n}\n.history-content {\n  min-width: 0;\n  padding-top: 2px;\n}\n.history-title {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 7px;\n}\n.history-title strong {\n  color: #34463a;\n  font-size: 10px;\n}\n.history-title span {\n  color: #809087;\n  font-size: 9px;\n}\n.history-content > p {\n  margin: 4px 0;\n  color: #7b887f;\n  font-size: 9px;\n}\n.history-content blockquote {\n  margin: 7px 0;\n  padding: 8px 10px;\n  border-left: 2px solid #d7e4d4;\n  color: #5f6f63;\n  background: #f7f9f6;\n  font-size: 9px;\n  line-height: 1.5;\n}\n.history-content time {\n  color: #99a29b;\n  font-size: 8px;\n}\n.no-history,\n.no-attachments {\n  margin: 14px 0 2px;\n  color: #87928a;\n  font-size: 10px;\n}\n.requester-card {\n  display: flex;\n  align-items: flex-start;\n  flex-direction: column;\n}\n.requester-avatar {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  margin: 17px 0 9px;\n  place-items: center;\n  border-radius: 50%;\n  color: #39734f;\n  background: #eaf3e7;\n}\n.requester-avatar mat-icon {\n  width: 18px;\n  height: 18px;\n  font-size: 18px;\n}\n.requester-name {\n  color: #34463a;\n  font-size: 11px;\n}\n.requester-email {\n  margin: 4px 0 15px;\n  color: #64806b;\n  font-size: 9px;\n  text-decoration: none;\n  overflow-wrap: anywhere;\n}\n.department-info {\n  width: 100%;\n  padding-top: 14px;\n}\n.attachment-card h2 {\n  margin-bottom: 15px;\n}\n.attachment-row {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 9px 0;\n  border-top: 1px solid #edf1ed;\n}\n.attachment-row > mat-icon {\n  color: #73867a;\n}\n.attachment-row span,\n.attachment-row strong,\n.attachment-row small {\n  display: block;\n  min-width: 0;\n}\n.attachment-row strong {\n  overflow: hidden;\n  color: #45574a;\n  font-size: 9px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.attachment-row small {\n  margin-top: 3px;\n  color: #8b978e;\n  font-size: 8px;\n}\n.decision-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 15px;\n  padding: 12px 14px;\n  border: 1px solid #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n}\n.decision-hint {\n  color: #78857b;\n  font-size: 9px;\n}\n.decision-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.decision-actions button {\n  min-height: 35px;\n  border-radius: 5px;\n  font-size: 9px;\n}\n.decision-actions mat-icon {\n  width: 15px;\n  height: 15px;\n  margin-right: 4px;\n  font-size: 15px;\n}\n.return-button {\n  color: #946d32;\n}\n.reject-button {\n  color: #a3544d;\n}\n.error-state {\n  display: flex;\n  min-height: 280px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.error-state > mat-icon {\n  color: #b66a60;\n}\n.error-state h1 {\n  margin-top: 10px;\n  font-size: 20px;\n}\n.error-state p {\n  font-size: 10px;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .approval-details-page {\n    animation: none;\n  }\n}\n@media (max-width: 850px) {\n  .details-layout {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .side-column {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 620px) {\n  .side-column {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .page-heading {\n    flex-direction: column;\n  }\n  .decision-bar {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .decision-actions {\n    width: 100%;\n  }\n  .decision-actions button {\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=approval-details.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApprovalDetailsComponent, { className: "ApprovalDetailsComponent", filePath: "src/app/features/pages/approvals/approval-details.component.ts", lineNumber: 41 });
})();
export {
  ApprovalDetailsComponent
};
//# sourceMappingURL=chunk-INHVSE6V.js.map
