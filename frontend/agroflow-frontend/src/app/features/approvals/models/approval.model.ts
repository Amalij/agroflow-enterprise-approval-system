import { RequestType } from '../../requests/models/request.model';

export type ApprovalStatus = 'Pending' | 'Changes Requested' | 'Approved' | 'Rejected';
export type ApprovalDecision = 'approve' | 'reject' | 'return';

export interface ApprovalRequester {
  id: number;
  fullName: string;
  email: string;
}

export interface ApprovalAttachment {
  id: string;
  fileName: string;
  contentType: string;
  sizeBytes: number;
}

export interface ApprovalHistoryEntry {
  id: string;
  actorName: string;
  actorRole: string;
  action: string;
  level: string;
  comment?: string;
  createdAt: string;
}

export interface ApprovalRecord {
  id: string;
  requestType: RequestType;
  title: string;
  description: string;
  requester: ApprovalRequester;
  departmentName: string;
  amount: number;
  currency: string;
  submittedAt: string;
  currentApprovalLevel: string;
  levelNumber: number;
  totalLevels: number;
  status: ApprovalStatus;
  assignedApproverEmail: string;
  attachments: ApprovalAttachment[];
  history: ApprovalHistoryEntry[];
}

export interface ApprovalFilters {
  query: string;
  requestType: RequestType | 'all';
  department: string | 'all';
  status: ApprovalStatus | 'all';
  approvalLevel: string | 'all';
}

export interface ApprovalActionPayload {
  decision: ApprovalDecision;
  comment?: string;
}