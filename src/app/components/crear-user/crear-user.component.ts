import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent implements OnInit {
  userForm: FormGroup;
  title = "Crear User";
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
    }

    if(this.name !== null){
      // Edit user
      this._userService.editUser(this.name, user).subscribe(data => {
        this.toastr.info('El user ha estat editat amb exit!', 'User Editat');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    }
    else {
      // Add user
      console.log(user);
      this._userService.addUser(user).subscribe(data => {
        this.toastr.success('El user ha estat creat amb exit!', 'User Creat');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.userForm.reset();
      })
    }
  }

  editUser() {
    if(this.name !== null) {
      this.title = 'Editar user';
      this._userService.getUser(this.name).subscribe(data => {
        this.userForm.setValue({
          name: data.name,
          surname: data.surname,
          username: data.username,
          password: data.password,
        })
      })
    }
  }

}
