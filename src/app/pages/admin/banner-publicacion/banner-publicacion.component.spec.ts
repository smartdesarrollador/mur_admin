import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPublicacionComponent } from './banner-publicacion.component';

describe('BannerPublicacionComponent', () => {
  let component: BannerPublicacionComponent;
  let fixture: ComponentFixture<BannerPublicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerPublicacionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerPublicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
