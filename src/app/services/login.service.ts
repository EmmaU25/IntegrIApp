import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users: User[]= [];
  user: boolean = false;
  tipo :string = "";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(
    public router: Router,
    public http: HttpClient
  ) 
  { 
    
  }


  getAllUsers(){
    return this.http.get(environment.apiActivities+"users");
  }

  registerUser(user:User){
    return this.http.post(environment.apiActivities+"users", JSON.stringify(user), this.httpOptions);
  }


  login(usere:string, pwd:string):boolean{
    let flag:boolean=false;
    this.users.map(dta =>{
      if(dta.email === usere && dta.password === pwd){
        flag=true;
        this.user = true;
        this.tipo = dta.types;
        this.saveUserStorage();
      }
    });
    return flag
  }

  saveUserStorage() {
    localStorage.setItem('session', JSON.stringify(this.user));
  }


  logout(){
    localStorage.removeItem('session');
    // this.user = null;
  }

  checkSession(){
    return localStorage.getItem('session') ? true : false;
  }
  

    
}
