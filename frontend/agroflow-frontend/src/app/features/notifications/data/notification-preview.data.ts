import { NotificationRecord } from '../models/notification.model';

export function createNotificationPreviewData(ownerEmail: string): NotificationRecord[] {
  return [
    {
      id: 'NOTIF-801', ownerEmail, title: 'Approval requested',
      message: 'A procurement request is waiting for your review.', type: 'Approval Request',
      relatedRequestId: 'REQ-2026-0508', relatedRequestPath: '/approvals/REQ-2026-0508',
      createdAt: '2026-10-01T09:40:00Z', status: 'Unread'
    },
    {
      id: 'NOTIF-800', ownerEmail, title: 'Request approved',
      message: 'Your regional field assessment advance has been approved.', type: 'Request Approved',
      relatedRequestId: 'REQ-2026-0418', relatedRequestPath: '/requests/REQ-2026-0418',
      createdAt: '2026-10-01T08:20:00Z', status: 'Unread'
    },
    {
      id: 'NOTIF-799', ownerEmail, title: 'Changes requested',
      message: 'Please add the workshop quote to your Petty Cash request.', type: 'Request Returned',
      relatedRequestId: 'REQ-2026-0491', relatedRequestPath: '/requests/REQ-2026-0491',
      createdAt: '2026-09-30T15:05:00Z', status: 'Unread'
    },
    {
      id: 'NOTIF-798', ownerEmail, title: 'Request submitted',
      message: 'Your request has entered the approval workflow.', type: 'Request Submitted',
      relatedRequestId: 'REQ-2026-0476', relatedRequestPath: '/requests/REQ-2026-0476',
      createdAt: '2026-09-29T11:30:00Z', status: 'Read'
    },
    {
      id: 'NOTIF-797', ownerEmail, title: 'Scheduled maintenance',
      message: 'The approval workspace will be unavailable Sunday from 02:00 to 02:30 UTC.', type: 'System Notification',
      createdAt: '2026-09-28T16:00:00Z', status: 'Read'
    },
    {
      id: 'NOTIF-796', ownerEmail, title: 'Request declined',
      message: 'Your stationery request was declined. Review the approval comments for details.', type: 'Request Rejected',
      relatedRequestId: 'REQ-2026-0468', relatedRequestPath: '/requests/REQ-2026-0468',
      createdAt: '2026-09-27T13:12:00Z', status: 'Read'
    }
  ];
}