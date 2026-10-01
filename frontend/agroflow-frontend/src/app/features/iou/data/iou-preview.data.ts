import { IOU, IOUApprovalStep } from '../models/iou.model';

const defaultWorkflow: IOUApprovalStep[] = [
  { name: 'Requester', state: 'complete' },
  { name: 'Department Approval', state: 'current' },
  { name: 'Finance Approval', state: 'upcoming' },
  { name: 'Final Approval', state: 'upcoming' }
];

export function createIOUPreviewData(ownerEmail: string, requesterName: string): IOU[] {
  const records: IOU[] = [
    {
      id: 'IOU-2026-0318', requesterName, requesterEmail: ownerEmail, departmentId: 103, departmentName: 'Agriculture',
      purpose: 'North region field assessment', description: 'Travel advance for two scheduled crop assessments in the northern district.',
      amount: 720, currency: 'USD', requestDate: '2026-09-25T09:30:00Z', requiredDate: '2026-10-03T00:00:00Z',
      additionalNotes: 'Receipts will be submitted after the visit.', status: 'Pending', currentApprovalLevel: 'Department Approval',
      approvalWorkflow: defaultWorkflow.map((step) => ({ ...step })), approvalHistory: [
        { id: 'iou-history-0318-1', actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: '2026-09-25T09:30:00Z' }
      ], ownerEmail
    },
    {
      id: 'IOU-2026-0304', requesterName, requesterEmail: ownerEmail, departmentId: 101, departmentName: 'Operations',
      purpose: 'Workshop supply advance', description: 'Advance for purchasing safety and workshop consumables.',
      amount: 310, currency: 'USD', requestDate: '2026-09-21T13:15:00Z', requiredDate: '2026-09-29T00:00:00Z',
      status: 'Approved', currentApprovalLevel: 'Final Approval',
      approvalWorkflow: [
        { name: 'Requester', state: 'complete' }, { name: 'Department Approval', state: 'complete' },
        { name: 'Finance Approval', state: 'complete' }, { name: 'Final Approval', state: 'complete' }
      ], approvalHistory: [
        { id: 'iou-history-0304-1', actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: '2026-09-21T13:15:00Z' },
        { id: 'iou-history-0304-2', actorName: 'Jordan Lee', actorRole: 'Manager', action: 'Approved', approvalLevel: 'Department Approval', comment: 'Necessary supplies for scheduled maintenance.', createdAt: '2026-09-22T08:20:00Z' },
        { id: 'iou-history-0304-3', actorName: 'Ravi Perera', actorRole: 'Approver', action: 'Approved', approvalLevel: 'Finance Approval', createdAt: '2026-09-22T10:05:00Z' },
        { id: 'iou-history-0304-4', actorName: 'Amara Patel', actorRole: 'Admin', action: 'Approved', approvalLevel: 'Final Approval', comment: 'Approved within the team allocation.', createdAt: '2026-09-22T11:00:00Z' }
      ], ownerEmail
    },
    {
      id: 'IOU-2026-0286', requesterName, requesterEmail: ownerEmail, departmentId: 103, departmentName: 'Agriculture',
      purpose: 'Soil sample delivery', description: 'Advance for local transport of soil samples to the testing facility.',
      amount: 185, currency: 'USD', requestDate: '2026-09-18T08:45:00Z', requiredDate: '2026-09-27T00:00:00Z',
      status: 'Returned', currentApprovalLevel: 'Department Approval',
      approvalWorkflow: [
        { name: 'Requester', state: 'complete' }, { name: 'Department Approval', state: 'current' },
        { name: 'Finance Approval', state: 'upcoming' }, { name: 'Final Approval', state: 'upcoming' }
      ], approvalHistory: [
        { id: 'iou-history-0286-1', actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: '2026-09-18T08:45:00Z' },
        { id: 'iou-history-0286-2', actorName: 'Leila Hassan', actorRole: 'Approver', action: 'Returned', approvalLevel: 'Department Approval', comment: 'Please add the delivery estimate.', createdAt: '2026-09-19T09:10:00Z' }
      ], ownerEmail
    },
    {
      id: 'IOU-2026-0271', requesterName, requesterEmail: ownerEmail, departmentId: 103, departmentName: 'Agriculture',
      purpose: 'Field equipment advance', description: 'Draft request for replacement field equipment.',
      amount: 450, currency: 'USD', requestDate: '2026-09-16T14:00:00Z', requiredDate: '2026-10-07T00:00:00Z',
      status: 'Draft', approvalWorkflow: defaultWorkflow.map((step, index) => ({ ...step, state: index === 0 ? 'complete' : 'upcoming' })),
      approvalHistory: [], ownerEmail
    },
    {
      id: 'IOU-2026-0240', requesterName, requesterEmail: ownerEmail, departmentId: 101, departmentName: 'Operations',
      purpose: 'Regional team travel', description: 'Advance for a two-day regional team visit.',
      amount: 980, currency: 'USD', requestDate: '2026-09-08T11:30:00Z', requiredDate: '2026-09-16T00:00:00Z',
      status: 'Rejected', currentApprovalLevel: 'Finance Approval',
      approvalWorkflow: [
        { name: 'Requester', state: 'complete' }, { name: 'Department Approval', state: 'complete' },
        { name: 'Finance Approval', state: 'rejected' }, { name: 'Final Approval', state: 'upcoming' }
      ], approvalHistory: [
        { id: 'iou-history-0240-1', actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: '2026-09-08T11:30:00Z' },
        { id: 'iou-history-0240-2', actorName: 'Daniel Kim', actorRole: 'Manager', action: 'Approved', approvalLevel: 'Department Approval', createdAt: '2026-09-09T08:45:00Z' },
        { id: 'iou-history-0240-3', actorName: 'Ravi Perera', actorRole: 'Approver', action: 'Rejected', approvalLevel: 'Finance Approval', comment: 'Please reconcile the previous advance before requesting another.', createdAt: '2026-09-09T13:10:00Z' }
      ], ownerEmail
    }
  ];
  return records.map((iou) => ({ ...iou, assignedApproverEmail: ownerEmail }));
}