import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentTimesheetComponent } from './studentTimesheet.component';
import { CreateStudentTimesheetComponent } from './createStudentTimesheet/createStudentTimesheet.component';
import { StudentTimesheetRoutes } from './studentTimesheet.routing';

@NgModule({
  imports: [
    CommonModule,StudentTimesheetRoutes,ReactiveFormsModule
  ],
  declarations: [StudentTimesheetComponent,CreateStudentTimesheetComponent]
})
export class StudentTimesheetModule { }
