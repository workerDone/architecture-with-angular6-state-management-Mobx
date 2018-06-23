import { Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { Router } from "@angular/router";

import { AccountService } from '../../../../modules/account/services/account/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  isCheked = false;
  isLoading: boolean;

  constructor(
    private router: Router,
    private accountService: AccountService
  ) { }

  ngOnInit() {
    this.init();

    this.isCheked = this.router.url === '/account/settings';
  }

  init() {
    this.isLoading = true;

    if (this.accountService.checkToAccount()) {
      this.accountService
        .getUser()
        .pipe(
          tap(() => {
            this.isLoading = false;
          }),
          catchError(error => {
            this.accountService.destroyToken();
            this.accountService.moveSignIn();

            this.isLoading = false;

            return error;
          })
        )
        .subscribe();
    } else {
      this.isLoading = false;
    }
  }

  logOut() {
    this.accountService.logOut();
  }

  moveLink(e) {
    this.accountService.moveLink(e);
  }

  get isLogged(): boolean {
    return this.accountService.isLogged;
  }
}
