import "./chunk-GOMI4DH3.js";

// src/app/features/administration/administration.routes.ts
var ADMINISTRATION_ROUTES = [
  {
    path: "",
    pathMatch: "full",
    loadComponent: () => import("./chunk-RKZCTVZR.js").then((module) => module.AdministrationDashboardComponent),
    data: { title: "Administration", breadcrumb: "Administration" }
  },
  {
    path: "users",
    loadComponent: () => import("./chunk-LZOKYFCB.js").then((module) => module.UserListComponent),
    data: { title: "Users", breadcrumb: "Users" }
  },
  {
    path: "roles",
    loadComponent: () => import("./chunk-C62BNDET.js").then((module) => module.RolesPageComponent),
    data: { title: "Roles", breadcrumb: "Roles" }
  },
  {
    path: "departments",
    loadComponent: () => import("./chunk-MQCA6CJN.js").then((module) => module.DepartmentListComponent),
    data: { title: "Departments", breadcrumb: "Departments" }
  },
  { path: "approval-configuration", loadComponent: () => import("./chunk-7VZXPLF4.js").then((module) => module.ApprovalConfigurationComponent), data: { title: "Approval Configuration", breadcrumb: "Approval Configuration" } },
  { path: "settings", loadComponent: () => import("./chunk-BKKHTSRT.js").then((module) => module.SystemSettingsComponent), data: { title: "System Settings", breadcrumb: "System Settings" } },
  { path: "audit-logs", loadComponent: () => import("./chunk-YCAD6RZV.js").then((module) => module.AuditLogsComponent), data: { title: "Audit Logs", breadcrumb: "Audit Logs" } },
  { path: "approval-workflow", pathMatch: "full", redirectTo: "approval-configuration" },
  { path: "system-settings", pathMatch: "full", redirectTo: "settings" }
];
export {
  ADMINISTRATION_ROUTES
};
//# sourceMappingURL=chunk-UH37M2FB.js.map
