interface IMovie{
    movieId:number;
    movieName:string;
    photoUrl:string;
    year:number;
    director:string;
    actors:Array<string>;
    genre:Array<string>;
    rating:number;
    price:number;
}

//STRICT MODE EINAI POLY AYSTHRO

export class Movie implements IMovie{
    movieId!: number;
    movieName!: string;
    photoUrl!: string;
    year!: number;
    director!: string;
    actors!: string[];
    genre!: string[];
    rating!: number;
    price!: number;
}