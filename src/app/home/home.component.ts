import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../services/formulario.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p: number = 1;
  total: number = 0;
  constructor(public formularioService:FormularioService) { }


  ngOnInit(): void {
    this.formularioService.getFormularios().subscribe((res:any[]) =>{
      this.formularioService.formularios=res;
      console.log(this.formularioService.formularios);
    },
    err => console.log(err))

    this.total = this.formularioService.formularios.length;
  }

}
