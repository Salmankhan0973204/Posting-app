import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private router:Router) { }
  public fname="ahmad";
  public lname="khan"
  public like=1;
  public dislike=0;
  public count:number=0;
  
  userpost=[
    { fname:this.fname , lname:this.lname,post:"Hi this is my first post" , like:this.like, dislike:this.dislike},


  ]
  counter(val:any){
    this.userpost[val].like++;
  }

  dis(val:any){
    this.userpost[val].dislike++;
  }

  get(){
    return this.userpost;

  }
  getdis(){
    return this.dislike
  }

  getcount(){
    return this.count;
  }
  update(val:any){

    this.userpost.push({fname:this.fname,lname:this.lname,post:val,like:this.like,dislike:this.dislike})
    console.log(this.userpost)
    this.router.navigate([""])
  }

  getname(val:any, val1:any){
    this.fname=val
    this.lname=val1
    console.log(this.lname)
    this.router.navigate([""])
  }
  delete(val:any){
    this.userpost.splice(val,1)
    console.log(val)
}
  addlike(val:number){
  this.like+=val
  console.log(val)
}

}
