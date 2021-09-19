
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
 public _login: boolean=false
  login(val:any){
    if(val.email=="admin" &&  val.password=="admin"){
    console.log ("valid user")
    this.router.navigate(["./profile"])
    this._login=true;}
    else{
    console.log("wrong User")}
  }

}
