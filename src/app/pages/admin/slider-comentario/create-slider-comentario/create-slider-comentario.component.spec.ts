import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSliderComentarioComponent } from './create-slider-comentario.component';

describe('CreateSliderComentarioComponent', () => {
  let component: CreateSliderComentarioComponent;
  let fixture: ComponentFixture<CreateSliderComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSliderComentarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSliderComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
