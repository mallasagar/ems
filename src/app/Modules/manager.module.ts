import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ManagerComponent } from '../Components/manager/manager.component';
import { AddnoticeComponent } from '../Components/manager/addnotice/addnotice.component';
import { AddtaskComponent } from '../Components/manager/addtask/addtask.component';
import { MeetingComponent } from '../Components/manager/meeting/meeting.component';
import { ManagerprofileComponent } from '../Components/manager/managerprofile/managerprofile.component';

const routes: Routes = [
  {path:'',component:ManagerComponent  ,children:[
    { path: '', component:ManagerprofileComponent },
    {path:'createnotice',component:AddnoticeComponent},
    {path:'createtask',component:AddtaskComponent},
    {path:'meeting',component:MeetingComponent},
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
