import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-IGEVX5VZ.js";
import {
  HttpClient
} from "./chunk-FWRROCAB.js";
import {
  Component,
  Injectable,
  Input,
  inject,
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-N56IC4AV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/features/approvals/components/approval-status-chip/approval-status-chip.component.ts
var _ApprovalStatusChipComponent = class _ApprovalStatusChipComponent {
  get statusTone() {
    return this.status.toLocaleLowerCase().replaceAll(" ", "-");
  }
};
_ApprovalStatusChipComponent.\u0275fac = function ApprovalStatusChipComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApprovalStatusChipComponent)();
};
_ApprovalStatusChipComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApprovalStatusChipComponent, selectors: [["app-approval-status-chip"]], inputs: { status: "status" }, decls: 3, vars: 3, template: function ApprovalStatusChipComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip-set")(1, "mat-chip");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275classMap("approval-status-chip " + ctx.statusTone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.status);
  }
}, dependencies: [MatChipsModule, MatChip, MatChipSet], styles: ["\n\n[_nghost-%COMP%] {\n  display: inline-block;\n}\n.approval-status-chip[_ngcontent-%COMP%] {\n  min-height: 23px;\n  border-radius: 4px !important;\n  font-size: 9px;\n  font-weight: 700;\n}\n.approval-status-chip.pending[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #fbf1df;\n  --mdc-chip-label-text-color: #936322;\n}\n.approval-status-chip.changes-requested[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf1f5;\n  --mdc-chip-label-text-color: #507389;\n}\n.approval-status-chip.approved[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.approval-status-chip.rejected[_ngcontent-%COMP%] {\n  --mdc-chip-elevated-container-color: #f8eae8;\n  --mdc-chip-label-text-color: #9e504a;\n}\n/*# sourceMappingURL=approval-status-chip.component.css.map */"] });
var ApprovalStatusChipComponent = _ApprovalStatusChipComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApprovalStatusChipComponent, [{
    type: Component,
    args: [{ selector: "app-approval-status-chip", standalone: true, imports: [MatChipsModule], template: `<mat-chip-set><mat-chip [class]="'approval-status-chip ' + statusTone">{{ status }}</mat-chip></mat-chip-set>`, styles: ["/* angular:styles/component:scss;c4108183a285eb2a71801aeac4d681c10b28e6ec636519a8011bb051a967ea6f;C:/Users/R E V O/Desktop/Internship/agroflow-enterprise-approval-system/frontend/agroflow-frontend/src/app/features/approvals/components/approval-status-chip/approval-status-chip.component.ts */\n:host {\n  display: inline-block;\n}\n.approval-status-chip {\n  min-height: 23px;\n  border-radius: 4px !important;\n  font-size: 9px;\n  font-weight: 700;\n}\n.approval-status-chip.pending {\n  --mdc-chip-elevated-container-color: #fbf1df;\n  --mdc-chip-label-text-color: #936322;\n}\n.approval-status-chip.changes-requested {\n  --mdc-chip-elevated-container-color: #eaf1f5;\n  --mdc-chip-label-text-color: #507389;\n}\n.approval-status-chip.approved {\n  --mdc-chip-elevated-container-color: #eaf3e7;\n  --mdc-chip-label-text-color: #36704b;\n}\n.approval-status-chip.rejected {\n  --mdc-chip-elevated-container-color: #f8eae8;\n  --mdc-chip-label-text-color: #9e504a;\n}\n/*# sourceMappingURL=approval-status-chip.component.css.map */\n"] }]
  }], null, { status: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApprovalStatusChipComponent, { className: "ApprovalStatusChipComponent", filePath: "src/app/features/approvals/components/approval-status-chip/approval-status-chip.component.ts", lineNumber: 20 });
})();

