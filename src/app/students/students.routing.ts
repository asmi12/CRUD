// import { AddStudentComponent } from './addStudent/addStudent.component';
import { StudentListComponent } from './studentList/studentList.component';
import { Routes, RouterModule } from '@angular/router';
import { CreateStudentComponent } from './createStudent/createStudent.component';

const routes: Routes = [
  { path:'', component:StudentListComponent },
  {path :'add', component:CreateStudentComponent,
   data: {
     action:'add'
   }
  },
  {path : 'edit/:id', component:CreateStudentComponent,
  data : {
    action : 'edit'
  }
}
];

export const StudentsRoutes = RouterModule.forChild(routes);
