import { TestBed, inject } from '@angular/core/testing';

import { HowToPlayService } from './how-to-play.service';

describe('HowToPlayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HowToPlayService]
    });
  });

  it('should be created', inject([HowToPlayService], (service: HowToPlayService) => {
    expect(service).toBeTruthy();
  }));
});
