import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaDePrensaComponent } from './sala-de-prensa.component';

describe('SalaDePrensaComponent', () => {
  let component: SalaDePrensaComponent;
  let fixture: ComponentFixture<SalaDePrensaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalaDePrensaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalaDePrensaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
