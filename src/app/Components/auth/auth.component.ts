import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserModel } from '../../Models/users.model';
import { LoginModel } from '../../Models/users.model';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

login:LoginModel= new LoginModel('','')
user:UserModel= new UserModel('','','','',0,'','')

  ngOnInit(): void {
      
  }


  RegisterUser(){

  }

  LoginUser(){

  }
}
