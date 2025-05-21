import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortadaCursivasComponent } from './portada-cursivas.component';

describe('PortadaCursivasComponent', () => {
  let component: PortadaCursivasComponent;
  let fixture: ComponentFixture<PortadaCursivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortadaCursivasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortadaCursivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
