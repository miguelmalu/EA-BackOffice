import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { LoginUserComponent } from './components/login-user/login-user.component';

// Routes
const routes: Routes = [
  { path: '', redirectTo: '/login-user', pathMatch: 'full'},
  { path: 'login-user', component: LoginUserComponent},
  { path: 'list-users', component: ListUsersComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'edit-user/:name', component: CreateUserComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'} // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
