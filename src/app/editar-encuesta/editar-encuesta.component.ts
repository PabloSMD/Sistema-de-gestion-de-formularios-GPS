
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IFormlario } from '../formulario';
import { FormularioService } from '../services/formulario.service';
import { ModalAddService } from '../services/modal-add.service';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-editar-encuesta',
  templateUrl: './editar-encuesta.component.html',
  styleUrls: ['./editar-encuesta.component.css']
})
export class EditarEncuestaComponent implements OnInit {
  editformFormulario = new FormGroup( {
       descripcion: new FormControl ( '' ),
      url: new FormControl ( '' ),
      tipo: new FormControl ( '' ),
      titulo: new FormControl ( '' ),
      fechavencimiento: new FormControl ( '' ),
    });

  constructor(
    private formBuilder: FormBuilder,
    private formularioService: FormularioService,
    private modaladdService:ModalAddService,
    private router: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    // console.log(this.router.snapshot.params['id']);
    this.formularioService.getFormularioById( this.router.snapshot.params['id']).subscribe((result: any) => {
      // console.log(result);


      this.editformFormulario = new FormGroup({
        descripcion: new FormControl ( result ['descripcion'] ),
        url: new FormControl (result ['url'] ),
        tipo: new FormControl ( result ['tipo']  ),
        titulo: new FormControl (result ['titulo']  ),
        fechavencimiento: new FormControl ( result ['fechavencimiento']  ),
      });
    });
    // console.log(this.formularioService.formularios[0].Id);
  }
  abrirModal(){
    this.modaladdService.mostrarModal();
  }

UpdateData () {

  this.formularioService.updateFormulario(this.router.snapshot.params['id'], this.editformFormulario.value).subscribe((result) => {

  })
}
  // saveData() {
  //   this.abrirModal();
  //   let formulario:any={
  //     id: this.editformFormulario.value.id,
  //     descripcion:this.editformFormulario.value.descripcion,
  //     url:this.editformFormulario.value.url,
  //     tipo:this.editformFormulario.value.tipo,
  //     titulo:this.editformFormulario.value.titulo,
  //     fechavencimiento:this.editformFormulario.value.fechavencimiento,
  //     estado:"DISPONIBLE"
  //   }
  //   this.guardarFormulario(formulario);
  // }

  // guardarFormulario(formulario:IFormlario){
  //   this.formularioService.saveFormulario(formulario).subscribe(() => {
  //     return this.formularioService.getFormularios().subscribe((res:any[])=>{
  //       this.formularioService.formularios=res
  //     },
  //     err=> console.log(err)
  //     )
  //   });
  //   this.editformFormulario.reset();
  // }
}
