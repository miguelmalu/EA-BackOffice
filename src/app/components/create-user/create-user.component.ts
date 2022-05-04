import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empty, isEmpty } from 'rxjs';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  userForm: FormGroup;
  title = "Create User";
  name: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _userService: UserService,
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
    
    this.name = this.aRouter.snapshot.paramMap.get('name');
    console.log(this.name);
  }

  ngOnInit(): void {
    this.editUser();
  }

  addUser() {

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

    if(this.name !== null){
      // Edit user
      this._userService.editUser(this.name, user).subscribe(data => {
        this.toastr.info('User successfully edited!', 'User edited');
        this.router.navigate(['/list-users']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    }
    else {
      // Add user
      console.log(user);
      this._userService.addUser(user).subscribe(data => {
        this.toastr.success('User successfully created!', 'User created');
        this.router.navigate(['/list-users']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    }
  }

  editUser() {
    if(this.name !== null) {
      this.title = 'Edit user';
      this._userService.getUser(this.name).subscribe(data => {
        this.userForm.setValue({
          name: data.name,
          surname: data.surname,
          username: data.username,
          password: null, //Else hashed; submit will hash the hashed
          phone: data.phone,
          mail: data.mail,
          languages: `${data.languages}`,
          location: `${data.location}`,
          photo: data.photo,
          /* roles: data.roles || null, */
        })
      })
    }
  }
}
