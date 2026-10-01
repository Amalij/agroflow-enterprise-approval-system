import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { UserRole } from '../users/models/user.model';
import { AuthService } from './services/auth.service';

export const roleGuard: CanActivateFn = (route) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const allowedRoles = route.data['roles'] as readonly UserRole[] | undefined;
  const user = authService.currentUser();

  if (user && allowedRoles?.includes(user.role)) return true;
  return router.createUrlTree(['/access-denied']);
};