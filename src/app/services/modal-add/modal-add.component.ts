import { Component, OnInit } from '@angular/core';
import { ModalAddService } from '../modal-add.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrls: ['./modal-add.component.css']
})
export class ModalAddComponent implements OnInit {

  constructor(public modaladdService:ModalAddService) { }

  ngOnInit(): void {
  }
  ocultarModal(){
    this.modaladdService.ocultarModal();
  }
}
