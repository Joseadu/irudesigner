import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestauranteYakiComponent } from './restaurante-yaki.component';

describe('RestauranteYakiComponent', () => {
  let component: RestauranteYakiComponent;
  let fixture: ComponentFixture<RestauranteYakiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RestauranteYakiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestauranteYakiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
