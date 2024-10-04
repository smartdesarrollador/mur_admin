import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFirmaComponent } from './banner-firma.component';

describe('BannerFirmaComponent', () => {
  let component: BannerFirmaComponent;
  let fixture: ComponentFixture<BannerFirmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerFirmaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerFirmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
