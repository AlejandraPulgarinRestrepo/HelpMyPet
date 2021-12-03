import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVeterinarioComponent } from './registro-veterinario.component';

describe('RegistroVeterinarioComponent', () => {
  let component: RegistroVeterinarioComponent;
  let fixture: ComponentFixture<RegistroVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
