import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // allows route if the user is already logged in
    if (this.authService.isAuthenticated) {
      return true;
    }
    // setting current url to redirectUrl after successful login
    this.authService.redirectUrl = state.url;
    // navigates to login and restricts current path if the user is not logged in
    this.router.navigate(['/login']);
    return false;
  }
}
