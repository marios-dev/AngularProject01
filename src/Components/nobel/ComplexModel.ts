export interface Complex{
    prizes:Prize[];
}
export interface Prize{
    year:number;
    category:string;
    laureates:Laureate[];
}
export interface Laureate{
    id:number;
    firstname:string;
    surname:string;
    motivation:string;
    share:number;
}