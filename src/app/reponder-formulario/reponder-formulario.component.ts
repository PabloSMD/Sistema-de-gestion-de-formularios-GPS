import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../services/formulario.service';
@Component({
  selector: 'app-reponder-formulario',
  templateUrl: './reponder-formulario.component.html',
  styleUrls: ['./reponder-formulario.component.css']
})
export class ReponderFormularioComponent implements OnInit {

  constructor(public formularioService:FormularioService) { }


  ngOnInit(): void {
    this.formularioService.getFormularios().subscribe((res:any[]) =>{
      this.formularioService.formularios=res;
      console.log(this.formularioService.formularios);
    },
    err => console.log(err))
  }
  url=this.formularioService.formularios[0].Url;
  
}
