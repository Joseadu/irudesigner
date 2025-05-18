import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcilioComponent } from './concilio.component';

describe('ConcilioComponent', () => {
  let component: ConcilioComponent;
  let fixture: ComponentFixture<ConcilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcilioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConcilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
