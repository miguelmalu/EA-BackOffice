import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsers: User[] = [];

  constructor(private _userService: UserService,
        private toastr: ToastrService) { }
  
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this._userService.getUsers().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    }, error => {
      console.log(error);
    })
  }

  deleteUser(name: string) {
    const confirmDelete = confirm("User "+name+" will be deleted, do you want to continue?");
      if(confirmDelete===true){
      this._userService.deleteUser(name).subscribe(data => {
        this.toastr.error('User successfully deleted', 'User deleted');
        this.getUsers();
      }, error => {
        console.log(error);
      })
    }
  }

  disableUser(name: string) {
    const confirmDisable = confirm("User "+name+" will be disabled, do you want to continue?");
      if(confirmDisable===true){
      this._userService.disableUser(name).subscribe(data => {
        this.toastr.error('User successfully disabled', 'User disabled');
        this.getUsers();
      }, error => {
        console.log(error);
      })
    }
  }  
}
