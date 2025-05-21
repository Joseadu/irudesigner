import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekendFestivalComponent } from './weekend-festival.component';

describe('WeekendFestivalComponent', () => {
  let component: WeekendFestivalComponent;
  let fixture: ComponentFixture<WeekendFestivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeekendFestivalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeekendFestivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
