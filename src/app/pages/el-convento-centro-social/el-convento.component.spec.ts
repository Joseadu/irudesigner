import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElConventoComponent } from './el-convento.component';


describe('ElConventoCentroSocialComponent', () => {
  let component: ElConventoComponent;
  let fixture: ComponentFixture<ElConventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElConventoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElConventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
