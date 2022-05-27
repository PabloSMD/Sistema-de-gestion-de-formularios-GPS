import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IFormlario } from '../formulario';
import { FormularioService } from '../services/formulario.service';
@Component({
  selector: 'app-crear-encuesta',
  templateUrl: './crear-encuesta.component.html',
  styleUrls: ['./crear-encuesta.component.css'],
})
export class CrearEncuestaComponent implements OnInit {
  formFormulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService
  ) {
    this.formFormulario = this.formBuilder.group({
      descripcion: ['', [Validators.required]],
      url: ['', [Validators.required]],
      tipo: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      fechavencimiento: ['', [Validators.required]],
    });
  }

  saveData() {
    let formulario:any={
      descripcion:this.formFormulario.value.descripcion,
      url:this.formFormulario.value.url,
      tipo:this.formFormulario.value.tipo,
      titulo:this.formFormulario.value.titulo,
      fechavencimiento:this.formFormulario.value.fechavencimiento
    }
    this.formularioService.saveFormulario(formulario).subscribe(() => {
      return this.formularioService.saveFormulario(formulario).subscribe(
        (res: any[]) => {
          this.formularioService.formularios = res;
        },
        (err) => console.log(err)
      );
    });
  }

  ngOnInit(): void {}
}
