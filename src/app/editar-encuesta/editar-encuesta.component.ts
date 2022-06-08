
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';
import { IFormlario } from '../formulario';
import { FormularioService } from '../services/formulario.service';
import { ModalAddService } from '../services/modal-add.service';

@Component({
  selector: 'app-editar-encuesta',
  templateUrl: './editar-encuesta.component.html',
  styleUrls: ['./editar-encuesta.component.css']
})
export class EditarEncuestaComponent implements OnInit {
  editformFormulario: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    private modaladdService:ModalAddService){
      this.editformFormulario = this.formBuilder.group({
        descripcion: ['', [Validators.required]],
        url: ['', [Validators.required]],
        tipo: ['', [Validators.required]],
        titulo: ['', [Validators.required]],
        fechavencimiento: ['', [Validators.required]],
      });
    }
  ngOnInit(): void {}

  abrirModal(){
    this.modaladdService.mostrarModal();
  }

  saveData() {
    this.abrirModal();
    let formulario:any={
      descripcion:this.editformFormulario.value.descripcion,
      url:this.editformFormulario.value.url,
      tipo:this.editformFormulario.value.tipo,
      titulo:this.editformFormulario.value.titulo,
      fechavencimiento:this.editformFormulario.value.fechavencimiento,
      estado:"DISPONIBLE"
    }
    this.guardarFormulario(formulario);
  }

  guardarFormulario(formulario:IFormlario){
    this.formularioService.saveFormulario(formulario).subscribe(() => {
      return this.formularioService.getFormularios().subscribe((res:any[])=>{
        this.formularioService.formularios=res
      },
      err=> console.log(err)
      )
    });
    this.editformFormulario.reset();
  }
}
