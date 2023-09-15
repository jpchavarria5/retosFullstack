import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PremioService } from 'src/app/services/premio.service';

@Component({
  selector: 'app-list-premios',
  templateUrl: './list-premios.component.html',
  styleUrls: ['./list-premios.component.scss']
})
export class ListPremiosComponent implements OnInit {

  premios: any[] = [];
  
  constructor(
    private api: PremioService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.api.getPremio().subscribe(
      (data: any[]) => {
        this.premios = data;
        console.log('Premios:', this.premios);
      }
    );
  }

  newPremio(): void {
    this.router.navigate(['premio/new-premio']);
  }

  editPremio(id: number): void {
    console.log('Edit premio id:', id);
    this.router.navigate(['premio/edit-premio/' + id]);
  }

  deletePremio(id: number): void {
    console.log('Delete premio id:', id);
    this.api.deletePremio(id).subscribe(
      (data: any) => {
        console.log(data);
        if (data.status == 'ok') {
          alert('Premio eliminado correctamente');
          this.ngOnInit();
        } else {
          alert('Error al eliminar el premio');
        }
      }
    );
  }

}
