import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { FormularioService } from '../services/formulario.service';
import { UsuarioService } from '../services/usuario.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p: number = 1;
  total: number = 0;
  constructor(public formularioService:FormularioService,private cookie:CookieService,private usuarioService:UsuarioService) { }

  
  ngOnInit(): void {
    let id=this.cookie.get('id_usuario');
    this.usuarioService.getUsuario(id).subscribe((res:any) =>{
      this.usuarioService.usuario=res;
      let carrera=this.usuarioService.usuario[0].carrera;
      let sexo=this.usuarioService.usuario[0].sexo;
      this.formularioService.getFormularios(carrera,sexo).subscribe((res:any[]) =>{
        this.formularioService.formularios=res;
        console.log(this.formularioService.formularios);
      },
      err => console.log(err))
      this.total = this.formularioService.formularios.length;
    },
    (err: any) => console.log(err))
  }

}
