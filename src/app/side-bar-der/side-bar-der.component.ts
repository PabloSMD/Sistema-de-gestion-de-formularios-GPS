import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-side-bar-der',
  templateUrl: './side-bar-der.component.html',
  styleUrls: ['./side-bar-der.component.css']
})
export class SideBarDerComponent implements OnInit {

  constructor(public loginService:LoginService) { }

  ngOnInit(): void {
  }

}
