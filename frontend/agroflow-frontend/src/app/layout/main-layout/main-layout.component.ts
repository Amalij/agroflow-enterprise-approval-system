import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { filter } from 'rxjs';

import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [MatSidenavModule, NavbarComponent, RouterOutlet, SidebarComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  private readonly breakpointObserver = inject(BreakpointObserver);
  private readonly destroyRef = inject(DestroyRef);
  private readonly router = inject(Router);

  isMobile = false;
  sidebarOpened = true;
  breadcrumb = 'Dashboard';

  constructor() {
    this.breakpointObserver.observe('(max-width: 959px)')
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(({ matches }) => {
        this.isMobile = matches;
        this.sidebarOpened = !matches;
      });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.updateBreadcrumb());

    this.updateBreadcrumb();
  }

  toggleSidebar(): void { this.sidebarOpened = !this.sidebarOpened; }

  closeSidebarOnMobile(): void {
    if (this.isMobile) this.sidebarOpened = false;
  }

  private updateBreadcrumb(): void {
    let route = this.router.routerState.snapshot.root;
    while (route.firstChild) route = route.firstChild;
    this.breadcrumb = route.data['breadcrumb'] as string ?? route.data['title'] as string ?? 'Dashboard';
  }
}