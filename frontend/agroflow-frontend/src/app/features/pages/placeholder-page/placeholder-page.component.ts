import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-placeholder-page',
  standalone: true,
  template: `
    <section class="page-intro" aria-labelledby="page-title">
      <p class="eyebrow">AGROFLOW WORKSPACE</p>
      <h1 id="page-title">{{ title }}</h1>
      <p class="intro-copy">This area is ready for its feature view.</p>
    </section>
  `,
  styles: `
    :host { display: block; }
    .page-intro { padding: 12px 0 28px; animation: arrive 280ms ease-out both; }
    .eyebrow { margin: 0 0 8px; color: #6c8f61; font-size: 11px; font-weight: 700; letter-spacing: 1.2px; }
    h1 { margin: 0; color: #1d2c25; font: 600 30px/1.2 'Space Grotesk', sans-serif; }
    .intro-copy { margin: 12px 0 0; color: #728078; font-size: 14px; }
    @keyframes arrive { from { opacity: 0; transform: translateY(7px); } to { opacity: 1; transform: translateY(0); } }
    @media (prefers-reduced-motion: reduce) { .page-intro { animation: none; } }
  `
})
export class PlaceholderPageComponent {
  private readonly route = inject(ActivatedRoute);

  get title(): string {
    return this.route.snapshot.data['title'] as string ?? 'Workspace';
  }
}