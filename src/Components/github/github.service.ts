import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  private url:string ="https://api.github.com/users";

  getUser(name:string):Observable<User>{
    let userURL=this.url+"/"+name;
    return this.http.get<User>(userURL);
  }

  constructor(private http:HttpClient) { }
}
