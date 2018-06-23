import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MobxAngularModule } from 'mobx-angular';

import { JwtInterceptor } from './interceptors/jwt/jwt.interceptor';
import { JwtService } from './jwt/jwt.service';

@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule
  ],
  providers: [
    JwtService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  declarations: []
})
export class AuthModule { }
