import { ProcurementRequest } from '../models/procurement.model';

export function createProcurementPreviewData(ownerEmail: string, requesterName: string): ProcurementRequest[] {
  const standardWorkflow = [
    { name: 'Requester', state: 'complete' as const },
    { name: 'Department Approval', state: 'current' as const },
    { name: 'Finance / Budget Approval', state: 'upcoming' as const },
    { name: 'Procurement Approval', state: 'upcoming' as const },
    { name: 'Final Approval', state: 'upcoming' as const },
    { name: 'Completed', state: 'upcoming' as const }
  ];

  return [
    {
      id: 'PR-2026-0108', requesterName, requesterEmail: ownerEmail, departmentId: 103, departmentName: 'Agriculture',
      requestTitle: 'Field soil testing kits', category: 'Equipment',
      item: { description: 'Portable soil testing kit, 8-in-1 analyzer', quantity: 4, estimatedUnitPrice: 385, estimatedTotalAmount: 1540 },
      requestDate: '2026-09-27T09:20:00Z', requiredDate: '2026-10-18', justification: 'Replace worn test kits before the new field sampling cycle.',
      preferredSupplier: 'AgriLab Supplies', status: 'Pending', currentApprovalLevel: 'Department Approval',
      approvalWorkflow: standardWorkflow.map((step) => ({ ...step })),
      approvalHistory: [{ id: 'pr-0108-h1', actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: '2026-09-27T09:20:00Z' }],
      ownerEmail, assignedApproverEmail: ownerEmail
    },
    {
      id: 'PR-2026-0099', requesterName, requesterEmail: ownerEmail, departmentId: 101, departmentName: 'Operations',
      requestTitle: 'Workshop safety equipment', category: 'Supplies',
      item: { description: 'Protective gloves and safety glasses', quantity: 18, estimatedUnitPrice: 42, estimatedTotalAmount: 756 },
      requestDate: '2026-09-23T11:15:00Z', requiredDate: '2026-10-04', justification: 'Replenish safety equipment for the maintenance workshop.',
      preferredSupplier: 'WorkSafe Industrial', status: 'Approved', currentApprovalLevel: 'Final Approval',
      approvalWorkflow: standardWorkflow.map((step) => ({ ...step, state: 'complete' as const })),
      approvalHistory: [
        { id: 'pr-0099-h1', actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: '2026-09-23T11:15:00Z' },
        { id: 'pr-0099-h2', actorName: 'Daniel Kim', actorRole: 'Manager', action: 'Approved', approvalLevel: 'Department Approval', comment: 'Within the approved safety allocation.', createdAt: '2026-09-24T08:20:00Z' },
        { id: 'pr-0099-h3', actorName: 'Amara Patel', actorRole: 'Admin', action: 'Approved', approvalLevel: 'Final Approval', createdAt: '2026-09-24T13:05:00Z' }
      ], ownerEmail
    },
    {
      id: 'PR-2026-0091', requesterName, requesterEmail: ownerEmail, departmentId: 103, departmentName: 'Agriculture',
      requestTitle: 'Greenhouse irrigation valves', category: 'Agricultural Inputs',
      item: { description: 'Pressure regulating irrigation valve', quantity: 6, estimatedUnitPrice: 118, estimatedTotalAmount: 708 },
      requestDate: '2026-09-20T10:40:00Z', requiredDate: '2026-10-09', justification: 'Replace leaking valves affecting greenhouse irrigation.',
      status: 'Draft', approvalWorkflow: standardWorkflow.map((step, index) => ({ ...step, state: index === 0 ? 'complete' as const : 'upcoming' as const })),
      approvalHistory: [], ownerEmail
    },
    {
      id: 'PR-2026-0087', requesterName, requesterEmail: ownerEmail, departmentId: 106, departmentName: 'Procurement',
      requestTitle: 'Supplier audit service', category: 'Services',
      item: { description: 'Annual supplier compliance audit', quantity: 1, estimatedUnitPrice: 2200, estimatedTotalAmount: 2200 },
      requestDate: '2026-09-17T14:00:00Z', requiredDate: '2026-10-21', justification: 'Complete required annual supplier risk review.',
      status: 'Returned', currentApprovalLevel: 'Finance / Budget Approval',
      approvalWorkflow: standardWorkflow.map((step, index) => ({ ...step, state: index === 0 ? 'complete' as const : index === 1 ? 'complete' as const : index === 2 ? 'current' as const : 'upcoming' as const })),
      approvalHistory: [{ id: 'pr-0087-h1', actorName: 'Ravi Perera', actorRole: 'Approver', action: 'Returned', approvalLevel: 'Finance / Budget Approval', comment: 'Please attach the vendor scope of work.', createdAt: '2026-09-18T09:15:00Z' }],
      ownerEmail
    },
    {
      id: 'PR-2026-0080', requesterName, requesterEmail: ownerEmail, departmentId: 101, departmentName: 'Operations',
      requestTitle: 'Vehicle maintenance parts', category: 'Equipment',
      item: { description: 'Replacement filters and service components', quantity: 3, estimatedUnitPrice: 210, estimatedTotalAmount: 630 },
      requestDate: '2026-09-12T12:20:00Z', requiredDate: '2026-09-20', justification: 'Parts are needed for scheduled fleet servicing.',
      status: 'Completed', currentApprovalLevel: 'Completed',
      approvalWorkflow: standardWorkflow.map((step) => ({ ...step, state: 'complete' as const })), approvalHistory: [], ownerEmail
    }
  ];
}