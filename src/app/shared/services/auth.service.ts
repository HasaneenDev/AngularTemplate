import { Injectable } from "@angular/core";
import { LocalStoreService } from "./local-store.service";

import { of, throwError } from "rxjs";
import { delay } from "rxjs/operators";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  authenticated = true;
  constructor(private store: LocalStoreService, private router: Router) {
    this.checkAuth();
  }

  checkAuth() {
    this.authenticated = this.store.getItem("demo_login_status");
  }
  signin(credentials) {
    // demo data
    const dataInServer = {
      email: "demo@has.com",
      password: "12345678",
    };
    console.log("credentials : ", credentials);
    // this step for backend proccess and I'm write here becuase return response (success or error)
    if (
      credentials.email === dataInServer.email &&
      credentials.password === dataInServer.password
    ) {
      this.authenticated = true;
      this.store.setItem("demo_login_status", true);
      return of({ successMessage: "success" }).pipe(delay(500));
    }
    return throwError("error");
  }

  signout() {
    this.authenticated = false;
    this.store.setItem("demo_login_status", false);
    this.router.navigateByUrl("/accounts/login");
  }
}
