import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MobxAngularModule } from 'mobx-angular';

import { MyAccountRoutingModule } from './my-account-routing.module';

import { AccountComponent } from './components/account/account.component';
import { CountryComponent } from './components/country/country.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MobxAngularModule,
    MyAccountRoutingModule
  ],
  declarations: [
     AccountComponent,
     CountryComponent,
     SettingsComponent,
    ]
})
export class MyAccountModule { }
