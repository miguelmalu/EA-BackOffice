import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { ListMessagesComponent } from './components/list-messages/list-messages.component';
import { ListMessagesReceiverComponent } from './components/list-messages-receiver/list-messages-receiver.component';
import { ListMessagesActivityComponent } from './components/list-messages-activity/list-messages-activity.component';
import { CreateMessageComponent } from './components/create-message/create-message.component';
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { TruncatePipePipe } from './pipes/truncate-pipe.pipe';
import { CreateRatingsComponent } from './components/create-ratings/create-ratings.component';
import { ListRatingsComponent } from './components/list-ratings/list-ratings.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { ListRolesComponent } from './components/list-roles/list-roles.component';
import { CreateRoleComponent } from './components/create-role/create-role.component';
import { JwtInterceptorInterceptor } from './interceptors/jwt-interceptor.interceptor';
import { RegisterUserComponent } from './components/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    CreateMessageComponent,
    ListUsersComponent,
    NavigationComponent,
    ListMessagesComponent,
    ListMessagesReceiverComponent,
    ListMessagesActivityComponent,
    ListUsersComponent,
    ListActivitiesComponent,
    CreateActivityComponent,
    TruncatePipePipe,
    CreateRatingsComponent,
    ListRatingsComponent,
    LoginUserComponent,
    ListRolesComponent,
    CreateRoleComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
