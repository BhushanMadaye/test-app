import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models';
import { Observable, catchError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  login(params: LoginRequest): Observable<any> {
    const LOGIN_URL = `https://demo.credy.in/api/v1/usermodule/login/`;
    return this.http.post(LOGIN_URL, params)
      .pipe(
        catchError(err => {
          console.log(err.error.error.message);
          this.toastr.error(err.error.error.message);
          throw err;
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getToken() {
    const token = localStorage.getItem('token') ?? '';
    return token
  }

}
