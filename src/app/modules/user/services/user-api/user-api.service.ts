import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { action } from 'mobx-angular';

import { ApiService } from '../../../../core/api/services/api/api.service';

import { UserModel } from '../../models/user/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(
    private apiService: ApiService
  ) { }

  @action getUser(): Observable<UserModel> {
    return this.apiService.get('user/info');
  }

  @action updateUser(user: UserModel): Observable<UserModel> {
    return this.apiService.post('user/update', user)
  }
}
