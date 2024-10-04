import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderComentarioComponent } from './slider-comentario.component';

describe('SliderComentarioComponent', () => {
  let component: SliderComentarioComponent;
  let fixture: ComponentFixture<SliderComentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderComentarioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderComentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
