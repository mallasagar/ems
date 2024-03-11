import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../Components/admin/admin.component';
import { AdmindashboardComponent } from '../Components/admin/admindashboard/admindashboard.component';

const routes: Routes = [
  {path:'',component:AdminComponent  ,children:[
    {path:'', component:AdmindashboardComponent},
    // { path: 'home', component:HomeComponent  },
    // {path:'signup', component:SignupComponent},
    // {path:'signin', component:SigninComponent},
    // {path:'customer/favourite',canActivate:[customerguardGuard], component:FavComponent},
    // {path:'customer/orders',canActivate:[customerguardGuard], component:OrderComponent},
    // {path:'customer/orderstatus',canActivate:[customerguardGuard], component:OrderstatusComponent},
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
