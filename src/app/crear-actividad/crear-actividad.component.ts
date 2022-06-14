import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { IFormlario } from '../formulario';
import { FormularioService } from '../services/formulario.service';
import { ModalAddService } from '../services/modal-add.service';
@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  formFormulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    private modaladdService:ModalAddService
  ) {
    this.formFormulario = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      url: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechavencimiento: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.modaladdService.setMensaje("Desea Guardar esta Actividad?");
  }

  abrirModal(){
    this.modaladdService.mostrarModal();
  }

  saveData() {
    this.abrirModal();
    let formulario:any={
      descripcion:this.formFormulario.value.descripcion,
      url:this.formFormulario.value.url,
      tipo:this.formFormulario.value.tipo,
      titulo:this.formFormulario.value.titulo,
      fechavencimiento:this.formFormulario.value.fechavencimiento
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
    this.formFormulario.reset();
  }
}
