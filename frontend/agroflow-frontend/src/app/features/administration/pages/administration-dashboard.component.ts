import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

interface AdministrationLink {
  title: string;
  description: string;
  route: string;
  icon: string;
}

@Component({
  selector: 'app-administration-dashboard',
  standalone: true,
  imports: [MatCardModule, MatIconModule, RouterLink],
  templateUrl: './administration-dashboard.component.html',
  styleUrl: './administration-dashboard.component.scss'
})
export class AdministrationDashboardComponent {
  readonly links: AdministrationLink[] = [
    { title: 'User Management', description: 'Manage accounts, access roles, and department assignments.', route: '/admin/users', icon: 'group' },
    { title: 'Role Management', description: 'Review the standard access roles available in AgroFlow.', route: '/admin/roles', icon: 'badge' },
    { title: 'Department Management', description: 'Maintain organizational departments.', route: '/admin/departments', icon: 'account_tree' },
    { title: 'Approval Configuration', description: 'Manage approval levels and amount thresholds.', route: '/admin/approval-configuration', icon: 'rule' },
    { title: 'System Settings', description: 'Configure organization, currency, and notifications.', route: '/admin/settings', icon: 'tune' },
    { title: 'Audit Logs', description: 'Review administrative and system activity.', route: '/admin/audit-logs', icon: 'history' }
  ];
}