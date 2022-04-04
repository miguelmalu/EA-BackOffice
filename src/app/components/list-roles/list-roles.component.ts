import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Role } from 'src/app/models/role';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent implements OnInit {
  listRoles: Role[] = [];

  constructor(private _authService: AuthService,
        private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    this._authService.getRoles().subscribe(data => {
      console.log(data);
      this.listRoles = data;
    }, error => {
      console.log(error);
    })
  }

 /*  deleteRole(name: string) {
    const confirmDelete = confirm("Role "+name+" will be deleted, do you want to continue?");
      if(confirmDelete===true){
      this._authService.deleteRole(name).subscribe(data => {
        this.toastr.error('Role successfully deleted', 'Role deleted');
        this.getRoles();
      }, error => {
        console.log(error);
      })
    }
  } */
}