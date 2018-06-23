import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsOfServiceRoutingModule } from './terms-of-service-routing.module';

import { TermsOfServiceComponent } from './components/terms-of-service/terms-of-service.component';

@NgModule({
  imports: [
    CommonModule,
    TermsOfServiceRoutingModule
  ],
  declarations: [TermsOfServiceComponent]
})
export class TermsOfServiceModule { }
