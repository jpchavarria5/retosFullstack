import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpleadoComponent } from './edit-empleado.component';

describe('EditEmpleadoComponent', () => {
  let component: EditEmpleadoComponent;
  let fixture: ComponentFixture<EditEmpleadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditEmpleadoComponent]
    });
    fixture = TestBed.createComponent(EditEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
