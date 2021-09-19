import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.css']
})
export class NewpostComponent implements OnInit {
  userdata:any

  constructor(private data:DataService) { }

  ngOnInit(): void {
  }
submit(){
  this.data.update(this.userdata)

}
}
