import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { SideBarIzqComponent } from './side-bar-izq/side-bar-izq.component';
import { SideBarDerComponent } from './side-bar-der/side-bar-der.component';
import { HttpClientModule } from '@angular/common/http';
import { ReponderFormularioComponent } from './reponder-formulario/reponder-formulario.component';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModalAddComponent } from './services/modal-add/modal-add.component';
import { MisEncuestasComponent } from './mis-encuestas/mis-encuestas.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EncuestasComponent } from './encuestas/encuestas.component';
import { ActividadesComponent } from './actividades/actividades.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearEncuestaComponent,
    SideBarIzqComponent,
    SideBarDerComponent,
    ReponderFormularioComponent,
    CrearActividadComponent,
    ModalAddComponent,
    MisEncuestasComponent,
    EncuestasComponent,
    ActividadesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
