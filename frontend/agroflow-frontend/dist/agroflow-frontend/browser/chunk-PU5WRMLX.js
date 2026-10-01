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

// src/app/features/procurement/data/procurement-preview.data.ts
function createProcurementPreviewData(ownerEmail, requesterName) {
  const standardWorkflow = [
    { name: "Requester", state: "complete" },
    { name: "Department Approval", state: "current" },
    { name: "Finance / Budget Approval", state: "upcoming" },
    { name: "Procurement Approval", state: "upcoming" },
    { name: "Final Approval", state: "upcoming" },
    { name: "Completed", state: "upcoming" }
  ];
  return [
    {
      id: "PR-2026-0108",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 103,
      departmentName: "Agriculture",
      requestTitle: "Field soil testing kits",
      category: "Equipment",
      item: { description: "Portable soil testing kit, 8-in-1 analyzer", quantity: 4, estimatedUnitPrice: 385, estimatedTotalAmount: 1540 },
      requestDate: "2026-09-27T09:20:00Z",
      requiredDate: "2026-10-18",
      justification: "Replace worn test kits before the new field sampling cycle.",
      preferredSupplier: "AgriLab Supplies",
      status: "Pending",
      currentApprovalLevel: "Department Approval",
      approvalWorkflow: standardWorkflow.map((step) => __spreadValues({}, step)),
      approvalHistory: [{ id: "pr-0108-h1", actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: "2026-09-27T09:20:00Z" }],
      ownerEmail,
      assignedApproverEmail: ownerEmail
    },
    {
      id: "PR-2026-0099",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 101,
      departmentName: "Operations",
      requestTitle: "Workshop safety equipment",
      category: "Supplies",
      item: { description: "Protective gloves and safety glasses", quantity: 18, estimatedUnitPrice: 42, estimatedTotalAmount: 756 },
      requestDate: "2026-09-23T11:15:00Z",
      requiredDate: "2026-10-04",
      justification: "Replenish safety equipment for the maintenance workshop.",
      preferredSupplier: "WorkSafe Industrial",
      status: "Approved",
      currentApprovalLevel: "Final Approval",
      approvalWorkflow: standardWorkflow.map((step) => __spreadProps(__spreadValues({}, step), { state: "complete" })),
      approvalHistory: [
        { id: "pr-0099-h1", actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: "2026-09-23T11:15:00Z" },
        { id: "pr-0099-h2", actorName: "Daniel Kim", actorRole: "Manager", action: "Approved", approvalLevel: "Department Approval", comment: "Within the approved safety allocation.", createdAt: "2026-09-24T08:20:00Z" },
        { id: "pr-0099-h3", actorName: "Amara Patel", actorRole: "Admin", action: "Approved", approvalLevel: "Final Approval", createdAt: "2026-09-24T13:05:00Z" }
      ],
      ownerEmail
    },
    {
      id: "PR-2026-0091",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 103,
      departmentName: "Agriculture",
      requestTitle: "Greenhouse irrigation valves",
      category: "Agricultural Inputs",
      item: { description: "Pressure regulating irrigation valve", quantity: 6, estimatedUnitPrice: 118, estimatedTotalAmount: 708 },
      requestDate: "2026-09-20T10:40:00Z",
      requiredDate: "2026-10-09",
      justification: "Replace leaking valves affecting greenhouse irrigation.",
      status: "Draft",
      approvalWorkflow: standardWorkflow.map((step, index) => __spreadProps(__spreadValues({}, step), { state: index === 0 ? "complete" : "upcoming" })),
      approvalHistory: [],
      ownerEmail
    },
    {
      id: "PR-2026-0087",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 106,
      departmentName: "Procurement",
      requestTitle: "Supplier audit service",
      category: "Services",
      item: { description: "Annual supplier compliance audit", quantity: 1, estimatedUnitPrice: 2200, estimatedTotalAmount: 2200 },
      requestDate: "2026-09-17T14:00:00Z",
      requiredDate: "2026-10-21",
      justification: "Complete required annual supplier risk review.",
      status: "Returned",
      currentApprovalLevel: "Finance / Budget Approval",
      approvalWorkflow: standardWorkflow.map((step, index) => __spreadProps(__spreadValues({}, step), { state: index === 0 ? "complete" : index === 1 ? "complete" : index === 2 ? "current" : "upcoming" })),
      approvalHistory: [{ id: "pr-0087-h1", actorName: "Ravi Perera", actorRole: "Approver", action: "Returned", approvalLevel: "Finance / Budget Approval", comment: "Please attach the vendor scope of work.", createdAt: "2026-09-18T09:15:00Z" }],
      ownerEmail
    },
    {
      id: "PR-2026-0080",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 101,
      departmentName: "Operations",
      requestTitle: "Vehicle maintenance parts",
      category: "Equipment",
      item: { description: "Replacement filters and service components", quantity: 3, estimatedUnitPrice: 210, estimatedTotalAmount: 630 },
      requestDate: "2026-09-12T12:20:00Z",
      requiredDate: "2026-09-20",
      justification: "Parts are needed for scheduled fleet servicing.",
      status: "Completed",
      currentApprovalLevel: "Completed",
      approvalWorkflow: standardWorkflow.map((step) => __spreadProps(__spreadValues({}, step), { state: "complete" })),
      approvalHistory: [],
      ownerEmail
    }
  ];
}

