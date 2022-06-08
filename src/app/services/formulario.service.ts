import { Injectable } from '@angular/core';
import { IFormlario } from '../formulario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IEstado } from '../formulario';
@Injectable({
  providedIn: 'root'
})
export class FormularioService {
url = 'http://localhost:3000/formulario';

  public formularios:IFormlario[]=[];
  public formulario:any=[];
  public encuestas:IFormlario[]=[];
  public actividades:IFormlario[]=[];

  constructor(private http:HttpClient) { }

  getFormularios():Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://localhost:3000/formularios').pipe(map((res:any) => res.data));
  }
  getEncuestas():Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://localhost:3000/encuestas').pipe(map((res:any) => res.data));
  }
  getActividades():Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://localhost:3000/actividades').pipe(map((res:any) => res.data));
  }

  saveFormulario(formulario:IFormlario){
    return this.http.post<IFormlario[]>('http://localhost:3000/formulario',formulario);
  }

  cambiarEstadoFormulario(cambioEstado:IEstado){
    return this.http.put<IEstado>('http://localhost:3000/formulario',cambioEstado);
  }

  getFormulario(id:string):Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://localhost:3000/formulario/'+id).pipe(map((res:any) => res.data));
  }

  getFormularioById (id: number) {
    return this.http.get( `${this.url}/${id}`);
  }

  updateFormulario (id:number, data:any) {
    return this.http.put( `${this.url}/${id}`, data);
  }
}
