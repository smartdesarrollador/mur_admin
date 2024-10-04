import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderReconocimientoComponent } from './slider-reconocimiento.component';

describe('SliderReconocimientoComponent', () => {
  let component: SliderReconocimientoComponent;
  let fixture: ComponentFixture<SliderReconocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderReconocimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderReconocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
