import { Routes } from '@angular/router';
import { AuthComponent } from './Components/auth/auth.component';
import { ErrorComponent } from './Components/error/error.component';
import { adminauthGuard } from './Guards/adminauth.guard';
import { managerauthGuard } from './Guards/managerauth.guard';
import { employeeauthGuard } from './Guards/employeeauth.guard';

export const routes: Routes = [
    {path:'',component:AuthComponent},
    {path: 'admin',canActivate:[adminauthGuard] ,loadChildren: () => import('./Modules/admin.module').then(m => m.AdminModule) },
    {path: 'manager',canActivate:[managerauthGuard] , loadChildren: () => import('./Modules/manager.module').then(m => m.ManagerModule) },
    {path: 'employee',canActivate:[employeeauthGuard] , loadChildren: () => import('./Modules/employee.module').then(m => m.EmployeeModule) },
    {path:'home', pathMatch:'full', redirectTo: '/'},
    {path:'**', component:ErrorComponent}
];
