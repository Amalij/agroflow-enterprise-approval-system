import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ApprovalActionPayload, ApprovalFilters, ApprovalRecord } from '../models/approval.model';

@Injectable({ providedIn: 'root' })
export class ApprovalService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/approvals';

  getAssignedPendingApprovals(approverEmail: string): Observable<ApprovalRecord[]> {
    return this.http.get<ApprovalRecord[]>(`${this.apiUrl}/pending`).pipe(
      map((approvals) => approvals.filter((approval) => this.isAssignedTo(approval, approverEmail) && this.isPending(approval)))
    );
  }

  getAssignedApproval(approvalId: string, approverEmail: string): Observable<ApprovalRecord> {
    return this.http.get<ApprovalRecord>(`${this.apiUrl}/${encodeURIComponent(approvalId)}`).pipe(
      map((approval) => {
        if (!this.isAssignedTo(approval, approverEmail)) throw new Error('Approval not found.');
        return approval;
      })
    );
  }

  submitDecision(approvalId: string, approverEmail: string, payload: ApprovalActionPayload): Observable<ApprovalRecord> {
    return this.http.post<ApprovalRecord>(`${this.apiUrl}/${encodeURIComponent(approvalId)}/decision`, payload).pipe(
      map((approval) => {
        if (!this.isAssignedTo(approval, approverEmail)) throw new Error('Approval not found.');
        return approval;
      })
    );
  }

  matchesFilters(approval: ApprovalRecord, filters: ApprovalFilters): boolean {
    const query = `${approval.id} ${approval.requestType} ${approval.title} ${approval.requester.fullName} ${approval.requester.email} ${approval.departmentName}`.toLocaleLowerCase();
    return (!filters.query || query.includes(filters.query.trim().toLocaleLowerCase()))
      && (filters.requestType === 'all' || approval.requestType === filters.requestType)
      && (filters.department === 'all' || approval.departmentName === filters.department)
      && (filters.status === 'all' || approval.status === filters.status)
      && (filters.approvalLevel === 'all' || approval.currentApprovalLevel === filters.approvalLevel);
  }

  private isAssignedTo(approval: ApprovalRecord, email: string): boolean {
    return approval.assignedApproverEmail.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase();
  }

  private isPending(approval: ApprovalRecord): boolean {
    return approval.status === 'Pending' || approval.status === 'Changes Requested';
  }
}