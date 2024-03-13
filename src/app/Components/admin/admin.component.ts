import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UserStatusService } from '../../Services/user-status.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  title:string="EMS"
constructor(private userstatusservice: UserStatusService,private route:Router, private toast: ToastrService){}

logout(){
  this.userstatusservice.clearcredential()
}

}
