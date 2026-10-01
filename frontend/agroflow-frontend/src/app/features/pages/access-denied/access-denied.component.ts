import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-access-denied',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, RouterLink],
  template: `
    <section class="access-denied" aria-labelledby="access-title">
      <span class="access-icon"><mat-icon>lock</mat-icon></span>
      <p class="eyebrow">ACCESS RESTRICTED</p>
      <h1 id="access-title">You don't have approval access</h1>
      <p>Your account does not have permission to open this approval workspace.</p>
      <a mat-flat-button color="primary" routerLink="/dashboard">Return to Dashboard</a>
    </section>
  `,
  styles: `
    :host { display: block; }
    .access-denied { display: flex; min-height: 380px; align-items: center; flex-direction: column; justify-content: center; padding: 36px 20px; text-align: center; }
    .access-icon { display: grid; width: 48px; height: 48px; margin-bottom: 18px; place-items: center; border-radius: 12px; color: #a45b53; background: #f8eae8; }
    .access-icon mat-icon { width: 23px; height: 23px; font-size: 23px; }
    .eyebrow { margin: 0 0 8px; color: #8b6d56; font-size: 10px; font-weight: 700; letter-spacing: 1.2px; }
    h1 { margin: 0; color: #26382d; font: 600 24px/1.25 'Space Grotesk', sans-serif; }
    p:not(.eyebrow) { max-width: 390px; margin: 10px 0 20px; color: #78847b; font-size: 12px; line-height: 1.6; }
    a { min-height: 38px; border-radius: 5px; font-size: 11px; }
  `
})
export class AccessDeniedComponent {}