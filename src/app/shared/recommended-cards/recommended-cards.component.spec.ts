import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedCardsComponent } from './recommended-cards.component';

describe('RecommendedCardsComponent', () => {
  let component: RecommendedCardsComponent;
  let fixture: ComponentFixture<RecommendedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
