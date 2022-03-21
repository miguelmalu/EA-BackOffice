import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

// Routes
const routes: Routes = [
  { path: '', component: ListUsersComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'edit-user/:name', component: CreateUserComponent},
  { path: 'list-activities', component: ListActivitiesComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'} // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
