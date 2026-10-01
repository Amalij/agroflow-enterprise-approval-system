import { RequestRecord } from '../models/request.model';

export function createRequestPreviewData(ownerEmail: string): RequestRecord[] {
  return [
    {
      id: 'REQ-2026-0418', type: 'IOU', title: 'Regional field visit', description: 'Travel advance for the northern district field visit.',
      departmentName: 'Agriculture', amount: 640, currency: 'USD', status: 'Pending', submittedAt: '2026-09-25T09:30:00Z', ownerEmail
    },
    {
      id: 'REQ-2026-0407', type: 'Petty Cash', title: 'Workshop materials', description: 'Materials for the quarterly equipment safety workshop.',
      departmentName: 'Operations', amount: 285, currency: 'USD', status: 'Approved', submittedAt: '2026-09-21T13:15:00Z', ownerEmail
    },
    {
      id: 'REQ-2026-0395', type: 'Procurement', title: 'Soil testing supplies', description: 'Replacement field kits for regional soil sampling.',
      departmentName: 'Agriculture', amount: 1840, currency: 'USD', status: 'Draft', submittedAt: '2026-09-19T08:00:00Z', ownerEmail
    },
    {
      id: 'REQ-2026-0378', type: 'IOU', title: 'Supplier inspection travel', description: 'Travel costs for the annual supplier inspection.',
      departmentName: 'Procurement', amount: 520, currency: 'USD', status: 'Rejected', submittedAt: '2026-09-13T10:45:00Z', ownerEmail
    },
    {
      id: 'REQ-2026-0352', type: 'Procurement', title: 'Office printer replacement', description: 'Replacement printer for the regional office.',
      departmentName: 'Operations', amount: 960, currency: 'USD', status: 'Cancelled', submittedAt: '2026-09-05T15:20:00Z', ownerEmail
    }
  ];
}