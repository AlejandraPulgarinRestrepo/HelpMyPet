import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificacionVeterinarioComponent } from './identificacion-veterinario.component';

describe('IdentificacionVeterinarioComponent', () => {
  let component: IdentificacionVeterinarioComponent;
  let fixture: ComponentFixture<IdentificacionVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdentificacionVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificacionVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
