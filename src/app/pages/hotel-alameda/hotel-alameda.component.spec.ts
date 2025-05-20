import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelAlamedaComponent } from './hotel-alameda.component';

describe('HotelAlamedaComponent', () => {
  let component: HotelAlamedaComponent;
  let fixture: ComponentFixture<HotelAlamedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelAlamedaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelAlamedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
