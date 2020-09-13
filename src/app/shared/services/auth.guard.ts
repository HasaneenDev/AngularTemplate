import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { LocalStoreService } from './local-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private auth: AuthService, private store: LocalStoreService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.auth.authenticated) {
      return true;
    } else {
      this.router.navigateByUrl('/accounts/login')
    }

    // if (this.store.getItem('isActive')) {
    //   return true;
    // }
    // else{
    //   this.router.navigateByUrl('/accounts/login')
    //   return false
    // }
  }

}
