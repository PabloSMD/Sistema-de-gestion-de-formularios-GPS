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

 
  public formularios:IFormlario[]=[];
  public formulario:any=[];
  
  public encuestas:IFormlario[]=[];
  public actividades:IFormlario[]=[];
  public misFormularios:IFormlario[]=[];

  constructor(private http:HttpClient) { }
  
  getFormularios():Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://34.204.7.108:5000/formularios').pipe(map((res:any) => res.data));
  }
  getEncuestas():Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://34.204.7.108:5000/encuestas').pipe(map((res:any) => res.data));
  }
  getActividades():Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://34.204.7.108:5000/actividades').pipe(map((res:any) => res.data));
  }
  getMisFormularios():Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://34.204.7.108:5000/misFormularios').pipe(map((res:any) => res.data));
  }
  saveFormulario(formulario:IFormlario){
    return this.http.post<IFormlario[]>('http://34.204.7.108:5000/formulario',formulario);
  }

  cambiarEstadoFormulario(cambioEstado:IEstado){
    return this.http.put<IEstado>('http://34.204.7.108:5000/formulario',cambioEstado);
  }
  
  getFormulario(id:string):Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://34.204.7.108:5000/formulario/'+id).pipe(map((res:any) => res.data));
  }
  editarFormulario(id:string,formulario:any){
    return this.http.put<IFormlario>('http://34.204.7.108:5000/actualizarFormulario/'+id,formulario);
  }
}
