import {
  HttpClient
} from "./chunk-FWRROCAB.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-N56IC4AV.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// src/app/features/departments/models/department-preview.data.ts
var DEPARTMENT_PREVIEW_DATA = [
  { id: 101, code: "OPS", name: "Operations", description: "Field operations and facilities", active: true, createdAt: "2025-11-18T00:00:00Z" },
  { id: 102, code: "FIN", name: "Finance", description: "Financial planning and controls", active: true, createdAt: "2025-12-04T00:00:00Z" },
  { id: 103, code: "AGR", name: "Agriculture", description: "Crop programs and agronomy", active: true, createdAt: "2026-01-12T00:00:00Z" },
  { id: 104, code: "LOG", name: "Logistics", description: "Transport, warehousing, and distribution", active: false, createdAt: "2026-02-20T00:00:00Z" },
  { id: 105, code: "HR", name: "People and Culture", description: "People operations and workplace services", active: true, createdAt: "2026-03-08T00:00:00Z" },
  { id: 106, code: "PROC", name: "Procurement", description: "Sourcing and supplier management", active: true, createdAt: "2026-04-15T00:00:00Z" },
  { id: 107, code: "IT", name: "Technology", description: "Business systems and IT support", active: false, createdAt: "2026-05-03T00:00:00Z" }
];

// src/app/features/departments/models/services/department-preview.store.ts
var _DepartmentPreviewStore = class _DepartmentPreviewStore {
  constructor() {
    this.departments = DEPARTMENT_PREVIEW_DATA.map((department) => __spreadValues({}, department));
    this.nextId = Math.max(...this.departments.map((department) => department.id)) + 1;
  }
  getAll() {
    return this.departments.map((department) => __spreadValues({}, department));
  }
  create(payload) {
    const id = this.nextId++;
    const department = __spreadProps(__spreadValues({
      id,
      code: `DEP-${id}`
    }, payload), {
      createdAt: (/* @__PURE__ */ new Date()).toISOString()
    });
    this.departments = [department, ...this.departments];
    return __spreadValues({}, department);
  }
  update(id, payload) {
    const existing = this.departments.find((department) => department.id === id);
    if (!existing)
      return void 0;
    const updated = __spreadValues(__spreadValues({}, existing), payload);
    this.departments = this.departments.map((department) => department.id === id ? updated : department);
    return __spreadValues({}, updated);
  }
  delete(id) {
    const departmentCount = this.departments.length;
    this.departments = this.departments.filter((department) => department.id !== id);
    return this.departments.length < departmentCount;
  }
};
_DepartmentPreviewStore.\u0275fac = function DepartmentPreviewStore_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepartmentPreviewStore)();
};
_DepartmentPreviewStore.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartmentPreviewStore, factory: _DepartmentPreviewStore.\u0275fac, providedIn: "root" });
var DepartmentPreviewStore = _DepartmentPreviewStore;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentPreviewStore, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/departments/models/services/department.service.ts
var _DepartmentService = class _DepartmentService {
  constructor(http) {
    this.http = http;
    this.apiUrl = "http://localhost:8080/api/departments";
  }
  getDepartments() {
    return this.http.get(this.apiUrl);
  }
  createDepartment(department) {
    return this.http.post(this.apiUrl, department);
  }
  updateDepartment(id, department) {
    return this.http.put(`${this.apiUrl}/${id}`, department);
  }
  deleteDepartment(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
};
_DepartmentService.\u0275fac = function DepartmentService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DepartmentService)(\u0275\u0275inject(HttpClient));
};
_DepartmentService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DepartmentService, factory: _DepartmentService.\u0275fac, providedIn: "root" });
var DepartmentService = _DepartmentService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DepartmentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  DepartmentPreviewStore,
  DepartmentService
};
//# sourceMappingURL=chunk-KG37TGCR.js.map
