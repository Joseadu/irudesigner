import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalViaCrucisComponent } from './festival-via-crucis.component';

describe('FestivalViaCrucisComponent', () => {
  let component: FestivalViaCrucisComponent;
  let fixture: ComponentFixture<FestivalViaCrucisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FestivalViaCrucisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FestivalViaCrucisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
