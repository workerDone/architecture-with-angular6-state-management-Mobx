import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountService } from './services/account/account.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AccountService
  ],
})
export class AccountModule { }
