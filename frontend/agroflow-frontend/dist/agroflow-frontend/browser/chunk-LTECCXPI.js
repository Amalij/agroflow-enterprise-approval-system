import {
  ApprovalWorkflowProgressComponent
} from "./chunk-T4QWBYES.js";
import {
  ProcurementPreviewStore,
  ProcurementService
} from "./chunk-PU5WRMLX.js";
import {
  ApprovalActionDialogComponent
} from "./chunk-5MXWGQL5.js";
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

// src/app/features/pages/procurement/procurement-details.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ProcurementDetailsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 2);
  }
}
function ProcurementDetailsComponent_Conditional_6_Template(rf, ctx) {
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
    \u0275\u0275listener("click", function ProcurementDetailsComponent_Conditional_6_Template_button_click_7_listener() {
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
function ProcurementDetailsComponent_Conditional_7_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "This request is temporary preview data scoped to your account.");
    \u0275\u0275elementEnd()();
  }
}
function ProcurementDetailsComponent_Conditional_7_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3");
    \u0275\u0275text(2, "Preferred Supplier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const currentRequest_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(currentRequest_r3.preferredSupplier);
  }
}
function ProcurementDetailsComponent_Conditional_7_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "h3");
    \u0275\u0275text(2, "Additional Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const currentRequest_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(currentRequest_r3.additionalNotes);
  }
}
function ProcurementDetailsComponent_Conditional_7_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
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
    const currentRequest_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentRequest_r3.attachment.fileName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(8, 2, currentRequest_r3.attachment.sizeBytes / 1024, "1.0-0"), " KB");
  }
}
function ProcurementDetailsComponent_Conditional_7_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "No supporting documents provided.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementDetailsComponent_Conditional_7_Conditional_88_For_2_Conditional_12_Template(rf, ctx) {
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
function ProcurementDetailsComponent_Conditional_7_Conditional_88_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 23)(1, "span", 24)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "div", 25)(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, ProcurementDetailsComponent_Conditional_7_Conditional_88_For_2_Conditional_12_Template, 2, 1, "blockquote");
    \u0275\u0275elementStart(13, "time");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const entry_r4 = ctx.$implicit;
    const \u0275$index_212_r5 = ctx.$index;
    const \u0275$count_212_r6 = ctx.$count;
    \u0275\u0275classProp("last-entry", \u0275$index_212_r5 === \u0275$count_212_r6 - 1);
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
function ProcurementDetailsComponent_Conditional_7_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ol", 19);
    \u0275\u0275repeaterCreate(1, ProcurementDetailsComponent_Conditional_7_Conditional_88_For_2_Template, 16, 12, "li", 22, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currentRequest_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(currentRequest_r3.approvalHistory);
  }
}
function ProcurementDetailsComponent_Conditional_7_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1, "No approval actions have been recorded.");
    \u0275\u0275elementEnd();
  }
}
function ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_4_Template_button_click_0_listener() {
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
function ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelRequest());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, "Cancel Request");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r1.saving);
  }
}
function ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "mat-divider");
    \u0275\u0275elementStart(1, "button", 29);
    \u0275\u0275listener("click", function ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.approve());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Approve");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_6_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.returnForChanges());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, "Return for Changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275listener("click", function ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_6_Template_button_click_9_listener() {
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
function ProcurementDetailsComponent_Conditional_7_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "aside", 21)(1, "mat-card", 12)(2, "h2");
    \u0275\u0275text(3, "Actions");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_4_Template, 4, 0, "button", 26);
    \u0275\u0275conditionalCreate(5, ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_5_Template, 4, 1, "button", 27);
    \u0275\u0275conditionalCreate(6, ProcurementDetailsComponent_Conditional_7_Conditional_90_Conditional_6_Template, 13, 3);
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
function ProcurementDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 5)(1, "div")(2, "p", 6);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h1", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "app-request-status-chip", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ProcurementDetailsComponent_Conditional_7_Conditional_7_Template, 5, 0, "div", 9);
    \u0275\u0275elementStart(8, "div", 10)(9, "div", 11)(10, "mat-card", 12)(11, "h2");
    \u0275\u0275text(12, "Procurement Information");
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
    \u0275\u0275text(28, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "strong");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div")(32, "span");
    \u0275\u0275text(33, "Required Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "strong");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div")(38, "span");
    \u0275\u0275text(39, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "strong");
    \u0275\u0275text(41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div")(43, "span");
    \u0275\u0275text(44, "Estimated Unit Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "strong");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div")(49, "span");
    \u0275\u0275text(50, "Estimated Total Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "strong");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "currency");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "div")(55, "span");
    \u0275\u0275text(56, "Current Approval Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "strong");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(59, "mat-divider");
    \u0275\u0275elementStart(60, "div", 14)(61, "h3");
    \u0275\u0275text(62, "Item / Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "p");
    \u0275\u0275text(64);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 14)(66, "h3");
    \u0275\u0275text(67, "Justification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "p");
    \u0275\u0275text(69);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(70, ProcurementDetailsComponent_Conditional_7_Conditional_70_Template, 5, 1, "div", 14);
    \u0275\u0275conditionalCreate(71, ProcurementDetailsComponent_Conditional_7_Conditional_71_Template, 5, 1, "div", 14);
    \u0275\u0275elementStart(72, "div", 15)(73, "h3");
    \u0275\u0275text(74, "Supporting Documents");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(75, ProcurementDetailsComponent_Conditional_7_Conditional_75_Template, 9, 5, "div", 16)(76, ProcurementDetailsComponent_Conditional_7_Conditional_76_Template, 2, 0, "p");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(77, "mat-card", 12)(78, "div", 17)(79, "div")(80, "h2");
    \u0275\u0275text(81, "Approval Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p");
    \u0275\u0275text(83, "The approval route is provided by the request workflow.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(84, "app-approval-workflow-progress", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "mat-card", 12)(86, "h2");
    \u0275\u0275text(87, "Approval History");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(88, ProcurementDetailsComponent_Conditional_7_Conditional_88_Template, 3, 0, "ol", 19)(89, ProcurementDetailsComponent_Conditional_7_Conditional_89_Template, 2, 0, "p", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(90, ProcurementDetailsComponent_Conditional_7_Conditional_90_Template, 7, 3, "aside", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const currentRequest_r3 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("PROCUREMENT \xB7 ", currentRequest_r3.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currentRequest_r3.requestTitle);
    \u0275\u0275advance();
    \u0275\u0275property("status", currentRequest_r3.status);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.previewMode ? 7 : -1);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(currentRequest_r3.requesterName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(currentRequest_r3.requesterEmail);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentRequest_r3.departmentName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentRequest_r3.category);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(36, 21, currentRequest_r3.requiredDate, "mediumDate"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(currentRequest_r3.item.quantity);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(47, 24, currentRequest_r3.item.estimatedUnitPrice, "USD", "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(53, 29, currentRequest_r3.item.estimatedTotalAmount, "USD", "symbol", "1.0-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(currentRequest_r3.currentApprovalLevel || "Draft \xB7 Not submitted");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(currentRequest_r3.item.description);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(currentRequest_r3.justification);
    \u0275\u0275advance();
    \u0275\u0275conditional(currentRequest_r3.preferredSupplier ? 70 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(currentRequest_r3.additionalNotes ? 71 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(currentRequest_r3.attachment ? 75 : 76);
    \u0275\u0275advance(9);
    \u0275\u0275property("steps", currentRequest_r3.approvalWorkflow);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(currentRequest_r3.approvalHistory.length ? 88 : 89);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.canEditDraft || ctx_r1.canCancel || ctx_r1.canDecide ? 90 : -1);
  }
}
var _ProcurementDetailsComponent = class _ProcurementDetailsComponent {
  constructor() {
    this.authService = inject(AuthService);
    this.procurementService = inject(ProcurementService);
    this.previewStore = inject(ProcurementPreviewStore);
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
    this.loadRequest();
  }
  get canEditDraft() {
    return this.request?.status === "Draft";
  }
  get canCancel() {
    return !!this.request && ["Draft", "Pending", "Returned"].includes(this.request.status);
  }
  get canDecide() {
    return !!this.canApprove && !!this.request?.assignedApproverEmail && this.request.assignedApproverEmail.toLocaleLowerCase() === this.userEmail.toLocaleLowerCase() && ["Pending", "Returned"].includes(this.request.status);
  }
  retry() {
    this.loadRequest();
  }
  editDraft() {
    if (this.request && this.canEditDraft)
      void this.router.navigate(["/procurement/create"], { queryParams: { draftId: this.request.id } });
  }
  cancelRequest() {
    const request = this.request;
    if (!request || !this.canCancel || this.saving)
      return;
    const data = { requestId: request.id, title: request.requestTitle };
    this.dialog.open(CancelRequestDialogComponent, { width: "min(440px, calc(100vw - 32px))", maxWidth: "calc(100vw - 32px)", data, autoFocus: false }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((confirmed) => {
      if (confirmed)
        this.performCancel(request);
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
  loadRequest() {
    const user = this.authService.currentUser();
    const requestId = this.route.snapshot.paramMap.get("requestId");
    if (!user) {
      void this.router.navigate(["/login"], { queryParams: { returnUrl: this.router.url } });
      return;
    }
    if (!requestId) {
      this.loading = false;
      this.errorMessage = "A request ID is required.";
      return;
    }
    this.userEmail = user.email;
    this.userName = user.displayName;
    this.canApprove = ["Admin", "Manager", "Approver"].includes(user.role);
    this.loading = true;
    this.errorMessage = "";
    this.procurementService.getRequest(requestId, user.email, this.canApprove).pipe(finalize(() => this.loading = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (request) => {
        this.request = request;
        this.previewMode = false;
      },
      error: () => {
        const preview = isDevMode() ? this.previewStore.getById(user.email, requestId, user.displayName) : void 0;
        if (preview) {
          this.request = preview;
          this.previewMode = true;
        } else
          this.errorMessage = "This request could not be found in your account or approval queue.";
      }
    });
  }
  performCancel(request) {
    if (this.previewMode) {
      const updated = this.previewStore.cancel(this.userEmail, request.id);
      if (updated)
        this.request = updated;
      return;
    }
    this.saving = true;
    this.procurementService.cancel(request.id).pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.request = updated;
        this.snackBar.open("Procurement request cancelled.", "Dismiss", { duration: 3500 });
      },
      error: () => this.snackBar.open("The request could not be cancelled.", "Dismiss", { duration: 3500 })
    });
  }
  openCommentDialog(decision) {
    const request = this.request;
    if (!request || !this.canDecide || this.saving)
      return;
    const data = { decision, requestId: request.id, title: request.requestTitle };
    this.dialog.open(ApprovalActionDialogComponent, { width: "min(500px, calc(100vw - 32px))", maxWidth: "calc(100vw - 32px)", data, autoFocus: "first-tabbable" }).afterClosed().pipe(takeUntilDestroyed(this.destroyRef)).subscribe((comment) => {
      if (comment)
        this.processDecision({ decision, comment });
    });
  }
  processDecision(payload) {
    const request = this.request;
    if (!request || !this.canDecide || this.saving)
      return;
    if (this.previewMode) {
      const updated = this.previewStore.decide(this.userEmail, request.id, payload, this.userName);
      if (updated) {
        this.request = updated;
        this.snackBar.open("Decision saved to temporary Procurement preview data.", "Dismiss", { duration: 3500 });
      }
      return;
    }
    this.saving = true;
    this.procurementService.decide(request.id, payload).pipe(finalize(() => this.saving = false), takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (updated) => {
        this.request = updated;
        this.snackBar.open("Procurement decision recorded.", "Dismiss", { duration: 3500 });
      },
      error: () => this.snackBar.open("The decision could not be recorded.", "Dismiss", { duration: 3500 })
    });
  }
};
_ProcurementDetailsComponent.\u0275fac = function ProcurementDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProcurementDetailsComponent)();
};
_ProcurementDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProcurementDetailsComponent, selectors: [["app-procurement-details"]], decls: 8, vars: 3, consts: [["aria-labelledby", "procurement-details-title", 1, "procurement-details-page"], ["routerLink", "/procurement", 1, "back-link"], ["mode", "indeterminate", "aria-label", "Loading Procurement details"], ["role", "alert", 1, "error-state"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "page-heading"], [1, "eyebrow"], ["id", "procurement-details-title"], [3, "status"], ["role", "status", 1, "preview-notice"], [1, "details-layout"], [1, "main-column"], ["appearance", "outlined", 1, "detail-card"], [1, "info-grid"], [1, "description-block"], [1, "attachments"], [1, "attachment-item"], [1, "section-heading"], [3, "steps"], [1, "history-list"], [1, "empty-history"], [1, "action-panel"], [1, "history-entry", 3, "last-entry"], [1, "history-entry"], [1, "history-marker"], [1, "history-heading"], ["mat-stroked-button", "", "type", "button"], ["mat-button", "", "type", "button", 1, "cancel-action", 3, "disabled"], ["mat-button", "", "type", "button", 1, "cancel-action", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["mat-stroked-button", "", "type", "button", 1, "return-action", 3, "click", "disabled"], ["mat-stroked-button", "", "type", "button", 1, "reject-action", 3, "click", "disabled"]], template: function ProcurementDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 0)(1, "a", 1)(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, "Back to Procurement");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ProcurementDetailsComponent_Conditional_5_Template, 1, 0, "mat-progress-bar", 2);
    \u0275\u0275conditionalCreate(6, ProcurementDetailsComponent_Conditional_6_Template, 9, 1, "div", 3);
    \u0275\u0275conditionalCreate(7, ProcurementDetailsComponent_Conditional_7_Template, 91, 34);
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
}, dependencies: [ApprovalWorkflowProgressComponent, MatButtonModule, MatButton, MatCardModule, MatCard, MatDialogModule, MatDividerModule, MatDivider, MatIconModule, MatIcon, MatProgressBarModule, MatProgressBar, MatSnackBarModule, RequestStatusChipComponent, RouterLink, CurrencyPipe, DatePipe, DecimalPipe], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.procurement-details-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-bottom: 4px;\n  animation: _ngcontent-%COMP%_arrive 260ms ease-out both;\n}\n.back-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 2px 0 3px;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 25px/1.25 "Space Grotesk", sans-serif;\n}\n.preview-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid #e8dcc2;\n  border-radius: 6px;\n  color: #725b36;\n  background: #fbf6eb;\n  font-size: 10px;\n}\n.preview-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ac8242;\n}\n.details-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(220px, 0.32fr);\n  align-items: start;\n  gap: 13px;\n}\n.main-column[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 13px;\n}\n.detail-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 19px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.detail-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #2b3d32;\n  font: 600 14px/1.3 "Space Grotesk", sans-serif;\n}\n.info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 14px;\n  padding: 2px 0 18px;\n}\n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n  color: #87928a;\n  font-size: 9px;\n}\n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #35483b;\n  font-size: 11px;\n  font-weight: 600;\n}\n.info-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #89948b;\n  font-size: 9px;\n  overflow-wrap: anywhere;\n}\n.description-block[_ngcontent-%COMP%] {\n  padding-top: 15px;\n}\n.description-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.attachments[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #435449;\n  font-size: 10px;\n  font-weight: 700;\n}\n.description-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.attachments[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 7px 0 0;\n  color: #68766d;\n  font-size: 10px;\n  line-height: 1.6;\n}\n.attachments[_ngcontent-%COMP%] {\n  padding-top: 16px;\n}\n.attachment-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid #e8eee8;\n  border-radius: 5px;\n}\n.attachment-item[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #73867a;\n}\n.attachment-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.attachment-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.attachment-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.attachment-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #45574a;\n  font-size: 9px;\n}\n.attachment-item[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: #8b978e;\n  font-size: 8px;\n}\n.section-heading[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 9px;\n}\n.history-list[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.history-entry[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 23px minmax(0, 1fr);\n  gap: 10px;\n  padding-bottom: 18px;\n}\n.history-entry[_ngcontent-%COMP%]:not(.last-entry)::before {\n  position: absolute;\n  top: 24px;\n  bottom: -1px;\n  left: 10px;\n  width: 1px;\n  background: #e3eae3;\n  content: "";\n}\n.history-marker[_ngcontent-%COMP%] {\n  z-index: 1;\n  display: grid;\n  width: 22px;\n  height: 22px;\n  place-items: center;\n  border: 1px solid #dce8dc;\n  border-radius: 50%;\n  color: #56815b;\n  background: #f0f5ed;\n}\n.history-marker[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 13px;\n  height: 13px;\n  font-size: 13px;\n}\n.history-heading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 7px;\n  padding-top: 3px;\n}\n.history-heading[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #34463a;\n  font-size: 10px;\n}\n.history-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #809087;\n  font-size: 9px;\n}\n.history-entry[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0;\n  color: #7b887f;\n  font-size: 9px;\n}\n.history-entry[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  margin: 7px 0;\n  padding: 8px 10px;\n  border-left: 2px solid #d7e4d4;\n  color: #5f6f63;\n  background: #f7f9f6;\n  font-size: 9px;\n  line-height: 1.5;\n}\n.history-entry[_ngcontent-%COMP%]   time[_ngcontent-%COMP%] {\n  color: #99a29b;\n  font-size: 8px;\n}\n.empty-history[_ngcontent-%COMP%] {\n  color: #87928a;\n  font-size: 10px;\n}\n.action-panel[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.action-panel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 36px;\n  justify-content: flex-start;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.action-panel[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-right: 5px;\n  font-size: 16px;\n}\n.action-panel[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  margin: 7px 0;\n}\n.cancel-action[_ngcontent-%COMP%], \n.reject-action[_ngcontent-%COMP%] {\n  color: #a3544d;\n}\n.return-action[_ngcontent-%COMP%] {\n  color: #946d32;\n}\n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 280px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.error-state[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #b66a60;\n}\n.error-state[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 20px;\n}\n.error-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n@keyframes _ngcontent-%COMP%_arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .procurement-details-page[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 900px) {\n  .details-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .action-panel[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .action-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .action-panel[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 560px) {\n  .page-heading[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .detail-card[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .action-panel[_ngcontent-%COMP%]   .detail-card[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .action-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .action-panel[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n}\n/*# sourceMappingURL=procurement-details.component.css.map */'] });
var ProcurementDetailsComponent = _ProcurementDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProcurementDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-procurement-details", standalone: true, imports: [CurrencyPipe, DatePipe, DecimalPipe, ApprovalWorkflowProgressComponent, MatButtonModule, MatCardModule, MatDialogModule, MatDividerModule, MatIconModule, MatProgressBarModule, MatSnackBarModule, RequestStatusChipComponent, RouterLink], template: `<section class="procurement-details-page" aria-labelledby="procurement-details-title">\r
  <a class="back-link" routerLink="/procurement"><mat-icon>arrow_back</mat-icon>Back to Procurement</a>\r
  @if (loading) { <mat-progress-bar mode="indeterminate" aria-label="Loading Procurement details"></mat-progress-bar> }\r
  @if (errorMessage && !request && !loading) { <div class="error-state" role="alert"><mat-icon>error_outline</mat-icon><h1>Request unavailable</h1><p>{{ errorMessage }}</p><button mat-stroked-button type="button" (click)="retry()">Retry</button></div> }\r
\r
  @if (request; as currentRequest) {\r
    <header class="page-heading"><div><p class="eyebrow">PROCUREMENT \xB7 {{ currentRequest.id }}</p><h1 id="procurement-details-title">{{ currentRequest.requestTitle }}</h1></div><app-request-status-chip [status]="currentRequest.status" /></header>\r
    @if (previewMode) { <div class="preview-notice" role="status"><mat-icon>info</mat-icon><span>This request is temporary preview data scoped to your account.</span></div> }\r
    <div class="details-layout">\r
      <div class="main-column">\r
        <mat-card appearance="outlined" class="detail-card">\r
          <h2>Procurement Information</h2>\r
          <div class="info-grid">\r
            <div><span>Requester</span><strong>{{ currentRequest.requesterName }}</strong><small>{{ currentRequest.requesterEmail }}</small></div>\r
            <div><span>Department</span><strong>{{ currentRequest.departmentName }}</strong></div>\r
            <div><span>Category</span><strong>{{ currentRequest.category }}</strong></div>\r
            <div><span>Required Date</span><strong>{{ currentRequest.requiredDate | date: 'mediumDate' }}</strong></div>\r
            <div><span>Quantity</span><strong>{{ currentRequest.item.quantity }}</strong></div>\r
            <div><span>Estimated Unit Price</span><strong>{{ currentRequest.item.estimatedUnitPrice | currency: 'USD':'symbol':'1.0-2' }}</strong></div>\r
            <div><span>Estimated Total Amount</span><strong>{{ currentRequest.item.estimatedTotalAmount | currency: 'USD':'symbol':'1.0-2' }}</strong></div>\r
            <div><span>Current Approval Level</span><strong>{{ currentRequest.currentApprovalLevel || 'Draft \xB7 Not submitted' }}</strong></div>\r
          </div>\r
          <mat-divider></mat-divider>\r
          <div class="description-block"><h3>Item / Service</h3><p>{{ currentRequest.item.description }}</p></div>\r
          <div class="description-block"><h3>Justification</h3><p>{{ currentRequest.justification }}</p></div>\r
          @if (currentRequest.preferredSupplier) { <div class="description-block"><h3>Preferred Supplier</h3><p>{{ currentRequest.preferredSupplier }}</p></div> }\r
          @if (currentRequest.additionalNotes) { <div class="description-block"><h3>Additional Notes</h3><p>{{ currentRequest.additionalNotes }}</p></div> }\r
          <div class="attachments"><h3>Supporting Documents</h3>@if (currentRequest.attachment) { <div class="attachment-item"><mat-icon>attach_file</mat-icon><span><strong>{{ currentRequest.attachment.fileName }}</strong><small>{{ currentRequest.attachment.sizeBytes / 1024 | number: '1.0-0' }} KB</small></span></div> } @else { <p>No supporting documents provided.</p> }</div>\r
        </mat-card>\r
        <mat-card appearance="outlined" class="detail-card"><div class="section-heading"><div><h2>Approval Progress</h2><p>The approval route is provided by the request workflow.</p></div></div><app-approval-workflow-progress [steps]="currentRequest.approvalWorkflow" /></mat-card>\r
        <mat-card appearance="outlined" class="detail-card"><h2>Approval History</h2>@if (currentRequest.approvalHistory.length) { <ol class="history-list">@for (entry of currentRequest.approvalHistory; track entry.id; let last = $last) { <li class="history-entry" [class.last-entry]="last"><span class="history-marker"><mat-icon>{{ entry.action === 'Rejected' ? 'cancel' : entry.action === 'Returned' ? 'undo' : entry.action === 'Approved' ? 'check_circle' : 'send' }}</mat-icon></span><div><div class="history-heading"><strong>{{ entry.action }}</strong><span>{{ entry.approvalLevel }}</span></div><p>{{ entry.actorName }} \xB7 {{ entry.actorRole }}</p>@if (entry.comment) { <blockquote>{{ entry.comment }}</blockquote> }<time>{{ entry.createdAt | date: 'medium' }}</time></div></li> }</ol> } @else { <p class="empty-history">No approval actions have been recorded.</p> }</mat-card>\r
      </div>\r
      @if (canEditDraft || canCancel || canDecide) { <aside class="action-panel"><mat-card appearance="outlined" class="detail-card"><h2>Actions</h2>@if (canEditDraft) { <button mat-stroked-button type="button" (click)="editDraft()"><mat-icon>edit</mat-icon>Edit Draft</button> }@if (canCancel) { <button mat-button type="button" class="cancel-action" (click)="cancelRequest()" [disabled]="saving"><mat-icon>cancel</mat-icon>Cancel Request</button> }@if (canDecide) { <mat-divider></mat-divider><button mat-flat-button color="primary" type="button" (click)="approve()" [disabled]="saving"><mat-icon>check</mat-icon>Approve</button><button mat-stroked-button type="button" class="return-action" (click)="returnForChanges()" [disabled]="saving"><mat-icon>undo</mat-icon>Return for Changes</button><button mat-stroked-button type="button" class="reject-action" (click)="reject()" [disabled]="saving"><mat-icon>cancel</mat-icon>Reject</button> }</mat-card></aside> }\r
    </div>\r
  }\r
</section>`, styles: ['/* src/app/features/pages/procurement/procurement-details.component.scss */\n:host {\n  display: block;\n}\n.procurement-details-page {\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n  padding-bottom: 4px;\n  animation: arrive 260ms ease-out both;\n}\n.back-link {\n  display: inline-flex;\n  width: fit-content;\n  align-items: center;\n  gap: 6px;\n  color: #55715d;\n  font-size: 11px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.back-link mat-icon {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n.page-heading {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 2px 0 3px;\n}\n.eyebrow {\n  margin: 0 0 8px;\n  color: #6c8f61;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n}\nh1 {\n  margin: 0;\n  color: #1d2c25;\n  font: 600 25px/1.25 "Space Grotesk", sans-serif;\n}\n.preview-notice {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 12px;\n  border: 1px solid #e8dcc2;\n  border-radius: 6px;\n  color: #725b36;\n  background: #fbf6eb;\n  font-size: 10px;\n}\n.preview-notice mat-icon {\n  color: #ac8242;\n}\n.details-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(220px, 0.32fr);\n  align-items: start;\n  gap: 13px;\n}\n.main-column {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  gap: 13px;\n}\n.detail-card {\n  min-width: 0;\n  padding: 19px;\n  border-color: #e2e9e3;\n  border-radius: 7px;\n  background: #fff;\n  box-shadow: 0 2px 7px rgba(34, 55, 40, 0.03);\n}\n.detail-card h2 {\n  margin: 0 0 14px;\n  color: #2b3d32;\n  font: 600 14px/1.3 "Space Grotesk", sans-serif;\n}\n.info-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px 14px;\n  padding: 2px 0 18px;\n}\n.info-grid > div span,\n.info-grid > div strong,\n.info-grid > div small {\n  display: block;\n}\n.info-grid > div span {\n  margin-bottom: 5px;\n  color: #87928a;\n  font-size: 9px;\n}\n.info-grid > div strong {\n  color: #35483b;\n  font-size: 11px;\n  font-weight: 600;\n}\n.info-grid > div small {\n  margin-top: 4px;\n  color: #89948b;\n  font-size: 9px;\n  overflow-wrap: anywhere;\n}\n.description-block {\n  padding-top: 15px;\n}\n.description-block h3,\n.attachments h3 {\n  margin: 0;\n  color: #435449;\n  font-size: 10px;\n  font-weight: 700;\n}\n.description-block p,\n.attachments > p {\n  margin: 7px 0 0;\n  color: #68766d;\n  font-size: 10px;\n  line-height: 1.6;\n}\n.attachments {\n  padding-top: 16px;\n}\n.attachment-item {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-top: 10px;\n  padding: 10px;\n  border: 1px solid #e8eee8;\n  border-radius: 5px;\n}\n.attachment-item > mat-icon {\n  color: #73867a;\n}\n.attachment-item span,\n.attachment-item strong,\n.attachment-item small {\n  display: block;\n}\n.attachment-item strong {\n  color: #45574a;\n  font-size: 9px;\n}\n.attachment-item small {\n  margin-top: 3px;\n  color: #8b978e;\n  font-size: 8px;\n}\n.section-heading {\n  margin-bottom: 15px;\n}\n.section-heading h2 {\n  margin: 0;\n}\n.section-heading p {\n  margin: 5px 0 0;\n  color: #87928a;\n  font-size: 9px;\n}\n.history-list {\n  position: relative;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.history-entry {\n  position: relative;\n  display: grid;\n  grid-template-columns: 23px minmax(0, 1fr);\n  gap: 10px;\n  padding-bottom: 18px;\n}\n.history-entry:not(.last-entry)::before {\n  position: absolute;\n  top: 24px;\n  bottom: -1px;\n  left: 10px;\n  width: 1px;\n  background: #e3eae3;\n  content: "";\n}\n.history-marker {\n  z-index: 1;\n  display: grid;\n  width: 22px;\n  height: 22px;\n  place-items: center;\n  border: 1px solid #dce8dc;\n  border-radius: 50%;\n  color: #56815b;\n  background: #f0f5ed;\n}\n.history-marker mat-icon {\n  width: 13px;\n  height: 13px;\n  font-size: 13px;\n}\n.history-heading {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 7px;\n  padding-top: 3px;\n}\n.history-heading strong {\n  color: #34463a;\n  font-size: 10px;\n}\n.history-heading span {\n  color: #809087;\n  font-size: 9px;\n}\n.history-entry p {\n  margin: 4px 0;\n  color: #7b887f;\n  font-size: 9px;\n}\n.history-entry blockquote {\n  margin: 7px 0;\n  padding: 8px 10px;\n  border-left: 2px solid #d7e4d4;\n  color: #5f6f63;\n  background: #f7f9f6;\n  font-size: 9px;\n  line-height: 1.5;\n}\n.history-entry time {\n  color: #99a29b;\n  font-size: 8px;\n}\n.empty-history {\n  color: #87928a;\n  font-size: 10px;\n}\n.action-panel .detail-card {\n  display: flex;\n  flex-direction: column;\n  gap: 9px;\n}\n.action-panel button {\n  min-height: 36px;\n  justify-content: flex-start;\n  border-radius: 5px;\n  font-size: 10px;\n}\n.action-panel mat-icon {\n  width: 16px;\n  height: 16px;\n  margin-right: 5px;\n  font-size: 16px;\n}\n.action-panel mat-divider {\n  margin: 7px 0;\n}\n.cancel-action,\n.reject-action {\n  color: #a3544d;\n}\n.return-action {\n  color: #946d32;\n}\n.error-state {\n  display: flex;\n  min-height: 280px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: #748078;\n  text-align: center;\n}\n.error-state > mat-icon {\n  color: #b66a60;\n}\n.error-state h1 {\n  margin-top: 10px;\n  font-size: 20px;\n}\n.error-state p {\n  font-size: 10px;\n}\n@keyframes arrive {\n  from {\n    opacity: 0;\n    transform: translateY(6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .procurement-details-page {\n    animation: none;\n  }\n}\n@media (max-width: 900px) {\n  .details-layout {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .action-panel .detail-card {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .action-panel h2,\n  .action-panel mat-divider {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 560px) {\n  .page-heading {\n    flex-direction: column;\n  }\n  .info-grid {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .detail-card {\n    padding: 16px;\n  }\n  .action-panel .detail-card {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .action-panel h2,\n  .action-panel mat-divider {\n    grid-column: auto;\n  }\n}\n/*# sourceMappingURL=procurement-details.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProcurementDetailsComponent, { className: "ProcurementDetailsComponent", filePath: "src/app/features/pages/procurement/procurement-details.component.ts", lineNumber: 30 });
})();
export {
  ProcurementDetailsComponent
};
//# sourceMappingURL=chunk-LTECCXPI.js.map
