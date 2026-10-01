import "./chunk-GOMI4DH3.js";

// src/app/features/approvals/approvals.routes.ts
var page = () => import("./chunk-P56LYMHT.js").then((module) => module.PlaceholderPageComponent);
var APPROVAL_ROUTES = [
  {
    path: "pending",
    loadComponent: () => import("./chunk-WKOBEFEG.js").then((module) => module.PendingApprovalsComponent),
    data: { title: "Approvals", breadcrumb: "Approvals" }
  },
  { path: "history", loadComponent: page, data: { title: "Approval History", breadcrumb: "Approval History" } },
  {
    path: ":approvalId",
    loadComponent: () => import("./chunk-INHVSE6V.js").then((module) => module.ApprovalDetailsComponent),
    data: { title: "Approval Details", breadcrumb: "Approval Details" }
  }
];
export {
  APPROVAL_ROUTES
};
//# sourceMappingURL=chunk-UH37QCKU.js.map
