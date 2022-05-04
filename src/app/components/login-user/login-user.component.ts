import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empty, isEmpty } from 'rxjs';

import { User } from 'src/app/models/user';
import { UserCredentials } from 'src/app/models/userCredentials';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  loginForm: FormGroup;
  title = "Login User";

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _authService: AuthService,
              private aRouter: ActivatedRoute) { 
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  loginUser() {
    const userCredentials: UserCredentials = {
      username: this.loginForm.get('username')?.value,
      password: this.loginForm.get('password')?.value,
    }

    this._authService.loginUser(userCredentials).subscribe((data: any) => {
      const res = JSON.parse(data);
      console.log(res.token);
      if (res.token == null) {
        this.toastr.error('The received token is invalid! Try again later', 'Invalid token');
      } else {
        localStorage.setItem('token', res.token);
        console.log(localStorage.getItem('token'));
        this.toastr.success('User successfully logged in!', 'User logged in');
        this.router.navigate(['/list-users']);
      }
    }, error => {
      console.log(error);
      this.loginForm.reset();
    })
  }
}
