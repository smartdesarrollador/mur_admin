import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSliderMiembroComponent } from './edit-slider-miembro.component';

describe('EditSliderMiembroComponent', () => {
  let component: EditSliderMiembroComponent;
  let fixture: ComponentFixture<EditSliderMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSliderMiembroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSliderMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
