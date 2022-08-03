export interface IFormlario{
    Id:number;
    Descripcion:string;
    Url:string;
    Tipo:string;
    Titulo:string;
    FechaVencimiento:Date;
    estado:string;
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
}