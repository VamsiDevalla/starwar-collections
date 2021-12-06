import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AddUserTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // gets current token from auth service
    const token = this.authService.user?.name;
    // checks if user is logged in
    const isLoggedIn = this.authService.isAuthenticated;
    // checks if the current route needs token
    const isApiUrl = request.url.startsWith('/api');
    // token header is added when all the above checks passed
    if (isLoggedIn && isApiUrl && token) {
      request = request.clone({
        setHeaders: { 'sw-user-id': token },
      });
    }
    return next.handle(request);
  }
}
