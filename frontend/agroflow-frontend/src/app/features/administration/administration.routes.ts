import { Routes } from '@angular/router';

export const ADMINISTRATION_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./pages/administration-dashboard.component').then((module) => module.AdministrationDashboardComponent),
    data: { title: 'Administration', breadcrumb: 'Administration' }
  },
  {
    path: 'users',
    loadComponent: () => import('../pages/user-list/user-list.component').then((module) => module.UserListComponent),
    data: { title: 'Users', breadcrumb: 'Users' }
  },
  {
    path: 'roles',
    loadComponent: () => import('../pages/roles/roles-page.component').then((module) => module.RolesPageComponent),
    data: { title: 'Roles', breadcrumb: 'Roles' }
  },
  {
    path: 'departments',
    loadComponent: () => import('../pages/department-list/department-list.component').then((module) => module.DepartmentListComponent),
    data: { title: 'Departments', breadcrumb: 'Departments' }
  },
  { path: 'approval-configuration', loadComponent: () => import('./pages/approval-configuration.component').then((module) => module.ApprovalConfigurationComponent), data: { title: 'Approval Configuration', breadcrumb: 'Approval Configuration' } },
  { path: 'settings', loadComponent: () => import('./pages/system-settings.component').then((module) => module.SystemSettingsComponent), data: { title: 'System Settings', breadcrumb: 'System Settings' } },
  { path: 'audit-logs', loadComponent: () => import('./pages/audit-logs.component').then((module) => module.AuditLogsComponent), data: { title: 'Audit Logs', breadcrumb: 'Audit Logs' } },
  { path: 'approval-workflow', pathMatch: 'full', redirectTo: 'approval-configuration' },
  { path: 'system-settings', pathMatch: 'full', redirectTo: 'settings' }
];