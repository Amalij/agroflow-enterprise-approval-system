import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';

type MetricTone = 'green' | 'amber' | 'blue' | 'rose';
type RequestStatus = 'Pending' | 'Approved' | 'Rejected' | 'Draft';
type StatusTone = 'pending' | 'approved' | 'rejected' | 'draft';

interface DashboardMetric {
  label: string;
  value: string;
  caption: string;
  icon: string;
  tone: MetricTone;
}

interface StatusOverviewItem {
  label: RequestStatus;
  count: number;
  tone: StatusTone;
}

interface RequestRow {
  requestId: string;
  requestType: string;
  department: string;
  amount: string;
  status: RequestStatus;
  statusTone: StatusTone;
  date: string;
}

interface ApprovalRow {
  requestId: string;
  requestType: string;
  requestedBy: string;
  amount: string;
  submittedDate: string;
}

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatIconModule, MatTableModule, RouterLink],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent {
  readonly metrics: DashboardMetric[] = [
    { label: 'My Requests', value: '18', caption: 'Across all request types', icon: 'description', tone: 'green' },
    { label: 'Pending Approvals', value: '06', caption: 'Waiting for your review', icon: 'pending_actions', tone: 'amber' },
    { label: 'Approved Requests', value: '42', caption: 'Completed this month', icon: 'task_alt', tone: 'blue' },
    { label: 'Rejected Requests', value: '03', caption: 'Returned for follow-up', icon: 'do_not_disturb_on', tone: 'rose' }
  ];

  readonly statusItems: StatusOverviewItem[] = [
    { label: 'Pending', count: 9, tone: 'pending' },
    { label: 'Approved', count: 31, tone: 'approved' },
    { label: 'Rejected', count: 3, tone: 'rejected' },
    { label: 'Draft', count: 5, tone: 'draft' }
  ];

  readonly recentRequests: RequestRow[] = [
    { requestId: 'REQ-2481', requestType: 'Equipment Purchase', department: 'Operations', amount: '$3,840.00', status: 'Pending', statusTone: 'pending', date: '28 Sep 2026' },
    { requestId: 'REQ-2478', requestType: 'Travel Advance', department: 'Sales', amount: '$1,250.00', status: 'Approved', statusTone: 'approved', date: '27 Sep 2026' },
    { requestId: 'REQ-2472', requestType: 'Seed Inventory', department: 'Agriculture', amount: '$6,780.00', status: 'Draft', statusTone: 'draft', date: '18 Sep 2026' },
    { requestId: 'REQ-2465', requestType: 'Vehicle Maintenance', department: 'Logistics', amount: '$920.00', status: 'Rejected', statusTone: 'rejected', date: '16 Sep 2026' }
  ];

  readonly pendingApprovals: ApprovalRow[] = [
    { requestId: 'REQ-2484', requestType: 'Safety Supplies', requestedBy: 'Jordan Lee', amount: '$2,460.00', submittedDate: '28 Sep 2026' },
    { requestId: 'REQ-2482', requestType: 'Soil Testing', requestedBy: 'Priya Shah', amount: '$1,875.00', submittedDate: '28 Sep 2026' },
    { requestId: 'REQ-2479', requestType: 'Equipment Repair', requestedBy: 'Mateo Cruz', amount: '$4,320.00', submittedDate: '27 Sep 2026' }
  ];

  readonly requestColumns = ['requestId', 'requestType', 'department', 'amount', 'status', 'date'];
  readonly approvalColumns = ['requestId', 'requestType', 'requestedBy', 'amount', 'submittedDate', 'action'];

  get statusTotal(): number {
    return this.statusItems.reduce((total, item) => total + item.count, 0);
  }
}