import { Injectable } from '@angular/core';

import { createRequestPreviewData } from '../data/request-preview.data';
import { RequestRecord } from '../models/request.model';

@Injectable({ providedIn: 'root' })
export class RequestPreviewStore {
  private readonly recordsByOwner = new Map<string, RequestRecord[]>();

  getForOwner(ownerEmail: string): RequestRecord[] {
    const ownerKey = this.normalizeEmail(ownerEmail);
    let records = this.recordsByOwner.get(ownerKey);
    if (!records) {
      records = createRequestPreviewData(ownerEmail);
      this.recordsByOwner.set(ownerKey, records);
    }
    return records.filter((request) => this.normalizeEmail(request.ownerEmail) === ownerKey).map((request) => ({ ...request }));
  }

  getById(ownerEmail: string, requestId: string): RequestRecord | undefined {
    return this.getForOwner(ownerEmail).find((request) => request.id === requestId);
  }

  cancel(ownerEmail: string, requestId: string): RequestRecord | undefined {
    const ownerKey = this.normalizeEmail(ownerEmail);
    const records = this.recordsByOwner.get(ownerKey) ?? createRequestPreviewData(ownerEmail);
    const request = records.find((record) => record.id === requestId && this.normalizeEmail(record.ownerEmail) === ownerKey);
    if (!request || !['Draft', 'Pending'].includes(request.status)) return undefined;
    request.status = 'Cancelled';
    this.recordsByOwner.set(ownerKey, records);
    return { ...request };
  }

  private normalizeEmail(email: string): string {
    return email.trim().toLocaleLowerCase();
  }
}