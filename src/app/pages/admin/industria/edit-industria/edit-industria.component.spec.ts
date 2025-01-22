import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIndustriaComponent } from './edit-industria.component';

describe('EditIndustriaComponent', () => {
  let component: EditIndustriaComponent;
  let fixture: ComponentFixture<EditIndustriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditIndustriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditIndustriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
