import { Routes } from '@angular/router';

export const REQUEST_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('../pages/my-requests/my-requests.component').then((module) => module.MyRequestsComponent),
    data: { title: 'My Requests', breadcrumb: 'My Requests' }
  },
  {
    path: 'create',
    loadComponent: () => import('../pages/request-type-selection/request-type-selection.component').then((module) => module.RequestTypeSelectionComponent),
    data: { title: 'Create Request', breadcrumb: 'Create Request' }
  },
  {
    path: 'create/:type',
    loadComponent: () => import('../pages/request-type-selection/request-type-selection.component').then((module) => module.RequestTypeSelectionComponent),
    data: { title: 'Create Request', breadcrumb: 'Create Request' }
  },
  {
    path: ':requestId',
    loadComponent: () => import('../pages/request-details/request-details.component').then((module) => module.RequestDetailsComponent),
    data: { title: 'Request Details', breadcrumb: 'Request Details' }
  }
];