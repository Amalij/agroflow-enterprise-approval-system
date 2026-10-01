export const REQUEST_TYPES = ['IOU', 'Petty Cash', 'Procurement'] as const;
export const REQUEST_STATUSES = ['Draft', 'Pending', 'Approved', 'Rejected', 'Cancelled'] as const;

export type RequestType = typeof REQUEST_TYPES[number];
export type RequestStatus = typeof REQUEST_STATUSES[number];
export type WorkflowStatus = RequestStatus | 'Returned' | 'Completed';

export interface RequestRecord {
  id: string;
  type: RequestType;
  title: string;
  description: string;
  departmentName: string;
  amount: number;
  currency: string;
  status: RequestStatus;
  submittedAt: string;
  ownerEmail: string;
}

export interface RequestFilters {
  query: string;
  type: RequestType | 'all';
  status: RequestStatus | 'all';
  dateFrom: string;
  dateTo: string;
}