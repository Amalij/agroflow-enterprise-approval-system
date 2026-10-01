import { RequestType } from '../../requests/models/request.model';

export const REPORT_STATUSES = ['Draft', 'Pending', 'Approved', 'Rejected', 'Returned', 'Cancelled', 'Completed'] as const;
export type ReportStatus = typeof REPORT_STATUSES[number];

export interface ReportRequestRecord {
  requestId: string;
  requestType: RequestType;
  requester: string;
  department: string;
  amount: number;
  status: ReportStatus;
  submittedAt: string;
}

export interface ReportSummary {
  totalRequests: number;
  pendingRequests: number;
  approvedRequests: number;
  rejectedRequests: number;
  totalRequestedAmount: number;
  statusCounts: Record<ReportStatus, number>;
}

export interface ReportStatusCount {
  status: ReportStatus;
  count: number;
  percentage: number;
}

export interface DepartmentReport {
  department: string;
  totalRequests: number;
  pending: number;
  approved: number;
  rejected: number;
  totalAmount: number;
}

export interface RequestTypeReport {
  requestType: RequestType;
  totalRequests: number;
  pending: number;
  approved: number;
  rejected: number;
  totalAmount: number;
}

export interface ApprovalActivity {
  id: string;
  requestId: string;
  requestType: RequestType;
  approver: string;
  action: string;
  date: string;
  comment: string;
  department: string;
  requester: string;
}

export interface ReportFilters {
  dateFrom: string;
  dateTo: string;
  department: string | 'all';
  requestType: RequestType | 'all';
  status: ReportStatus | 'all';
  requestedBy: string;
}

export interface ReportDataset {
  requests: ReportRequestRecord[];
  approvalActivities: ApprovalActivity[];
}

export interface ReportSnapshot {
  summary: ReportSummary;
  statusOverview: ReportStatusCount[];
  departmentReports: DepartmentReport[];
  requestTypeReports: RequestTypeReport[];
  approvalActivities: ApprovalActivity[];
}