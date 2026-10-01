import {
  HttpClient
} from "./chunk-FWRROCAB.js";
import {
  Injectable,
  inject,
  map,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-N56IC4AV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/features/iou/data/iou-preview.data.ts
var defaultWorkflow = [
  { name: "Requester", state: "complete" },
  { name: "Department Approval", state: "current" },
  { name: "Finance Approval", state: "upcoming" },
  { name: "Final Approval", state: "upcoming" }
];
function createIOUPreviewData(ownerEmail, requesterName) {
  const records = [
    {
      id: "IOU-2026-0318",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 103,
      departmentName: "Agriculture",
      purpose: "North region field assessment",
      description: "Travel advance for two scheduled crop assessments in the northern district.",
      amount: 720,
      currency: "USD",
      requestDate: "2026-09-25T09:30:00Z",
      requiredDate: "2026-10-03T00:00:00Z",
      additionalNotes: "Receipts will be submitted after the visit.",
      status: "Pending",
      currentApprovalLevel: "Department Approval",
      approvalWorkflow: defaultWorkflow.map((step) => __spreadValues({}, step)),
      approvalHistory: [
        { id: "iou-history-0318-1", actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: "2026-09-25T09:30:00Z" }
      ],
      ownerEmail
    },
    {
      id: "IOU-2026-0304",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 101,
      departmentName: "Operations",
      purpose: "Workshop supply advance",
      description: "Advance for purchasing safety and workshop consumables.",
      amount: 310,
      currency: "USD",
      requestDate: "2026-09-21T13:15:00Z",
      requiredDate: "2026-09-29T00:00:00Z",
      status: "Approved",
      currentApprovalLevel: "Final Approval",
      approvalWorkflow: [
        { name: "Requester", state: "complete" },
        { name: "Department Approval", state: "complete" },
        { name: "Finance Approval", state: "complete" },
        { name: "Final Approval", state: "complete" }
      ],
      approvalHistory: [
        { id: "iou-history-0304-1", actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: "2026-09-21T13:15:00Z" },
        { id: "iou-history-0304-2", actorName: "Jordan Lee", actorRole: "Manager", action: "Approved", approvalLevel: "Department Approval", comment: "Necessary supplies for scheduled maintenance.", createdAt: "2026-09-22T08:20:00Z" },
        { id: "iou-history-0304-3", actorName: "Ravi Perera", actorRole: "Approver", action: "Approved", approvalLevel: "Finance Approval", createdAt: "2026-09-22T10:05:00Z" },
        { id: "iou-history-0304-4", actorName: "Amara Patel", actorRole: "Admin", action: "Approved", approvalLevel: "Final Approval", comment: "Approved within the team allocation.", createdAt: "2026-09-22T11:00:00Z" }
      ],
      ownerEmail
    },
    {
      id: "IOU-2026-0286",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 103,
      departmentName: "Agriculture",
      purpose: "Soil sample delivery",
      description: "Advance for local transport of soil samples to the testing facility.",
      amount: 185,
      currency: "USD",
      requestDate: "2026-09-18T08:45:00Z",
      requiredDate: "2026-09-27T00:00:00Z",
      status: "Returned",
      currentApprovalLevel: "Department Approval",
      approvalWorkflow: [
        { name: "Requester", state: "complete" },
        { name: "Department Approval", state: "current" },
        { name: "Finance Approval", state: "upcoming" },
        { name: "Final Approval", state: "upcoming" }
      ],
      approvalHistory: [
        { id: "iou-history-0286-1", actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: "2026-09-18T08:45:00Z" },
        { id: "iou-history-0286-2", actorName: "Leila Hassan", actorRole: "Approver", action: "Returned", approvalLevel: "Department Approval", comment: "Please add the delivery estimate.", createdAt: "2026-09-19T09:10:00Z" }
      ],
      ownerEmail
    },
    {
      id: "IOU-2026-0271",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 103,
      departmentName: "Agriculture",
      purpose: "Field equipment advance",
      description: "Draft request for replacement field equipment.",
      amount: 450,
      currency: "USD",
      requestDate: "2026-09-16T14:00:00Z",
      requiredDate: "2026-10-07T00:00:00Z",
      status: "Draft",
      approvalWorkflow: defaultWorkflow.map((step, index) => __spreadProps(__spreadValues({}, step), { state: index === 0 ? "complete" : "upcoming" })),
      approvalHistory: [],
      ownerEmail
    },
    {
      id: "IOU-2026-0240",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 101,
      departmentName: "Operations",
      purpose: "Regional team travel",
      description: "Advance for a two-day regional team visit.",
      amount: 980,
      currency: "USD",
      requestDate: "2026-09-08T11:30:00Z",
      requiredDate: "2026-09-16T00:00:00Z",
      status: "Rejected",
      currentApprovalLevel: "Finance Approval",
      approvalWorkflow: [
        { name: "Requester", state: "complete" },
        { name: "Department Approval", state: "complete" },
        { name: "Finance Approval", state: "rejected" },
        { name: "Final Approval", state: "upcoming" }
      ],
      approvalHistory: [
        { id: "iou-history-0240-1", actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: "2026-09-08T11:30:00Z" },
        { id: "iou-history-0240-2", actorName: "Daniel Kim", actorRole: "Manager", action: "Approved", approvalLevel: "Department Approval", createdAt: "2026-09-09T08:45:00Z" },
        { id: "iou-history-0240-3", actorName: "Ravi Perera", actorRole: "Approver", action: "Rejected", approvalLevel: "Finance Approval", comment: "Please reconcile the previous advance before requesting another.", createdAt: "2026-09-09T13:10:00Z" }
      ],
      ownerEmail
    }
  ];
  return records.map((iou) => __spreadProps(__spreadValues({}, iou), { assignedApproverEmail: ownerEmail }));
}

// src/app/features/iou/services/iou-preview.store.ts
var _IOUPreviewStore = class _IOUPreviewStore {
  constructor() {
    this.recordsByOwner = /* @__PURE__ */ new Map();
    this.nextId = 4e3;
  }
  getForOwner(ownerEmail, requesterName) {
    const key = this.normalizeEmail(ownerEmail);
    let records = this.recordsByOwner.get(key);
    if (!records) {
      records = createIOUPreviewData(ownerEmail, requesterName);
      this.recordsByOwner.set(key, records);
    }
    return records.map((iou) => this.clone(iou));
  }
  getById(ownerEmail, iouId, requesterName) {
    return this.getForOwner(ownerEmail, requesterName).find((iou) => iou.id === iouId);
  }
  saveDraft(ownerEmail, requesterName, request, iouId) {
    return this.save(ownerEmail, requesterName, request, "Draft", iouId);
  }
  submit(ownerEmail, requesterName, request, iouId) {
    return this.save(ownerEmail, requesterName, request, "Pending", iouId);
  }
  cancel(ownerEmail, iouId) {
    const records = this.recordsByOwner.get(this.normalizeEmail(ownerEmail));
    const record = records?.find((iou) => iou.id === iouId && this.normalizeEmail(iou.ownerEmail) === this.normalizeEmail(ownerEmail));
    if (!record || !["Draft", "Pending", "Returned"].includes(record.status))
      return void 0;
    record.status = "Cancelled";
    return this.clone(record);
  }
  decide(ownerEmail, iouId, payload, actorName) {
    const record = this.recordsByOwner.get(this.normalizeEmail(ownerEmail))?.find((iou) => iou.id === iouId);
    if (!record || !["Pending", "Returned"].includes(record.status))
      return void 0;
    const status = payload.decision === "approve" ? "Approved" : payload.decision === "reject" ? "Rejected" : "Returned";
    record.status = status;
    record.approvalHistory = [...record.approvalHistory, {
      id: `${record.id}-history-${record.approvalHistory.length + 1}`,
      actorName,
      actorRole: "Approver",
      action: payload.decision === "approve" ? "Approved" : payload.decision === "reject" ? "Rejected" : "Returned",
      approvalLevel: record.currentApprovalLevel ?? "Department Approval",
      comment: payload.comment,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    }];
    return this.clone(record);
  }
  save(ownerEmail, requesterName, request, status, iouId) {
    const key = this.normalizeEmail(ownerEmail);
    const records = this.recordsByOwner.get(key) ?? createIOUPreviewData(ownerEmail, requesterName);
    const existing = iouId ? records.find((iou) => iou.id === iouId && this.normalizeEmail(iou.ownerEmail) === key) : void 0;
    if (iouId && (!existing || existing.status !== "Draft"))
      return void 0;
    const requestDate = existing?.requestDate ?? (/* @__PURE__ */ new Date()).toISOString();
    const record = {
      id: existing?.id ?? `IOU-DEV-${this.nextId++}`,
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: request.departmentId,
      departmentName: request.departmentName,
      purpose: request.purpose,
      description: request.description,
      amount: request.amount,
      currency: "USD",
      requestDate,
      requiredDate: request.requiredDate,
      additionalNotes: request.additionalNotes,
      attachment: request.attachment ? {
        id: `${existing?.id ?? "IOU-DEV"}-attachment`,
        fileName: request.attachment.name,
        contentType: request.attachment.type,
        sizeBytes: request.attachment.size
      } : existing?.attachment,
      status,
      currentApprovalLevel: status === "Draft" ? void 0 : "Department Approval",
      approvalWorkflow: this.workflow(status),
      approvalHistory: status === "Pending" ? [{
        id: `${existing?.id ?? "IOU-DEV"}-submitted`,
        actorName: requesterName,
        actorRole: "Employee",
        action: "Submitted",
        approvalLevel: "Requester",
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }] : existing?.approvalHistory ?? [],
      ownerEmail
    };
    const updatedRecords = existing ? records.map((iou) => iou.id === existing.id ? record : iou) : [record, ...records];
    this.recordsByOwner.set(key, updatedRecords);
    return this.clone(record);
  }
  workflow(status) {
    return [
      { name: "Requester", state: "complete" },
      { name: "Department Approval", state: status === "Pending" ? "current" : "upcoming" },
      { name: "Finance Approval", state: "upcoming" },
      { name: "Final Approval", state: "upcoming" }
    ];
  }
  clone(iou) {
    return __spreadProps(__spreadValues({}, iou), { attachment: iou.attachment ? __spreadValues({}, iou.attachment) : void 0, approvalWorkflow: iou.approvalWorkflow.map((step) => __spreadValues({}, step)), approvalHistory: iou.approvalHistory.map((entry) => __spreadValues({}, entry)) });
  }
  normalizeEmail(email) {
    return email.trim().toLocaleLowerCase();
  }
};
_IOUPreviewStore.\u0275fac = function IOUPreviewStore_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IOUPreviewStore)();
};
_IOUPreviewStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IOUPreviewStore, factory: _IOUPreviewStore.\u0275fac, providedIn: "root" });
var IOUPreviewStore = _IOUPreviewStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IOUPreviewStore, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/iou/services/iou.service.ts
var _IOUService = class _IOUService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = "http://localhost:8080/api/ious";
  }
  getMyIOUs(ownerEmail) {
    return this.http.get(`${this.apiUrl}/mine`).pipe(map((ious) => ious.filter((iou) => this.belongsTo(iou, ownerEmail))));
  }
  getMyIOU(iouId, ownerEmail) {
    return this.http.get(`${this.apiUrl}/${encodeURIComponent(iouId)}`).pipe(map((iou) => {
      if (!this.belongsTo(iou, ownerEmail))
        throw new Error("IOU not found.");
      return iou;
    }));
  }
  getIOU(iouId, userEmail, canApprove) {
    return this.http.get(`${this.apiUrl}/${encodeURIComponent(iouId)}`).pipe(map((iou) => {
      const isOwner = this.belongsTo(iou, userEmail);
      const isAssignedApprover = canApprove && iou.assignedApproverEmail?.trim().toLocaleLowerCase() === userEmail.trim().toLocaleLowerCase();
      if (!isOwner && !isAssignedApprover)
        throw new Error("IOU not found.");
      return iou;
    }));
  }
  saveDraft(request) {
    return this.http.post(`${this.apiUrl}/drafts`, this.toFormData(request));
  }
  updateDraft(iouId, request) {
    return this.http.put(`${this.apiUrl}/${encodeURIComponent(iouId)}/draft`, this.toFormData(request));
  }
  submitForApproval(request) {
    return this.http.post(`${this.apiUrl}/submissions`, this.toFormData(request));
  }
  submitDraftForApproval(iouId, request) {
    return this.http.post(`${this.apiUrl}/${encodeURIComponent(iouId)}/submit`, this.toFormData(request));
  }
  cancelIOU(iouId, comment = "") {
    return this.http.post(`${this.apiUrl}/${encodeURIComponent(iouId)}/cancel`, { comment });
  }
  decide(iouId, payload) {
    return this.http.post(`${this.apiUrl}/${encodeURIComponent(iouId)}/decisions`, payload);
  }
  matchesFilters(iou, filters) {
    const queryText = `${iou.id} ${iou.requesterName} ${iou.departmentName} ${iou.purpose} ${iou.description}`.toLocaleLowerCase();
    const requestDate = iou.requestDate.slice(0, 10);
    return (!filters.query || queryText.includes(filters.query.trim().toLocaleLowerCase())) && (filters.status === "all" || iou.status === filters.status) && (!filters.dateFrom || requestDate >= filters.dateFrom) && (!filters.dateTo || requestDate <= filters.dateTo);
  }
  belongsTo(iou, ownerEmail) {
    return iou.ownerEmail.trim().toLocaleLowerCase() === ownerEmail.trim().toLocaleLowerCase();
  }
  toFormData(request) {
    const formData = new FormData();
    formData.append("purpose", request.purpose);
    formData.append("description", request.description);
    formData.append("amount", String(request.amount));
    formData.append("requiredDate", request.requiredDate);
    formData.append("departmentId", String(request.departmentId));
    formData.append("departmentName", request.departmentName);
    formData.append("additionalNotes", request.additionalNotes);
    if (request.attachment)
      formData.append("attachment", request.attachment, request.attachment.name);
    return formData;
  }
};
_IOUService.\u0275fac = function IOUService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _IOUService)();
};
_IOUService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IOUService, factory: _IOUService.\u0275fac, providedIn: "root" });
var IOUService = _IOUService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(IOUService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  IOUPreviewStore,
  IOUService
};
//# sourceMappingURL=chunk-6H7M7NAD.js.map
