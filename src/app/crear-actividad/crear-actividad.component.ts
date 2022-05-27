import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  formFormulario:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.formFormulario=this.formBuilder.group({

    })
  }

  ngOnInit(): void {
  }

}
