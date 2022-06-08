import { Component, OnInit } from '@angular/core';
import { FormularioService } from '../services/formulario.service';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit {

  p: number = 1;
  total: number = 0;
  constructor(public formularioService:FormularioService) { }

  ngOnInit(): void {
    this.formularioService.getActividades().subscribe((res:any[]) =>{
      this.formularioService.actividades=res;
      console.log(this.formularioService.actividades);
    },
    err => console.log(err))
    this.total = this.formularioService.actividades.length;
  }

}
