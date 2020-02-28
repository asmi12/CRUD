import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentTimesheet',
  templateUrl: './studentTimesheet.component.html',
  styleUrls: ['./studentTimesheet.component.css']
})
export class StudentTimesheetComponent implements OnInit {
  createTimesheetForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
 
    private router: Router,
    
    
  
  ) {}
  projects: [];

  ngOnInit() {
  
    this.createTimesheetForm = this.formBuilder.group({
      id: [""],
      name: ["", Validators.required],
      date: ["", Validators.required],
     status: ["", Validators.required],
   
    });

}
}
