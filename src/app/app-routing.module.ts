import { NgModule } from '@angular/core';
import {
  Routes,
  RouterModule,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CrearEncuestaComponent } from './crear-encuesta/crear-encuesta.component';
import { ReponderFormularioComponent } from './reponder-formulario/reponder-formulario.component';
import { SideBarDerComponent } from './side-bar-der/side-bar-der.component';
import { CrearActividadComponent } from './crear-actividad/crear-actividad.component';

const routes: Routes = [
  //------------------------------------------
  //------------- Routing Interno ------------
  //------------------------------------------

  //------------------- Home -----------------
  { path: '', component: HomeComponent },
  
  { path: '', component: HomeComponent},  
  {path:'crearEncuesta',component:CrearEncuestaComponent},
  {path:'respoderEncuesta',component:ReponderFormularioComponent},
  //----------------Crear Encuesta------------
  { path: 'crearEncuesta', component: CrearEncuestaComponent },

  //----------------Crear Encuesta------------
  { path: 'crearActividad', component: CrearActividadComponent },

  //{path: '**', component: 404Component} //por implementar



  //------------------------------------------
  //------------- Links Externos -------------
  //------------------------------------------

  //----------------- Intranet ---------------
  {
    path: 'intranet',
    component: SideBarDerComponent,
    resolve: {
      url: 'externalUrlRedirectResolver',
    },
    data: {
      externalUrl:
        'https://intranet.ubiobio.cl/f1eb7f652eff2e368d40131c48a52a5c/intranet/?',
    },
  },
  //----------------- Moodle -----------------
  {
    path: 'moodle',
    component: SideBarDerComponent,
    resolve: {
      url: 'externalUrlRedirectResolver',
    },
    data: {
      externalUrl: 'https://moodleubb.ubiobio.cl/login/index.php',
    },
  },
  //----------------- Adecca -----------------
  {
    path: 'adecca',
    component: SideBarDerComponent,
    resolve: {
      url: 'externalUrlRedirectResolver',
    },
    data: {
      externalUrl: 'https://adecca.ubiobio.cl/session/login',
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    {
      provide: 'externalUrlRedirectResolver',
      useValue: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        window.location.href = (route.data as any).externalUrl;
      },
    },
  ],
})
export class AppRoutingModule {}
