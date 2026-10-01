import "./chunk-GOMI4DH3.js";

// src/app/features/finance/finance.routes.ts
var page = () => import("./chunk-P56LYMHT.js").then((module) => module.PlaceholderPageComponent);
var IOU_ROUTES = [
  { path: "", pathMatch: "full", loadComponent: () => import("./chunk-BIAQOVGW.js").then((module) => module.IOUListComponent), data: { title: "IOU Management", breadcrumb: "IOU Management" } },
  { path: "requests", pathMatch: "full", redirectTo: "" },
  { path: "create", loadComponent: () => import("./chunk-ZXYOLRLF.js").then((module) => module.IOUFormComponent), data: { title: "Create IOU", breadcrumb: "Create IOU" } },
  { path: "settlement", loadComponent: page, data: { title: "IOU Settlement", breadcrumb: "IOU Settlement" } },
  { path: ":iouId", loadComponent: () => import("./chunk-AY67LQFQ.js").then((module) => module.IOUDetailsComponent), data: { title: "IOU Details", breadcrumb: "IOU Details" } }
];
var PETTY_CASH_ROUTES = [
  { path: "", pathMatch: "full", loadComponent: () => import("./chunk-YFZHCFWL.js").then((module) => module.PettyCashListComponent), data: { title: "Petty Cash Management", breadcrumb: "Petty Cash" } },
  { path: "requests", pathMatch: "full", redirectTo: "" },
  { path: "settlement", loadComponent: page, data: { title: "Petty Cash Settlement", breadcrumb: "Petty Cash Settlement" } },
  { path: "create", loadComponent: () => import("./chunk-HVNJGWF3.js").then((module) => module.PettyCashFormComponent), data: { title: "Create Petty Cash Request", breadcrumb: "Create Petty Cash Request" } },
  { path: ":pettyCashId", loadComponent: () => import("./chunk-66FRAG2B.js").then((module) => module.PettyCashDetailsComponent), data: { title: "Petty Cash Details", breadcrumb: "Petty Cash Details" } }
];
export {
  IOU_ROUTES,
  PETTY_CASH_ROUTES
};
//# sourceMappingURL=chunk-C6KH2HDE.js.map
