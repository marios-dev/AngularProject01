import { Component, OnChanges, OnInit, OnDestroy, SimpleChanges } from '@angular/core';
import { Movie } from './movie';
import { Movies } from './movieMockUp';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
//Prwta attributes

export class MovieComponent implements OnInit, OnChanges, OnDestroy {
  borderRadius: number = 400;
  maxWidth: number = 50;

  StartMovies!: Movie[];
  FilteredMovies: Movie[] = this.StartMovies;

  SearchDirector: string = "";
  SearchTitle!: string;
  minYear: number = 1900; // get the minimum year of all movies
  maxYear: number = new Date().getFullYear();

  //Meta methodoi / filtra

  FilterMovies() {
    this.FilteredMovies = this.StartMovies;
    if (this.SearchDirector) {
      this.FilteredMovies = this.FilteredMovies.filter(x => x.director.toUpperCase().includes(this.SearchDirector.toUpperCase()));
    }
    if (this.SearchTitle) {
      this.FilteredMovies = this.FilteredMovies.filter(x => x.movieName.toUpperCase().includes(this.SearchTitle.toUpperCase()));
    }
    this.FilteredMovies = this.FilteredMovies.filter(x => x.year > this.minYear && x.year <= this.maxYear)
    console.log(this.SearchDirector);
  }

  HidePrice: Boolean = true;
  togglePrice() {
    this.HidePrice = !this.HidePrice;
  }
  ngOnDestroy(): void {
    console.log("Eimai o onDestroy");
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Eimai o onChanges");
  }
  ngOnInit(): void {
    this.StartMovies=this.service.getMovies();
    this.FilteredMovies=this.StartMovies;
  }

  //Telos Ctor

  constructor(private service:MovieService) {
    console.log("Eimai o ctor");
  }
}