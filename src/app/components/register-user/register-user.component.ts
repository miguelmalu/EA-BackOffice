import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empty, isEmpty } from 'rxjs';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  userForm: FormGroup;
  title = "Register User";

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _authService: AuthService,
              private aRouter: ActivatedRoute) { 
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      phone: [],
      mail: [],
      languages: ['', Validators.required],
      location: ['', Validators.required],
      photo: [],
      /* roles: [], */
    });
  }

  ngOnInit(): void {

  }

  registerUser() {

    const user: User = {
      name: this.userForm.get('name')?.value,
      surname: this.userForm.get('surname')?.value,
      username: this.userForm.get('username')?.value,
      password: this.userForm.get('password')?.value,
      phone: this.userForm.get('phone')?.value,
      mail: this.userForm.get('mail')?.value,
      languages: this.userForm.get('languages')?.value.replace(/ /g, "").split(','),
      location: this.userForm.get('location')?.value.replace(/ /g, "").split(','),
      photo: this.userForm.get('photo')?.value,
      /* roles: this.userForm.get('roles')?.value, */
    }

    console.log(user);


    this._authService.registerUser(user).subscribe((data: any) => {
      const res = JSON.parse(data);
      console.log(res.token);
      if (res.token == null) {
        this.toastr.error('The received token is invalid! Try again later', 'Invalid token');
      } else {
        localStorage.setItem('token', res.token);
        console.log(localStorage.getItem('token'));
        this.toastr.success('User successfully registered!', 'User registered');
        this.router.navigate(['/list-users']);
      }
    }, error => {
      console.log(error);
      this.userForm.reset();
    })
  }
}
