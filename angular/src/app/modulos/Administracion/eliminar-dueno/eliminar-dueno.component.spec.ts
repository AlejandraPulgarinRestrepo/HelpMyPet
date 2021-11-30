import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDuenoComponent } from './eliminar-dueno.component';

describe('EliminarDuenoComponent', () => {
  let component: EliminarDuenoComponent;
  let fixture: ComponentFixture<EliminarDuenoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarDuenoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarDuenoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
