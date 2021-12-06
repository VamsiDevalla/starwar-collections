import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from './user';
import { LoggerService } from '../core/logger.service';
import { AuthError } from './authError';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly basePath = '/api/auth';
  private currentUser!: IUser | null;
  redirectUrl = '/';
  get isAuthenticated() {
    return !!this.currentUser;
  }
  get user() {
    return this.currentUser;
  }

  constructor(private logger: LoggerService, private http: HttpClient, private router: Router) {}

  login(userId: string, password: string): void {
    this.http.post<IUser>(`${this.basePath}/login`, { userId, password }).subscribe({
      next: user => (this.currentUser = user),
      error: err => this.handleError(err),
      complete: () => {
        this.logger.log(
          'Authentication Success',
          `${this.currentUser?.name} is successfully authenticated. Navigating to ${this.redirectUrl}`,
        );
        this.router.navigate([this.redirectUrl]);
      },
    });
  }

  logout(): void {
    this.http.post<boolean>(`${this.basePath}/logout`, null).subscribe({
      next: () => (this.currentUser = null),
      error: err => this.handleError(err),
      complete: () => {
        this.logger.log('loggedOut');
        this.router.navigate([this.redirectUrl]);
      },
    });
  }

  private handleError(error: HttpErrorResponse) {
    const authError = new AuthError(
      error?.status || 0,
      error?.error?.message || error?.statusText || 'unknown error',
      error,
    );
    this.logger.error('Authentication Error', authError);
    return throwError(() => authError);
  }
}
