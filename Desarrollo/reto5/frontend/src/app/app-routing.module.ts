import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListEmpleadosComponent } from './view/empleado/list-empleados/list-empleados.component';
import { NewEmpleadoComponent } from './view/empleado/new-empleado/new-empleado.component';
import { EditEmpleadoComponent } from './view/empleado/edit-empleado/edit-empleado.component';

import { ListPremiosComponent } from './view/premio/list-premios/list-premios.component';
import { NewPremioComponent } from './view/premio/new-premio/new-premio.component';
import { EditPremioComponent } from './view/premio/edit-premio/edit-premio.component';

import { ListPuntajesComponent } from './view/puntaje/list-puntajes/list-puntajes.component';
import { NewPuntajeComponent } from './view/puntaje/new-puntaje/new-puntaje.component';
import { EditPuntajeComponent } from './view/puntaje/edit-puntaje/edit-puntaje.component';

const routes: Routes = [

  { path: '', redirectTo: '/empleado/list-empleados', pathMatch: 'full' },

  { path: 'empleado/list-empleados', component: ListEmpleadosComponent },
  { path: 'empleado/new-empleado', component: NewEmpleadoComponent },
  { path: 'empleado/edit-empleado/:id', component: EditEmpleadoComponent },

  { path: 'premio/list-premios', component: ListPremiosComponent },
  { path: 'premio/new-premio', component: NewPremioComponent },
  { path: 'premio/edit-premio/:id', component: EditPremioComponent },

  { path: 'puntaje/list-puntajes', component: ListPuntajesComponent },
  { path: 'puntaje/new-puntaje', component: NewPuntajeComponent },
  { path: 'puntaje/edit-puntaje/:id', component: EditPuntajeComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
