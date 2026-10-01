import { Routes } from '@angular/router';

const page = () => import('../pages/placeholder-page/placeholder-page.component').then((module) => module.PlaceholderPageComponent);

export const APPROVAL_ROUTES: Routes = [
  {
    path: 'pending',
    loadComponent: () => import('../pages/approvals/pending-approvals.component').then((module) => module.PendingApprovalsComponent),
    data: { title: 'Approvals', breadcrumb: 'Approvals' }
  },
  { path: 'history', loadComponent: page, data: { title: 'Approval History', breadcrumb: 'Approval History' } }
  ,{
    path: ':approvalId',
    loadComponent: () => import('../pages/approvals/approval-details.component').then((module) => module.ApprovalDetailsComponent),
    data: { title: 'Approval Details', breadcrumb: 'Approval Details' }
  }
];