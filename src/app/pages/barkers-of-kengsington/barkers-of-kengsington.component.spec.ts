import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarkersOfKengsingtonComponent } from './barkers-of-kengsington.component';

describe('BarkersOfKengsingtonComponent', () => {
  let component: BarkersOfKengsingtonComponent;
  let fixture: ComponentFixture<BarkersOfKengsingtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BarkersOfKengsingtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarkersOfKengsingtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
