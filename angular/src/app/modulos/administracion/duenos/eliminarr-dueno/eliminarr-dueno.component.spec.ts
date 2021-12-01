import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarrDuenoComponent } from './eliminarr-dueno.component';

describe('EliminarrDuenoComponent', () => {
  let component: EliminarrDuenoComponent;
  let fixture: ComponentFixture<EliminarrDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarrDuenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarrDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
