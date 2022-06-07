import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-encuestas',
  templateUrl: './encuestas.component.html',
  styleUrls: ['./encuestas.component.css']
})
export class EncuestasComponent implements OnInit {
  p: number = 1;
  total: number = 0;
  constructor(public formularioService:FormularioService) { }

  ngOnInit(): void {
    this.formularioService.getEncuestas().subscribe((res:any[]) =>{
      this.formularioService.encuestas=res;
      console.log(this.formularioService.encuestas);
    },
    err => console.log(err))
    this.total = this.formularioService.encuestas.length;
  }


}
