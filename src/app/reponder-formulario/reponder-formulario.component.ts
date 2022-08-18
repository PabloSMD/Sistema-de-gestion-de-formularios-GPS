import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFormlario } from '../formulario';
import { FormularioService } from '../services/formulario.service';
@Component({
  selector: 'app-reponder-formulario',
  templateUrl: './reponder-formulario.component.html',
  styleUrls: ['./reponder-formulario.component.css']
})
export class ReponderFormularioComponent implements OnInit {

  constructor(public formularioService:FormularioService, private route: ActivatedRoute) { 
  }
  id: any = "";

  ngOnInit(): void {
    this.formularioService.getFormulario(this.getId()).subscribe((res:any[]) =>{
      this.formularioService.formulario=res;
      console.log(this.formularioService.formulario);
    },
    err => console.log(err))

  }
  getId():string{
    this.id = this.route.snapshot.paramMap.get('id');
    return this.id;
  }

  url=this.formularioService.formularios[0].url;
  
}
