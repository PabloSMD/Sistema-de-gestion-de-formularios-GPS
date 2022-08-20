import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../services/formulario.service';
import { IEstado } from '../formulario';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-mis-encuestas',
  templateUrl: './mis-encuestas.component.html',
  styleUrls: ['./mis-encuestas.component.css']
})
export class MisEncuestasComponent implements OnInit {
  p: number = 1;
  total: number = 0;
  constructor(public formularioService:FormularioService,private cookie:CookieService) { }
  
  ngOnInit(): void {
    let id=this.cookie.get('id_usuario');
    console.log(id);
    this.formularioService.getMisFormularios(id).subscribe((res:any[]) =>{
      this.formularioService.misFormularios=res;
      console.log(this.formularioService.misFormularios);
    },
    err => console.log(err))
  }

  finalizarEncuesta(Id:number){
    let salida:IEstado={
      id:Id,
      estado:"FINALIZADO"
    };
    this.formularioService.cambiarEstadoFormulario(salida).subscribe(() => {
    });

  }
}
