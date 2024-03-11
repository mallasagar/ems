import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { EmployeeComponent } from '../Components/employee/employee.component';
import { ProfileComponent } from '../Components/employee/profile/profile.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent  ,children:[
    { path: '', component:ProfileComponent },
    { path: '',   redirectTo: '/', pathMatch:  'full' },
  ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class EmployeeModule { }
