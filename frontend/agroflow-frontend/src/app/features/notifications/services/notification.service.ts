import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, isDevMode, signal } from '@angular/core';
import { catchError, finalize, map, Observable, of, tap, throwError } from 'rxjs';

import { NotificationFilters, NotificationRecord } from '../models/notification.model';
import { NotificationPreviewStore } from './notification-preview.store';

@Injectable({ providedIn: 'root' })
export class NotificationService {
  private readonly http = inject(HttpClient);
  private readonly previewStore = inject(NotificationPreviewStore);
  private readonly apiUrl = 'http://localhost:8080/api/notifications';
  private readonly notificationsState = signal<NotificationRecord[]>([]);
  private ownerEmail = '';

  readonly notifications = this.notificationsState.asReadonly();
  readonly unreadCount = computed(() => this.notificationsState().filter((notification) => notification.status === 'Unread').length);
  readonly recentNotifications = computed(() => this.notificationsState().slice(0, 5));
  readonly loading = signal(false);
  readonly errorMessage = signal('');
  readonly previewMode = signal(false);

  loadForUser(ownerEmail: string): Observable<NotificationRecord[]> {
    this.ownerEmail = ownerEmail;
    this.loading.set(true);
    this.errorMessage.set('');
    return this.http.get<NotificationRecord[]>(`${this.apiUrl}/mine`).pipe(
      map((records) => this.sortNewestFirst(records.filter((record) => this.belongsTo(record, ownerEmail)))),
      catchError((error: unknown) => {
        if (isDevMode()) {
          this.previewMode.set(true);
          return of(this.sortNewestFirst(this.previewStore.getForOwner(ownerEmail)));
        }
        this.previewMode.set(false);
        this.errorMessage.set('Notifications could not be loaded. Please try again later.');
        return of([]);
      }),
      tap((records) => this.notificationsState.set(records)),
      finalize(() => this.loading.set(false))
    );
  }

  filterNotifications(filters: NotificationFilters): NotificationRecord[] {
    return this.notificationsState().filter((notification) => this.matchesFiltersForRecord(notification, filters));
  }

  matchesFiltersForRecord(notification: NotificationRecord, filters: NotificationFilters): boolean {
    const query = filters.query.trim().toLocaleLowerCase();
    const matchesStatus = filters.readStatus === 'all' || notification.status.toLocaleLowerCase() === filters.readStatus;
    const matchesType = filters.type === 'all' || notification.type === filters.type;
    const searchText = `${notification.title} ${notification.message} ${notification.relatedRequestId ?? ''}`.toLocaleLowerCase();
    return matchesStatus && matchesType && (!query || searchText.includes(query));
  }

  markAsRead(id: string): Observable<NotificationRecord> {
    return this.updateOne(id, 'Read');
  }

  markAsUnread(id: string): Observable<NotificationRecord> {
    return this.updateOne(id, 'Unread');
  }

  markAllAsRead(): Observable<void> {
    if (this.previewMode()) {
      const notifications = this.previewStore.markAllAsRead(this.ownerEmail);
      this.notificationsState.set(this.sortNewestFirst(notifications));
      return of(void 0);
    }
    return this.http.patch<void>(`${this.apiUrl}/read-all`, {}).pipe(
      tap(() => this.notificationsState.update((records) => records.map((record) => ({ ...record, status: 'Read' }))))
    );
  }

  delete(id: string): Observable<void> {
    if (this.previewMode()) {
      this.previewStore.delete(this.ownerEmail, id);
      this.notificationsState.update((records) => records.filter((record) => record.id !== id));
      return of(void 0);
    }
    return this.http.delete<void>(`${this.apiUrl}/${encodeURIComponent(id)}`).pipe(
      tap(() => this.notificationsState.update((records) => records.filter((record) => record.id !== id)))
    );
  }

  private updateOne(id: string, status: 'Read' | 'Unread'): Observable<NotificationRecord> {
    if (this.previewMode()) {
      const updated = status === 'Read'
        ? this.previewStore.markRead(this.ownerEmail, id)
        : this.previewStore.markUnread(this.ownerEmail, id);
      if (!updated) return throwError(() => new Error('Notification not found.'));
      this.replace(updated);
      return of(updated);
    }
    return this.http.patch<NotificationRecord>(`${this.apiUrl}/${encodeURIComponent(id)}/status`, { status }).pipe(
      map((notification) => {
        if (!this.belongsTo(notification, this.ownerEmail)) throw new Error('Notification not found.');
        return notification;
      }),
      tap((notification) => this.replace(notification))
    );
  }

  private replace(updated: NotificationRecord): void {
    this.notificationsState.update((records) => this.sortNewestFirst(records.map((record) => record.id === updated.id ? updated : record)));
  }

  private sortNewestFirst(records: NotificationRecord[]): NotificationRecord[] {
    return [...records].sort((left, right) => Date.parse(right.createdAt) - Date.parse(left.createdAt));
  }

  private belongsTo(notification: NotificationRecord, ownerEmail: string): boolean {
    return notification.ownerEmail.trim().toLocaleLowerCase() === ownerEmail.trim().toLocaleLowerCase();
  }
}