import { Department } from './department.model';

export const DEPARTMENT_PREVIEW_DATA: Department[] = [
  { id: 101, code: 'OPS', name: 'Operations', description: 'Field operations and facilities', active: true, createdAt: '2025-11-18T00:00:00Z' },
  { id: 102, code: 'FIN', name: 'Finance', description: 'Financial planning and controls', active: true, createdAt: '2025-12-04T00:00:00Z' },
  { id: 103, code: 'AGR', name: 'Agriculture', description: 'Crop programs and agronomy', active: true, createdAt: '2026-01-12T00:00:00Z' },
  { id: 104, code: 'LOG', name: 'Logistics', description: 'Transport, warehousing, and distribution', active: false, createdAt: '2026-02-20T00:00:00Z' },
  { id: 105, code: 'HR', name: 'People and Culture', description: 'People operations and workplace services', active: true, createdAt: '2026-03-08T00:00:00Z' },
  { id: 106, code: 'PROC', name: 'Procurement', description: 'Sourcing and supplier management', active: true, createdAt: '2026-04-15T00:00:00Z' },
  { id: 107, code: 'IT', name: 'Technology', description: 'Business systems and IT support', active: false, createdAt: '2026-05-03T00:00:00Z' }
];