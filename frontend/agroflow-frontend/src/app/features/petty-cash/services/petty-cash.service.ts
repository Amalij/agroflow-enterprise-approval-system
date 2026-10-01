import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { PettyCashDecisionPayload, PettyCashFilters, PettyCashRequest, PettyCashRequestPayload } from '../models/petty-cash.model';

@Injectable({ providedIn: 'root' })
export class PettyCashService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/petty-cash-requests';

  getMyRequests(ownerEmail: string): Observable<PettyCashRequest[]> {
    return this.http.get<PettyCashRequest[]>(`${this.apiUrl}/mine`).pipe(map((requests) => requests.filter((request) => this.belongsTo(request, ownerEmail))));
  }

  getRequest(requestId: string, userEmail: string, canApprove: boolean): Observable<PettyCashRequest> {
    return this.http.get<PettyCashRequest>(`${this.apiUrl}/${encodeURIComponent(requestId)}`).pipe(map((request) => {
      if (!this.belongsTo(request, userEmail) && !(canApprove && this.isAssignedTo(request, userEmail))) throw new Error('Request not found.');
      return request;
    }));
  }

  saveDraft(payload: PettyCashRequestPayload): Observable<PettyCashRequest> {
    return this.http.post<PettyCashRequest>(`${this.apiUrl}/drafts`, this.toFormData(payload));
  }

  updateDraft(requestId: string, payload: PettyCashRequestPayload): Observable<PettyCashRequest> {
    return this.http.put<PettyCashRequest>(`${this.apiUrl}/${encodeURIComponent(requestId)}/draft`, this.toFormData(payload));
  }

  submit(payload: PettyCashRequestPayload): Observable<PettyCashRequest> {
    return this.http.post<PettyCashRequest>(`${this.apiUrl}/submissions`, this.toFormData(payload));
  }

  submitDraft(requestId: string, payload: PettyCashRequestPayload): Observable<PettyCashRequest> {
    return this.http.post<PettyCashRequest>(`${this.apiUrl}/${encodeURIComponent(requestId)}/submit`, this.toFormData(payload));
  }

  cancel(requestId: string, comment = ''): Observable<PettyCashRequest> {
    return this.http.post<PettyCashRequest>(`${this.apiUrl}/${encodeURIComponent(requestId)}/cancel`, { comment });
  }

  decide(requestId: string, payload: PettyCashDecisionPayload): Observable<PettyCashRequest> {
    return this.http.post<PettyCashRequest>(`${this.apiUrl}/${encodeURIComponent(requestId)}/decisions`, payload);
  }

  matchesFilters(request: PettyCashRequest, filters: PettyCashFilters): boolean {
    const query = `${request.id} ${request.requesterName} ${request.departmentName} ${request.purpose} ${request.description}`.toLocaleLowerCase();
    const requestDate = request.requestDate.slice(0, 10);
    return (!filters.query || query.includes(filters.query.trim().toLocaleLowerCase()))
      && (filters.status === 'all' || request.status === filters.status)
      && (!filters.dateFrom || requestDate >= filters.dateFrom)
      && (!filters.dateTo || requestDate <= filters.dateTo);
  }

  private belongsTo(request: PettyCashRequest, email: string): boolean {
    return request.ownerEmail.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase();
  }

  private isAssignedTo(request: PettyCashRequest, email: string): boolean {
    return request.assignedApproverEmail?.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase();
  }

  private toFormData(payload: PettyCashRequestPayload): FormData {
    const body = new FormData();
    body.append('purpose', payload.purpose);
    body.append('description', payload.description);
    body.append('amount', String(payload.amount));
    body.append('expenseDate', payload.expenseDate);
    body.append('departmentId', String(payload.departmentId));
    body.append('departmentName', payload.departmentName);
    body.append('expenseCategory', payload.expenseCategory);
    body.append('additionalNotes', payload.additionalNotes);
    if (payload.attachment) body.append('attachment', payload.attachment, payload.attachment.name);
    return body;
  }
}