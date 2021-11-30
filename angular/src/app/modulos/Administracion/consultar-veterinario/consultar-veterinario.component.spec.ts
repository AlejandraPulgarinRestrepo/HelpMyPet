import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarVeterinarioComponent } from './consultar-veterinario.component';

describe('ConsultarVeterinarioComponent', () => {
  let component: ConsultarVeterinarioComponent;
  let fixture: ComponentFixture<ConsultarVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
