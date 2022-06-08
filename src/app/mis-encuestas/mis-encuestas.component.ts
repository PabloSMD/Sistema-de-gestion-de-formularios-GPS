import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../services/formulario.service';
import { IEstado } from '../formulario';
@Component({
  selector: 'app-mis-encuestas',
  templateUrl: './mis-encuestas.component.html',
  styleUrls: ['./mis-encuestas.component.css']
})
export class MisEncuestasComponent implements OnInit {

  constructor(public formularioService:FormularioService) { }

  ngOnInit(): void {
    this.formularioService.getFormularios().subscribe((res:any[]) =>{
      this.formularioService.formularios=res;
      console.log(this.formularioService.formularios);
    },
    err => console.log(err))
  }

  finalizarEncuesta(Id:number){
    let salida:IEstado={
      id:Id,
      estado:"FINALIZADO"
    };
    this.formularioService.cambiarEstadoFormulario(salida).subscribe(() => {
      return this.formularioService.getFormularios().subscribe((res:any[])=>{
        this.formularioService.formularios=res
      },
      err=> console.log(err)
      )
    });
  }
}
