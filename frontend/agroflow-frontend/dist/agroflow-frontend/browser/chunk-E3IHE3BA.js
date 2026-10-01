import "./chunk-GOMI4DH3.js";

// src/app/features/requests/requests.routes.ts
var REQUEST_ROUTES = [
  {
    path: "",
    loadComponent: () => import("./chunk-63Q5UQO4.js").then((module) => module.MyRequestsComponent),
    data: { title: "My Requests", breadcrumb: "My Requests" }
  },
  {
    path: "create",
    loadComponent: () => import("./chunk-TFRDY2NB.js").then((module) => module.RequestTypeSelectionComponent),
    data: { title: "Create Request", breadcrumb: "Create Request" }
  },
  {
    path: "create/:type",
    loadComponent: () => import("./chunk-TFRDY2NB.js").then((module) => module.RequestTypeSelectionComponent),
    data: { title: "Create Request", breadcrumb: "Create Request" }
  },
  {
    path: ":requestId",
    loadComponent: () => import("./chunk-XJJFN43T.js").then((module) => module.RequestDetailsComponent),
    data: { title: "Request Details", breadcrumb: "Request Details" }
  }
];
export {
  REQUEST_ROUTES
};
//# sourceMappingURL=chunk-E3IHE3BA.js.map
