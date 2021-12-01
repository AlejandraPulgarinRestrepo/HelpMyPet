import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarDuenoComponent } from './buscar-dueno.component';

describe('BuscarDuenoComponent', () => {
  let component: BuscarDuenoComponent;
  let fixture: ComponentFixture<BuscarDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarDuenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
