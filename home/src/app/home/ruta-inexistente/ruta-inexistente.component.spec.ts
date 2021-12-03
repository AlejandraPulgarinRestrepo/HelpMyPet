import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaInexistenteComponent } from './ruta-inexistente.component';

describe('RutaInexistenteComponent', () => {
  let component: RutaInexistenteComponent;
  let fixture: ComponentFixture<RutaInexistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutaInexistenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaInexistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
