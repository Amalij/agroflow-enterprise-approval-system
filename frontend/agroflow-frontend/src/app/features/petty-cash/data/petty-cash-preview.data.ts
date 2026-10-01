import { ApprovalWorkflowStep } from '../../approvals/models/approval-workflow.model';
import { PettyCashRequest } from '../models/petty-cash.model';

const workflow: ApprovalWorkflowStep[] = [
  { name: 'Requester', state: 'complete' },
  { name: 'Department Approval', state: 'current' },
  { name: 'Finance Approval', state: 'upcoming' },
  { name: 'Final Approval', state: 'upcoming' }
];

export function createPettyCashPreviewData(ownerEmail: string, requesterName: string): PettyCashRequest[] {
  const records: PettyCashRequest[] = [
    {
      id: 'PC-2026-0186', requesterName, requesterEmail: ownerEmail, departmentId: 101, departmentName: 'Operations',
      purpose: 'Workshop safety supplies', description: 'Purchase protective supplies for the equipment workshop.', amount: 280, currency: 'USD',
      requestDate: '2026-09-28T09:15:00Z', expenseDate: '2026-09-27', expenseCategory: 'Supplies', status: 'Pending',
      currentApprovalLevel: 'Department Approval', approvalWorkflow: workflow.map((step) => ({ ...step })),
      approvalHistory: [{ id: 'pc-0186-history-1', actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: '2026-09-28T09:15:00Z' }],
      ownerEmail, assignedApproverEmail: ownerEmail
    },
    {
      id: 'PC-2026-0172', requesterName, requesterEmail: ownerEmail, departmentId: 103, departmentName: 'Agriculture',
      purpose: 'Field sample transport', description: 'Local transport of collected samples to the regional laboratory.', amount: 165, currency: 'USD',
      requestDate: '2026-09-24T11:10:00Z', expenseDate: '2026-09-23', expenseCategory: 'Transport', status: 'Approved',
      currentApprovalLevel: 'Final Approval', approvalWorkflow: workflow.map((step) => ({ ...step, state: 'complete' })),
      approvalHistory: [
        { id: 'pc-0172-history-1', actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: '2026-09-24T11:10:00Z' },
        { id: 'pc-0172-history-2', actorName: 'Daniel Kim', actorRole: 'Manager', action: 'Approved', approvalLevel: 'Department Approval', comment: 'Within the field operations budget.', createdAt: '2026-09-25T08:20:00Z' },
        { id: 'pc-0172-history-3', actorName: 'Ravi Perera', actorRole: 'Approver', action: 'Approved', approvalLevel: 'Finance Approval', createdAt: '2026-09-25T10:40:00Z' },
        { id: 'pc-0172-history-4', actorName: 'Amara Patel', actorRole: 'Admin', action: 'Approved', approvalLevel: 'Final Approval', createdAt: '2026-09-25T13:05:00Z' }
      ], ownerEmail
    },
    {
      id: 'PC-2026-0161', requesterName, requesterEmail: ownerEmail, departmentId: 101, departmentName: 'Operations',
      purpose: 'Equipment repair parts', description: 'Draft purchase of replacement service parts.', amount: 340, currency: 'USD',
      requestDate: '2026-09-21T14:30:00Z', expenseDate: '2026-09-21', expenseCategory: 'Maintenance', status: 'Draft',
      approvalWorkflow: workflow.map((step, index) => ({ ...step, state: index === 0 ? 'complete' : 'upcoming' })),
      approvalHistory: [], ownerEmail
    },
    {
      id: 'PC-2026-0140', requesterName, requesterEmail: ownerEmail, departmentId: 103, departmentName: 'Agriculture',
      purpose: 'Regional field meals', description: 'Meal allowance for the regional field survey team.', amount: 210, currency: 'USD',
      requestDate: '2026-09-16T10:00:00Z', expenseDate: '2026-09-15', expenseCategory: 'Meals', status: 'Returned',
      currentApprovalLevel: 'Department Approval', approvalWorkflow: workflow.map((step) => ({ ...step })),
      approvalHistory: [
        { id: 'pc-0140-history-1', actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: '2026-09-16T10:00:00Z' },
        { id: 'pc-0140-history-2', actorName: 'Leila Hassan', actorRole: 'Approver', action: 'Returned', approvalLevel: 'Department Approval', comment: 'Please attach the itemized receipt.', createdAt: '2026-09-17T09:30:00Z' }
      ], ownerEmail
    },
    {
      id: 'PC-2026-0122', requesterName, requesterEmail: ownerEmail, departmentId: 101, departmentName: 'Operations',
      purpose: 'Local service travel', description: 'Local mileage and service transport costs.', amount: 95, currency: 'USD',
      requestDate: '2026-09-10T08:20:00Z', expenseDate: '2026-09-09', expenseCategory: 'Travel', status: 'Completed',
      approvalWorkflow: workflow.map((step) => ({ ...step, state: 'complete' })), approvalHistory: [], ownerEmail
    },
    {
      id: 'PC-2026-0108', requesterName, requesterEmail: ownerEmail, departmentId: 103, departmentName: 'Agriculture',
      purpose: 'Survey stationery', description: 'Stationery request for field survey records.', amount: 48, currency: 'USD',
      requestDate: '2026-09-04T12:00:00Z', expenseDate: '2026-09-04', expenseCategory: 'Supplies', status: 'Rejected',
      approvalWorkflow: workflow.map((step, index) => ({ ...step, state: index === 0 ? 'complete' : index === 1 ? 'rejected' : 'upcoming' })),
      approvalHistory: [{ id: 'pc-0108-history-1', actorName: 'Daniel Kim', actorRole: 'Manager', action: 'Rejected', approvalLevel: 'Department Approval', comment: 'Please use the existing office supply allocation.', createdAt: '2026-09-05T09:00:00Z' }], ownerEmail
    }
  ];
  return records.map((record) => ({ ...record, assignedApproverEmail: record.assignedApproverEmail ?? ownerEmail }));
}