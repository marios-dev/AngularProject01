import { Component, OnInit } from '@angular/core';
import { Complex } from './ComplexModel';
import { NobelService } from './nobel.service';

@Component({
  selector: 'app-nobel',
  templateUrl: './nobel.component.html',
  styleUrls: ['./nobel.component.css']
})
export class NobelComponent implements OnInit {

  antikeimeno!:Complex;

  constructor(private service:NobelService) { }

  getPrizes(){
    this.service.getPrizes().subscribe(data=>this.antikeimeno=data);
  }
  ngOnInit(): void {
    this.getPrizes();
    console.log(this.antikeimeno);
  }

}
