import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';

// Components
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListMessagesComponent } from './components/list-messages/list-messages.component';
import { ListMessagesReceiverComponent } from './components/list-messages-receiver/list-messages-receiver.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { ListMessagesActivityComponent } from './components/list-messages-activity/list-messages-activity.component';
import { ListRatingsComponent } from './components/list-ratings/list-ratings.component';
import { CreateRatingsComponent } from './components/create-ratings/create-ratings.component';
import { CreateRoleComponent } from './components/create-role/create-role.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { UserGuardGuard } from './guards/user-guard.guard';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';


// Routes
const routes: Routes = [
  { path: '', redirectTo: '/list-users', pathMatch: 'full'},
  { path: 'login-user', component: LoginUserComponent},
  { path: 'register-user', component: RegisterUserComponent},
  { path: 'list-users', component: ListUsersComponent, canActivate: [UserGuardGuard]},
  { path: 'create-user', component: CreateUserComponent, canActivate: [UserGuardGuard]},
  { path: 'edit-user/:name', component: CreateUserComponent, canActivate: [UserGuardGuard]},
  { path: 'list-activities', component: ListActivitiesComponent, canActivate: [UserGuardGuard]},
  { path: 'create-activity', component: CreateActivityComponent, canActivate: [UserGuardGuard]},
  { path: 'edit-activity/:nameActivity', component: CreateActivityComponent, canActivate: [UserGuardGuard]},
  { path: 'list-ratings', component: ListRatingsComponent, canActivate: [UserGuardGuard]},
  { path: 'create-rating', component: CreateRatingsComponent, canActivate: [UserGuardGuard]},
  { path: 'edit-rating/:title', component: CreateRatingsComponent, canActivate: [UserGuardGuard]},
  { path: 'message-list-receiver/:id', component: ListMessagesReceiverComponent, canActivate: [UserGuardGuard]},
  { path: 'message-list-activity/:id', component: ListMessagesActivityComponent, canActivate: [UserGuardGuard]},
  { path: 'create-message', component: CreateMessageComponent, canActivate: [UserGuardGuard]},
  { path: 'list-messages', component: ListMessagesComponent, canActivate: [UserGuardGuard]},
  { path: 'create-role', component: CreateRoleComponent, canActivate: [UserGuardGuard]},
  { path: 'list-roles', component: ListRolesComponent, canActivate: [UserGuardGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full', canActivate: [UserGuardGuard]} // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
