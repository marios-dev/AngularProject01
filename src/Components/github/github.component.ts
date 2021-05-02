import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubService } from './github.service';
import { User } from './user';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  Users:User[]=[];
  User!: User;
  name:string="";

  constructor(private service: GithubService) {}

  addToTable(){
    this.Users.push(this.User);
  }
  
  getUser(){
    if(this.name){
      this.service.getUser(this.name).subscribe(data=>this.User=data);
    } 
  }

  ngOnInit(): void {
  }
}
