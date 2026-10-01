import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { inject } from '@angular/core';

import { AuthService } from '../../features/auth/services/auth.service';

interface NavigationItem {
  label: string;
  route: string;
  icon?: string;
  children?: NavigationItem[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Output() readonly navigate = new EventEmitter<void>();
  private readonly authService = inject(AuthService);

  private readonly allNavigation: NavigationItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: 'space_dashboard' },
    {
      label: 'My Requests', route: '/requests', icon: 'description', children: [
        { label: 'All Requests', route: '/requests' },
        { label: 'Create Request', route: '/requests/create' }
      ]
    },
    {
      label: 'Approvals', route: '/approvals/pending', icon: 'task_alt', children: [
        { label: 'Pending Approvals', route: '/approvals/pending' },
        { label: 'Approval History', route: '/approvals/history' }
      ]
    },
    {
      label: 'IOU Management', route: '/iou/requests', icon: 'account_balance_wallet', children: [
        { label: 'IOU Requests', route: '/iou/requests' },
        { label: 'IOU Settlement', route: '/iou/settlement' }
      ]
    },
    {
      label: 'Petty Cash', route: '/petty-cash/requests', icon: 'payments', children: [
        { label: 'Petty Cash Requests', route: '/petty-cash/requests' },
        { label: 'Petty Cash Settlement', route: '/petty-cash/settlement' }
      ]
    },
    {
      label: 'Procurement', route: '/procurement/purchase-requests', icon: 'inventory_2', children: [
        { label: 'Purchase Requests', route: '/procurement/purchase-requests' },
        { label: 'Quotations', route: '/procurement/quotations' },
        { label: 'Suppliers', route: '/procurement/suppliers' },
        { label: 'Purchase Orders', route: '/procurement/purchase-orders' },
        { label: 'Goods Received', route: '/procurement/goods-received' },
        { label: 'Invoices', route: '/procurement/invoices' }
      ]
    },
    { label: 'Reports', route: '/reports', icon: 'monitoring' },
    {
      label: 'Administration', route: '/admin', icon: 'admin_panel_settings', children: [
        { label: 'User Management', route: '/admin/users' },
        { label: 'Role Management', route: '/admin/roles' },
        { label: 'Department Management', route: '/admin/departments' },
        { label: 'Approval Configuration', route: '/admin/approval-configuration' },
        { label: 'System Settings', route: '/admin/settings' },
        { label: 'Audit Logs', route: '/admin/audit-logs' }
      ]
    }
  ];

  get navigation(): NavigationItem[] {
    return this.authService.currentUser()?.role === 'Admin'
      ? this.allNavigation
      : this.allNavigation.filter((item) => item.label !== 'Administration');
  }
}