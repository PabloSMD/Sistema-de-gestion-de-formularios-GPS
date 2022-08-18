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
  public enlace:string="localhost";
  public encuestas:IFormlario[]=[];
  public actividades:IFormlario[]=[];
  public misFormularios:IFormlario[]=[];

  constructor(private http:HttpClient) { }
  
  getFormularios(carrera:string,sexo:string):Observable<IFormlario[]>{
    const parametros={carrera:carrera,sexo:sexo};
    return this.http.post<IFormlario[]>('http://'+this.enlace+':5000/formularios',parametros).pipe(map((res:any) => res.data));
  }
  getEncuestas(carrera:string,sexo:string):Observable<IFormlario[]>{
    const parametros={carrera:carrera,sexo:sexo};
    return this.http.post<IFormlario[]>('http://'+this.enlace+':5000/encuestas',parametros).pipe(map((res:any) => res.data));
  }
  getActividades(carrera:string,sexo:string):Observable<IFormlario[]>{
    const parametros={carrera:carrera,sexo:sexo};
    return this.http.post<IFormlario[]>('http://'+this.enlace+':5000/actividades',parametros).pipe(map((res:any) => res.data));
  }
  getMisFormularios(id:string):Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://'+this.enlace+':5000/misFormularios/'+id).pipe(map((res:any) => res.data));
  }
  saveFormulario(formulario:IFormlario){
    return this.http.post<IFormlario[]>('http://'+this.enlace+'/formulario',formulario);
  }

  cambiarEstadoFormulario(cambioEstado:IEstado){
    return this.http.put<IEstado>('http://'+this.enlace+'/formulario',cambioEstado);
  }
  
  getFormulario(id:string):Observable<IFormlario[]>{
    return this.http.get<IFormlario[]>('http://'+this.enlace+'/formulario/'+id).pipe(map((res:any) => res.data));
  }
  editarFormulario(id:string,formulario:any){
    return this.http.put<IFormlario>('http://'+this.enlace+'/actualizarFormulario/'+id,formulario);
  }
}
