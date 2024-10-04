import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerEquipoComponent } from './banner-equipo.component';

describe('BannerEquipoComponent', () => {
  let component: BannerEquipoComponent;
  let fixture: ComponentFixture<BannerEquipoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BannerEquipoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
