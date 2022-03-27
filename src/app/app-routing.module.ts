import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListRatingsComponent } from './components/list-ratings/list-ratings.component';
import { ListsComponent } from './components/lists/lists.component';
import { CreateRatingsComponent } from './components/create-ratings/create-ratings.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: '/list-users', pathMatch: 'full'},
  { path: 'list-users', component: ListUsersComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'edit-user/:name', component: CreateUserComponent},
  { path: 'list-ratings', component: ListRatingsComponent},
  { path: 'create-rating', component: CreateRatingsComponent},
  { path: 'edit-rating/:name', component: CreateRatingsComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'} // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
