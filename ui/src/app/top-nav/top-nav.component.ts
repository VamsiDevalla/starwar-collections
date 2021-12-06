import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'swc-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  get isLoggedIn() {
    return this.userService.isAuthenticated;
  }
  get userName() {
    return this.userService.user?.name;
  }
  constructor(private userService: AuthService, private router: Router) {}

  logOut() {
    const currentUrl = this.router.routerState.snapshot.url;
    this.userService.redirectUrl = '/';
    this.userService.logout();
  }
}
