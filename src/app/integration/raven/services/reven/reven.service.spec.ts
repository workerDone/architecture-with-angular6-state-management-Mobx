import { TestBed, inject } from '@angular/core/testing';

import { RevenService } from './reven.service';

describe('RevenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevenService]
    });
  });

  it('should be created', inject([RevenService], (service: RevenService) => {
    expect(service).toBeTruthy();
  }));
});
