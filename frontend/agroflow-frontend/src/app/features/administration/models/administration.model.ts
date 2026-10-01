export const APPROVAL_REQUEST_TYPES = ['IOU', 'Petty Cash', 'Procurement'] as const;
export type ApprovalRequestType = typeof APPROVAL_REQUEST_TYPES[number];
export type ApproverRole = 'Admin' | 'Manager' | 'Approver';

export interface ApprovalConfiguration {
  id: string;
  requestType: ApprovalRequestType;
  department: string;
  approvalLevel: number;
  approverRole: ApproverRole;
  minimumAmount: number;
  maximumAmount: number | null;
  active: boolean;
}

export interface SystemSettings {
  organizationName: string;
  defaultCurrency: string;
  dateFormat: string;
  notificationSettings: {
    email: boolean;
    inApp: boolean;
    approvalReminders: boolean;
  };
  requestNumberPrefix: string;
}

export type AuditLogStatus = 'Success' | 'Failed';

export interface AuditLog {
  id: string;
  user: string;
  action: string;
  module: string;
  description: string;
  timestamp: string;
  ipAddress: string;
  status: AuditLogStatus;
}

export interface AuditLogFilters {
  search: string;
  module: string;
  date: string;
  user: string;
}