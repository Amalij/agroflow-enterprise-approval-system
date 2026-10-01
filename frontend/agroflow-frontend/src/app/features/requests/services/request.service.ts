import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';

import { RequestFilters, RequestRecord } from '../models/request.model';

@Injectable({ providedIn: 'root' })
export class RequestService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/requests';

  getMyRequests(ownerEmail: string): Observable<RequestRecord[]> {
    return this.http.get<RequestRecord[]>(`${this.apiUrl}/mine`).pipe(
      map((requests) => requests.filter((request) => this.belongsTo(request, ownerEmail)))
    );
  }

  getMyRequest(requestId: string, ownerEmail: string): Observable<RequestRecord> {
    return this.http.get<RequestRecord>(`${this.apiUrl}/${encodeURIComponent(requestId)}`).pipe(
      map((request) => {
        if (!this.belongsTo(request, ownerEmail)) throw new Error('Request not found.');
        return request;
      })
    );
  }

  cancelRequest(requestId: string, ownerEmail: string): Observable<RequestRecord> {
    return this.http.post<RequestRecord>(`${this.apiUrl}/${encodeURIComponent(requestId)}/cancel`, {}).pipe(
      map((request) => {
        if (!this.belongsTo(request, ownerEmail)) throw new Error('Request not found.');
        return request;
      })
    );
  }

  matchesFilters(request: RequestRecord, filters: RequestFilters): boolean {
    const searchText = `${request.id} ${request.type} ${request.title} ${request.description} ${request.departmentName}`.toLocaleLowerCase();
    if (filters.query && !searchText.includes(filters.query.trim().toLocaleLowerCase())) return false;
    if (filters.type !== 'all' && request.type !== filters.type) return false;
    if (filters.status !== 'all' && request.status !== filters.status) return false;

    const submittedDate = request.submittedAt.slice(0, 10);
    if (filters.dateFrom && submittedDate < filters.dateFrom) return false;
    if (filters.dateTo && submittedDate > filters.dateTo) return false;
    return true;
  }

  private belongsTo(request: RequestRecord, ownerEmail: string): boolean {
    return request.ownerEmail.trim().toLocaleLowerCase() === ownerEmail.trim().toLocaleLowerCase();
  }
}