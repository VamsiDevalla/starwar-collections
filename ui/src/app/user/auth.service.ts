import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from './user';
import { LoggerService } from '../core/logger.service';
import { AuthError } from './auth-error';

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

  /**
   * Tries to login the user with the give userId and password and redirects to origin page of the user
   * @param userId userId
   * @param password password
   */
  login(userId: string, password: string): Observable<boolean> {
    return this.http.post<IUser>(`${this.basePath}/login`, { userId, password }).pipe(
      // next: ,
      tap(user => {
        this.currentUser = user;
        this.logger.log(
          'Authentication Success',
          `${this.currentUser?.name} is successfully authenticated. Navigating to ${this.redirectUrl}`,
        );
        this.router.navigate([this.redirectUrl]);
      }),
      map(user => true),
      catchError(this.handleError),
    );
  }

  /**
   * logs out the user and redirect to collection page
   */
  logout(): void {
    this.http.delete(`${this.basePath}/logout`).subscribe({
      next: () => (this.currentUser = null),
      error: err => this.handleError(err),
      complete: () => {
        this.logger.log('loggedOut', `redirecting to login page`);
        this.router.navigate(['/collection']);
      },
    });
  }

  /**
   * handles all error for auth service
   * @param error http error
   * @returns
   */
  private handleError = (error: HttpErrorResponse) => {
    const authError = new AuthError(error?.status || 0, error?.error?.message || error?.statusText || 'unknown error', error);
    this.logger.error('Authentication Error', authError);
    return throwError(() => authError);
  }
}
