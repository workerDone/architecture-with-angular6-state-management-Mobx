import { TestBed, inject } from '@angular/core/testing';

import { AchievementsIncentivesApiService } from './achievements-incentives-api.service';

describe('AchievementsIncentivesApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AchievementsIncentivesApiService]
    });
  });

  it('should be created', inject([AchievementsIncentivesApiService], (service: AchievementsIncentivesApiService) => {
    expect(service).toBeTruthy();
  }));
});
