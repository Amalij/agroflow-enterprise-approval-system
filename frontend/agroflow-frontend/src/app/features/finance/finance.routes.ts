import { Routes } from '@angular/router';

const page = () => import('../pages/placeholder-page/placeholder-page.component').then((module) => module.PlaceholderPageComponent);

export const IOU_ROUTES: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('../pages/iou/iou-list.component').then((module) => module.IOUListComponent), data: { title: 'IOU Management', breadcrumb: 'IOU Management' } },
  { path: 'requests', pathMatch: 'full', redirectTo: '' },
  { path: 'create', loadComponent: () => import('../pages/iou/iou-form.component').then((module) => module.IOUFormComponent), data: { title: 'Create IOU', breadcrumb: 'Create IOU' } },
  { path: 'settlement', loadComponent: page, data: { title: 'IOU Settlement', breadcrumb: 'IOU Settlement' } },
  { path: ':iouId', loadComponent: () => import('../pages/iou/iou-details.component').then((module) => module.IOUDetailsComponent), data: { title: 'IOU Details', breadcrumb: 'IOU Details' } }
];

export const PETTY_CASH_ROUTES: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('../pages/petty-cash/petty-cash-list.component').then((module) => module.PettyCashListComponent), data: { title: 'Petty Cash Management', breadcrumb: 'Petty Cash' } },
  { path: 'requests', pathMatch: 'full', redirectTo: '' },
  { path: 'settlement', loadComponent: page, data: { title: 'Petty Cash Settlement', breadcrumb: 'Petty Cash Settlement' } },
  { path: 'create', loadComponent: () => import('../pages/petty-cash/petty-cash-form.component').then((module) => module.PettyCashFormComponent), data: { title: 'Create Petty Cash Request', breadcrumb: 'Create Petty Cash Request' } },
  { path: ':pettyCashId', loadComponent: () => import('../pages/petty-cash/petty-cash-details.component').then((module) => module.PettyCashDetailsComponent), data: { title: 'Petty Cash Details', breadcrumb: 'Petty Cash Details' } }
];