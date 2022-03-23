import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empty, isEmpty } from 'rxjs';

import { User } from 'src/app/models/user';
import { UserCredentials } from 'src/app/models/userCredentials';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  userForm: FormGroup;
  title = "Login";

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _userService: UserService,
              private aRouter: ActivatedRoute) { 
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  loginUser() {
    const userCredentials: UserCredentials = {
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
    }

    this._userService.loginUser(userCredentials).subscribe(data => {
      this.toastr.info('User successfully logged in!', 'User logged in');
      this.router.navigate(['/']);
    }, error => {
      console.log(error);
      this.userForm.reset();
    })
  }
}
