import { Routes } from '@angular/router';

const page = () => import('../pages/placeholder-page/placeholder-page.component').then((module) => module.PlaceholderPageComponent);

export const PROCUREMENT_ROUTES: Routes = [
  { path: '', pathMatch: 'full', loadComponent: () => import('../pages/procurement/procurement-list.component').then((module) => module.ProcurementListComponent), data: { title: 'Procurement Management', breadcrumb: 'Procurement' } },
  { path: 'create', loadComponent: () => import('../pages/procurement/procurement-form.component').then((module) => module.ProcurementFormComponent), data: { title: 'Create Procurement Request', breadcrumb: 'Create Procurement Request' } },
  { path: 'purchase-requests', loadComponent: page, data: { title: 'Purchase Requests', breadcrumb: 'Purchase Requests' } },
  { path: 'quotations', loadComponent: page, data: { title: 'Quotations', breadcrumb: 'Quotations' } },
  { path: 'suppliers', loadComponent: page, data: { title: 'Suppliers', breadcrumb: 'Suppliers' } },
  { path: 'purchase-orders', loadComponent: page, data: { title: 'Purchase Orders', breadcrumb: 'Purchase Orders' } },
  { path: 'goods-received', loadComponent: page, data: { title: 'Goods Received', breadcrumb: 'Goods Received' } },
  { path: 'invoices', loadComponent: page, data: { title: 'Invoices', breadcrumb: 'Invoices' } },
  { path: ':requestId', loadComponent: () => import('../pages/procurement/procurement-details.component').then((module) => module.ProcurementDetailsComponent), data: { title: 'Procurement Details', breadcrumb: 'Procurement Details' } }
];