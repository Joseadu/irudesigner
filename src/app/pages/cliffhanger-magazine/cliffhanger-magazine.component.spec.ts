import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliffhangerMagazineComponent } from './cliffhanger-magazine.component';

describe('CliffhangerMagazineComponent', () => {
  let component: CliffhangerMagazineComponent;
  let fixture: ComponentFixture<CliffhangerMagazineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CliffhangerMagazineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CliffhangerMagazineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
