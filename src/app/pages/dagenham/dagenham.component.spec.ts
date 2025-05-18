import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DagenhamComponent } from './dagenham.component';

describe('DagenhamComponent', () => {
  let component: DagenhamComponent;
  let fixture: ComponentFixture<DagenhamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DagenhamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DagenhamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
