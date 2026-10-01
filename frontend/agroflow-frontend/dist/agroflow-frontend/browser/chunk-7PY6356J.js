import "./chunk-GOMI4DH3.js";

// src/app/features/procurement/procurement.routes.ts
var page = () => import("./chunk-P56LYMHT.js").then((module) => module.PlaceholderPageComponent);
var PROCUREMENT_ROUTES = [
  { path: "", pathMatch: "full", loadComponent: () => import("./chunk-FAYJO3NJ.js").then((module) => module.ProcurementListComponent), data: { title: "Procurement Management", breadcrumb: "Procurement" } },
  { path: "create", loadComponent: () => import("./chunk-7ZHOFRSR.js").then((module) => module.ProcurementFormComponent), data: { title: "Create Procurement Request", breadcrumb: "Create Procurement Request" } },
  { path: "purchase-requests", loadComponent: page, data: { title: "Purchase Requests", breadcrumb: "Purchase Requests" } },
  { path: "quotations", loadComponent: page, data: { title: "Quotations", breadcrumb: "Quotations" } },
  { path: "suppliers", loadComponent: page, data: { title: "Suppliers", breadcrumb: "Suppliers" } },
  { path: "purchase-orders", loadComponent: page, data: { title: "Purchase Orders", breadcrumb: "Purchase Orders" } },
  { path: "goods-received", loadComponent: page, data: { title: "Goods Received", breadcrumb: "Goods Received" } },
  { path: "invoices", loadComponent: page, data: { title: "Invoices", breadcrumb: "Invoices" } },
  { path: ":requestId", loadComponent: () => import("./chunk-LTECCXPI.js").then((module) => module.ProcurementDetailsComponent), data: { title: "Procurement Details", breadcrumb: "Procurement Details" } }
];
export {
  PROCUREMENT_ROUTES
};
//# sourceMappingURL=chunk-7PY6356J.js.map
