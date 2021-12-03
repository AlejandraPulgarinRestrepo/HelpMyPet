import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetnosticoComponent } from './petnostico.component';

describe('PetnosticoComponent', () => {
  let component: PetnosticoComponent;
  let fixture: ComponentFixture<PetnosticoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PetnosticoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PetnosticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
