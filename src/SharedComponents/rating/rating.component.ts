import { Component, OnInit, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit,OnChanges {

  constructor() { }

  ngOnChanges():void {
    console.log("Rating Changes");
    this.pinakas=Array.from(Array(Math.floor(this.RatingNo)).keys());
  }

  @Input()RatingNo!:number;
  pinakas!:number[];

  ngOnInit(): void {
  }

}
