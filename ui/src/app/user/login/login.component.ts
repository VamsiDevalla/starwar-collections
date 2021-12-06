import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { AuthError } from '../auth-error';
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
  loading = false;
  error!: AuthError;
  constructor(private authService: AuthService) {}

  login() {
    this.loading = true;
    this.authService
      .login(this.loginModelData.userId, this.loginModelData.password)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: () => {},
        error: err => (this.error = err),
      });
  }
}
