import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoVeterinarioComponent } from './ingreso-veterinario.component';

describe('IngresoVeterinarioComponent', () => {
  let component: IngresoVeterinarioComponent;
  let fixture: ComponentFixture<IngresoVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
