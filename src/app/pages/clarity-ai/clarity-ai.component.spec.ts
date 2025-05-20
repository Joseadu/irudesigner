import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClarityAIComponent } from './clarity-ai.component';

describe('ClarityAIComponent', () => {
  let component: ClarityAIComponent;
  let fixture: ComponentFixture<ClarityAIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClarityAIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClarityAIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
