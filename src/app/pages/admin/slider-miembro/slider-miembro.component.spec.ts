import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMiembroComponent } from './slider-miembro.component';

describe('SliderMiembroComponent', () => {
  let component: SliderMiembroComponent;
  let fixture: ComponentFixture<SliderMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderMiembroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
