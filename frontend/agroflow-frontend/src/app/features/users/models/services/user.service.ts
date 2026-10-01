import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { UserRecord, UserWrite } from '../user.model';

@Injectable({ providedIn: 'root' })
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:8080/api/users';

  getUsers(): Observable<UserRecord[]> {
    return this.http.get<UserRecord[]>(this.apiUrl);
  }

  createUser(user: UserWrite): Observable<UserRecord> {
    return this.http.post<UserRecord>(this.apiUrl, user);
  }

  updateUser(id: number, user: UserWrite): Observable<UserRecord> {
    return this.http.put<UserRecord>(`${this.apiUrl}/${id}`, user);
  }
}