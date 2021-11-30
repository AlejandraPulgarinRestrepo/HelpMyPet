import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarDuenoComponent } from './actualizar-dueno.component';

describe('ActualizarDuenoComponent', () => {
  let component: ActualizarDuenoComponent;
  let fixture: ComponentFixture<ActualizarDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarDuenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
