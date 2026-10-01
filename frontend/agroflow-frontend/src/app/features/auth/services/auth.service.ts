import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, isDevMode, signal } from '@angular/core';
import { delay, Observable, of, tap } from 'rxjs';

import { AUTH_CONFIG } from '../auth.config';
import { USER_ROLES } from '../../users/models/user.model';
import { AuthCredentials, AuthSession, AuthUser } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly userState = signal<AuthUser | null>(null);
  private readonly developmentSessionKey = 'agroflow.auth.development-user.v1';

  readonly currentUser = this.userState.asReadonly();
  readonly isAuthenticated = computed(() => this.userState() !== null);

  constructor() {
    this.restoreDevelopmentSession();
  }

  signIn(credentials: AuthCredentials): Observable<AuthSession> {
    if (isDevMode() && AUTH_CONFIG.developmentMockEnabled) {
      const session: AuthSession = { user: this.createDevelopmentUser(credentials.email) };
      return of(session).pipe(
        delay(250),
        tap((result) => this.acceptSession(result, credentials.rememberMe, true))
      );
    }

    return this.http.post<AuthSession>(AUTH_CONFIG.loginEndpoint, credentials).pipe(
      tap((session) => this.acceptSession(session, false, false))
    );
  }

  logout(): void {
    this.userState.set(null);
    this.getSessionStorage()?.removeItem(this.developmentSessionKey);
  }

  private acceptSession(session: AuthSession, rememberMe: boolean, developmentMock: boolean): void {
    this.userState.set(session.user);
    const storage = this.getSessionStorage();
    if (developmentMock && rememberMe && storage) {
      storage.setItem(this.developmentSessionKey, JSON.stringify(session.user));
    } else {
      storage?.removeItem(this.developmentSessionKey);
    }
  }

  private restoreDevelopmentSession(): void {
    if (!isDevMode() || !AUTH_CONFIG.developmentMockEnabled) return;
    const storedUser = this.getSessionStorage()?.getItem(this.developmentSessionKey);
    if (!storedUser) return;

    try {
      const user = JSON.parse(storedUser) as AuthUser;
      if (user.email && user.displayName) {
        const role = USER_ROLES.includes(user.role) ? user.role : AUTH_CONFIG.developmentMockRole;
        this.userState.set({ ...user, role });
      }
    } catch {
      this.getSessionStorage()?.removeItem(this.developmentSessionKey);
    }
  }

  private createDevelopmentUser(email: string): AuthUser {
    const localPart = email.split('@')[0] ?? email;
    const displayName = localPart
      .split(/[._-]+/)
      .filter(Boolean)
      .map((part) => `${part.charAt(0).toLocaleUpperCase()}${part.slice(1)}`)
      .join(' ');
    return { email, displayName: displayName || email, role: AUTH_CONFIG.developmentMockRole };
  }

  private getSessionStorage(): Storage | null {
    if (typeof window === 'undefined') return null;
    try {
      return window.sessionStorage;
    } catch {
      return null;
    }
  }
}