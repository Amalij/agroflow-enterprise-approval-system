import { Component, DestroyRef, OnInit, inject, isDevMode } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

import { AUTH_CONFIG } from '../../auth/auth.config';
import { AuthCredentials } from '../../auth/models/auth.model';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent implements OnInit {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly form = new FormGroup({
    email: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
    password: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    rememberMe: new FormControl(false, { nonNullable: true })
  });

  showPassword = false;
  submitting = false;
  errorMessage = '';
  forgotMessage = '';
  readonly developmentMockEnabled = isDevMode() && AUTH_CONFIG.developmentMockEnabled;

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) void this.router.navigateByUrl('/dashboard');
  }

  signIn(): void {
    this.errorMessage = '';
    this.forgotMessage = '';
    if (this.form.invalid || this.submitting) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    const credentials: AuthCredentials = this.form.getRawValue();
    this.authService.signIn(credentials)
      .pipe(finalize(() => this.submitting = false), takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: () => void this.router.navigateByUrl(this.getReturnUrl()),
        error: () => this.errorMessage = 'Sign-in was unsuccessful. Check your details or contact your administrator.'
      });
  }

  showPasswordResetGuidance(event: MouseEvent): void {
    event.preventDefault();
    this.forgotMessage = 'For a password reset, contact your AgroFlow administrator.';
  }

  private getReturnUrl(): string {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
    return returnUrl?.startsWith('/') && !returnUrl.startsWith('//') && returnUrl !== '/login'
      ? returnUrl
      : '/dashboard';
  }
}