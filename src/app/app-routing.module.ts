import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent},  
  {path:'crearEncuesta',component:CrearEncuestaComponent}
  //{path: '**', component: 404Component} //por implementar

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
