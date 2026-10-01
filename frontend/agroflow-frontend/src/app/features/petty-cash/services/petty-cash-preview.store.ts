import { Injectable } from '@angular/core';

import { createPettyCashPreviewData } from '../data/petty-cash-preview.data';
import { PettyCashDecisionPayload, PettyCashRequest, PettyCashRequestPayload } from '../models/petty-cash.model';

@Injectable({ providedIn: 'root' })
export class PettyCashPreviewStore {
  private readonly recordsByOwner = new Map<string, PettyCashRequest[]>();
  private nextId = 5000;

  getForOwner(ownerEmail: string, requesterName: string): PettyCashRequest[] {
    const key = this.normalizeEmail(ownerEmail);
    let records = this.recordsByOwner.get(key);
    if (!records) {
      records = createPettyCashPreviewData(ownerEmail, requesterName);
      this.recordsByOwner.set(key, records);
    }
    return records.filter((request) => this.normalizeEmail(request.ownerEmail) === key).map((request) => this.clone(request));
  }

  getById(ownerEmail: string, requestId: string, requesterName: string): PettyCashRequest | undefined {
    return this.getForOwner(ownerEmail, requesterName).find((request) => request.id === requestId);
  }

  saveDraft(ownerEmail: string, requesterName: string, payload: PettyCashRequestPayload, requestId?: string): PettyCashRequest | undefined {
    return this.save(ownerEmail, requesterName, payload, 'Draft', requestId);
  }

  submit(ownerEmail: string, requesterName: string, payload: PettyCashRequestPayload, requestId?: string): PettyCashRequest | undefined {
    return this.save(ownerEmail, requesterName, payload, 'Pending', requestId);
  }

  cancel(ownerEmail: string, requestId: string): PettyCashRequest | undefined {
    const record = this.recordsByOwner.get(this.normalizeEmail(ownerEmail))?.find((request) => request.id === requestId);
    if (!record || !['Draft', 'Pending', 'Returned'].includes(record.status)) return undefined;
    record.status = 'Cancelled';
    return this.clone(record);
  }

  decide(ownerEmail: string, requestId: string, payload: PettyCashDecisionPayload, actorName: string): PettyCashRequest | undefined {
    const record = this.recordsByOwner.get(this.normalizeEmail(ownerEmail))?.find((request) => request.id === requestId);
    if (!record || !['Pending', 'Returned'].includes(record.status)) return undefined;
    record.status = payload.decision === 'approve' ? 'Approved' : payload.decision === 'reject' ? 'Rejected' : 'Returned';
    record.approvalHistory = [...record.approvalHistory, {
      id: `${record.id}-history-${record.approvalHistory.length + 1}`,
      actorName,
      actorRole: 'Approver',
      action: payload.decision === 'approve' ? 'Approved' : payload.decision === 'reject' ? 'Rejected' : 'Returned',
      approvalLevel: record.currentApprovalLevel ?? 'Department Approval',
      comment: payload.comment,
      createdAt: new Date().toISOString()
    }];
    return this.clone(record);
  }

  private save(ownerEmail: string, requesterName: string, payload: PettyCashRequestPayload, status: 'Draft' | 'Pending', requestId?: string): PettyCashRequest | undefined {
    const key = this.normalizeEmail(ownerEmail);
    const records = this.recordsByOwner.get(key) ?? createPettyCashPreviewData(ownerEmail, requesterName);
    const existing = requestId ? records.find((request) => request.id === requestId && this.normalizeEmail(request.ownerEmail) === key) : undefined;
    if (requestId && (!existing || existing.status !== 'Draft')) return undefined;
    const id = existing?.id ?? `PC-DEV-${this.nextId++}`;
    const request: PettyCashRequest = {
      id, requesterName, requesterEmail: ownerEmail, departmentId: payload.departmentId, departmentName: payload.departmentName,
      purpose: payload.purpose, description: payload.description, amount: payload.amount, currency: 'USD',
      requestDate: existing?.requestDate ?? new Date().toISOString(), expenseDate: payload.expenseDate,
      expenseCategory: payload.expenseCategory, additionalNotes: payload.additionalNotes,
      attachment: payload.attachment ? { id: `${id}-attachment`, fileName: payload.attachment.name, contentType: payload.attachment.type, sizeBytes: payload.attachment.size } : existing?.attachment,
      status, currentApprovalLevel: status === 'Pending' ? 'Department Approval' : undefined,
      approvalWorkflow: this.workflow(status),
      approvalHistory: status === 'Pending' ? [{ id: `${id}-submitted`, actorName: requesterName, actorRole: 'Employee', action: 'Submitted', approvalLevel: 'Requester', createdAt: new Date().toISOString() }] : existing?.approvalHistory ?? [],
      ownerEmail, assignedApproverEmail: ownerEmail
    };
    this.recordsByOwner.set(key, existing ? records.map((item) => item.id === id ? request : item) : [request, ...records]);
    return this.clone(request);
  }

  private workflow(status: 'Draft' | 'Pending'): PettyCashRequest['approvalWorkflow'] {
    return [
      { name: 'Requester', state: 'complete' },
      { name: 'Department Approval', state: status === 'Pending' ? 'current' : 'upcoming' },
      { name: 'Finance Approval', state: 'upcoming' },
      { name: 'Final Approval', state: 'upcoming' }
    ];
  }

  private clone(request: PettyCashRequest): PettyCashRequest {
    return { ...request, attachment: request.attachment ? { ...request.attachment } : undefined, approvalWorkflow: request.approvalWorkflow.map((step) => ({ ...step })), approvalHistory: request.approvalHistory.map((entry) => ({ ...entry })) };
  }

  private normalizeEmail(email: string): string { return email.trim().toLocaleLowerCase(); }
}