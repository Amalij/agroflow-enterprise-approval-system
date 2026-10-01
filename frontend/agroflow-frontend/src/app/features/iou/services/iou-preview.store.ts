import { Injectable } from '@angular/core';

import { createIOUPreviewData } from '../data/iou-preview.data';
import { IOU, IOUApprovalHistory, IOUDecisionPayload, IOURequest, IOUStatus } from '../models/iou.model';

@Injectable({ providedIn: 'root' })
export class IOUPreviewStore {
  private readonly recordsByOwner = new Map<string, IOU[]>();
  private nextId = 4000;

  getForOwner(ownerEmail: string, requesterName: string): IOU[] {
    const key = this.normalizeEmail(ownerEmail);
    let records = this.recordsByOwner.get(key);
    if (!records) {
      records = createIOUPreviewData(ownerEmail, requesterName);
      this.recordsByOwner.set(key, records);
    }
    return records.map((iou) => this.clone(iou));
  }

  getById(ownerEmail: string, iouId: string, requesterName: string): IOU | undefined {
    return this.getForOwner(ownerEmail, requesterName).find((iou) => iou.id === iouId);
  }

  saveDraft(ownerEmail: string, requesterName: string, request: IOURequest, iouId?: string): IOU | undefined {
    return this.save(ownerEmail, requesterName, request, 'Draft', iouId);
  }

  submit(ownerEmail: string, requesterName: string, request: IOURequest, iouId?: string): IOU | undefined {
    return this.save(ownerEmail, requesterName, request, 'Pending', iouId);
  }

  cancel(ownerEmail: string, iouId: string): IOU | undefined {
    const records = this.recordsByOwner.get(this.normalizeEmail(ownerEmail));
    const record = records?.find((iou) => iou.id === iouId && this.normalizeEmail(iou.ownerEmail) === this.normalizeEmail(ownerEmail));
    if (!record || !['Draft', 'Pending', 'Returned'].includes(record.status)) return undefined;
    record.status = 'Cancelled';
    return this.clone(record);
  }

  decide(ownerEmail: string, iouId: string, payload: IOUDecisionPayload, actorName: string): IOU | undefined {
    const record = this.recordsByOwner.get(this.normalizeEmail(ownerEmail))?.find((iou) => iou.id === iouId);
    if (!record || !['Pending', 'Returned'].includes(record.status)) return undefined;
    const status: IOUStatus = payload.decision === 'approve' ? 'Approved' : payload.decision === 'reject' ? 'Rejected' : 'Returned';
    record.status = status;
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

  private save(ownerEmail: string, requesterName: string, request: IOURequest, status: 'Draft' | 'Pending', iouId?: string): IOU | undefined {
    const key = this.normalizeEmail(ownerEmail);
    const records = this.recordsByOwner.get(key) ?? createIOUPreviewData(ownerEmail, requesterName);
    const existing = iouId ? records.find((iou) => iou.id === iouId && this.normalizeEmail(iou.ownerEmail) === key) : undefined;
    if (iouId && (!existing || existing.status !== 'Draft')) return undefined;

    const requestDate = existing?.requestDate ?? new Date().toISOString();
    const record: IOU = {
      id: existing?.id ?? `IOU-DEV-${this.nextId++}`,
      requesterName,
      requesterEmail: ownerEmail,
      departmentId: request.departmentId,
      departmentName: request.departmentName,
      purpose: request.purpose,
      description: request.description,
      amount: request.amount,
      currency: 'USD',
      requestDate,
      requiredDate: request.requiredDate,
      additionalNotes: request.additionalNotes,
      attachment: request.attachment ? {
        id: `${existing?.id ?? 'IOU-DEV'}-attachment`,
        fileName: request.attachment.name,
        contentType: request.attachment.type,
        sizeBytes: request.attachment.size
      } : existing?.attachment,
      status,
      currentApprovalLevel: status === 'Draft' ? undefined : 'Department Approval',
      approvalWorkflow: this.workflow(status),
      approvalHistory: status === 'Pending' ? [{
        id: `${existing?.id ?? 'IOU-DEV'}-submitted`, actorName: requesterName, actorRole: 'Employee', action: 'Submitted',
        approvalLevel: 'Requester', createdAt: new Date().toISOString()
      }] : existing?.approvalHistory ?? [],
      ownerEmail
    };

    const updatedRecords = existing
      ? records.map((iou) => iou.id === existing.id ? record : iou)
      : [record, ...records];
    this.recordsByOwner.set(key, updatedRecords);
    return this.clone(record);
  }

  private workflow(status: 'Draft' | 'Pending'): IOU['approvalWorkflow'] {
    return [
      { name: 'Requester', state: 'complete' },
      { name: 'Department Approval', state: status === 'Pending' ? 'current' : 'upcoming' },
      { name: 'Finance Approval', state: 'upcoming' },
      { name: 'Final Approval', state: 'upcoming' }
    ];
  }

  private clone(iou: IOU): IOU {
    return { ...iou, attachment: iou.attachment ? { ...iou.attachment } : undefined, approvalWorkflow: iou.approvalWorkflow.map((step) => ({ ...step })), approvalHistory: iou.approvalHistory.map((entry: IOUApprovalHistory) => ({ ...entry })) };
  }

  private normalizeEmail(email: string): string { return email.trim().toLocaleLowerCase(); }
}