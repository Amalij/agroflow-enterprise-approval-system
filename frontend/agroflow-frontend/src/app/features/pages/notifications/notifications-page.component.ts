import { DatePipe } from '@angular/common';
import { Component, DestroyRef, OnInit, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs';

import { AuthService } from '../../auth/services/auth.service';
import { NOTIFICATION_TYPES, NotificationFilters, NotificationRecord, NotificationTypeFilter } from '../../notifications/models/notification.model';
import { NotificationService } from '../../notifications/services/notification.service';

@Component({
  selector: 'app-notifications-page',
  standalone: true,
  imports: [DatePipe, MatButtonModule, MatCardModule, MatChipsModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatListModule, MatPaginatorModule, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule, MatTableModule, MatTooltipModule, ReactiveFormsModule],
  templateUrl: './notifications-page.component.html',
  styleUrl: './notifications-page.component.scss'
})
export class NotificationsPageComponent implements OnInit {
  private readonly authService = inject(AuthService);
  readonly notificationService = inject(NotificationService);
  private readonly router = inject(Router);
  private readonly snackBar = inject(MatSnackBar);
  private readonly destroyRef = inject(DestroyRef);

  @ViewChild(MatPaginator) set paginator(paginator: MatPaginator | undefined) {
    if (paginator) this.dataSource.paginator = paginator;
  }

  readonly dataSource = new MatTableDataSource<NotificationRecord>([]);
  readonly notificationTypes = NOTIFICATION_TYPES;
  readonly pageSizeOptions = [10, 20, 50];
  readonly displayedColumns = ['notification', 'type', 'relatedRequest', 'createdAt', 'status', 'actions'];
  readonly filters = new FormGroup({
    readStatus: new FormControl<'all' | 'read' | 'unread'>('all', { nonNullable: true }),
    type: new FormControl<NotificationTypeFilter>('all', { nonNullable: true }),
    query: new FormControl('', { nonNullable: true })
  });

  constructor() {
    this.dataSource.filterPredicate = (notification, serializedFilters) => {
      try { return this.notificationService.matchesFiltersForRecord(notification, JSON.parse(serializedFilters) as NotificationFilters); }
      catch { return true; }
    };
  }

  ngOnInit(): void {
    this.filters.valueChanges.pipe(startWith(this.filters.getRawValue()), debounceTime(120), distinctUntilChanged(), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.applyFilters());
    const user = this.authService.currentUser();
    if (!user) {
      void this.router.navigate(['/login'], { queryParams: { returnUrl: '/notifications' } });
      return;
    }
    this.notificationService.loadForUser(user.email).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.refreshRows());
  }

  retry(): void {
    const user = this.authService.currentUser();
    if (!user) return;
    this.notificationService.loadForUser(user.email).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.refreshRows());
  }

  markAllAsRead(): void {
    this.notificationService.markAllAsRead().pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => { this.refreshRows(); this.showMessage('All notifications marked as read.'); },
      error: () => this.showMessage('Notifications could not be updated. Please try again.')
    });
  }

  setReadStatus(notification: NotificationRecord, status: 'Read' | 'Unread'): void {
    const request = status === 'Read'
      ? this.notificationService.markAsRead(notification.id)
      : this.notificationService.markAsUnread(notification.id);
    request.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => { this.refreshRows(); this.showMessage(status === 'Read' ? 'Notification marked as read.' : 'Notification marked as unread.'); },
      error: () => this.showMessage('Notification could not be updated.')
    });
  }

  deleteNotification(notification: NotificationRecord): void {
    this.notificationService.delete(notification.id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: () => { this.refreshRows(); this.showMessage('Notification deleted.'); },
      error: () => this.showMessage('Notification could not be deleted.')
    });
  }

  openRelatedRequest(notification: NotificationRecord): void {
    if (notification.relatedRequestPath) void this.router.navigateByUrl(notification.relatedRequestPath);
  }

  typeTone(type: string): string { return type.toLocaleLowerCase().replaceAll(' ', '-'); }

  private applyFilters(): void {
    this.dataSource.filter = JSON.stringify(this.filters.getRawValue());
    this.dataSource.paginator?.firstPage();
  }

  private refreshRows(): void {
    this.dataSource.data = this.notificationService.notifications();
    this.applyFilters();
  }

  private showMessage(message: string): void { this.snackBar.open(message, 'Dismiss', { duration: 3000 }); }
}