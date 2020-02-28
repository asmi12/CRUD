import { FeesService } from "./../../fees/fees.service";

import { StudentsService } from "./../students.service";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-createStudent",
  templateUrl: "./createStudent.component.html",
  styleUrls: ["./createStudent.component.css"]
})
export class CreateStudentComponent implements OnInit {
  action = this.router.snapshot.data.action;
  newStudentForm: FormGroup;
  submiited: boolean;
  studentList: any;
  isEdit: boolean;
  feeslist: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private studentservice: StudentsService,
    private router: ActivatedRoute,
    private feesService: FeesService
  ) {}
  ngOnInit() {
    this.isEdit = this.action === "add" ? false : true;
    this.newStudentForm = this.formBuilder.group({
      id: [""],
      first_name: ["", Validators.required],
      last_name: ["", Validators.required],
      email: ["", Validators.required],
      branch: ["", Validators.required],
      passout_year: ["", Validators.required],
      fees: [""]
    });
    this.onChange(this.id);
    if (this.isEdit) {
      this.getStudentData();
    }
    this.getFeesList();
  }
  getFeesList() {
    this.feesService.getFees().subscribe(
      res =>
        // console.log(res)
        (this.feeslist = res)
    );
  }
  getStudentData() {
    this.studentservice
      .getStudentById(this.router.snapshot.params.id)
      .subscribe((res: any) => {
        console.log(res);
        this.newStudentForm.setValue({
          first_name: res.first_name,
          last_name: res.last_name,
          email: res.email,
          branch: res.branch,
          passout_year: res.passout_year,
          fees: res.fees,
          id: res.id
        });
      });
  }
  onChange(id) {
    console.log(id);
    this.feesService.getFeesById(id).subscribe((res: any) => {
      this.newStudentForm.patchValue({
        fees: res.fees
      });
    });
  }
  onSubmit() {
    this.submiited = true;
    const value = this.newStudentForm.value;
    console.log(value);
    const data = {
      first_name: value.first_name,
      last_name: value.last_name,
      email: value.email,
      branch: value.branch,
      passout_year: value.passout_year,
      fees: value.fees
    };
    if (this.isEdit) {
      this.studentservice
        .updateStudent(data, value.id)
        .subscribe((res: any) => console.log(res));
      this.goBack();
    } else {
      this.studentservice
        .createStudent(data)
        .subscribe(res => console.log(res));
      this.goBack();
    }
  }
  goBack() {
    this.route.navigateByUrl("/student");
  }
}
