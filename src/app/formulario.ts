export interface IFormlario{
    id:number;
    titulo:string;
    descripcion:string;
    url:string;
    tipo_formulario:string;
    subtipo_formulario:string;
    estado:string;
    sexo_dirigido:string;
    fecha_vencimiento:Date;
    id_usuario:number;
}

export interface IEstado{
    id:number,
    estado:string
}

export interface IUsuario{
    id:number;
    nombre:string;
    correo:string;
    password:string;
    rol:string;
    sexo:string;
    carrera:string;
}