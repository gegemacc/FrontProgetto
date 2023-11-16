import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS
} from '@angular/common/http';
import {catchError, Observable, tap, throwError} from 'rxjs';
import {AuthControllerService} from "../services/auth-controller.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthControllerService, private router: Router) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
        }
      });
    }
    return next.handle(request).pipe(
      tap({
        error: error => {
          if (error.status == 401) {
            this.authService.logout();
          } else if (error.status == 404) {
              console.warn(`404 error, url: ${error.url}`);
          } else if (error.status == 500) {
              console.error(`500 Server error, url: ${error.url}`);
          } else {
              console.error(`error ${error.status} status code, url: ${error.url}\n${error.message}\n${error.error.error}`, error);
          }
        }
      })
      );
  }

}
