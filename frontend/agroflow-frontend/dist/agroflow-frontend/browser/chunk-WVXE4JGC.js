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
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/features/requests/data/request-preview.data.ts
function createRequestPreviewData(ownerEmail) {
  return [
    {
      id: "REQ-2026-0418",
      type: "IOU",
      title: "Regional field visit",
      description: "Travel advance for the northern district field visit.",
      departmentName: "Agriculture",
      amount: 640,
      currency: "USD",
      status: "Pending",
      submittedAt: "2026-09-25T09:30:00Z",
      ownerEmail
    },
    {
      id: "REQ-2026-0407",
      type: "Petty Cash",
      title: "Workshop materials",
      description: "Materials for the quarterly equipment safety workshop.",
      departmentName: "Operations",
      amount: 285,
      currency: "USD",
      status: "Approved",
      submittedAt: "2026-09-21T13:15:00Z",
      ownerEmail
    },
    {
      id: "REQ-2026-0395",
      type: "Procurement",
      title: "Soil testing supplies",
      description: "Replacement field kits for regional soil sampling.",
      departmentName: "Agriculture",
      amount: 1840,
      currency: "USD",
      status: "Draft",
      submittedAt: "2026-09-19T08:00:00Z",
      ownerEmail
    },
    {
      id: "REQ-2026-0378",
      type: "IOU",
      title: "Supplier inspection travel",
      description: "Travel costs for the annual supplier inspection.",
      departmentName: "Procurement",
      amount: 520,
      currency: "USD",
      status: "Rejected",
      submittedAt: "2026-09-13T10:45:00Z",
      ownerEmail
    },
    {
      id: "REQ-2026-0352",
      type: "Procurement",
      title: "Office printer replacement",
      description: "Replacement printer for the regional office.",
      departmentName: "Operations",
      amount: 960,
      currency: "USD",
      status: "Cancelled",
      submittedAt: "2026-09-05T15:20:00Z",
      ownerEmail
    }
  ];
}

// src/app/features/requests/services/request-preview.store.ts
var _RequestPreviewStore = class _RequestPreviewStore {
  constructor() {
    this.recordsByOwner = /* @__PURE__ */ new Map();
  }
  getForOwner(ownerEmail) {
    const ownerKey = this.normalizeEmail(ownerEmail);
    let records = this.recordsByOwner.get(ownerKey);
    if (!records) {
      records = createRequestPreviewData(ownerEmail);
      this.recordsByOwner.set(ownerKey, records);
    }
    return records.filter((request) => this.normalizeEmail(request.ownerEmail) === ownerKey).map((request) => __spreadValues({}, request));
  }
  getById(ownerEmail, requestId) {
    return this.getForOwner(ownerEmail).find((request) => request.id === requestId);
  }
  cancel(ownerEmail, requestId) {
    const ownerKey = this.normalizeEmail(ownerEmail);
    const records = this.recordsByOwner.get(ownerKey) ?? createRequestPreviewData(ownerEmail);
    const request = records.find((record) => record.id === requestId && this.normalizeEmail(record.ownerEmail) === ownerKey);
    if (!request || !["Draft", "Pending"].includes(request.status))
      return void 0;
    request.status = "Cancelled";
    this.recordsByOwner.set(ownerKey, records);
    return __spreadValues({}, request);
  }
  normalizeEmail(email) {
    return email.trim().toLocaleLowerCase();
  }
};
_RequestPreviewStore.\u0275fac = function RequestPreviewStore_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RequestPreviewStore)();
};
_RequestPreviewStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RequestPreviewStore, factory: _RequestPreviewStore.\u0275fac, providedIn: "root" });
var RequestPreviewStore = _RequestPreviewStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestPreviewStore, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/requests/services/request.service.ts
var _RequestService = class _RequestService {
  constructor() {
    this.http = inject(HttpClient);
    this.apiUrl = "http://localhost:8080/api/requests";
  }
  getMyRequests(ownerEmail) {
    return this.http.get(`${this.apiUrl}/mine`).pipe(map((requests) => requests.filter((request) => this.belongsTo(request, ownerEmail))));
  }
  getMyRequest(requestId, ownerEmail) {
    return this.http.get(`${this.apiUrl}/${encodeURIComponent(requestId)}`).pipe(map((request) => {
      if (!this.belongsTo(request, ownerEmail))
        throw new Error("Request not found.");
      return request;
    }));
  }
  cancelRequest(requestId, ownerEmail) {
    return this.http.post(`${this.apiUrl}/${encodeURIComponent(requestId)}/cancel`, {}).pipe(map((request) => {
      if (!this.belongsTo(request, ownerEmail))
        throw new Error("Request not found.");
      return request;
    }));
  }
  matchesFilters(request, filters) {
    const searchText = `${request.id} ${request.type} ${request.title} ${request.description} ${request.departmentName}`.toLocaleLowerCase();
    if (filters.query && !searchText.includes(filters.query.trim().toLocaleLowerCase()))
      return false;
    if (filters.type !== "all" && request.type !== filters.type)
      return false;
    if (filters.status !== "all" && request.status !== filters.status)
      return false;
    const submittedDate = request.submittedAt.slice(0, 10);
    if (filters.dateFrom && submittedDate < filters.dateFrom)
      return false;
    if (filters.dateTo && submittedDate > filters.dateTo)
      return false;
    return true;
  }
  belongsTo(request, ownerEmail) {
    return request.ownerEmail.trim().toLocaleLowerCase() === ownerEmail.trim().toLocaleLowerCase();
  }
};
_RequestService.\u0275fac = function RequestService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RequestService)();
};
_RequestService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RequestService, factory: _RequestService.\u0275fac, providedIn: "root" });
var RequestService = _RequestService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RequestService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  RequestPreviewStore,
  RequestService
};
//# sourceMappingURL=chunk-WVXE4JGC.js.map
