import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievementsIncentivesComponent } from './achievements-incentives.component';

describe('AchievementsIncentivesComponent', () => {
  let component: AchievementsIncentivesComponent;
  let fixture: ComponentFixture<AchievementsIncentivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AchievementsIncentivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AchievementsIncentivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
