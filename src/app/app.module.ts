import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MobxAngularModule } from 'mobx-angular';
import { HttpClientModule } from '@angular/common/http';
import { CountdownTimerModule } from 'ngx-countdown-timer';
import { ReactiveFormsModule } from '@angular/forms';

import { IntegrationModule } from './integration/integration.module';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { MocksModule } from './mocks/mocks.module';

import { TeamsModule } from './modules/teams/teams.module';
import { AccountModule } from './modules/account/account.module';
import { TransfersModule } from './modules/transfers/transfers.module';
import { UserModule } from './modules/user/user.module';

/*Integration*/
import { RavenModule } from './integration/raven/raven.module';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MobxAngularModule,
    HttpClientModule,
    ReactiveFormsModule,
    CountdownTimerModule.forRoot(),
    AppRoutingModule,
    IntegrationModule,
    CoreModule,
    SharedModule,
    RavenModule,
    MocksModule,
    TeamsModule,
    AccountModule,
    TransfersModule,
    UserModule
  ],
  providers: [],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
