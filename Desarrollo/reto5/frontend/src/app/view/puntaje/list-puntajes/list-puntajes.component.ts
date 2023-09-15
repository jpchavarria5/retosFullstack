import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { PremioService } from 'src/app/services/premio.service';
import { PuntajesService } from 'src/app/services/puntajes.service';

@Component({
  selector: 'app-list-puntajes',
  templateUrl: './list-puntajes.component.html',
  styleUrls: ['./list-puntajes.component.scss']
})
export class ListPuntajesComponent implements OnInit {

  puntajes: any[] = [];
  puntajesMelos: any;

  constructor(
    private api: PuntajesService,
    private apiEmpleado: EmpleadoService,
    private apiPremio: PremioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.api.getPuntaje().subscribe(
      (data: any[]) => {
        this.puntajes = data;
        this.puntajesMelos = this.puntajes;
        for (let i = 0; i < this.puntajesMelos.length; i++) {
          this.apiEmpleado.getOneEmpleado(this.puntajesMelos[i].idEmpleado).subscribe(
            (data: any) => {
              this.puntajesMelos[i].idEmpleado = data.nombre;
            }
          );
          this.apiPremio.getOnePremio(this.puntajesMelos[i].idPremio).subscribe(
            (data: any) => {
              this.puntajesMelos[i].idPremio = data.nombrePremio;
            }
          );
        }
      }
    );
    console.log('Puntajes:', this.puntajesMelos);
  }

  newPuntaje(): void {
    this.router.navigate(['puntaje/new-puntaje']);
  }

  editPuntaje(id: number): void {
    console.log('Edit puntaje id:', id);
    this.router.navigate(['puntaje/edit-puntaje/' + id]);
  }

  deletePuntaje(id: number): void {
    console.log('Delete puntaje id:', id);
    this.api.deletePuntaje(id).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'ok') {
          alert('Puntaje eliminado correctamente');
          this.ngOnInit();
        } else {
          alert('Error al eliminar el puntaje');
        }
      }
    );
  }
}
