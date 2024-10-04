import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBannerEquipoComponent } from './edit-banner-equipo.component';

describe('EditBannerEquipoComponent', () => {
  let component: EditBannerEquipoComponent;
  let fixture: ComponentFixture<EditBannerEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBannerEquipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBannerEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
