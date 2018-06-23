import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { action } from 'mobx-angular';

import { ApiService } from '../../../api/services/api/api.service';
import { JwtService } from '../../jwt/jwt.service';

import { LoginRequestModel } from '../../models/login-request/login-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private apiService: ApiService,
    private jwtService: JwtService
  ) { }

  @action login(loginRequest: LoginRequestModel): Observable<{ token: string }> {
    return this.apiService
      .post('user/login', loginRequest)
      .pipe(
        tap(response => {
          this.jwtService.saveToken(response.token);
        })
      );
  }
}
