import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSliderReconocimientoComponent } from './edit-slider-reconocimiento.component';

describe('EditSliderReconocimientoComponent', () => {
  let component: EditSliderReconocimientoComponent;
  let fixture: ComponentFixture<EditSliderReconocimientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSliderReconocimientoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSliderReconocimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
