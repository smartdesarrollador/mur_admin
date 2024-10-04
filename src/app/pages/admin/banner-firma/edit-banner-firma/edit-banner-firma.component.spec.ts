import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBannerFirmaComponent } from './edit-banner-firma.component';

describe('EditBannerFirmaComponent', () => {
  let component: EditBannerFirmaComponent;
  let fixture: ComponentFixture<EditBannerFirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBannerFirmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBannerFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
