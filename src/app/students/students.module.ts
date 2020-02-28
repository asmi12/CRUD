import { StudentListComponent } from './studentList/studentList.component';
// import { AddStudentComponent } from './addStudent/addStudent.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsRoutes } from './students.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateStudentComponent } from './createStudent/createStudent.component';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutes,
    ReactiveFormsModule,
   
  ],
  declarations: [StudentListComponent, CreateStudentComponent]
})
export class StudentsModule { }
