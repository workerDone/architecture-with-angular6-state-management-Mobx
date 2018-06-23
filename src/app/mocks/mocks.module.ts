import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { StatsTokensInterceptor } from './teams-info/teams-info.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: StatsTokensInterceptor,
      multi: true
    }
  ]
})
export class MocksModule { }
