import { ApprovalWorkflowStep } from '../../approvals/models/approval-workflow.model';
import { IOUAttachment } from '../../iou/models/iou.model';
import { WorkflowStatus } from '../../requests/models/request.model';

export const PROCUREMENT_STATUSES = ['Draft', 'Pending', 'Approved', 'Rejected', 'Returned', 'Cancelled', 'Completed'] as const;
export const PROCUREMENT_CATEGORIES = ['Equipment', 'Supplies', 'Agricultural Inputs', 'Services', 'Facilities', 'Other'] as const;

export type ProcurementStatus = typeof PROCUREMENT_STATUSES[number];
export type ProcurementCategory = typeof PROCUREMENT_CATEGORIES[number];
export type ProcurementDecision = 'approve' | 'reject' | 'return';

export interface ProcurementItem {
  description: string;
  quantity: number;
  estimatedUnitPrice: number;
  estimatedTotalAmount: number;
}

export interface ProcurementApprovalHistory {
  id: string;
  actorName: string;
  actorRole: string;
  action: string;
  approvalLevel: string;
  comment?: string;
  createdAt: string;
}

export interface ProcurementAttachment extends IOUAttachment {}

export interface ProcurementRequest {
  id: string;
  requesterName: string;
  requesterEmail: string;
  departmentId: number;
  departmentName: string;
  requestTitle: string;
  category: ProcurementCategory;
  item: ProcurementItem;
  requestDate: string;
  requiredDate: string;
  justification: string;
  preferredSupplier?: string;
  attachment?: ProcurementAttachment;
  additionalNotes?: string;
  status: ProcurementStatus;
  currentApprovalLevel?: string;
  approvalWorkflow: ApprovalWorkflowStep[];
  approvalHistory: ProcurementApprovalHistory[];
  ownerEmail: string;
  assignedApproverEmail?: string;
}

export interface ProcurementRequestPayload {
  requestTitle: string;
  departmentId: number;
  departmentName: string;
  category: ProcurementCategory;
  item: ProcurementItem;
  requiredDate: string;
  justification: string;
  preferredSupplier: string;
  additionalNotes: string;
  attachment?: File;
}

export interface ProcurementFilters {
  query: string;
  status: ProcurementStatus | 'all';
  department: string | 'all';
  dateFrom: string;
  dateTo: string;
}

export interface ProcurementDecisionPayload {
  decision: ProcurementDecision;
  comment?: string;
}