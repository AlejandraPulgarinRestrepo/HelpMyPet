import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramacionVisitaComponent } from './programacion-visita.component';

describe('ProgramacionVisitaComponent', () => {
  let component: ProgramacionVisitaComponent;
  let fixture: ComponentFixture<ProgramacionVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramacionVisitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramacionVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
