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

// src/app/features/petty-cash/data/petty-cash-preview.data.ts
var workflow = [
  { name: "Requester", state: "complete" },
  { name: "Department Approval", state: "current" },
  { name: "Finance Approval", state: "upcoming" },
  { name: "Final Approval", state: "upcoming" }
];
function createPettyCashPreviewData(ownerEmail, requesterName) {
  const records = [
    {
      id: "PC-2026-0186",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 101,
      departmentName: "Operations",
      purpose: "Workshop safety supplies",
      description: "Purchase protective supplies for the equipment workshop.",
      amount: 280,
      currency: "USD",
      requestDate: "2026-09-28T09:15:00Z",
      expenseDate: "2026-09-27",
      expenseCategory: "Supplies",
      status: "Pending",
      currentApprovalLevel: "Department Approval",
      approvalWorkflow: workflow.map((step) => __spreadValues({}, step)),
      approvalHistory: [{ id: "pc-0186-history-1", actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: "2026-09-28T09:15:00Z" }],
      ownerEmail,
      assignedApproverEmail: ownerEmail
    },
    {
      id: "PC-2026-0172",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 103,
      departmentName: "Agriculture",
      purpose: "Field sample transport",
      description: "Local transport of collected samples to the regional laboratory.",
      amount: 165,
      currency: "USD",
      requestDate: "2026-09-24T11:10:00Z",
      expenseDate: "2026-09-23",
      expenseCategory: "Transport",
      status: "Approved",
      currentApprovalLevel: "Final Approval",
      approvalWorkflow: workflow.map((step) => __spreadProps(__spreadValues({}, step), { state: "complete" })),
      approvalHistory: [
        { id: "pc-0172-history-1", actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: "2026-09-24T11:10:00Z" },
        { id: "pc-0172-history-2", actorName: "Daniel Kim", actorRole: "Manager", action: "Approved", approvalLevel: "Department Approval", comment: "Within the field operations budget.", createdAt: "2026-09-25T08:20:00Z" },
        { id: "pc-0172-history-3", actorName: "Ravi Perera", actorRole: "Approver", action: "Approved", approvalLevel: "Finance Approval", createdAt: "2026-09-25T10:40:00Z" },
        { id: "pc-0172-history-4", actorName: "Amara Patel", actorRole: "Admin", action: "Approved", approvalLevel: "Final Approval", createdAt: "2026-09-25T13:05:00Z" }
      ],
      ownerEmail
    },
    {
      id: "PC-2026-0161",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 101,
      departmentName: "Operations",
      purpose: "Equipment repair parts",
      description: "Draft purchase of replacement service parts.",
      amount: 340,
      currency: "USD",
      requestDate: "2026-09-21T14:30:00Z",
      expenseDate: "2026-09-21",
      expenseCategory: "Maintenance",
      status: "Draft",
      approvalWorkflow: workflow.map((step, index) => __spreadProps(__spreadValues({}, step), { state: index === 0 ? "complete" : "upcoming" })),
      approvalHistory: [],
      ownerEmail
    },
    {
      id: "PC-2026-0140",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 103,
      departmentName: "Agriculture",
      purpose: "Regional field meals",
      description: "Meal allowance for the regional field survey team.",
      amount: 210,
      currency: "USD",
      requestDate: "2026-09-16T10:00:00Z",
      expenseDate: "2026-09-15",
      expenseCategory: "Meals",
      status: "Returned",
      currentApprovalLevel: "Department Approval",
      approvalWorkflow: workflow.map((step) => __spreadValues({}, step)),
      approvalHistory: [
        { id: "pc-0140-history-1", actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: "2026-09-16T10:00:00Z" },
        { id: "pc-0140-history-2", actorName: "Leila Hassan", actorRole: "Approver", action: "Returned", approvalLevel: "Department Approval", comment: "Please attach the itemized receipt.", createdAt: "2026-09-17T09:30:00Z" }
      ],
      ownerEmail
    },
    {
      id: "PC-2026-0122",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 101,
      departmentName: "Operations",
      purpose: "Local service travel",
      description: "Local mileage and service transport costs.",
      amount: 95,
      currency: "USD",
      requestDate: "2026-09-10T08:20:00Z",
      expenseDate: "2026-09-09",
      expenseCategory: "Travel",
      status: "Completed",
      approvalWorkflow: workflow.map((step) => __spreadProps(__spreadValues({}, step), { state: "complete" })),
      approvalHistory: [],
      ownerEmail
    },
    {
      id: "PC-2026-0108",
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: 103,
      departmentName: "Agriculture",
      purpose: "Survey stationery",
      description: "Stationery request for field survey records.",
      amount: 48,
      currency: "USD",
      requestDate: "2026-09-04T12:00:00Z",
      expenseDate: "2026-09-04",
      expenseCategory: "Supplies",
      status: "Rejected",
      approvalWorkflow: workflow.map((step, index) => __spreadProps(__spreadValues({}, step), { state: index === 0 ? "complete" : index === 1 ? "rejected" : "upcoming" })),
      approvalHistory: [{ id: "pc-0108-history-1", actorName: "Daniel Kim", actorRole: "Manager", action: "Rejected", approvalLevel: "Department Approval", comment: "Please use the existing office supply allocation.", createdAt: "2026-09-05T09:00:00Z" }],
      ownerEmail
    }
  ];
  return records.map((record) => __spreadProps(__spreadValues({}, record), { assignedApproverEmail: record.assignedApproverEmail ?? ownerEmail }));
}

