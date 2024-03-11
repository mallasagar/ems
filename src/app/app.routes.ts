import { Routes } from '@angular/router';
import { AuthComponent } from './Components/auth/auth.component';
import { ErrorComponent } from './Components/error/error.component';

export const routes: Routes = [
    {path:'',component:AuthComponent},
    {path: 'admin', loadChildren: () => import('./Modules/admin.module').then(m => m.AdminModule) },
    {path: 'manager', loadChildren: () => import('./Modules/manager.module').then(m => m.ManagerModule) },
    {path: 'employee', loadChildren: () => import('./Modules/employee.module').then(m => m.EmployeeModule) },
    {path:'home', pathMatch:'full', redirectTo: '/'},
    {path:'**', component:ErrorComponent}
];
