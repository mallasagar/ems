import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { EmployeeComponent } from '../Components/employee/employee.component';
import { ProfileComponent } from '../Components/employee/profile/profile.component';
import { NewsComponent } from '../Components/employee/news/news.component';
import { TaskComponent } from '../Components/employee/task/task.component';
import { ProgressComponent } from '../Components/employee/progress/progress.component';
import { MessageComponent } from '../Components/employee/message/message.component';

const routes: Routes = [
  {path:'',component:EmployeeComponent  ,children:[
    { path: '', component:ProfileComponent },
    { path: 'news', component:NewsComponent},
    { path: 'tasks', component:TaskComponent},
    { path: 'progress', component:ProgressComponent},
    { path: 'message', component:MessageComponent},
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
