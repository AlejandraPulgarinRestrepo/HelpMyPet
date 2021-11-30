import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarDuenoComponent } from './consultar-dueno.component';

describe('ConsultarDuenoComponent', () => {
  let component: ConsultarDuenoComponent;
  let fixture: ComponentFixture<ConsultarDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultarDuenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
