import { ApprovalWorkflowStep } from '../../approvals/models/approval-workflow.model';
import { IOUAttachment } from '../../iou/models/iou.model';

export const PETTY_CASH_STATUSES = ['Draft', 'Pending', 'Approved', 'Rejected', 'Returned', 'Cancelled', 'Completed'] as const;
export const PETTY_CASH_CATEGORIES = ['Travel', 'Meals', 'Supplies', 'Transport', 'Maintenance', 'Other'] as const;

export type PettyCashStatus = typeof PETTY_CASH_STATUSES[number];
export type PettyCashCategory = typeof PETTY_CASH_CATEGORIES[number];
export type PettyCashDecision = 'approve' | 'reject' | 'return';

export interface PettyCashApprovalHistory {
  id: string;
  actorName: string;
  actorRole: string;
  action: string;
  approvalLevel: string;
  comment?: string;
  createdAt: string;
}

export interface PettyCashRequest {
  id: string;
  requesterName: string;
  requesterEmail: string;
  departmentId: number;
  departmentName: string;
  purpose: string;
  description: string;
  amount: number;
  currency: string;
  requestDate: string;
  expenseDate: string;
  expenseCategory: PettyCashCategory;
  additionalNotes?: string;
  attachment?: IOUAttachment;
  status: PettyCashStatus;
  currentApprovalLevel?: string;
  approvalWorkflow: ApprovalWorkflowStep[];
  approvalHistory: PettyCashApprovalHistory[];
  ownerEmail: string;
  assignedApproverEmail?: string;
}

export interface PettyCashRequestPayload {
  purpose: string;
  description: string;
  amount: number;
  expenseDate: string;
  departmentId: number;
  departmentName: string;
  expenseCategory: PettyCashCategory;
  additionalNotes: string;
  attachment?: File;
}

export interface PettyCashFilters {
  query: string;
  status: PettyCashStatus | 'all';
  dateFrom: string;
  dateTo: string;
}

export interface PettyCashDecisionPayload {
  decision: PettyCashDecision;
  comment?: string;
}