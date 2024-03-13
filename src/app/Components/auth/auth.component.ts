import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { UserModel } from '../../Models/users.model';
import { LoginModel } from '../../Models/users.model';
import { UsersService } from '../../Services/users.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserStatusService } from '../../Services/user-status.service';
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [FormsModule, ToastrModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent implements OnInit, OnDestroy {

login:LoginModel= new LoginModel('','')
user:UserModel= new UserModel('','','','',98,'','')
userlist:UserModel[]=[]
subscription:Subscription;
constructor(private userservice: UsersService,
            private toast: ToastrService,
            private route:Router,
            private userstatusservice:UserStatusService){
  this.subscription = new Subscription();
}

  ngOnInit(): void {
      this.getalluser()
      console.log(this.subscription)
  }

  // get all users
  getalluser(){
    this.subscription=this.userservice.getallUsers()
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
    this.user = new UserModel('','','','',98,'','')
  }
//  User Authentication
  LoginUser(){
    const loggeduser=this.userlist.find((user:any)=>user.useremail===this.login.loginemail)
    if(loggeduser){
        if(loggeduser?.userpassword===this.login.loginpassword){
        localStorage.setItem('useremail',loggeduser.useremail);
        localStorage.setItem('userrole',loggeduser.userrole);
        localStorage.setItem('isloggedin','true');
        // setting user role in usersstatus service
        this.userstatusservice.setstatus(loggeduser.userrole)
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
      if(user.userrole==='admin'){
        this.toast.success(""+user.username,"Welcome",{timeOut:1000})
        this.route.navigate(['/admin']);
      }else if(user.userrole==='manager'){
        this.toast.success("manager"+user.username,"Welcome",{timeOut:1000})
        this.route.navigate(['/manager']);
      }else if(user.userrole==='employee'){
        this.toast.success("employee"+user.username,"Welcome",{timeOut:1000})
        this.route.navigate(['/employee']);
      }else{
        this.toast.error("Invalid user!!")
        this.route.navigate(['/error']);
      } 
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
