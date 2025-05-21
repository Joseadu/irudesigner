import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NixonComponent } from './nixon.component';

describe('NixonComponent', () => {
  let component: NixonComponent;
  let fixture: ComponentFixture<NixonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NixonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NixonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
