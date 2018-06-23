import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobxAngularModule } from 'mobx-angular';

import { ApiService } from './services/api/api.service';

import { ApiStore } from './stores/api/api.store';

@NgModule({
  imports: [
    CommonModule,
    MobxAngularModule
  ],
  providers: [
    ApiService,
    ApiStore
  ]
})
export class ApiModule { }
