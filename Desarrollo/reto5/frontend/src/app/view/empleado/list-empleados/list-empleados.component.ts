import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.scss']
})
export class ListEmpleadosComponent implements OnInit {

  empleados: any[] = [];

  constructor(
    private api: EmpleadoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.getEmpleados().subscribe(
      (data: any[]) => {
        this.empleados = data;
        console.log('Empleados:', this.empleados);
      }
    );
  }

  newEmpleado(): void {
    this.router.navigate(['empleado/new-empleado']);
  }

  editEmpleado(id: number): void {
    console.log('Edit empleado id:', id);
    this.router.navigate(['empleado/edit-empleado/' + id]);
  }

  deleteEmpleado(id: number): void {
    console.log('Delete empleado id:', id);
    this.api.deleteEmpleado(id).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'ok') {
          alert('Empleado eliminado correctamente');
          this.ngOnInit();
        } else {
          alert('Error al eliminar el empleado');
        }
      }
    );
  }
}
