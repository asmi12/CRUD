import { CreateStudentTimesheetComponent } from './createStudentTimesheet/createStudentTimesheet.component';
import { Routes, RouterModule } from '@angular/router';
import { StudentTimesheetComponent } from './studentTimesheet.component';

const routes: Routes = [
  {  path:"" , component:StudentTimesheetComponent},
  { path:"studentTimesheet", component:CreateStudentTimesheetComponent}
];

export const StudentTimesheetRoutes = RouterModule.forChild(routes);
