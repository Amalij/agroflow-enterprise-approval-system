import { Injectable } from '@angular/core';

import { createProcurementPreviewData } from '../data/procurement-preview.data';
import { ProcurementDecisionPayload, ProcurementRequest, ProcurementRequestPayload } from '../models/procurement.model';

@Injectable({ providedIn: 'root' })
export class ProcurementPreviewStore {
  private readonly recordsByOwner = new Map<string, ProcurementRequest[]>();
  private nextId = 2000;

  getForOwner(ownerEmail: string, requesterName: string): ProcurementRequest[] {
    const key = this.normalizeEmail(ownerEmail);
    let records = this.recordsByOwner.get(key);
    if (!records) {
      records = createProcurementPreviewData(ownerEmail, requesterName);
      this.recordsByOwner.set(key, records);
    }
    return records.filter((record) => this.normalizeEmail(record.ownerEmail) === key).map((record) => this.clone(record));
  }

  getById(ownerEmail: string, requestId: string, requesterName: string): ProcurementRequest | undefined {
    return this.getForOwner(ownerEmail, requesterName).find((request) => request.id === requestId);
  }

  saveDraft(ownerEmail: string, requesterName: string, payload: ProcurementRequestPayload, requestId?: string): ProcurementRequest | undefined {
    return this.save(ownerEmail, requesterName, payload, 'Draft', requestId);
  }

  submit(ownerEmail: string, requesterName: string, payload: ProcurementRequestPayload, requestId?: string): ProcurementRequest | undefined {
    return this.save(ownerEmail, requesterName, payload, 'Pending', requestId);
  }

  cancel(ownerEmail: string, requestId: string): ProcurementRequest | undefined {
    const request = this.recordsByOwner.get(this.normalizeEmail(ownerEmail))?.find((record) => record.id === requestId);
    if (!request || !['Draft', 'Pending', 'Returned'].includes(request.status)) return undefined;
    request.status = 'Cancelled';
    return this.clone(request);
  }

  decide(ownerEmail: string, requestId: string, payload: ProcurementDecisionPayload, actorName: string): ProcurementRequest | undefined {
    const request = this.recordsByOwner.get(this.normalizeEmail(ownerEmail))?.find((record) => record.id === requestId);
    if (!request || !['Pending', 'Returned'].includes(request.status)) return undefined;
    request.status = payload.decision === 'approve' ? 'Approved' : payload.decision === 'reject' ? 'Rejected' : 'Returned';
    request.approvalHistory = [...request.approvalHistory, {
      id: `${request.id}-history-${request.approvalHistory.length + 1}`,
      actorName,
      actorRole: 'Approver',
      action: payload.decision === 'approve' ? 'Approved' : payload.decision === 'reject' ? 'Rejected' : 'Returned',
      approvalLevel: request.currentApprovalLevel ?? 'Department Approval',
      comment: payload.comment,
      createdAt: new Date().toISOString()
    }];
    return this.clone(request);
  }

  private save(ownerEmail: string, requesterName: string, payload: ProcurementRequestPayload, status: 'Draft' | 'Pending', requestId?: string): ProcurementRequest | undefined {
    const key = this.normalizeEmail(ownerEmail);
    const records = this.recordsByOwner.get(key) ?? createProcurementPreviewData(ownerEmail, requesterName);
    const existing = requestId ? records.find((record) => record.id === requestId && this.normalizeEmail(record.ownerEmail) === key) : undefined;
    if (requestId && (!existing || existing.status !== 'Draft')) return undefined;
    const id = existing?.id ?? `PR-DEV-${this.nextId++}`;
    const request: ProcurementRequest = {
      id, requesterName, requesterEmail: ownerEmail, departmentId: payload.departmentId, departmentName: payload.departmentName,
      requestTitle: payload.requestTitle, category: payload.category, item: { ...payload.item },
      requestDate: existing?.requestDate ?? new Date().toISOString(), requiredDate: payload.requiredDate,
      justification: payload.justification, preferredSupplier: payload.preferredSupplier,
      attachment: payload.attachment ? { id: `${id}-attachment`, fileName: payload.attachment.name, contentType: payload.attachment.type, sizeBytes: payload.attachment.size } : existing?.attachment,
      additionalNotes: payload.additionalNotes, status, currentApprovalLevel: status === 'Pending' ? 'Department Approval' : undefined,
      approvalWorkflow: this.createWorkflow(status),
      approvalHistory: status === 'Pending' ? [{ id: `${id}-submitted`, actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: new Date().toISOString() }] : existing?.approvalHistory ?? [],
      ownerEmail, assignedApproverEmail: ownerEmail
    };
    this.recordsByOwner.set(key, existing ? records.map((record) => record.id === id ? request : record) : [request, ...records]);
    return this.clone(request);
  }

  private createWorkflow(status: 'Draft' | 'Pending'): ProcurementRequest['approvalWorkflow'] {
    return [
      { name: 'Requester', state: 'complete' },
      { name: 'Department Approval', state: status === 'Pending' ? 'current' : 'upcoming' },
      { name: 'Finance / Budget Approval', state: 'upcoming' },
      { name: 'Procurement Approval', state: 'upcoming' },
      { name: 'Final Approval', state: 'upcoming' },
      { name: 'Completed', state: 'upcoming' }
    ];
  }

  private clone(request: ProcurementRequest): ProcurementRequest {
    return { ...request, item: { ...request.item }, attachment: request.attachment ? { ...request.attachment } : undefined, approvalWorkflow: request.approvalWorkflow.map((step) => ({ ...step })), approvalHistory: request.approvalHistory.map((entry) => ({ ...entry })) };
  }

  private normalizeEmail(email: string): string { return email.trim().toLocaleLowerCase(); }
}