import { Routes } from '@angular/router';

import { authGuard } from './features/auth/auth.guard';
import { roleGuard } from './features/auth/role.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'login',
    loadComponent: () => import('./features/pages/login/login-page.component').then((module) => module.LoginPageComponent)
  },
  {
    path: '',
    canActivate: [authGuard],
    canActivateChild: [authGuard],
    loadComponent: () => import('./layout/main-layout/main-layout.component').then((module) => module.MainLayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./features/pages/dashboard/dashboard-page.component').then((module) => module.DashboardPageComponent),
        data: { title: 'Dashboard', breadcrumb: 'Dashboard' }
      },
      {
        path: 'requests',
        loadChildren: () => import('./features/requests/requests.routes').then((module) => module.REQUEST_ROUTES),
        data: { breadcrumb: 'My Requests' }
      },
      {
        path: 'access-denied',
        loadComponent: () => import('./features/pages/access-denied/access-denied.component').then((module) => module.AccessDeniedComponent),
        data: { title: 'Access Denied', breadcrumb: 'Access Denied' }
      },
      {
        path: 'approvals',
        canActivate: [roleGuard],
        canActivateChild: [roleGuard],
        data: { roles: ['Admin', 'Manager', 'Approver'], breadcrumb: 'Approvals' },
        loadChildren: () => import('./features/approvals/approvals.routes').then((module) => module.APPROVAL_ROUTES),
      },
      {
        path: 'iou',
        loadChildren: () => import('./features/finance/finance.routes').then((module) => module.IOU_ROUTES),
        data: { breadcrumb: 'IOU Management' }
      },
      {
        path: 'petty-cash',
        loadChildren: () => import('./features/finance/finance.routes').then((module) => module.PETTY_CASH_ROUTES),
        data: { breadcrumb: 'Petty Cash' }
      },
      {
        path: 'procurement',
        loadChildren: () => import('./features/procurement/procurement.routes').then((module) => module.PROCUREMENT_ROUTES),
        data: { breadcrumb: 'Procurement' }
      },
      {
        path: 'reports',
        loadComponent: () => import('./features/pages/reports/reports-page.component').then((module) => module.ReportsPageComponent),
        data: { title: 'Reports', breadcrumb: 'Reports' }
      },
      {
        path: 'notifications',
        loadComponent: () => import('./features/pages/notifications/notifications-page.component').then((module) => module.NotificationsPageComponent),
        data: { title: 'Notifications', breadcrumb: 'Notifications' }
      },
      {
        path: 'notifications',
        loadComponent: () => import('./features/pages/notifications/notifications-page.component').then((module) => module.NotificationsPageComponent),
        data: { title: 'Notifications', breadcrumb: 'Notifications' }
      },
      {
        path: 'admin',
        canActivate: [roleGuard],
        canActivateChild: [roleGuard],
        data: { roles: ['Admin'], breadcrumb: 'Administration' },
        loadChildren: () => import('./features/administration/administration.routes').then((module) => module.ADMINISTRATION_ROUTES),
      },
      {
        path: 'administration',
        canActivate: [roleGuard],
        canActivateChild: [roleGuard],
        data: { roles: ['Admin'], breadcrumb: 'Administration' },
        children: [
          { path: '', pathMatch: 'full', redirectTo: '/admin' },
          { path: 'users', pathMatch: 'full', redirectTo: '/admin/users' },
          { path: 'roles', pathMatch: 'full', redirectTo: '/admin/roles' },
          { path: 'departments', pathMatch: 'full', redirectTo: '/admin/departments' },
          { path: 'approval-workflow', pathMatch: 'full', redirectTo: '/admin/approval-configuration' },
          { path: 'approval-configuration', pathMatch: 'full', redirectTo: '/admin/approval-configuration' },
          { path: 'system-settings', pathMatch: 'full', redirectTo: '/admin/settings' },
          { path: 'settings', pathMatch: 'full', redirectTo: '/admin/settings' },
          { path: 'audit-logs', pathMatch: 'full', redirectTo: '/admin/audit-logs' }
        ]
      },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];