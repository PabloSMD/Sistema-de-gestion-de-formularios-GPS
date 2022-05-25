import { Injectable } from '@angular/core';
import { IFormlario } from '../formulario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class FormularioService {


  public formularios:IFormlario[]=[];

  constructor(private http:HttpClient) { }
  
  getFormularios():Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://localhost:3000/formularios').pipe(map((res:any) => res.data));
  }

}
