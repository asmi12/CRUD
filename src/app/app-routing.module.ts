import { FullComponent } from './layout/full/full.component';
import { AuthGuard } from './guard/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [  
  {
    path: '',
    canActivate: [AuthGuard],
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
     {
       path:'student',
       loadChildren:'./students/students.module#StudentsModule'
     },
     {
       path:'fees',
       loadChildren:'./fees/fees.module#FeesModule'
     },
     {
      path:'studentTimesheet',
      loadChildren:'./studentTimesheet/studentTimesheet.module#StudentTimesheetModule'
    }
    ]
  },
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
];

   
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
