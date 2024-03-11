import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from '../Components/manager/manager.component';
import { ManagerdashboardComponent } from '../Components/manager/managerdashboard/managerdashboard.component';

const routes: Routes = [
  {path:'',component:ManagerComponent  ,children:[
    { path: '', component:ManagerdashboardComponent  },
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
export class ManagerModule { }