// src/app/features/procurement/services/procurement-preview.store.ts
var _ProcurementPreviewStore = class _ProcurementPreviewStore {
  constructor() {
    this.recordsByOwner = /* @__PURE__ */ new Map();
    this.nextId = 2e3;
  }
  getForOwner(ownerEmail, requesterName) {
    const key = this.normalizeEmail(ownerEmail);
    let records = this.recordsByOwner.get(key);
    if (!records) {
      records = createProcurementPreviewData(ownerEmail, requesterName);
      this.recordsByOwner.set(key, records);
    }
    return records.filter((record) => this.normalizeEmail(record.ownerEmail) === key).map((record) => this.clone(record));
  }
  getById(ownerEmail, requestId, requesterName) {
    return this.getForOwner(ownerEmail, requesterName).find((request) => request.id === requestId);
  }
  saveDraft(ownerEmail, requesterName, payload, requestId) {
    return this.save(ownerEmail, requesterName, payload, "Draft", requestId);
  }
  submit(ownerEmail, requesterName, payload, requestId) {
    return this.save(ownerEmail, requesterName, payload, "Pending", requestId);
  }
  cancel(ownerEmail, requestId) {
    const request = this.recordsByOwner.get(this.normalizeEmail(ownerEmail))?.find((record) => record.id === requestId);
    if (!request || !["Draft", "Pending", "Returned"].includes(request.status))
      return void 0;
    request.status = "Cancelled";
    return this.clone(request);
  }
  decide(ownerEmail, requestId, payload, actorName) {
    const request = this.recordsByOwner.get(this.normalizeEmail(ownerEmail))?.find((record) => record.id === requestId);
    if (!request || !["Pending", "Returned"].includes(request.status))
      return void 0;
    request.status = payload.decision === "approve" ? "Approved" : payload.decision === "reject" ? "Rejected" : "Returned";
    request.approvalHistory = [...request.approvalHistory, {
      id: `${request.id}-history-${request.approvalHistory.length + 1}`,
      actorName,
      actorRole: "Approver",
      action: payload.decision === "approve" ? "Approved" : payload.decision === "reject" ? "Rejected" : "Returned",
      approvalLevel: request.currentApprovalLevel ?? "Department Approval",
      comment: payload.comment,
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    }];
    return this.clone(request);
  }
  save(ownerEmail, requesterName, payload, status, requestId) {
    const key = this.normalizeEmail(ownerEmail);
    const records = this.recordsByOwner.get(key) ?? createProcurementPreviewData(ownerEmail, requesterName);
    const existing = requestId ? records.find((record) => record.id === requestId && this.normalizeEmail(record.ownerEmail) === key) : void 0;
    if (requestId && (!existing || existing.status !== "Draft"))
      return void 0;
    const id = existing?.id ?? `PR-DEV-${this.nextId++}`;
    const request = {
      id,
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: payload.departmentId,
      departmentName: payload.departmentName,
      requestTitle: payload.requestTitle,
      category: payload.category,
      item: __spreadValues({}, payload.item),
      requestDate: existing?.requestDate ?? (/* @__PURE__ */ new Date()).toISOString(),
      requiredDate: payload.requiredDate,
      justification: payload.justification,
      preferredSupplier: payload.preferredSupplier,
      attachment: payload.attachment ? { id: `${id}-attachment`, fileName: payload.attachment.name, contentType: payload.attachment.type, sizeBytes: payload.attachment.size } : existing?.attachment,
      additionalNotes: payload.additionalNotes,
      status,
      currentApprovalLevel: status === "Pending" ? "Department Approval" : void 0,
      approvalWorkflow: this.createWorkflow(status),
      approvalHistory: status === "Pending" ? [{ id: `${id}-submitted`, actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: (/* @__PURE__ */ new Date()).toISOString() }] : existing?.approvalHistory ?? [],
      ownerEmail,
      assignedApproverEmail: ownerEmail
    };
    this.recordsByOwner.set(key, existing ? records.map((record) => record.id === id ? request : record) : [request, ...records]);
    return this.clone(request);
  }
  createWorkflow(status) {
    return [
      { name: "Requester", state: "complete" },
      { name: "Department Approval", state: status === "Pending" ? "current" : "upcoming" },
      { name: "Finance / Budget Approval", state: "upcoming" },
      { name: "Procurement Approval", state: "upcoming" },
      { name: "Final Approval", state: "upcoming" },
      { name: "Completed", state: "upcoming" }
    ];
  }
  clone(request) {
    return __spreadProps(__spreadValues({}, request), { item: __spreadValues({}, request.item), attachment: request.attachment ? __spreadValues({}, request.attachment) : void 0, approvalWorkflow: request.approvalWorkflow.map((step) => __spreadValues({}, step)), approvalHistory: request.approvalHistory.map((entry) => __spreadValues({}, entry)) });
  }
  normalizeEmail(email) {
    return email.trim().toLocaleLowerCase();
  }
};
_ProcurementPreviewStore.\u0275fac = function ProcurementPreviewStore_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProcurementPreviewStore)();
};
_ProcurementPreviewStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProcurementPreviewStore, factory: _ProcurementPreviewStore.\u0275fac, providedIn: "root" });
var ProcurementPreviewStore = _ProcurementPreviewStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProcurementPreviewStore, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/procurement/services/procurement.service.ts
var _ProcurementService = class _ProcurementService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = "http://localhost:8080/api/procurement-requests";
  }
  getMyRequests(ownerEmail) {
    return this.http.get(`${this.apiUrl}/mine`).pipe(map((requests) => requests.filter((request) => this.belongsTo(request, ownerEmail))));
  }
  getRequest(requestId, userEmail, canApprove) {
    return this.http.get(`${this.apiUrl}/${encodeURIComponent(requestId)}`).pipe(map((request) => {
      if (!this.belongsTo(request, userEmail) && !(canApprove && this.isAssignedTo(request, userEmail)))
        throw new Error("Request not found.");
      return request;
    }));
  }
  saveDraft(payload) {
    return this.http.post(`${this.apiUrl}/drafts`, this.toFormData(payload));
  }
  updateDraft(requestId, payload) {
    return this.http.put(`${this.apiUrl}/${encodeURIComponent(requestId)}/draft`, this.toFormData(payload));
  }
  submit(payload) {
    return this.http.post(`${this.apiUrl}/submissions`, this.toFormData(payload));
  }
  submitDraft(requestId, payload) {
    return this.http.post(`${this.apiUrl}/${encodeURIComponent(requestId)}/submit`, this.toFormData(payload));
  }
  cancel(requestId) {
    return this.http.post(`${this.apiUrl}/${encodeURIComponent(requestId)}/cancel`, {});
  }
  decide(requestId, payload) {
    return this.http.post(`${this.apiUrl}/${encodeURIComponent(requestId)}/decisions`, payload);
  }
  calculateEstimatedTotal(quantity, estimatedUnitPrice) {
    return Math.round(quantity * estimatedUnitPrice * 100) / 100;
  }
  matchesFilters(request, filters) {
    const query = `${request.id} ${request.requesterName} ${request.departmentName} ${request.requestTitle} ${request.item.description}`.toLocaleLowerCase();
    const requestDate = request.requestDate.slice(0, 10);
    return (!filters.query || query.includes(filters.query.trim().toLocaleLowerCase())) && (filters.status === "all" || request.status === filters.status) && (filters.department === "all" || request.departmentName === filters.department) && (!filters.dateFrom || requestDate >= filters.dateFrom) && (!filters.dateTo || requestDate <= filters.dateTo);
  }
  belongsTo(request, email) {
    return request.ownerEmail.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase();
  }
  isAssignedTo(request, email) {
    return request.assignedApproverEmail?.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase();
  }
  toFormData(payload) {
    const formData = new FormData();
    formData.append("requestTitle", payload.requestTitle);
    formData.append("departmentId", String(payload.departmentId));
    formData.append("departmentName", payload.departmentName);
    formData.append("category", payload.category);
    formData.append("item", JSON.stringify(payload.item));
    formData.append("requiredDate", payload.requiredDate);
    formData.append("justification", payload.justification);
    formData.append("preferredSupplier", payload.preferredSupplier);
    formData.append("additionalNotes", payload.additionalNotes);
    if (payload.attachment)
      formData.append("attachment", payload.attachment, payload.attachment.name);
    return formData;
  }
};
_ProcurementService.\u0275fac = function ProcurementService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ProcurementService)();
};
_ProcurementService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProcurementService, factory: _ProcurementService.\u0275fac, providedIn: "root" });
var ProcurementService = _ProcurementService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProcurementService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  ProcurementPreviewStore,
  ProcurementService
};
//# sourceMappingURL=chunk-PU5WRMLX.js.map
