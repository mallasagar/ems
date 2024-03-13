import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanDeactivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStatusService } from '../Services/user-status.service';

@Injectable({
  providedIn: 'root',
})
export class  employeeauthGuard implements CanActivate {
  isemployeerole:string='';
  status:boolean=false
  constructor(private userstatusservice: UserStatusService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {
    // const isadminAuthenticated = this.userstatusservice.userLoggedSubject.getValue(); // Assuming role is a BehaviorSubject<boolean>
 this.userstatusservice.userStatus$.subscribe((data:any)=>{
  if(data){
    this.isemployeerole=data
  }
})
this.status=Boolean(localStorage.getItem('isloggedin')&&(localStorage.getItem('userrole')==='employee'))
if (this.isemployeerole==="employee"||this.status) {
  return true;
} else {
  // Redirect to the login page or another route
  this.router.navigate(['/']);
  return false;
}
}
}

