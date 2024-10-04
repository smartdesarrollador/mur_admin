import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSliderComentarioComponent } from './edit-slider-comentario.component';

describe('EditSliderComentarioComponent', () => {
  let component: EditSliderComentarioComponent;
  let fixture: ComponentFixture<EditSliderComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSliderComentarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSliderComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
