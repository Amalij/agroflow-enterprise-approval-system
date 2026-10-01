import { UserRole } from '../users/models/user.model';

export const AUTH_CONFIG = {
  loginEndpoint: 'http://localhost:8080/api/auth/login',
  developmentMockEnabled: true,
  developmentMockRole: 'Approver' as UserRole
} as const;