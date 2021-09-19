
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth:AuthService) { }
  login:any
  newlogin = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })
  ngOnInit(): void {
  }
  click(){
    this.auth.login(this.newlogin.value)

  }

}
