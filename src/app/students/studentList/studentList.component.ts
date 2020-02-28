import { FeesService } from './../../fees/fees.service';
import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-studentList',
  templateUrl: './studentList.component.html',
  styleUrls: ['./studentList.component.css']
})
export class StudentListComponent implements OnInit {
  feeslist: any;

  constructor(private studentService : StudentsService, private service: FeesService) { }
  studentList: any
  ngOnInit() {
    this.studentService.getStudent()



    
    .subscribe(res=>
      // console.log(res)
      this.studentList=res
      )
    this.getFeesList()
  }
  getFeesList(){
    this.service.getFees()
    .subscribe(res=>
      this.feeslist=res)
  }
  deleteProject(id,index){
    if(confirm('do you want to delete')){
      this.studentService.deleteStudent(id).subscribe(res=>
        this.studentList.splice(index,1)
        // console.log(res))
      )}

  }
}
