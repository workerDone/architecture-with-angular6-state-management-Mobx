import { Injectable } from '@angular/core';

import { ApiService } from '../../api/services/api/api.service';

@Injectable()
export class UserService {

  constructor(
    private apiService: ApiService,
  ) { }

  man() {
    return  this.apiService.get('1');
  }
}
