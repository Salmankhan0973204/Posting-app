import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userdata:any
  like:any
  count:number=0;
  dis:number=0;



  constructor(private data:DataService) { }
  ngOnInit(): void {
     this.userdata=this.data.get()
     this.count=this.data.getcount();
     this.dis=this.data.getdis()
     console.log(this.data.count);


  }
  submit(val:any){
   this.data.delete( this.userdata.val, )
  }


  counter(index:any){
    this.data.counter(index);
  }

  dislikee(index:any){
    this.data.dis(index)
  }





}
