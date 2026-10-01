import { Injectable } from '@angular/core';

import { USER_PREVIEW_DATA } from '../user-preview.data';
import { UserRecord, UserWrite } from '../user.model';

@Injectable({ providedIn: 'root' })
export class UserPreviewStore {
  private users = USER_PREVIEW_DATA.map((user) => ({ ...user }));
  private nextId = Math.max(...this.users.map((user) => user.id)) + 1;

  getAll(): UserRecord[] {
    return this.users.map((user) => ({ ...user }));
  }

  create(payload: UserWrite, departmentName: string): UserRecord {
    const user: UserRecord = {
      id: this.nextId++,
      ...payload,
      departmentName,
      createdAt: new Date().toISOString()
    };
    this.users = [user, ...this.users];
    return { ...user };
  }

  update(id: number, payload: UserWrite, departmentName: string): UserRecord | undefined {
    const existing = this.users.find((user) => user.id === id);
    if (!existing) return undefined;

    const updated = { ...existing, ...payload, departmentName };
    this.users = this.users.map((user) => user.id === id ? updated : user);
    return { ...updated };
  }
}