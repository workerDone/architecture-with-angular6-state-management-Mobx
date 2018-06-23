import { TestBed, inject } from '@angular/core/testing';

import { ResultsApiService } from './results-api.service';

describe('ResultsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResultsApiService]
    });
  });

  it('should be created', inject([ResultsApiService], (service: ResultsApiService) => {
    expect(service).toBeTruthy();
  }));
});
