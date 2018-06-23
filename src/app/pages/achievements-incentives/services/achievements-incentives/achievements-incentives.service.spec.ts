import { TestBed, inject } from '@angular/core/testing';

import { AchievementsIncentivesService } from './achievements-incentives.service';

describe('AchievementsIncentivesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AchievementsIncentivesService]
    });
  });

  it('should be created', inject([AchievementsIncentivesService], (service: AchievementsIncentivesService) => {
    expect(service).toBeTruthy();
  }));
});
