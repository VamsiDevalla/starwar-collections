import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginModelData = {
    userId: '',
    password: '',
  };
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.loginModelData.userId, this.loginModelData.password);
  }
}
