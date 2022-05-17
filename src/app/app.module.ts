import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { SideBarIzqComponent } from './side-bar-izq/side-bar-izq.component';
import { SideBarDerComponent } from './side-bar-der/side-bar-der.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearEncuestaComponent,
    SideBarIzqComponent,
    SideBarDerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
