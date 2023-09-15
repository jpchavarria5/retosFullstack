import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PremioService } from 'src/app/services/premio.service';

@Component({
  selector: 'app-edit-premio',
  templateUrl: './edit-premio.component.html',
  styleUrls: ['./edit-premio.component.scss']
})
export class EditPremioComponent implements OnInit {

  premio = {
    idPremio: null,
    nombrePremio: '',
    descripcion: '',
    valor: '',
  }

  constructor(
    private api: PremioService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    let id = this.activatedRouter.snapshot.paramMap.get('id');
    this.api.getOnePremio(id).subscribe( 
      (data: any) => {
        console.log(data);
        this.premio = data;
      }
    );
  }

  editPremio(): void {
    console.log(this.premio.idPremio);
    this.api.putPremio(this.premio).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'ok') {
          alert('Premio editado correctamente');
          this.router.navigate(['premio/list-premios']);
        } else {
          alert('Error al editar el premio');
        }
      }
    );
  }

  back(): void {
    this.router.navigate(['premio/list-premios']);
  }

}
