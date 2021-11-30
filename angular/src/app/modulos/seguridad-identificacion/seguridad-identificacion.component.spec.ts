import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadIdentificacionComponent } from './seguridad-identificacion.component';

describe('SeguridadIdentificacionComponent', () => {
  let component: SeguridadIdentificacionComponent;
  let fixture: ComponentFixture<SeguridadIdentificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeguridadIdentificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeguridadIdentificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
