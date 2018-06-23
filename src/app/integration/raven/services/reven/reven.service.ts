import { Injectable } from '@angular/core';
import * as Raven from 'raven-js';

@Injectable()
export class RevenService {

  constructor() { }

  init(dsn: string) {
    const config = Raven.config.bind(Raven);

    config(dsn).install();
  }
}
