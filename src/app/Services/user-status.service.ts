import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserStatusService {

  constructor(private toast: ToastrService, private route:Router) { }
  private userLoggedSubject = new BehaviorSubject<string>('');
  userStatus$ = this.userLoggedSubject.asObservable();

  setstatus(userrole:string){
    this.userLoggedSubject.next(userrole)
  }

  clearcredential(){
    this.userLoggedSubject.next('')
    this.toast.success("Logout Successfully.")
    this.route.navigate(['/']);
    localStorage.clear()
  }


}
