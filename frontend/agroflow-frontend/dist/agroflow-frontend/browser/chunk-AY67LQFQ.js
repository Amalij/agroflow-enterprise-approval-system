import {
  ApprovalWorkflowProgressComponent
} from "./chunk-T4QWBYES.js";
import {
  ApprovalActionDialogComponent
} from "./chunk-5MXWGQL5.js";
import {
  IOUPreviewStore,
  IOUService
} from "./chunk-6H7M7NAD.js";
import "./chunk-VHWOFMVY.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-N7METAUH.js";
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
  DatePipe,
  DecimalPipe
} from "./chunk-FWRROCAB.js";
import {
  Component,
  DestroyRef,
  finalize,
  inject,
  isDevMode,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-N56IC4AV.js";
import "./chunk-GOMI4DH3.js";

// src/app/features/pages/iou/iou-details.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function IOUDetailsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 2);
  }
}
function IOUDetailsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4, "IOU unavailable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function IOUDetailsComponent_Conditional_6_Template_button_click_7_listener() {
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
function IOUDetailsComponent_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "This IOU is temporary preview data scoped to your account.");
    \u0275\u0275elementEnd()();
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h3");
    \u0275\u0275text(2, "Additional Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const currentIOU_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(currentIOU_r3.additionalNotes);
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-icon");
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
    const currentIOU_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentIOU_r3.attachment.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 2, currentIOU_r3.attachment.sizeBytes / 1024, "1.0-0"), " KB");
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No attachment provided.");
    \u0275\u0275elementEnd();
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_77_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "blockquote");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(entry_r4.comment);
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_77_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 24)(1, "span", 25)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "div", 26)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, IOUDetailsComponent_Conditional_7_Conditional_77_For_2_Conditional_12_Template, 2, 1, "blockquote");
    \u0275\u0275elementStart(13, "time");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const \u0275$index_187_r5 = ctx.$index;
    const \u0275$count_187_r6 = ctx.$count;
    \u0275\u0275classProp("last-entry", \u0275$index_187_r5 === \u0275$count_187_r6 - 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(entry_r4.action === "Rejected" ? "cancel" : entry_r4.action === "Returned" ? "undo" : entry_r4.action === "Approved" ? "check_circle" : "send");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(entry_r4.action);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r4.approvalLevel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", entry_r4.actorName, " \xB7 ", entry_r4.actorRole);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r4.comment ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(15, 9, entry_r4.createdAt, "medium"));
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 20);
    \u0275\u0275repeaterCreate(1, IOUDetailsComponent_Conditional_7_Conditional_77_For_2_Template, 16, 12, "li", 23, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currentIOU_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(currentIOU_r3.approvalHistory);
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 21);
    \u0275\u0275text(1, "No approval actions have been recorded.");
    \u0275\u0275elementEnd();
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.editDraft());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Edit Draft");
    \u0275\u0275elementEnd();
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelIOU());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Cancel IOU");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "mat-divider");
    \u0275\u0275elementStart(1, "button", 30);
    \u0275\u0275listener("click", function IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approve());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.returnForChanges());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "Return for Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 32);
    \u0275\u0275listener("click", function IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_6_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.reject());
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, "Reject");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.saving);
  }
}
function IOUDetailsComponent_Conditional_7_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 22)(1, "mat-card", 12)(2, "h2");
    \u0275\u0275text(3, "Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_4_Template, 4, 0, "button", 27);
    \u0275\u0275conditionalCreate(5, IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_5_Template, 4, 1, "button", 28);
    \u0275\u0275conditionalCreate(6, IOUDetailsComponent_Conditional_7_Conditional_79_Conditional_6_Template, 13, 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.canEditDraft ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canCancel ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canDecide ? 6 : -1);
  }
}
function IOUDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 5)(1, "div")(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "app-request-status-chip", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, IOUDetailsComponent_Conditional_7_Conditional_7_Template, 5, 0, "div", 9);
    \u0275\u0275elementStart(8, "div", 10)(9, "div", 11)(10, "mat-card", 12)(11, "h2");
    \u0275\u0275text(12, "IOU Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13)(14, "div")(15, "span");
    \u0275\u0275text(16, "Requester");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div")(22, "span");
    \u0275\u0275text(23, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "strong");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "span");
    \u0275\u0275text(28, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "span");
    \u0275\u0275text(33, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "span");
    \u0275\u0275text(39, "Request Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div")(44, "span");
    \u0275\u0275text(45, "Required Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "strong");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 14)(50, "span");
    \u0275\u0275text(51, "Current Approval Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "strong");
    \u0275\u0275text(53);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(54, "mat-divider");
    \u0275\u0275elementStart(55, "div", 15)(56, "h3");
    \u0275\u0275text(57, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p");
    \u0275\u0275text(59);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(60, IOUDetailsComponent_Conditional_7_Conditional_60_Template, 5, 1, "div", 15);
    \u0275\u0275elementStart(61, "div", 16)(62, "h3");
    \u0275\u0275text(63, "Supporting Document / Attachment");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(64, IOUDetailsComponent_Conditional_7_Conditional_64_Template, 9, 5, "div", 17)(65, IOUDetailsComponent_Conditional_7_Conditional_65_Template, 2, 0, "p");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(66, "mat-card", 12)(67, "div", 18)(68, "div")(69, "h2");
    \u0275\u0275text(70, "Approval Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "p");
    \u0275\u0275text(72, "The actual approval route can be configured by the backend.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(73, "app-approval-workflow-progress", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "mat-card", 12)(75, "h2");
    \u0275\u0275text(76, "Approval History");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(77, IOUDetailsComponent_Conditional_7_Conditional_77_Template, 3, 0, "ol", 20)(78, IOUDetailsComponent_Conditional_7_Conditional_78_Template, 2, 0, "p", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(79, IOUDetailsComponent_Conditional_7_Conditional_79_Template, 7, 3, "aside", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currentIOU_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("IOU REQUEST \xB7 ", currentIOU_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currentIOU_r3.purpose);
    \u0275\u0275advance();
    \u0275\u0275property("status", currentIOU_r3.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.previewMode ? 7 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(currentIOU_r3.requesterName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currentIOU_r3.requesterEmail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentIOU_r3.departmentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentIOU_r3.purpose);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(36, 18, currentIOU_r3.amount, currentIOU_r3.currency, "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(42, 23, currentIOU_r3.requestDate, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(48, 26, currentIOU_r3.requiredDate, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(currentIOU_r3.currentApprovalLevel || "Draft \xB7 Not submitted");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(currentIOU_r3.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(currentIOU_r3.additionalNotes ? 60 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(currentIOU_r3.attachment ? 64 : 65);
    \u0275\u0275advance(9);
    \u0275\u0275property("steps", currentIOU_r3.approvalWorkflow);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(currentIOU_r3.approvalHistory.length ? 77 : 78);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEditDraft || ctx_r1.canCancel || ctx_r1.canDecide ? 79 : -1);
  }
}
var _IOUDetailsComponent = class _IOUDetailsComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.iouService = inject(IOUService);
    this.previewStore = inject(IOUPreviewStore);
    this.route = inject(ActivatedRoute);
    this.router = inject(Router);
    this.dialog = inject(MatDialog);
    this.snackBar = inject(MatSnackBar);
    this.destroyRef = inject(DestroyRef);
    this.loading = true;
    this.previewMode = false;
    this.saving = false;
    this.errorMessage = "";
    this.userEmail = "";
    this.userName = "";
    this.canApprove = false;
  }
  ngOnInit() {
    this.loadIOU();
  }
  get canEditDraft() {
    return this.iou?.status === "Draft";
  }
  get canCancel() {
    return !!this.iou && ["Draft", "Pending", "Returned"].includes(this.iou.status);
  }
  get canDecide() {
    return !!this.canApprove && !!this.iou?.assignedApproverEmail && this.iou.assignedApproverEmail.toLocaleLowerCase() === this.userEmail.toLocaleLowerCase() && ["Pending", "Returned"].includes(this.iou.status);
  }
  retry() {
    this.loadIOU();
  }
  editDraft() {
    if (this.iou && this.canEditDraft)
      void this.router.navigate(["/iou/create"], { queryParams: { draftId: this.iou.id } });
  }
  cancelIOU() {
    const iou = this.iou;
    if (!iou || !this.canCancel || this.saving)
      return;
    const data = { requestId: iou.id, title: iou.purpose };
    this.dialog.open(CancelRequestDialogComponent, {
      width: "min(440px, calc(100vw - 32px))",
      maxWidth: "calc(100vw - 32px)",
      data,
      autoFocus: false
    }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((confirmed) => {
      if (confirmed)
        this.performCancel(iou);
    });
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
  loadIOU() {
    const user = this.authService.currentUser();
    const iouId = this.route.snapshot.paramMap.get("iouId");
    if (!user) {
      void this.router.navigate(["/login"], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    if (!iouId) {
      this.loading = false;
      this.errorMessage = "An IOU ID is required.";
      return;
    }
    this.userEmail = user.email;
    this.userName = user.displayName;
    this.canApprove = ["Admin", "Manager", "Approver"].includes(user.role);
    this.loading = true;
    this.errorMessage = "";
    this.iouService.getIOU(iouId, user.email, this.canApprove).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (iou) => {
        this.iou = iou;
        this.previewMode = false;
      },
      error: () => {
        if (isDevMode()) {
          const preview = this.previewStore.getById(user.email, iouId, user.displayName);
          if (preview) {
            this.iou = preview;
            this.previewMode = true;
          } else
            this.errorMessage = "This IOU could not be found in your account or approval queue.";
        } else
          this.errorMessage = "This IOU could not be found in your account or approval queue.";
      }
    });
  }
  performCancel(iou) {
    if (this.previewMode) {
      const updated = this.previewStore.cancel(this.userEmail, iou.id);
      if (updated)
        this.iou = updated;
      return;
    }
    this.saving = true;
    this.iouService.cancelIOU(iou.id).pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.iou = updated;
        this.snackBar.open("IOU cancelled.", "Dismiss", { duration: 3500 });
      },
      error: () => this.snackBar.open("The IOU could not be cancelled.", "Dismiss", { duration: 3500 })
    });
  }
  openCommentDialog(decision) {
    const iou = this.iou;
    if (!iou || !this.canDecide || this.saving)
      return;
    const data = { decision, requestId: iou.id, title: iou.purpose };
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
    const iou = this.iou;
    if (!iou || !this.canDecide || this.saving)
      return;
    if (this.previewMode) {
      const updated = this.previewStore.decide(this.userEmail, iou.id, payload, this.userName);
      if (updated) {
        this.iou = updated;
        this.snackBar.open("Decision saved to temporary IOU preview data.", "Dismiss", { duration: 3500 });
      }
      return;
    }
    this.saving = true;
    this.iouService.decide(iou.id, payload).pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.iou = updated;
        this.snackBar.open("IOU decision recorded.", "Dismiss", { duration: 3500 });
      },
      error: () => this.snackBar.open("The IOU decision could not be recorded.", "Dismiss", { duration: 3500 })
    });
  }
};
_IOUDetailsComponent.\u0275fac = function IOUDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IOUDetailsComponent)();
};
_IOUDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IOUDetailsComponent, selectors: [["app-iou-details"]], decls: 8, vars: 3, consts: [["aria-labelledby", "iou-details-title", 1, "iou-details-page"], ["routerLink", "/iou", 1, "back-link"], ["mode", "indeterminate", "aria-label", "Loading IOU details"], ["role", "alert", 1, "error-state"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "page-heading"], [1, "eyebrow"], ["id", "iou-details-title"], [3, "status"], ["role", "status", 1, "preview-notice"], [1, "details-layout"], [1, "main-column"], ["appearance", "outlined", 1, "detail-card"], [1, "info-grid"], [1, "wide-info"], [1, "description-block"], [1, "attachments"], [1, "attachment-item"], [1, "section-heading"], [3, "steps"], [1, "history-list"], [1, "empty-history"], [1, "action-panel"], [1, "history-entry", 3, "last-entry"], [1, "history-entry"], [1, "history-marker"], [1, "history-heading"], ["mat-stroked-button", "", "type", "button"], ["mat-button", "", "type", "button", 1, "cancel-action", 3, "disabled"], ["mat-button", "", "type", "button", 1, "cancel-action", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["mat-stroked-button", "", "type", "button", 1, "return-action", 3, "click", "disabled"], ["mat-stroked-button", "", "type", "button", 1, "reject-action", 3, "click", "disabled"]], template: function IOUDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "a", 1)(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Back to IOU Management");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, IOUDetailsComponent_Conditional_5_Template, 1, 0, "mat-progress-bar", 2);
    \u0275\u0275conditionalCreate(6, IOUDetailsComponent_Conditional_6_Template, 9, 1, "div", 3);
    \u0275\u0275conditionalCreate(7, IOUDetailsComponent_Conditional_7_Template, 80, 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.loading ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.errorMessage && !ctx.iou && !ctx.loading ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx.iou) ? 7 : -1, tmp_2_0);
  }
}, dependencies: [
  ApprovalWorkflowProgressComponent,
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
  DatePipe,
  DecimalPipe
], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.iou-details-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-bottom: 4px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 2px 0 3px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 25px/1.25 "Space Grotesk", sans-serif;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid #e8dcc2;\n  border-radius: 6px;\n  color: #725b36;\n  background: #fbf6eb;\n  font-size: 10px;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.details-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(220px, 0.32fr);\n  align-items: start;\n  gap: 13px;\n}\n.main-column[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 13px;\n}\n.detail-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 19px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.detail-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #2b3d32;\n  font: 600 14px/1.3 "Space Grotesk", sans-serif;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 14px;\n  padding: 2px 0 18px;\n}\n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #87928a;\n  font-size: 9px;\n}\n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #35483b;\n  font-size: 11px;\n  font-weight: 600;\n}\n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #89948b;\n  font-size: 9px;\n  overflow-wrap: anywhere;\n}\n.wide-info[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.description-block[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.description-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.attachments[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #435449;\n  font-size: 10px;\n  font-weight: 700;\n}\n.description-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.attachments[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: #68766d;\n  font-size: 10px;\n  line-height: 1.6;\n}\n.attachments[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid #e8eee8;\n  border-radius: 5px;\n}\n.attachment-item[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #73867a;\n}\n.attachment-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.attachment-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.attachment-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.attachment-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #45574a;\n  font-size: 9px;\n}\n.attachment-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: #8b978e;\n  font-size: 8px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 9px;\n}\n.history-list[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.history-entry[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 23px minmax(0, 1fr);\n  gap: 10px;\n  padding-bottom: 18px;\n}\n.history-entry[_ngcontent-%COMP%]:not(.last-entry)::before {\n  position: absolute;\n  top: 24px;\n  bottom: -1px;\n  left: 10px;\n  width: 1px;\n  background: #e3eae3;\n  content: "";\n}\n.history-marker[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: grid;\n  width: 22px;\n  height: 22px;\n  place-items: center;\n  border: 1px solid #dce8dc;\n  border-radius: 50%;\n  color: #56815b;\n  background: #f0f5ed;\n}\n.history-marker[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  font-size: 13px;\n}\n.history-heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 7px;\n  padding-top: 3px;\n}\n.history-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #34463a;\n  font-size: 10px;\n}\n.history-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #809087;\n  font-size: 9px;\n}\n.history-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  color: #7b887f;\n  font-size: 9px;\n}\n.history-entry[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  margin: 7px 0;\n  padding: 8px 10px;\n  border-left: 2px solid #d7e4d4;\n  color: #5f6f63;\n  background: #f7f9f6;\n  font-size: 9px;\n  line-height: 1.5;\n}\n.history-entry[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  color: #99a29b;\n  font-size: 8px;\n}\n.empty-history[_ngcontent-%COMP%] {\n  color: #87928a;\n  font-size: 10px;\n}\n.action-panel[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.action-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 36px;\n  justify-content: flex-start;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.action-panel[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 5px;\n  font-size: 16px;\n}\n.action-panel[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  margin: 7px 0;\n}\n.cancel-action[_ngcontent-%COMP%], \n.reject-action[_ngcontent-%COMP%] {\n  color: #a3544d;\n}\n.return-action[_ngcontent-%COMP%] {\n  color: #946d32;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 280px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.error-state[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #b66a60;\n}\n.error-state[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 20px;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .iou-details-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 900px) {\n  .details-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .action-panel[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .action-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .action-panel[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 560px) {\n  .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .wide-info[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .detail-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .action-panel[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .action-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .action-panel[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n/*# sourceMappingURL=iou-details.component.css.map */'] });
var IOUDetailsComponent = _IOUDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IOUDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-iou-details", standalone: true, imports: [
      CurrencyPipe,
      DatePipe,
      DecimalPipe,
      ApprovalWorkflowProgressComponent,
      MatButtonModule,
      MatCardModule,
      MatDialogModule,
      MatDividerModule,
      MatIconModule,
      MatProgressBarModule,
      MatSnackBarModule,
      RequestStatusChipComponent,
      RouterLink
    ], template: `<section class="iou-details-page" aria-labelledby="iou-details-title">\r
  <a class="back-link" routerLink="/iou"><mat-icon>arrow_back</mat-icon>Back to IOU Management</a>\r
  @if (loading) { <mat-progress-bar mode="indeterminate" aria-label="Loading IOU details"></mat-progress-bar> }\r
  @if (errorMessage && !iou && !loading) { <div class="error-state" role="alert"><mat-icon>error_outline</mat-icon><h1>IOU unavailable</h1><p>{{ errorMessage }}</p><button mat-stroked-button type="button" (click)="retry()">Retry</button></div> }\r
\r
  @if (iou; as currentIOU) {\r
    <header class="page-heading"><div><p class="eyebrow">IOU REQUEST \xB7 {{ currentIOU.id }}</p><h1 id="iou-details-title">{{ currentIOU.purpose }}</h1></div><app-request-status-chip [status]="currentIOU.status" /></header>\r
    @if (previewMode) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span>This IOU is temporary preview data scoped to your account.</span></div> }\r
\r
    <div class="details-layout">\r
      <div class="main-column">\r
        <mat-card appearance="outlined" class="detail-card">\r
          <h2>IOU Information</h2>\r
          <div class="info-grid">\r
            <div><span>Requester</span><strong>{{ currentIOU.requesterName }}</strong><small>{{ currentIOU.requesterEmail }}</small></div>\r
            <div><span>Department</span><strong>{{ currentIOU.departmentName }}</strong></div>\r
            <div><span>Purpose</span><strong>{{ currentIOU.purpose }}</strong></div>\r
            <div><span>Amount</span><strong>{{ currentIOU.amount | currency: currentIOU.currency:'symbol':'1.0-2' }}</strong></div>\r
            <div><span>Request Date</span><strong>{{ currentIOU.requestDate | date: 'mediumDate' }}</strong></div>\r
            <div><span>Required Date</span><strong>{{ currentIOU.requiredDate | date: 'mediumDate' }}</strong></div>\r
            <div class="wide-info"><span>Current Approval Level</span><strong>{{ currentIOU.currentApprovalLevel || 'Draft \xB7 Not submitted' }}</strong></div>\r
          </div>\r
          <mat-divider></mat-divider>\r
          <div class="description-block"><h3>Description</h3><p>{{ currentIOU.description }}</p></div>\r
          @if (currentIOU.additionalNotes) { <div class="description-block"><h3>Additional Notes</h3><p>{{ currentIOU.additionalNotes }}</p></div> }\r
          <div class="attachments"><h3>Supporting Document / Attachment</h3>\r
            @if (currentIOU.attachment) { <div class="attachment-item"><mat-icon>attach_file</mat-icon><span><strong>{{ currentIOU.attachment.fileName }}</strong><small>{{ currentIOU.attachment.sizeBytes / 1024 | number: '1.0-0' }} KB</small></span></div> }\r
            @else { <p>No attachment provided.</p> }\r
          </div>\r
        </mat-card>\r
\r
        <mat-card appearance="outlined" class="detail-card">\r
          <div class="section-heading"><div><h2>Approval Progress</h2><p>The actual approval route can be configured by the backend.</p></div></div>\r
          <app-approval-workflow-progress [steps]="currentIOU.approvalWorkflow" />\r
        </mat-card>\r
\r
        <mat-card appearance="outlined" class="detail-card">\r
          <h2>Approval History</h2>\r
          @if (currentIOU.approvalHistory.length) {\r
            <ol class="history-list">\r
              @for (entry of currentIOU.approvalHistory; track entry.id; let last = $last) {\r
                <li class="history-entry" [class.last-entry]="last"><span class="history-marker"><mat-icon>{{ entry.action === 'Rejected' ? 'cancel' : entry.action === 'Returned' ? 'undo' : entry.action === 'Approved' ? 'check_circle' : 'send' }}</mat-icon></span><div><div class="history-heading"><strong>{{ entry.action }}</strong><span>{{ entry.approvalLevel }}</span></div><p>{{ entry.actorName }} \xB7 {{ entry.actorRole }}</p>@if (entry.comment) { <blockquote>{{ entry.comment }}</blockquote> }<time>{{ entry.createdAt | date: 'medium' }}</time></div></li>\r
              }\r
            </ol>\r
          } @else { <p class="empty-history">No approval actions have been recorded.</p> }\r
        </mat-card>\r
      </div>\r
\r
      @if (canEditDraft || canCancel || canDecide) {\r
        <aside class="action-panel">\r
          <mat-card appearance="outlined" class="detail-card">\r
            <h2>Actions</h2>\r
            @if (canEditDraft) { <button mat-stroked-button type="button" (click)="editDraft()"><mat-icon>edit</mat-icon>Edit Draft</button> }\r
            @if (canCancel) { <button mat-button type="button" class="cancel-action" (click)="cancelIOU()" [disabled]="saving"><mat-icon>cancel</mat-icon>Cancel IOU</button> }\r
            @if (canDecide) {\r
              <mat-divider></mat-divider>\r
              <button mat-flat-button color="primary" type="button" (click)="approve()" [disabled]="saving"><mat-icon>check</mat-icon>Approve</button>\r
              <button mat-stroked-button type="button" class="return-action" (click)="returnForChanges()" [disabled]="saving"><mat-icon>undo</mat-icon>Return for Changes</button>\r
              <button mat-stroked-button type="button" class="reject-action" (click)="reject()" [disabled]="saving"><mat-icon>cancel</mat-icon>Reject</button>\r
            }\r
          </mat-card>\r
        </aside>\r
      }\r
    </div>\r
  }\r
</section>`, styles: ['/* src/app/features/pages/iou/iou-details.component.scss */\n:host {\n  display: block;\n}\n.iou-details-page {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-bottom: 4px;\n  animation: arrive 260ms ease-out both;\n}\n.back-link {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link mat-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 2px 0 3px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 25px/1.25 "Space Grotesk", sans-serif;\n}\n.preview-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid #e8dcc2;\n  border-radius: 6px;\n  color: #725b36;\n  background: #fbf6eb;\n  font-size: 10px;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.details-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(220px, 0.32fr);\n  align-items: start;\n  gap: 13px;\n}\n.main-column {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 13px;\n}\n.detail-card {\n  min-width: 0;\n  padding: 19px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.detail-card h2 {\n  margin: 0 0 14px;\n  color: #2b3d32;\n  font: 600 14px/1.3 "Space Grotesk", sans-serif;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 14px;\n  padding: 2px 0 18px;\n}\n.info-grid > div span,\n.info-grid > div strong,\n.info-grid > div small {\n  display: block;\n}\n.info-grid > div span {\n  margin-bottom: 5px;\n  color: #87928a;\n  font-size: 9px;\n}\n.info-grid > div strong {\n  color: #35483b;\n  font-size: 11px;\n  font-weight: 600;\n}\n.info-grid > div small {\n  margin-top: 4px;\n  color: #89948b;\n  font-size: 9px;\n  overflow-wrap: anywhere;\n}\n.wide-info {\n  grid-column: 1/-1;\n}\n.description-block {\n  padding-top: 15px;\n}\n.description-block h3,\n.attachments h3 {\n  margin: 0;\n  color: #435449;\n  font-size: 10px;\n  font-weight: 700;\n}\n.description-block p,\n.attachments > p {\n  margin: 7px 0 0;\n  color: #68766d;\n  font-size: 10px;\n  line-height: 1.6;\n}\n.attachments {\n  padding-top: 16px;\n}\n.attachment-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid #e8eee8;\n  border-radius: 5px;\n}\n.attachment-item > mat-icon {\n  color: #73867a;\n}\n.attachment-item span,\n.attachment-item strong,\n.attachment-item small {\n  display: block;\n}\n.attachment-item strong {\n  color: #45574a;\n  font-size: 9px;\n}\n.attachment-item small {\n  margin-top: 3px;\n  color: #8b978e;\n  font-size: 8px;\n}\n.section-heading {\n  margin-bottom: 15px;\n}\n.section-heading h2 {\n  margin: 0;\n}\n.section-heading p {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 9px;\n}\n.history-list {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.history-entry {\n  position: relative;\n  display: grid;\n  grid-template-columns: 23px minmax(0, 1fr);\n  gap: 10px;\n  padding-bottom: 18px;\n}\n.history-entry:not(.last-entry)::before {\n  position: absolute;\n  top: 24px;\n  bottom: -1px;\n  left: 10px;\n  width: 1px;\n  background: #e3eae3;\n  content: "";\n}\n.history-marker {\n  z-index: 1;\n  display: grid;\n  width: 22px;\n  height: 22px;\n  place-items: center;\n  border: 1px solid #dce8dc;\n  border-radius: 50%;\n  color: #56815b;\n  background: #f0f5ed;\n}\n.history-marker mat-icon {\n  width: 13px;\n  height: 13px;\n  font-size: 13px;\n}\n.history-heading {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 7px;\n  padding-top: 3px;\n}\n.history-heading strong {\n  color: #34463a;\n  font-size: 10px;\n}\n.history-heading span {\n  color: #809087;\n  font-size: 9px;\n}\n.history-entry p {\n  margin: 4px 0;\n  color: #7b887f;\n  font-size: 9px;\n}\n.history-entry blockquote {\n  margin: 7px 0;\n  padding: 8px 10px;\n  border-left: 2px solid #d7e4d4;\n  color: #5f6f63;\n  background: #f7f9f6;\n  font-size: 9px;\n  line-height: 1.5;\n}\n.history-entry time {\n  color: #99a29b;\n  font-size: 8px;\n}\n.empty-history {\n  color: #87928a;\n  font-size: 10px;\n}\n.action-panel .detail-card {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.action-panel button {\n  min-height: 36px;\n  justify-content: flex-start;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.action-panel mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 5px;\n  font-size: 16px;\n}\n.action-panel mat-divider {\n  margin: 7px 0;\n}\n.cancel-action,\n.reject-action {\n  color: #a3544d;\n}\n.return-action {\n  color: #946d32;\n}\n.error-state {\n  display: flex;\n  min-height: 280px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.error-state > mat-icon {\n  color: #b66a60;\n}\n.error-state h1 {\n  margin-top: 10px;\n  font-size: 20px;\n}\n.error-state p {\n  font-size: 10px;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .iou-details-page {\n    animation: none;\n  }\n}\n@media (max-width: 900px) {\n  .details-layout {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .action-panel .detail-card {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .action-panel h2,\n  .action-panel mat-divider {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 560px) {\n  .page-heading {\n    flex-direction: column;\n  }\n  .info-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .wide-info {\n    grid-column: auto;\n  }\n  .detail-card {\n    padding: 16px;\n  }\n  .action-panel .detail-card {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .action-panel h2,\n  .action-panel mat-divider {\n    grid-column: auto;\n  }\n}\n/*# sourceMappingURL=iou-details.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IOUDetailsComponent, { className: "IOUDetailsComponent", filePath: "src/app/features/pages/iou/iou-details.component.ts", lineNumber: 33 });
})();
export {
  IOUDetailsComponent
};
//# sourceMappingURL=chunk-AY67LQFQ.js.map
