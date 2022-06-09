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