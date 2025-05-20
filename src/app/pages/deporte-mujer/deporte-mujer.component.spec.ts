import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeporteMujerComponent } from './deporte-mujer.component';

describe('DeporteMujerComponent', () => {
  let component: DeporteMujerComponent;
  let fixture: ComponentFixture<DeporteMujerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeporteMujerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeporteMujerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
