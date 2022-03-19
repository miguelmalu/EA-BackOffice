import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-listar-users',
  templateUrl: './listar-users.component.html',
  styleUrls: ['./listar-users.component.css']
})
export class ListarUsersComponent implements OnInit {
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
    this._userService.deleteUser(name).subscribe(data => {
      this.toastr.error('El user ha estat eliminat amb exit', 'User eliminat');
      this.getUsers();
    }, error => {
      console.log(error);
    })
  }
}
