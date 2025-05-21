import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePackagingComponent } from './choose-packaging.component';

describe('ChoosePackagingComponent', () => {
  let component: ChoosePackagingComponent;
  let fixture: ComponentFixture<ChoosePackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoosePackagingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoosePackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
