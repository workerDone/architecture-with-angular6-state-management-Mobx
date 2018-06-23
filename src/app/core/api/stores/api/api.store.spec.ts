import { TestBed, inject } from '@angular/core/testing';

import { ApiStore } from './api.store';

describe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiStore]
    });
  });

  it('should be created', inject([ApiStore], (service: ApiStore) => {
    expect(service).toBeTruthy();
  }));
});
