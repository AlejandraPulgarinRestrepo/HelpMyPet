import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterIngresoComponent } from './footer-ingreso.component';

describe('FooterIngresoComponent', () => {
  let component: FooterIngresoComponent;
  let fixture: ComponentFixture<FooterIngresoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterIngresoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterIngresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
