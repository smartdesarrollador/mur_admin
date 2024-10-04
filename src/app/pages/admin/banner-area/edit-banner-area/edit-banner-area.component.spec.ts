import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBannerAreaComponent } from './edit-banner-area.component';

describe('EditBannerAreaComponent', () => {
  let component: EditBannerAreaComponent;
  let fixture: ComponentFixture<EditBannerAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditBannerAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditBannerAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
