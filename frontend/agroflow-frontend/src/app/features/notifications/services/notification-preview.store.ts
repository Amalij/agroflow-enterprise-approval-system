import { Injectable } from '@angular/core';

import { createNotificationPreviewData } from '../data/notification-preview.data';
import { NotificationRecord } from '../models/notification.model';

@Injectable({ providedIn: 'root' })
export class NotificationPreviewStore {
  private readonly notificationsByOwner = new Map<string, NotificationRecord[]>();

  getForOwner(ownerEmail: string): NotificationRecord[] {
    const key = this.normalizeEmail(ownerEmail);
    let records = this.notificationsByOwner.get(key);
    if (!records) {
      records = createNotificationPreviewData(ownerEmail);
      this.notificationsByOwner.set(key, records);
    }
    return records.map((record) => ({ ...record }));
  }

  markRead(ownerEmail: string, id: string): NotificationRecord | undefined { return this.updateStatus(ownerEmail, id, 'Read'); }
  markUnread(ownerEmail: string, id: string): NotificationRecord | undefined { return this.updateStatus(ownerEmail, id, 'Unread'); }

  markAllAsRead(ownerEmail: string): NotificationRecord[] {
    const key = this.normalizeEmail(ownerEmail);
    const records = this.notificationsByOwner.get(key) ?? createNotificationPreviewData(ownerEmail);
    records.forEach((record) => record.status = 'Read');
    this.notificationsByOwner.set(key, records);
    return records.map((record) => ({ ...record }));
  }

  delete(ownerEmail: string, id: string): boolean {
    const key = this.normalizeEmail(ownerEmail);
    const records = this.notificationsByOwner.get(key);
    if (!records) return false;
    const remaining = records.filter((record) => record.id !== id);
    const deleted = remaining.length < records.length;
    this.notificationsByOwner.set(key, remaining);
    return deleted;
  }

  private updateStatus(ownerEmail: string, id: string, status: 'Read' | 'Unread'): NotificationRecord | undefined {
    const key = this.normalizeEmail(ownerEmail);
    const record = this.notificationsByOwner.get(key)?.find((item) => item.id === id && this.normalizeEmail(item.ownerEmail) === key);
    if (!record) return undefined;
    record.status = status;
    return { ...record };
  }

  private normalizeEmail(email: string): string { return email.trim().toLocaleLowerCase(); }
}