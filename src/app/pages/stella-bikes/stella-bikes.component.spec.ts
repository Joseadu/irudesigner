import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StellaBikesComponent } from './stella-bikes.component';

describe('StellaBikesComponent', () => {
  let component: StellaBikesComponent;
  let fixture: ComponentFixture<StellaBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StellaBikesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StellaBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
