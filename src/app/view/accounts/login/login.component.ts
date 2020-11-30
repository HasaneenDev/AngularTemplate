import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/shared/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  // start set all property
  loginForm: FormGroup; // property for form
  userNotValid: boolean; // error message
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {
    // set reactive form and set validation
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]], // form control for email element
      password: ["", Validators.required], // form control for password element
    });
  }

  // get FormControl for email - this is get all property for email input element
  get email() {
    return this.loginForm.get("email");
  }
  // get FormControl for password - this is get all property for password input element
  get password() {
    return this.loginForm.get("password");
  }

  ngOnInit() {}

  signin(formDataFromHtml) {
    // get data form
    console.log("data from html : ", formDataFromHtml); // get FormGroup object - parameter from html
    console.log("data from ts : ", this.loginForm); // get FormGroup object - property from ts
    // this ^^^^ two lines same result you can show in console tool

    // set data and send to service
    this.auth.signin(formDataFromHtml.value).subscribe(
      (res) => {
        console.log("success : ", res);
        this.router.navigateByUrl("/home/product");
      },
      (err) => {
        console.log("error", err);
        this.userNotValid = true; // show error message if user is not correct
      }
    );
  }
}