// src/app/features/petty-cash/services/petty-cash-preview.store.ts
var _PettyCashPreviewStore = class _PettyCashPreviewStore {
  constructor() {
    this.recordsByOwner = /* @__PURE__ */ new Map();
    this.nextId = 5e3;
  }
  getForOwner(ownerEmail, requesterName) {
    const key = this.normalizeEmail(ownerEmail);
    let records = this.recordsByOwner.get(key);
    if (!records) {
      records = createPettyCashPreviewData(ownerEmail, requesterName);
      this.recordsByOwner.set(key, records);
    }
    return records.filter((request) => this.normalizeEmail(request.ownerEmail) === key).map((request) => this.clone(request));
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
    const record = this.recordsByOwner.get(this.normalizeEmail(ownerEmail))?.find((request) => request.id === requestId);
    if (!record || !["Draft", "Pending", "Returned"].includes(record.status))
      return void 0;
    record.status = "Cancelled";
    return this.clone(record);
  }
  decide(ownerEmail, requestId, payload, actorName) {
    const record = this.recordsByOwner.get(this.normalizeEmail(ownerEmail))?.find((request) => request.id === requestId);
    if (!record || !["Pending", "Returned"].includes(record.status))
      return void 0;
    record.status = payload.decision === "approve" ? "Approved" : payload.decision === "reject" ? "Rejected" : "Returned";
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
  save(ownerEmail, requesterName, payload, status, requestId) {
    const key = this.normalizeEmail(ownerEmail);
    const records = this.recordsByOwner.get(key) ?? createPettyCashPreviewData(ownerEmail, requesterName);
    const existing = requestId ? records.find((request2) => request2.id === requestId && this.normalizeEmail(request2.ownerEmail) === key) : void 0;
    if (requestId && (!existing || existing.status !== "Draft"))
      return void 0;
    const id = existing?.id ?? `PC-DEV-${this.nextId++}`;
    const request = {
      id,
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: payload.departmentId,
      departmentName: payload.departmentName,
      purpose: payload.purpose,
      description: payload.description,
      amount: payload.amount,
      currency: "USD",
      requestDate: existing?.requestDate ?? (/* @__PURE__ */ new Date()).toISOString(),
      expenseDate: payload.expenseDate,
      expenseCategory: payload.expenseCategory,
      additionalNotes: payload.additionalNotes,
      attachment: payload.attachment ? { id: `${id}-attachment`, fileName: payload.attachment.name, contentType: payload.attachment.type, sizeBytes: payload.attachment.size } : existing?.attachment,
      status,
      currentApprovalLevel: status === "Pending" ? "Department Approval" : void 0,
      approvalWorkflow: this.workflow(status),
      approvalHistory: status === "Pending" ? [{ id: `${id}-submitted`, actorName: requesterName, actorRole: "Employee", action: "Submitted", approvalLevel: "Requester", createdAt: (/* @__PURE__ */ new Date()).toISOString() }] : existing?.approvalHistory ?? [],
      ownerEmail,
      assignedApproverEmail: ownerEmail
    };
    this.recordsByOwner.set(key, existing ? records.map((item) => item.id === id ? request : item) : [request, ...records]);
    return this.clone(request);
  }
  workflow(status) {
    return [
      { name: "Requester", state: "complete" },
      { name: "Department Approval", state: status === "Pending" ? "current" : "upcoming" },
      { name: "Finance Approval", state: "upcoming" },
      { name: "Final Approval", state: "upcoming" }
    ];
  }
  clone(request) {
    return __spreadProps(__spreadValues({}, request), { attachment: request.attachment ? __spreadValues({}, request.attachment) : void 0, approvalWorkflow: request.approvalWorkflow.map((step) => __spreadValues({}, step)), approvalHistory: request.approvalHistory.map((entry) => __spreadValues({}, entry)) });
  }
  normalizeEmail(email) {
    return email.trim().toLocaleLowerCase();
  }
};
_PettyCashPreviewStore.\u0275fac = function PettyCashPreviewStore_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PettyCashPreviewStore)();
};
_PettyCashPreviewStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PettyCashPreviewStore, factory: _PettyCashPreviewStore.\u0275fac, providedIn: "root" });
var PettyCashPreviewStore = _PettyCashPreviewStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PettyCashPreviewStore, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/petty-cash/services/petty-cash.service.ts
var _PettyCashService = class _PettyCashService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = "http://localhost:8080/api/petty-cash-requests";
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
  cancel(requestId, comment = "") {
    return this.http.post(`${this.apiUrl}/${encodeURIComponent(requestId)}/cancel`, { comment });
  }
  decide(requestId, payload) {
    return this.http.post(`${this.apiUrl}/${encodeURIComponent(requestId)}/decisions`, payload);
  }
  matchesFilters(request, filters) {
    const query = `${request.id} ${request.requesterName} ${request.departmentName} ${request.purpose} ${request.description}`.toLocaleLowerCase();
    const requestDate = request.requestDate.slice(0, 10);
    return (!filters.query || query.includes(filters.query.trim().toLocaleLowerCase())) && (filters.status === "all" || request.status === filters.status) && (!filters.dateFrom || requestDate >= filters.dateFrom) && (!filters.dateTo || requestDate <= filters.dateTo);
  }
  belongsTo(request, email) {
    return request.ownerEmail.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase();
  }
  isAssignedTo(request, email) {
    return request.assignedApproverEmail?.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase();
  }
  toFormData(payload) {
    const body = new FormData();
    body.append("purpose", payload.purpose);
    body.append("description", payload.description);
    body.append("amount", String(payload.amount));
    body.append("expenseDate", payload.expenseDate);
    body.append("departmentId", String(payload.departmentId));
    body.append("departmentName", payload.departmentName);
    body.append("expenseCategory", payload.expenseCategory);
    body.append("additionalNotes", payload.additionalNotes);
    if (payload.attachment)
      body.append("attachment", payload.attachment, payload.attachment.name);
    return body;
  }
};
_PettyCashService.\u0275fac = function PettyCashService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _PettyCashService)();
};
_PettyCashService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PettyCashService, factory: _PettyCashService.\u0275fac, providedIn: "root" });
var PettyCashService = _PettyCashService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PettyCashService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  PettyCashPreviewStore,
  PettyCashService
};
//# sourceMappingURL=chunk-AXXMCM3X.js.map
