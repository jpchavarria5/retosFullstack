import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PremioService } from 'src/app/services/premio.service';

@Component({
  selector: 'app-new-premio',
  templateUrl: './new-premio.component.html',
  styleUrls: ['./new-premio.component.scss']
})
export class NewPremioComponent implements OnInit {

  premio = {
    idPremio: null,
    nombrePremio: '',
    descripcion: '',
    valor: '',
  }

  constructor(
    private api: PremioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  savePremio(): void {
    console.log(this.premio);
    this.api.postPremio(this.premio).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'ok') {
          alert('Premio creado correctamente');
          this.router.navigate(['premio/list-premios']);
        } else {
          alert('Error al crear el premio');
        }
      }
    );
  }

  back(): void {
    this.router.navigate(['premio/list-premios']);
  }
}
