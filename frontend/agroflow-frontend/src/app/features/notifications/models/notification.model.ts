export const NOTIFICATION_TYPES = [
  'Approval Request',
  'Request Approved',
  'Request Rejected',
  'Request Returned',
  'Request Submitted',
  'System Notification'
] as const;

export type NotificationType = typeof NOTIFICATION_TYPES[number];
export type NotificationStatus = 'Read' | 'Unread';
export type NotificationReadFilter = 'all' | 'read' | 'unread';
export type NotificationTypeFilter = NotificationType | 'all';

export interface NotificationRecord {
  id: string;
  ownerEmail: string;
  title: string;
  message: string;
  type: NotificationType;
  relatedRequestId?: string;
  relatedRequestPath?: string;
  createdAt: string;
  status: NotificationStatus;
}

export interface NotificationFilters {
  readStatus: NotificationReadFilter;
  type: NotificationTypeFilter;
  query: string;
}