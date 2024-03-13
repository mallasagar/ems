import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../Components/admin/admin.component';
import { AdmindashboardComponent } from '../Components/admin/admindashboard/admindashboard.component';
import { AdminEmployeeComponent } from '../Components/admin/admin-employee/admin-employee.component';
import { AdminmanagerComponent } from '../Components/admin/adminmanager/adminmanager.component';
import { AdminadditionalComponent } from '../Components/admin/adminadditional/adminadditional.component';

const routes: Routes = [
  {path:'',component:AdminComponent  ,children:[
    {path:'', component:AdmindashboardComponent},
    {path:'employeelist', component:AdminEmployeeComponent},
    {path:'managerlist', component:AdminmanagerComponent},
    {path:'additional', component:AdminadditionalComponent},
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
export class AdminModule { }
