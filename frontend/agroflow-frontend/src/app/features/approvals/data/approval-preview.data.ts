import { ApprovalRecord } from '../models/approval.model';

export function createApprovalPreviewData(approverEmail: string): ApprovalRecord[] {
  return [
    {
      id: 'REQ-2026-0508', requestType: 'Procurement', title: 'Greenhouse irrigation controls',
      description: 'Purchase of replacement control units for the east greenhouse.',
      requester: { id: 307, fullName: 'Priya Shah', email: 'priya.shah@agroflow.example' },
      departmentName: 'Agriculture', amount: 4860, currency: 'USD', submittedAt: '2026-09-27T09:20:00Z',
      currentApprovalLevel: 'Department Approver', levelNumber: 2, totalLevels: 4, status: 'Pending',
      assignedApproverEmail: approverEmail,
      attachments: [{ id: 'att-508-a', fileName: 'supplier-quote.pdf', contentType: 'application/pdf', sizeBytes: 284120 }],
      history: [
        { id: 'hist-508-a', actorName: 'Priya Shah', actorRole: 'Employee', action: 'Submitted', level: 'Request created', createdAt: '2026-09-27T09:20:00Z' },
        { id: 'hist-508-b', actorName: 'Daniel Kim', actorRole: 'Manager', action: 'Approved', level: 'Manager review', comment: 'Within the approved equipment plan.', createdAt: '2026-09-27T11:05:00Z' }
      ]
    },
    {
      id: 'REQ-2026-0502', requestType: 'IOU', title: 'Regional crop assessment travel',
      description: 'Travel advance for two field assessments in the north region.',
      requester: { id: 314, fullName: 'Noah Williams', email: 'noah.williams@agroflow.example' },
      departmentName: 'Agriculture', amount: 1120, currency: 'USD', submittedAt: '2026-09-26T14:40:00Z',
      currentApprovalLevel: 'Finance Review', levelNumber: 3, totalLevels: 4, status: 'Pending',
      assignedApproverEmail: approverEmail,
      attachments: [],
      history: [
        { id: 'hist-502-a', actorName: 'Noah Williams', actorRole: 'Employee', action: 'Submitted', level: 'Request created', createdAt: '2026-09-26T14:40:00Z' },
        { id: 'hist-502-b', actorName: 'Leila Hassan', actorRole: 'Approver', action: 'Approved', level: 'Department review', createdAt: '2026-09-27T08:15:00Z' }
      ]
    },
    {
      id: 'REQ-2026-0491', requestType: 'Petty Cash', title: 'Workshop safety supplies',
      description: 'Protective supplies for the regional equipment workshop.',
      requester: { id: 322, fullName: 'Mina Chen', email: 'mina.chen@agroflow.example' },
      departmentName: 'Operations', amount: 340, currency: 'USD', submittedAt: '2026-09-24T10:00:00Z',
      currentApprovalLevel: 'Department Approver', levelNumber: 2, totalLevels: 3, status: 'Changes Requested',
      assignedApproverEmail: approverEmail,
      attachments: [{ id: 'att-491-a', fileName: 'supply-list.xlsx', contentType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', sizeBytes: 36840 }],
      history: [
        { id: 'hist-491-a', actorName: 'Mina Chen', actorRole: 'Employee', action: 'Submitted', level: 'Request created', createdAt: '2026-09-24T10:00:00Z' },
        { id: 'hist-491-b', actorName: 'Daniel Kim', actorRole: 'Manager', action: 'Returned', level: 'Manager review', comment: 'Please attach the workshop quote.', createdAt: '2026-09-25T09:10:00Z' },
        { id: 'hist-491-c', actorName: 'Mina Chen', actorRole: 'Employee', action: 'Resubmitted', level: 'Request updated', comment: 'Quote attached for review.', createdAt: '2026-09-26T12:30:00Z' }
      ]
    }
  ];
}