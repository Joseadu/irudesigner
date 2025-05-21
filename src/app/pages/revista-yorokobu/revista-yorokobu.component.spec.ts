import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevistaYorokobuComponent } from './revista-yorokobu.component';

describe('RevistaYorokobuComponent', () => {
  let component: RevistaYorokobuComponent;
  let fixture: ComponentFixture<RevistaYorokobuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevistaYorokobuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevistaYorokobuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
