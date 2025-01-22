import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIndustriaComponent } from './create-industria.component';

describe('CreateIndustriaComponent', () => {
  let component: CreateIndustriaComponent;
  let fixture: ComponentFixture<CreateIndustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateIndustriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
