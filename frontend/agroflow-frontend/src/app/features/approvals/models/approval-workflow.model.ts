export type ApprovalWorkflowState = 'complete' | 'current' | 'upcoming' | 'rejected';

export interface ApprovalWorkflowStep {
  name: string;
  state: ApprovalWorkflowState;
  actorName?: string;
  completedAt?: string;
}