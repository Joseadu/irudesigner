import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSingleComponent } from './slider-single.component';

describe('SliderSingleComponent', () => {
  let component: SliderSingleComponent;
  let fixture: ComponentFixture<SliderSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
