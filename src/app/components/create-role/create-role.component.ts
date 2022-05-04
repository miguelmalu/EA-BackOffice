import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empty, isEmpty } from 'rxjs';
import { Role } from 'src/app/models/role';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {
  roleForm: FormGroup;
  title = "Create Role";
  name: string | null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _authService: AuthService,
              private aRouter: ActivatedRoute) { 
    this.roleForm = this.fb.group({
      name: [, Validators.required],
    });
    
    this.name = this.aRouter.snapshot.paramMap.get('name');
    console.log(this.name);
  }

  ngOnInit(): void {
/*     this.editRole(); */
  }

  addRole() {

    const role: Role = {
      name: this.roleForm.get('name')?.value,
    }

    console.log(role);

/*     if(this.name !== null){
      // Edit role
      this._authService.editRole(this.name, role).subscribe(data => {
        this.toastr.info('Role successfully edited!', 'Role edited');
        this.router.navigate(['/list-roles']);
      }, error => {
        console.log(error);
        this.roleForm.reset();
      })
    }
    else { */
      // Add role
      console.log(role);
      this._authService.addRole(role).subscribe(data => {
        this.toastr.success('Role successfully created!', 'Role created');
        this.router.navigate(['/list-roles']);
      }, error => {
        console.log(error);
        this.roleForm.reset();
      })
    /* } */
  }

/*   editRole() {
    if(this.name !== null) {
      this.title = 'Edit role';
      this._authService.getRole(this.name).subscribe(data => {
        this.roleForm.setValue({
          name: data.name,
        })
      })
    }
  } */
}