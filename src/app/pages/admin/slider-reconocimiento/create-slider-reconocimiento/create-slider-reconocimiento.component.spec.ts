import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSliderReconocimientoComponent } from './create-slider-reconocimiento.component';

describe('CreateSliderReconocimientoComponent', () => {
  let component: CreateSliderReconocimientoComponent;
  let fixture: ComponentFixture<CreateSliderReconocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSliderReconocimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSliderReconocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
