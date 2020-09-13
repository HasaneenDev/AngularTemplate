import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: { email: any; password: any; };

  signinForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: ['test@example.com', Validators.required],
      password: ['1234', Validators.required]
  });
  }

  signin() {
    console.log(this.data);
    
    this.auth.signin(this.data)
        .subscribe(res => {
          console.log(res);
          this.router.navigateByUrl('/home/product');
          
        });
}

}
