import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { UserStatusService } from '../../../Services/user-status.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  {

  isemployee:boolean=false
  ismanager:boolean=false
  status:boolean=false
  userrole:string=''
  
  constructor(private userstatus:UserStatusService){
  }
  ngOnInit():void{
    this.getrole()
  this.checkrole()
  }

  getrole(){
    this.userstatus.userStatus$.subscribe((data:any)=>{
      if(data){
        this.userrole=data
      }
    })
  }

  // checkrole
  checkrole(){
    const islogged=localStorage.getItem('isloggedin')
   if(islogged){
      if((localStorage.getItem('userrole')==='employee')||this.userrole==='employee'){
        this.isemployee=true
      }else if((localStorage.getItem('userrole')==='manager')||this.userrole==='manager'){
        this.ismanager=true
      }}
      else{
          this.isemployee=false
          this.ismanager=false
      }
   }
     

  // logout
  logout(){
    this.userstatus.clearcredential()
  }

}
