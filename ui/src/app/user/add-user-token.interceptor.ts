import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AddUserTokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userId = this.authService.user?.name;
    const isLoggedIn = this.authService.isAuthenticated;
    const isApiUrl = request.url.startsWith('/api');
    if (isLoggedIn && isApiUrl && userId) {
      request = request.clone({
        setHeaders: { 'sw-user-id': userId },
      });
    }
    return next.handle(request);
  }
}
