import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../../auth/services';

@Injectable()

export class InterceptService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.authService.getToken();

		if (this.authService.isLoggedIn()) {
			request = request.clone({
				setHeaders: {
					Authorization: `Token ${token}`
				}
			});
		}

    return next.handle(request).pipe(
      tap()
    );
  }
}
