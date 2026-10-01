import { Component, DestroyRef, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';

import { AuthService } from '../../features/auth/services/auth.service';
import { NotificationRecord } from '../../features/notifications/models/notification.model';
import { NotificationService } from '../../features/notifications/services/notification.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatBadgeModule, MatButtonModule, MatDividerModule, MatIconModule, MatListModule, MatMenuModule, MatProgressSpinnerModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  readonly authService = inject(AuthService);
  readonly notificationService = inject(NotificationService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  @Input() breadcrumb = 'Dashboard';
  @Output() readonly menuToggle = new EventEmitter<void>();

  ngOnInit(): void {
    const user = this.authService.currentUser();
    if (user) this.notificationService.loadForUser(user.email).pipe(takeUntilDestroyed(this.destroyRef)).subscribe();
  }

  openNotification(notification: NotificationRecord): void {
    const navigate = (): void => { void this.router.navigateByUrl(notification.relatedRequestPath ?? '/notifications'); };
    if (notification.status === 'Read') {
      navigate();
      return;
    }
    this.notificationService.markAsRead(notification.id)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({ next: navigate, error: navigate });
  }

  viewAllNotifications(): void {
    void this.router.navigateByUrl('/notifications');
  }

  logout(): void {
    this.authService.logout();
    void this.router.navigateByUrl('/login');
  }
}