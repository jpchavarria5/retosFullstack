import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmpleadosComponent } from './view/empleado/list-empleados/list-empleados.component';
import { NewEmpleadoComponent } from './view/empleado/new-empleado/new-empleado.component';
import { EditEmpleadoComponent } from './view/empleado/edit-empleado/edit-empleado.component';
import { NewPremioComponent } from './view/premio/new-premio/new-premio.component';
import { ListPremiosComponent } from './view/premio/list-premios/list-premios.component';
import { EditPremioComponent } from './view/premio/edit-premio/edit-premio.component';
import { ListPuntajesComponent } from './view/puntaje/list-puntajes/list-puntajes.component';
import { NewPuntajeComponent } from './view/puntaje/new-puntaje/new-puntaje.component';
import { EditPuntajeComponent } from './view/puntaje/edit-puntaje/edit-puntaje.component';
import { NavComponent } from './view/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ListEmpleadosComponent,
    NewEmpleadoComponent,
    EditEmpleadoComponent,
    NewPremioComponent,
    ListPremiosComponent,
    EditPremioComponent,
    ListPuntajesComponent,
    NewPuntajeComponent,
    EditPuntajeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
