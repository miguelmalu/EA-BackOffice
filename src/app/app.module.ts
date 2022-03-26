import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'

// Components
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListMessagesComponent } from './components/list-messages/list-messages.component';
import { ListMessagesReceiverComponent } from './components/list-messages-receiver/list-messages-receiver.component';
import { ListMessagesActivityComponent } from './components/list-messages-activity/list-messages-activity.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    CreateMessageComponent,
    ListUsersComponent,
    ListMessagesComponent,
    ListMessagesReceiverComponent,
    ListMessagesActivityComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
