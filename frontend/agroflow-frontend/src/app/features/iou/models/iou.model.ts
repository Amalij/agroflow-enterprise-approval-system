import { WorkflowStatus } from '../../requests/models/request.model';
import { ApprovalWorkflowStep, ApprovalWorkflowState } from '../../approvals/models/approval-workflow.model';

export const IOU_STATUSES = ['Draft', 'Pending', 'Approved', 'Rejected', 'Returned', 'Cancelled', 'Completed'] as const;

export type IOUStatus = typeof IOU_STATUSES[number];
export type IOUDecision = 'approve' | 'reject' | 'return';
export type IOUWorkflowState = ApprovalWorkflowState;

export interface IOUAttachment {
  id: string;
  fileName: string;
  contentType: string;
  sizeBytes: number;
}

export interface IOUApprovalHistory {
  id: string;
  actorName: string;
  actorRole: string;
  action: string;
  approvalLevel: string;
  comment?: string;
  createdAt: string;
}

export type IOUApprovalStep = ApprovalWorkflowStep;

export interface IOU {
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
  requiredDate: string;
  additionalNotes?: string;
  attachment?: IOUAttachment;
  status: IOUStatus;
  currentApprovalLevel?: string;
  approvalWorkflow: IOUApprovalStep[];
  approvalHistory: IOUApprovalHistory[];
  ownerEmail: string;
  assignedApproverEmail?: string;
}

export interface IOURequest {
  purpose: string;
  description: string;
  amount: number;
  requiredDate: string;
  departmentId: number;
  departmentName: string;
  additionalNotes: string;
  attachment?: File;
}

export interface IOUFilters {
  query: string;
  status: IOUStatus | 'all';
  dateFrom: string;
  dateTo: string;
}

export interface IOUDecisionPayload {
  decision: IOUDecision;
  comment?: string;
}