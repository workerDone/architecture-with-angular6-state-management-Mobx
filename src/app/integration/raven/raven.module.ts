import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorHandler } from '@angular/core';
import * as Raven from 'raven-js';

import { RevenService } from './services/reven/reven.service';

const captureException = Raven.captureException.bind(Raven);

export class RavenErrorHandler implements ErrorHandler {
  handleError(err:any) : void {
    captureException(err);
  }
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    RevenService,
    {
      provide: ErrorHandler,
      useClass: RavenErrorHandler
    }
  ],
})
export class RavenModule { }
