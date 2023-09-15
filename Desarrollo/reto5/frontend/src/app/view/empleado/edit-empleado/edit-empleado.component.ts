import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-edit-empleado',
  templateUrl: './edit-empleado.component.html',
  styleUrls: ['./edit-empleado.component.scss']
})
export class EditEmpleadoComponent implements OnInit {

  empleado = {
    id: null,
    documento: null,
    nombre: '',
    apellido: '',
    telefono: '',
    correo: ''
  };

  constructor(
    private api: EmpleadoService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this.api.getOneEmpleado(id).subscribe( 
      (data: any) => {
        console.log(data);
        this.empleado = data;
      }
    );
  }

  editEmpleado(): void {
    console.log(this.empleado.id);
    this.api.putEmpleado(this.empleado).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'ok') {
          alert('Empleado editado correctamente');
          this.router.navigate(['empleado/list-empleados']);
        } else {
          alert('Error al editar el empleado');
        }
      }
    );
  }

  back(): void {
    this.router.navigate(['empleado/list-empleados']);
  }

}
