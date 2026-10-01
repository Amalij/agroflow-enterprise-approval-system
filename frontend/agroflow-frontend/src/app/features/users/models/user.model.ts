export const USER_ROLES = ['Admin', 'Manager', 'Approver', 'Employee'] as const;

export type UserRole = typeof USER_ROLES[number];
export type UserStatus = 'Active' | 'Inactive';

export interface UserRecord {
  id: number;
  fullName: string;
  email: string;
  departmentId: number;
  departmentName?: string;
  role: UserRole;
  active: boolean;
  createdAt?: string;
}

export interface UserWrite {
  fullName: string;
  email: string;
  departmentId: number;
  role: UserRole;
  active: boolean;
}