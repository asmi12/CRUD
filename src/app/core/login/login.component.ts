import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    const data = this.loginForm.value;
    if (this.loginForm.valid) {
      if (this.loginForm.valid) {
        if (data.email === "admin@gmail.com" && data.password === "admin") {
          console.log("logged in");
          this.submitted = true;
          localStorage.setItem("loginId", "true");
          localStorage.setItem("role","admin");
          this.router.navigateByUrl("dashboard");
        } 
      else{
        this.submitted=false;
        alert("invalid crenditials");
      } 
       
      } 
    }
  }
}
      
  