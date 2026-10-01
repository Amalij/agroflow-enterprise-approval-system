export interface Department {
  id: number;
  code?: string;
  name: string;
  description?: string;
  active: boolean;
  createdAt?: string;
}

export interface DepartmentWrite {
  name: string;
  description: string;
  active: boolean;
}
