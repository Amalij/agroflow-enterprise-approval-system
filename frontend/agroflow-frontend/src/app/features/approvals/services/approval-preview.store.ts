import { Injectable } from '@angular/core';

import { createApprovalPreviewData } from '../data/approval-preview.data';
import { ApprovalActionPayload, ApprovalRecord, ApprovalStatus } from '../models/approval.model';

@Injectable({ providedIn: 'root' })
export class ApprovalPreviewStore {
  private readonly recordsByApprover = new Map<string, ApprovalRecord[]>();

  getForApprover(approverEmail: string): ApprovalRecord[] {
    const key = this.normalizeEmail(approverEmail);
    let records = this.recordsByApprover.get(key);
    if (!records) {
      records = createApprovalPreviewData(approverEmail);
      this.recordsByApprover.set(key, records);
    }
    return records.map((record) => this.clone(record));
  }

  getById(approverEmail: string, approvalId: string): ApprovalRecord | undefined {
    return this.getForApprover(approverEmail).find((record) => record.id === approvalId);
  }

  decide(approverEmail: string, approvalId: string, payload: ApprovalActionPayload, actorName: string): ApprovalRecord | undefined {
    const key = this.normalizeEmail(approverEmail);
    const records = this.recordsByApprover.get(key) ?? createApprovalPreviewData(approverEmail);
    const record = records.find((item) => item.id === approvalId && this.normalizeEmail(item.assignedApproverEmail) === key);
    if (!record || !['Pending', 'Changes Requested'].includes(record.status)) return undefined;

    const result: ApprovalStatus = payload.decision === 'approve'
      ? 'Approved'
      : payload.decision === 'reject' ? 'Rejected' : 'Changes Requested';
    const action = payload.decision === 'approve' ? 'Approved' : payload.decision === 'reject' ? 'Rejected' : 'Returned';
    record.status = result;
    record.history = [...record.history, {
      id: `${record.id}-history-${record.history.length + 1}`,
      actorName,
      actorRole: 'Approver',
      action,
      level: record.currentApprovalLevel,
      comment: payload.comment,
      createdAt: new Date().toISOString()
    }];
    this.recordsByApprover.set(key, records);
    return this.clone(record);
  }

  private clone(record: ApprovalRecord): ApprovalRecord {
    return { ...record, requester: { ...record.requester }, attachments: record.attachments.map((item) => ({ ...item })), history: record.history.map((item) => ({ ...item })) };
  }

  private normalizeEmail(email: string): string { return email.trim().toLocaleLowerCase(); }
}