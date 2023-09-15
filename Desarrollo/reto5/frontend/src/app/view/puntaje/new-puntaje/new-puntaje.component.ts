import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PremioService } from 'src/app/services/premio.service';
import { PuntajesService } from 'src/app/services/puntajes.service';

@Component({
  selector: 'app-new-puntaje',
  templateUrl: './new-puntaje.component.html',
  styleUrls: ['./new-puntaje.component.scss']
})
export class NewPuntajeComponent implements OnInit {

  puntaje = {
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
    private router: Router
  ) { }

  ngOnInit(): void {
    this.apiEmpleado.getEmpleados().subscribe(
      (data: any[]) => {
        console.log(data);
        this.empleado = data;
      }
    );
    this.apiPremio.getPremio().subscribe(
      (data: any[]) => {
        console.log(data);
        this.premio = data;
      }
    );
  }

  savePuntaje(): void {
    console.log(this.puntaje);
    this.api.postPuntaje(this.puntaje).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'ok') {
          alert('Puntaje creado correctamente');
          this.router.navigate(['puntaje/list-puntajes']);
        } else {
          alert('Error al crear el puntaje');
        }
      }
    );
  }

  back(): void {
    this.router.navigate(['puntaje/list-puntajes']);
  }

}
