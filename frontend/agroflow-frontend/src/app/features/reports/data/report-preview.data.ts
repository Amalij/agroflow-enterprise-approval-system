import { ReportDataset } from '../models/report.model';

export const REPORT_PREVIEW_DATA: ReportDataset = {
  requests: [
    { requestId: 'REQ-2026-0508', requestType: 'Procurement', requester: 'Priya Shah', department: 'Agriculture', amount: 4860, status: 'Pending', submittedAt: '2026-09-27T09:20:00Z' },
    { requestId: 'REQ-2026-0502', requestType: 'IOU', requester: 'Noah Williams', department: 'Agriculture', amount: 1120, status: 'Pending', submittedAt: '2026-09-26T14:40:00Z' },
    { requestId: 'REQ-2026-0491', requestType: 'Petty Cash', requester: 'Mina Chen', department: 'Operations', amount: 340, status: 'Returned', submittedAt: '2026-09-24T10:00:00Z' },
    { requestId: 'REQ-2026-0478', requestType: 'Procurement', requester: 'Jordan Lee', department: 'Procurement', amount: 2320, status: 'Approved', submittedAt: '2026-09-22T08:15:00Z' },
    { requestId: 'REQ-2026-0469', requestType: 'IOU', requester: 'Amara Patel', department: 'Finance', amount: 580, status: 'Rejected', submittedAt: '2026-09-19T11:45:00Z' },
    { requestId: 'REQ-2026-0452', requestType: 'Petty Cash', requester: 'Ethan Okafor', department: 'Operations', amount: 175, status: 'Draft', submittedAt: '2026-09-17T13:00:00Z' },
    { requestId: 'REQ-2026-0438', requestType: 'Procurement', requester: 'Leila Hassan', department: 'Agriculture', amount: 3840, status: 'Completed', submittedAt: '2026-09-12T09:10:00Z' },
    { requestId: 'REQ-2026-0420', requestType: 'IOU', requester: 'Mina Chen', department: 'Finance', amount: 760, status: 'Cancelled', submittedAt: '2026-09-09T10:30:00Z' },
    { requestId: 'REQ-2026-0396', requestType: 'Petty Cash', requester: 'Priya Shah', department: 'Procurement', amount: 245, status: 'Approved', submittedAt: '2026-09-02T07:40:00Z' }
  ],
  approvalActivities: [
    { id: 'activity-1', requestId: 'REQ-2026-0508', requestType: 'Procurement', approver: 'Daniel Kim', action: 'Approved', date: '2026-09-27T11:10:00Z', comment: 'Within the approved equipment plan.', department: 'Agriculture', requester: 'Priya Shah' },
    { id: 'activity-2', requestId: 'REQ-2026-0491', requestType: 'Petty Cash', approver: 'Leila Hassan', action: 'Returned', date: '2026-09-25T09:30:00Z', comment: 'Please attach the itemized receipt.', department: 'Operations', requester: 'Mina Chen' },
    { id: 'activity-3', requestId: 'REQ-2026-0469', requestType: 'IOU', approver: 'Ravi Perera', action: 'Rejected', date: '2026-09-20T08:55:00Z', comment: 'Please reconcile the previous advance first.', department: 'Finance', requester: 'Amara Patel' },
    { id: 'activity-4', requestId: 'REQ-2026-0438', requestType: 'Procurement', approver: 'Amara Patel', action: 'Approved', date: '2026-09-13T14:05:00Z', comment: 'Approved after finance review.', department: 'Agriculture', requester: 'Leila Hassan' },
    { id: 'activity-5', requestId: 'REQ-2026-0396', requestType: 'Petty Cash', approver: 'Daniel Kim', action: 'Approved', date: '2026-09-03T10:15:00Z', comment: 'Within the department limit.', department: 'Procurement', requester: 'Priya Shah' }
  ]
};