import { Component, OnInit } from '@angular/core';
import { ListRatingsComponent } from '../list-ratings/list-ratings.component';
import { ListUsersComponent } from '../list-users/list-users.component';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
