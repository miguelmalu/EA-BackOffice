import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListMessagesComponent } from './components/list-messages/list-messages.component';
import { ListMessagesReceiverComponent } from './components/list-messages-receiver/list-messages-receiver.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { ListMessagesActivityComponent } from './components/list-messages-activity/list-messages-activity.component';

// Routes
const routes: Routes = [
  { path: '', component: ListMessagesComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'edit-user/:name', component: CreateUserComponent},
  { path: 'message-list-receiver/:id', component: ListMessagesReceiverComponent},
  { path: 'message-list-activity/:id', component: ListMessagesActivityComponent},
  { path: 'create-message', component: CreateMessageComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'} // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
