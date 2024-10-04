import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSliderMiembroComponent } from './create-slider-miembro.component';

describe('CreateSliderMiembroComponent', () => {
  let component: CreateSliderMiembroComponent;
  let fixture: ComponentFixture<CreateSliderMiembroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSliderMiembroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSliderMiembroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
