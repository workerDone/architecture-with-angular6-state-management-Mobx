import { Injectable } from '@angular/core';

import { Router } from '@angular/router';

@Injectable()
export class NavigationService {

  constructor(
    private router: Router,
  ) { }

  logOut() {
    this.router.navigate(['home/market']);
  }

  goToMain() {
    this.router.navigate(['home']);
  }

  linkToAddress(link) {
    this.router.navigate([link]);
  }
}
