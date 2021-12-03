import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoClienteComponent } from './ingreso-cliente.component';

describe('IngresoClienteComponent', () => {
  let component: IngresoClienteComponent;
  let fixture: ComponentFixture<IngresoClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