// src/app/features/approvals/data/approval-preview.data.ts
function createApprovalPreviewData(approverEmail) {
  return [
    {
      id: "REQ-2026-0508",
      requestType: "Procurement",
      title: "Greenhouse irrigation controls",
      description: "Purchase of replacement control units for the east greenhouse.",
      requester: { id: 307, fullName: "Priya Shah", email: "priya.shah@agroflow.example" },
      departmentName: "Agriculture",
      amount: 4860,
      currency: "USD",
      submittedAt: "2026-09-27T09:20:00Z",
      currentApprovalLevel: "Department Approver",
      levelNumber: 2,
      totalLevels: 4,
      status: "Pending",
      assignedApproverEmail: approverEmail,
      attachments: [{ id: "att-508-a", fileName: "supplier-quote.pdf", contentType: "application/pdf", sizeBytes: 284120 }],
      history: [
        { id: "hist-508-a", actorName: "Priya Shah", actorRole: "Employee", action: "Submitted", level: "Request created", createdAt: "2026-09-27T09:20:00Z" },
        { id: "hist-508-b", actorName: "Daniel Kim", actorRole: "Manager", action: "Approved", level: "Manager review", comment: "Within the approved equipment plan.", createdAt: "2026-09-27T11:05:00Z" }
      ]
    },
    {
      id: "REQ-2026-0502",
      requestType: "IOU",
      title: "Regional crop assessment travel",
      description: "Travel advance for two field assessments in the north region.",
      requester: { id: 314, fullName: "Noah Williams", email: "noah.williams@agroflow.example" },
      departmentName: "Agriculture",
      amount: 1120,
      currency: "USD",
      submittedAt: "2026-09-26T14:40:00Z",
      currentApprovalLevel: "Finance Review",
      levelNumber: 3,
      totalLevels: 4,
      status: "Pending",
      assignedApproverEmail: approverEmail,
      attachments: [],
      history: [
        { id: "hist-502-a", actorName: "Noah Williams", actorRole: "Employee", action: "Submitted", level: "Request created", createdAt: "2026-09-26T14:40:00Z" },
        { id: "hist-502-b", actorName: "Leila Hassan", actorRole: "Approver", action: "Approved", level: "Department review", createdAt: "2026-09-27T08:15:00Z" }
      ]
    },
    {
      id: "REQ-2026-0491",
      requestType: "Petty Cash",
      title: "Workshop safety supplies",
      description: "Protective supplies for the regional equipment workshop.",
      requester: { id: 322, fullName: "Mina Chen", email: "mina.chen@agroflow.example" },
      departmentName: "Operations",
      amount: 340,
      currency: "USD",
      submittedAt: "2026-09-24T10:00:00Z",
      currentApprovalLevel: "Department Approver",
      levelNumber: 2,
      totalLevels: 3,
      status: "Changes Requested",
      assignedApproverEmail: approverEmail,
      attachments: [{ id: "att-491-a", fileName: "supply-list.xlsx", contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", sizeBytes: 36840 }],
      history: [
        { id: "hist-491-a", actorName: "Mina Chen", actorRole: "Employee", action: "Submitted", level: "Request created", createdAt: "2026-09-24T10:00:00Z" },
        { id: "hist-491-b", actorName: "Daniel Kim", actorRole: "Manager", action: "Returned", level: "Manager review", comment: "Please attach the workshop quote.", createdAt: "2026-09-25T09:10:00Z" },
        { id: "hist-491-c", actorName: "Mina Chen", actorRole: "Employee", action: "Resubmitted", level: "Request updated", comment: "Quote attached for review.", createdAt: "2026-09-26T12:30:00Z" }
      ]
    }
  ];
}

// src/app/features/approvals/services/approval-preview.store.ts
var _ApprovalPreviewStore = class _ApprovalPreviewStore {
  constructor() {
    this.recordsByApprover = /* @__PURE__ */ new Map();
  }
  getForApprover(approverEmail) {
    const key = this.normalizeEmail(approverEmail);
    let records = this.recordsByApprover.get(key);
    if (!records) {
      records = createApprovalPreviewData(approverEmail);
      this.recordsByApprover.set(key, records);
    }
    return records.map((record) => this.clone(record));
  }
  getById(approverEmail, approvalId) {
    return this.getForApprover(approverEmail).find((record) => record.id === approvalId);
  }
  decide(approverEmail, approvalId, payload, actorName) {
    const key = this.normalizeEmail(approverEmail);
    const records = this.recordsByApprover.get(key) ?? createApprovalPreviewData(approverEmail);
    const record = records.find((item) => item.id === approvalId && this.normalizeEmail(item.assignedApproverEmail) === key);
    if (!record || !["Pending", "Changes Requested"].includes(record.status))
      return void 0;
    const result = payload.decision === "approve" ? "Approved" : payload.decision === "reject" ? "Rejected" : "Changes Requested";
    const action = payload.decision === "approve" ? "Approved" : payload.decision === "reject" ? "Rejected" : "Returned";
    record.status = result;
    record.history = [...record.history, {
      id: `${record.id}-history-${record.history.length + 1}`,
      actorName,
      actorRole: "Approver",
      action,
      level: record.currentApprovalLevel,
      comment: payload.comment,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    }];
    this.recordsByApprover.set(key, records);
    return this.clone(record);
  }
  clone(record) {
    return __spreadProps(__spreadValues({}, record), { requester: __spreadValues({}, record.requester), attachments: record.attachments.map((item) => __spreadValues({}, item)), history: record.history.map((item) => __spreadValues({}, item)) });
  }
  normalizeEmail(email) {
    return email.trim().toLocaleLowerCase();
  }
};
_ApprovalPreviewStore.\u0275fac = function ApprovalPreviewStore_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApprovalPreviewStore)();
};
_ApprovalPreviewStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApprovalPreviewStore, factory: _ApprovalPreviewStore.\u0275fac, providedIn: "root" });
var ApprovalPreviewStore = _ApprovalPreviewStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApprovalPreviewStore, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/approvals/services/approval.service.ts
var _ApprovalService = class _ApprovalService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = "http://localhost:8080/api/approvals";
  }
  getAssignedPendingApprovals(approverEmail) {
    return this.http.get(`${this.apiUrl}/pending`).pipe(map((approvals) => approvals.filter((approval) => this.isAssignedTo(approval, approverEmail) && this.isPending(approval))));
  }
  getAssignedApproval(approvalId, approverEmail) {
    return this.http.get(`${this.apiUrl}/${encodeURIComponent(approvalId)}`).pipe(map((approval) => {
      if (!this.isAssignedTo(approval, approverEmail))
        throw new Error("Approval not found.");
      return approval;
    }));
  }
  submitDecision(approvalId, approverEmail, payload) {
    return this.http.post(`${this.apiUrl}/${encodeURIComponent(approvalId)}/decision`, payload).pipe(map((approval) => {
      if (!this.isAssignedTo(approval, approverEmail))
        throw new Error("Approval not found.");
      return approval;
    }));
  }
  matchesFilters(approval, filters) {
    const query = `${approval.id} ${approval.requestType} ${approval.title} ${approval.requester.fullName} ${approval.requester.email} ${approval.departmentName}`.toLocaleLowerCase();
    return (!filters.query || query.includes(filters.query.trim().toLocaleLowerCase())) && (filters.requestType === "all" || approval.requestType === filters.requestType) && (filters.department === "all" || approval.departmentName === filters.department) && (filters.status === "all" || approval.status === filters.status) && (filters.approvalLevel === "all" || approval.currentApprovalLevel === filters.approvalLevel);
  }
  isAssignedTo(approval, email) {
    return approval.assignedApproverEmail.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase();
  }
  isPending(approval) {
    return approval.status === "Pending" || approval.status === "Changes Requested";
  }
};
_ApprovalService.\u0275fac = function ApprovalService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ApprovalService)();
};
_ApprovalService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApprovalService, factory: _ApprovalService.\u0275fac, providedIn: "root" });
var ApprovalService = _ApprovalService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApprovalService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ApprovalStatusChipComponent,
  ApprovalPreviewStore,
  ApprovalService
};
//# sourceMappingURL=chunk-L4UJCRES.js.map
