import { AuthGuard } from './auth.guard';

import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewpostComponent } from './newpost/newpost.component';


const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"login" , component:LoginComponent},
  {path:"newpost", component:NewpostComponent},
  {path:"profile" , component:ProfileComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
