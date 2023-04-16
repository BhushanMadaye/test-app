import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, map } from 'rxjs/operators';
import { AuthService } from 'src/app/core/auth/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  disableBtn: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.loginForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    })
  }

  login() {
    if (this.loginForm.invalid) {
      return this.loginForm.markAllAsTouched();
    }

    this.disableBtn = true;
    this.authService.login(this.loginForm.value)
    .pipe(
      map(res => {
        localStorage.setItem('token', res.data.token);
        this.router.navigate(['/movies']);
        this.toastr.success(`Login successful`);
      }),
      finalize(() => {
        this.disableBtn = false;
      })
    )
    .subscribe()
  }
}
