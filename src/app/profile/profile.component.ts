import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private data:DataService) { }
  firstname:any
  lastname:any

  ngOnInit(): void {
    this.firstname=this.data.fname
    this.lastname=this.data.lname

  }
  submit(){ this.data.getname(this.firstname, this.lastname)}


}
