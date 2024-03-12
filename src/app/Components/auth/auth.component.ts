import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserModel } from '../../Models/users.model';
import { LoginModel } from '../../Models/users.model';
import { UsersService } from '../../Services/users.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, ToastrModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit {

login:LoginModel= new LoginModel('','')
user:UserModel= new UserModel('','','','',98,'','')
userlist:UserModel[]=[]
constructor(private userservice: UsersService, private toast: ToastrService){

}

  ngOnInit(): void {
      this.getalluser()
  }

  // get all users
  getalluser(){
    this.userservice.getallUsers()
    .subscribe((data:any)=>{
      if(data){
        this.userlist=data
      }
  })
}

// main register  user method
  RegisterUser(){
    const emailValid = this.checkEmail();
    if(emailValid){
          const registerUser = this.userlist.some((item:any) => item.useremail === this.user.useremail);
          if(registerUser){
            this.toast.error("Email Already exist.")
          }else{
            this.Adduser()
          }
        }
  }

// check for email validations 
  checkEmail() {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(this.user.useremail)) {
      return true;
    } else {
      this.toast.warning("Invalid Email");
      return false;
    }
  }
// add the user to the db
  Adduser(){
    this.userservice.adduser(this.user)
    .subscribe((data:any)=>{
      if(data){
       this.toast.success("Register user Successfully. ", "Register Status", {timeOut:1000})
        this.resetform()
      }
    })
  }
// reset the datamodel after user register
  resetform(){
    this.user = new UserModel('','','','',0,'','')
  }
//  User Authentication
  LoginUser(){
    const loggeduser=this.userlist.find((user:any)=>user.useremail===this.login.loginemail)
    if(loggeduser){
        if(loggeduser?.userpassword===this.login.loginpassword){
        this.toast.success("User Logged in Successfully.")
        this.setUserCredential(loggeduser)
      }else{
        this.toast.error("Invalid Password!")
      }
    }
    else{
      this.toast.error("Invalid Email")
    }
  }

  // setting usercredential to the webstorage
  setUserCredential(user:any){
      console.log(user)
  }

}
