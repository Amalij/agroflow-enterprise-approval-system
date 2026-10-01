import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { IOU, IOUDecisionPayload, IOUFilters, IOURequest } from '../models/iou.model';

@Injectable({ providedIn: 'root' })
export class IOUService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/ious';

  getMyIOUs(ownerEmail: string): Observable<IOU[]> {
    return this.http.get<IOU[]>(`${this.apiUrl}/mine`).pipe(map((ious) => ious.filter((iou) => this.belongsTo(iou, ownerEmail))));
  }

  getMyIOU(iouId: string, ownerEmail: string): Observable<IOU> {
    return this.http.get<IOU>(`${this.apiUrl}/${encodeURIComponent(iouId)}`).pipe(map((iou) => {
      if (!this.belongsTo(iou, ownerEmail)) throw new Error('IOU not found.');
      return iou;
    }));
  }

  getIOU(iouId: string, userEmail: string, canApprove: boolean): Observable<IOU> {
    return this.http.get<IOU>(`${this.apiUrl}/${encodeURIComponent(iouId)}`).pipe(map((iou) => {
      const isOwner = this.belongsTo(iou, userEmail);
      const isAssignedApprover = canApprove && iou.assignedApproverEmail?.trim().toLocaleLowerCase() === userEmail.trim().toLocaleLowerCase();
      if (!isOwner && !isAssignedApprover) throw new Error('IOU not found.');
      return iou;
    }));
  }

  saveDraft(request: IOURequest): Observable<IOU> {
    return this.http.post<IOU>(`${this.apiUrl}/drafts`, this.toFormData(request));
  }

  updateDraft(iouId: string, request: IOURequest): Observable<IOU> {
    return this.http.put<IOU>(`${this.apiUrl}/${encodeURIComponent(iouId)}/draft`, this.toFormData(request));
  }

  submitForApproval(request: IOURequest): Observable<IOU> {
    return this.http.post<IOU>(`${this.apiUrl}/submissions`, this.toFormData(request));
  }

  submitDraftForApproval(iouId: string, request: IOURequest): Observable<IOU> {
    return this.http.post<IOU>(`${this.apiUrl}/${encodeURIComponent(iouId)}/submit`, this.toFormData(request));
  }

  cancelIOU(iouId: string, comment = ''): Observable<IOU> {
    return this.http.post<IOU>(`${this.apiUrl}/${encodeURIComponent(iouId)}/cancel`, { comment });
  }

  decide(iouId: string, payload: IOUDecisionPayload): Observable<IOU> {
    return this.http.post<IOU>(`${this.apiUrl}/${encodeURIComponent(iouId)}/decisions`, payload);
  }

  matchesFilters(iou: IOU, filters: IOUFilters): boolean {
    const queryText = `${iou.id} ${iou.requesterName} ${iou.departmentName} ${iou.purpose} ${iou.description}`.toLocaleLowerCase();
    const requestDate = iou.requestDate.slice(0, 10);
    return (!filters.query || queryText.includes(filters.query.trim().toLocaleLowerCase()))
      && (filters.status === 'all' || iou.status === filters.status)
      && (!filters.dateFrom || requestDate >= filters.dateFrom)
      && (!filters.dateTo || requestDate <= filters.dateTo);
  }

  private belongsTo(iou: IOU, ownerEmail: string): boolean {
    return iou.ownerEmail.trim().toLocaleLowerCase() === ownerEmail.trim().toLocaleLowerCase();
  }

  private toFormData(request: IOURequest): FormData {
    const formData = new FormData();
    formData.append('purpose', request.purpose);
    formData.append('description', request.description);
    formData.append('amount', String(request.amount));
    formData.append('requiredDate', request.requiredDate);
    formData.append('departmentId', String(request.departmentId));
    formData.append('departmentName', request.departmentName);
    formData.append('additionalNotes', request.additionalNotes);
    if (request.attachment) formData.append('attachment', request.attachment, request.attachment.name);
    return formData;
  }
}