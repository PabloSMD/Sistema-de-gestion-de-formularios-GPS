import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IUsuario } from '../formulario';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router:Router) { }
  public usuarioLogueado:any={};
  saveUser(Usuario:IUsuario){
    return this.http.post<IUsuario[]>('http://localhost:5000/usuario',Usuario);
  }
  login(email:string,password:string){
    let userLogin={correo:email,password:password};
    return this.http.post('http://localhost:5000/login',userLogin).pipe(map((res:any)=>{
      localStorage.setItem('token',res.token);
      localStorage.setItem('usuario',JSON.stringify(res.usuario));
      this.router.navigate(['home']);
      this.usuarioLogueado=res.usuario[0];
      return res;
    }));
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.router.navigate(['']);
  }
  loggedIn():boolean{
    return localStorage.getItem('token')!==null;
  }
}
