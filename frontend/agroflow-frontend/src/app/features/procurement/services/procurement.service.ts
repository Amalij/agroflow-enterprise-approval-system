import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ProcurementDecisionPayload, ProcurementFilters, ProcurementRequest, ProcurementRequestPayload } from '../models/procurement.model';

@Injectable({ providedIn: 'root' })
export class ProcurementService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/procurement-requests';

  getMyRequests(ownerEmail: string): Observable<ProcurementRequest[]> {
    return this.http.get<ProcurementRequest[]>(`${this.apiUrl}/mine`).pipe(map((requests) => requests.filter((request) => this.belongsTo(request, ownerEmail))));
  }

  getRequest(requestId: string, userEmail: string, canApprove: boolean): Observable<ProcurementRequest> {
    return this.http.get<ProcurementRequest>(`${this.apiUrl}/${encodeURIComponent(requestId)}`).pipe(map((request) => {
      if (!this.belongsTo(request, userEmail) && !(canApprove && this.isAssignedTo(request, userEmail))) throw new Error('Request not found.');
      return request;
    }));
  }

  saveDraft(payload: ProcurementRequestPayload): Observable<ProcurementRequest> {
    return this.http.post<ProcurementRequest>(`${this.apiUrl}/drafts`, this.toFormData(payload));
  }

  updateDraft(requestId: string, payload: ProcurementRequestPayload): Observable<ProcurementRequest> {
    return this.http.put<ProcurementRequest>(`${this.apiUrl}/${encodeURIComponent(requestId)}/draft`, this.toFormData(payload));
  }

  submit(payload: ProcurementRequestPayload): Observable<ProcurementRequest> {
    return this.http.post<ProcurementRequest>(`${this.apiUrl}/submissions`, this.toFormData(payload));
  }

  submitDraft(requestId: string, payload: ProcurementRequestPayload): Observable<ProcurementRequest> {
    return this.http.post<ProcurementRequest>(`${this.apiUrl}/${encodeURIComponent(requestId)}/submit`, this.toFormData(payload));
  }

  cancel(requestId: string): Observable<ProcurementRequest> {
    return this.http.post<ProcurementRequest>(`${this.apiUrl}/${encodeURIComponent(requestId)}/cancel`, {});
  }

  decide(requestId: string, payload: ProcurementDecisionPayload): Observable<ProcurementRequest> {
    return this.http.post<ProcurementRequest>(`${this.apiUrl}/${encodeURIComponent(requestId)}/decisions`, payload);
  }

  calculateEstimatedTotal(quantity: number, estimatedUnitPrice: number): number {
    return Math.round(quantity * estimatedUnitPrice * 100) / 100;
  }

  matchesFilters(request: ProcurementRequest, filters: ProcurementFilters): boolean {
    const query = `${request.id} ${request.requesterName} ${request.departmentName} ${request.requestTitle} ${request.item.description}`.toLocaleLowerCase();
    const requestDate = request.requestDate.slice(0, 10);
    return (!filters.query || query.includes(filters.query.trim().toLocaleLowerCase()))
      && (filters.status === 'all' || request.status === filters.status)
      && (filters.department === 'all' || request.departmentName === filters.department)
      && (!filters.dateFrom || requestDate >= filters.dateFrom)
      && (!filters.dateTo || requestDate <= filters.dateTo);
  }

  private belongsTo(request: ProcurementRequest, email: string): boolean {
    return request.ownerEmail.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase();
  }

  private isAssignedTo(request: ProcurementRequest, email: string): boolean {
    return request.assignedApproverEmail?.trim().toLocaleLowerCase() === email.trim().toLocaleLowerCase();
  }

  private toFormData(payload: ProcurementRequestPayload): FormData {
    const formData = new FormData();
    formData.append('requestTitle', payload.requestTitle);
    formData.append('departmentId', String(payload.departmentId));
    formData.append('departmentName', payload.departmentName);
    formData.append('category', payload.category);
    formData.append('item', JSON.stringify(payload.item));
    formData.append('requiredDate', payload.requiredDate);
    formData.append('justification', payload.justification);
    formData.append('preferredSupplier', payload.preferredSupplier);
    formData.append('additionalNotes', payload.additionalNotes);
    if (payload.attachment) formData.append('attachment', payload.attachment, payload.attachment.name);
    return formData;
  }
}