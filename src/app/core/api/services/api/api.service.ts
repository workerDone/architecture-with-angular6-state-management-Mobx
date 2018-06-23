import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { action, computed } from 'mobx-angular';

import { ApiStore } from '../../stores/api/api.store';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private apiStore: ApiStore
  ) { }

  @action setApiUrlDomain(value: string) {
    this.apiStore.setApiUrlDomain(value);
  }

  @action get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.apiStore.apiUrl}/${path}`, { params });
  }

  @action put(path: string, body: Object = {}): Observable<any> {
    return this.http.put(`${this.apiStore.apiUrl}/${path}`, body);
  }

  @action post(path: string, body: Object = {}): Observable<any> {
    return this.http.post(`${this.apiStore.apiUrl}/${path}`, body);
  }

  @action delete(path: string): Observable<any> {
    return this.http.delete(`${this.apiStore.apiUrl}/${path}`);
  }
}
