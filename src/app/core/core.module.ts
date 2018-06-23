import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationModule } from './navigation/navigation.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { ApiModule } from './api/api.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ModalWindowModule } from './modal-window/modal-window.module';

@NgModule({
  imports: [
    CommonModule,
    NavigationModule,
    InterceptorsModule,
    ApiModule,
    UserModule,
    AuthModule,
    ModalWindowModule,
  ],
  declarations: []
})
export class CoreModule { }
