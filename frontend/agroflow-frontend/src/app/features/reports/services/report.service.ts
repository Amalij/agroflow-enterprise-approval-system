import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable, isDevMode, signal } from '@angular/core';
import { catchError, finalize, map, Observable, of, tap, throwError } from 'rxjs';

import { RequestType } from '../../requests/models/request.model';
import { REPORT_PREVIEW_DATA } from '../data/report-preview.data';
import { ApprovalActivity, DepartmentReport, ReportDataset, ReportFilters, ReportRequestRecord, ReportSnapshot, ReportStatus, ReportStatusCount, ReportSummary, RequestTypeReport } from '../models/report.model';

const REQUEST_TYPES: readonly RequestType[] = ['IOU', 'Petty Cash', 'Procurement'];

@Injectable({ providedIn: 'root' })
export class ReportService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/reports';

  readonly loading = signal(false);
  readonly previewMode = signal(false);
  readonly errorMessage = signal('');
  readonly departmentOptions = signal<string[]>([]);
  readonly snapshot = signal<ReportSnapshot | null>(null);

  loadReport(filters: ReportFilters): Observable<ReportSnapshot> {
    this.loading.set(true);
    this.errorMessage.set('');
    return this.http.get<ReportDataset>(this.apiUrl, { params: this.toHttpParams(filters) }).pipe(
      map((dataset) => {
        this.previewMode.set(false);
        this.updateDepartmentOptions(dataset);
        return this.aggregate(dataset, filters);
      }),
      catchError((error: unknown) => {
        if (isDevMode()) {
          this.previewMode.set(true);
          this.updateDepartmentOptions(REPORT_PREVIEW_DATA);
          return of(this.aggregate(REPORT_PREVIEW_DATA, filters));
        }
        this.previewMode.set(false);
        this.errorMessage.set('Reports could not be loaded. Please try again later.');
        return throwError(() => error);
      }),
      tap((snapshot) => this.snapshot.set(snapshot)),
      finalize(() => this.loading.set(false))
    );
  }

  buildPreview(filters: ReportFilters): ReportSnapshot {
    return this.aggregate(REPORT_PREVIEW_DATA, filters);
  }

  private aggregate(dataset: ReportDataset, filters: ReportFilters): ReportSnapshot {
    const requests = dataset.requests.filter((request) => this.matchesRequest(request, filters));
    const requestIds = new Set(requests.map((request) => request.requestId));
    const activities = dataset.approvalActivities.filter((activity) => requestIds.has(activity.requestId));

    const statusCounts = this.createStatusCounts();
    for (const request of requests) statusCounts[request.status] += 1;

    const summary: ReportSummary = {
      totalRequests: requests.length,
      pendingRequests: statusCounts.Pending,
      approvedRequests: statusCounts.Approved,
      rejectedRequests: statusCounts.Rejected,
      totalRequestedAmount: this.sumAmounts(requests),
      statusCounts
    };

    return {
      summary,
      statusOverview: this.createStatusOverview(statusCounts, requests.length),
      departmentReports: this.groupByDepartment(requests),
      requestTypeReports: this.groupByRequestType(requests),
      approvalActivities: activities.sort((left, right) => Date.parse(right.date) - Date.parse(left.date))
    };
  }

  private matchesRequest(request: ReportRequestRecord, filters: ReportFilters): boolean {
    const matchesDepartment = filters.department === 'all' || request.department === filters.department;
    const matchesType = filters.requestType === 'all' || request.requestType === filters.requestType;
    const matchesStatus = filters.status === 'all' || request.status === filters.status;
    const matchesRequester = !filters.requestedBy || request.requester.toLocaleLowerCase().includes(filters.requestedBy.trim().toLocaleLowerCase());
    const requestDate = request.submittedAt.slice(0, 10);
    return matchesDepartment && matchesType && matchesStatus && matchesRequester
      && (!filters.dateFrom || requestDate >= filters.dateFrom)
      && (!filters.dateTo || requestDate <= filters.dateTo);
  }

  private createStatusCounts(): Record<ReportStatus, number> {
    return { Draft: 0, Pending: 0, Approved: 0, Rejected: 0, Returned: 0, Cancelled: 0, Completed: 0 };
  }

  private createStatusOverview(statusCounts: Record<ReportStatus, number>, total: number): ReportStatusCount[] {
    const statuses: ReportStatus[] = ['Draft', 'Pending', 'Approved', 'Rejected', 'Returned', 'Completed'];
    return statuses.map((status) => ({
      status,
      count: statusCounts[status],
      percentage: total ? Math.round(statusCounts[status] / total * 100) : 0
    }));
  }

  private updateDepartmentOptions(dataset: ReportDataset): void {
    this.departmentOptions.set([...new Set(dataset.requests.map((request) => request.department))].sort());
  }

  private groupByDepartment(requests: ReportRequestRecord[]): DepartmentReport[] {
    const groups = new Map<string, ReportRequestRecord[]>();
    for (const request of requests) groups.set(request.department, [...(groups.get(request.department) ?? []), request]);
    return [...groups.entries()].map(([department, records]) => ({
      department,
      totalRequests: records.length,
      pending: records.filter((record) => record.status === 'Pending').length,
      approved: records.filter((record) => record.status === 'Approved').length,
      rejected: records.filter((record) => record.status === 'Rejected').length,
      totalAmount: this.sumAmounts(records)
    })).sort((left, right) => left.department.localeCompare(right.department));
  }

  private groupByRequestType(requests: ReportRequestRecord[]): RequestTypeReport[] {
    return REQUEST_TYPES.map((requestType) => {
      const records = requests.filter((request) => request.requestType === requestType);
      return {
        requestType,
        totalRequests: records.length,
        pending: records.filter((record) => record.status === 'Pending').length,
        approved: records.filter((record) => record.status === 'Approved').length,
        rejected: records.filter((record) => record.status === 'Rejected').length,
        totalAmount: this.sumAmounts(records)
      };
    });
  }

  private sumAmounts(requests: ReportRequestRecord[]): number {
    return Math.round(requests.reduce((total, request) => total + request.amount, 0) * 100) / 100;
  }

  private toHttpParams(filters: ReportFilters): HttpParams {
    let params = new HttpParams();
    for (const [key, value] of Object.entries(filters)) {
      if (value && value !== 'all') params = params.set(key, value);
    }
    return params;
  }
}