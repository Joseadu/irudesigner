import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElConventoCentroSocialComponent } from './el-convento-centro-social.component';

describe('ElConventoCentroSocialComponent', () => {
  let component: ElConventoCentroSocialComponent;
  let fixture: ComponentFixture<ElConventoCentroSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElConventoCentroSocialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElConventoCentroSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
