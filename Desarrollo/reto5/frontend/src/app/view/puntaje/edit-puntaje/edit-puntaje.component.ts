import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PremioService } from 'src/app/services/premio.service';
import { PuntajesService } from 'src/app/services/puntajes.service';

@Component({
  selector: 'app-edit-puntaje',
  templateUrl: './edit-puntaje.component.html',
  styleUrls: ['./edit-puntaje.component.scss']
})
export class EditPuntajeComponent implements OnInit {

  puntaje = {
    idPuntaje: null,
    idEmpleado: null,
    idPremio: null,
    puntosObtenidos: null,
    fecha: null,
  };

  empleado = [{
    id: null,
    documento: null,
    nombre: '',
    apellido: '',
    telefono: '',
    correo: ''
  }];

  premio = [{
    idPremio: null,
    nombrePremio: '',
    descripcion: '',
    valor: '',
  }];

  constructor(
    private api: PuntajesService,
    private apiEmpleado: EmpleadoService,
    private apiPremio: PremioService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this.api.getOnePuntaje(id).subscribe(
      (data: any) => {
        console.log(data);
        this.puntaje = data;
        this.apiEmpleado.getEmpleados().subscribe(
          (data: any[]) => {
            console.log('Empleado: ', data);
            this.empleado = data;
          }
        );
        this.apiPremio.getPremio().subscribe(
          (data: any[]) => {
            console.log('Premio: ', data);
            this.premio = data;
          }
        );
      }
    );
  }

  editPuntaje(): void {
    console.log(this.puntaje);
    this.api.putPuntaje(this.puntaje).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'ok') {
          alert('Puntaje editado correctamente');
          this.router.navigate(['puntaje/list-puntajes']);
        } else {
          alert('Error al editar el puntaje');
        }
      }
    );
  }

  back(): void {
    this.router.navigate(['puntaje/list-puntajes']);
  }

}
