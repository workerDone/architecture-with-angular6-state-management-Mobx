import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';

import { teamsInfo } from './teams-info.mock-data';

@Injectable({
  providedIn: 'root'
})
export class StatsTokensInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/api/teams-info') && request.method === 'GET') {
      return of(
        new HttpResponse({
          status: 200,
          body: teamsInfo
        })
      )
    } else {
      return next.handle(request);
    }
  }
}
