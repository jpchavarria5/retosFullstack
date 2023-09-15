import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-empleado',
  templateUrl: './new-empleado.component.html',
  styleUrls: ['./new-empleado.component.scss']
})
export class NewEmpleadoComponent implements OnInit {

  empleado = {
    documento: null,
    nombre: '',
    apellido: '',
    telefono: '',
    correo: ''
  };

  constructor(
    private api: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  saveEmpleado(): void {
    console.log(this.empleado);
    this.api.postEmpleado(this.empleado).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'ok') {
          alert('Empleado creado correctamente');
          this.router.navigate(['empleado/list-empleados']);
        } else {
          alert('Error al crear el empleado');
        }
      }
    );
  }

  back(): void {
    this.router.navigate(['empleado/list-empleados']);
  }
}
