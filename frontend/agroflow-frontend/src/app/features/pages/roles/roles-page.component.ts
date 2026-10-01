import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';

import { UserRole } from '../../users/models/user.model';

interface RoleSummary {
  name: UserRole;
  description: string;
  scope: string;
  icon: string;
  tone: string;
}

@Component({
  selector: 'app-roles-page',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, MatDividerModule, MatIconModule],
  templateUrl: './roles-page.component.html',
  styleUrl: './roles-page.component.scss'
})
export class RolesPageComponent {
  readonly roles: RoleSummary[] = [
    { name: 'Admin', description: 'Manage access and organization-wide configuration.', scope: 'System administration', icon: 'admin_panel_settings', tone: 'forest' },
    { name: 'Manager', description: 'Coordinate department operations and review team activity.', scope: 'Department oversight', icon: 'manage_accounts', tone: 'blue' },
    { name: 'Approver', description: 'Review assigned requests and record approval decisions.', scope: 'Approval workflow', icon: 'task_alt', tone: 'amber' },
    { name: 'Employee', description: 'Create and track requests within the organization.', scope: 'Standard access', icon: 'person', tone: 'sage' }
  ];
}