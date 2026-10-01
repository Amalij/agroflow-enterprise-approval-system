import { UserRole } from '../../users/models/user.model';

export interface AuthCredentials {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface AuthUser {
  email: string;
  displayName: string;
  role: UserRole;
}

export interface AuthSession {
  user: AuthUser;
  accessToken?: string;
}