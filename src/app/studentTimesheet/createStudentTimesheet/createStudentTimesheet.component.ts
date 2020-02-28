import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder, FormArray } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-createStudentTimesheet",
  templateUrl: "./createStudentTimesheet.component.html",
  styleUrls: ["./createStudentTimesheet.component.css"]
})
export class CreateStudentTimesheetComponent implements OnInit {
  createTimesheetForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,

    private router: Router
  ) {}

  ngOnInit() {
    this.createTimesheetForm = this.formBuilder.group({
      userId: [""],
      timesheet: this.formBuilder.array([])
    });
    this.addStudentTimesheet();
  }

  get timesheetForm() {
    return this.createTimesheetForm.get("timesheet") as FormArray;
  }
  addStudentTimesheet() {
    const info = this.formBuilder.group({
      id: [""],
      name: ["", Validators.required],
      date: ["", Validators.required],
      status: ["", Validators.required]
    });
    this.timesheetForm.push(info);
  }
}
