import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBannerPublicacionComponent } from './edit-banner-publicacion.component';

describe('EditBannerPublicacionComponent', () => {
  let component: EditBannerPublicacionComponent;
  let fixture: ComponentFixture<EditBannerPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBannerPublicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBannerPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
