import { Injectable } from '@angular/core';

import { Department, DepartmentWrite } from '../department.model';
import { DEPARTMENT_PREVIEW_DATA } from '../department-preview.data';

@Injectable({ providedIn: 'root' })
export class DepartmentPreviewStore {
  private departments = DEPARTMENT_PREVIEW_DATA.map((department) => ({ ...department }));
  private nextId = Math.max(...this.departments.map((department) => department.id)) + 1;

  getAll(): Department[] {
    return this.departments.map((department) => ({ ...department }));
  }

  create(payload: DepartmentWrite): Department {
    const id = this.nextId++;
    const department: Department = {
      id,
      code: `DEP-${id}`,
      ...payload,
      createdAt: new Date().toISOString()
    };
    this.departments = [department, ...this.departments];
    return { ...department };
  }

  update(id: number, payload: DepartmentWrite): Department | undefined {
    const existing = this.departments.find((department) => department.id === id);
    if (!existing) return undefined;

    const updated = { ...existing, ...payload };
    this.departments = this.departments.map((department) => department.id === id ? updated : department);
    return { ...updated };
  }

  delete(id: number): boolean {
    const departmentCount = this.departments.length;
    this.departments = this.departments.filter((department) => department.id !== id);
    return this.departments.length < departmentCount;
  }
}