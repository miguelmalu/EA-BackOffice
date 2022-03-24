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
import { CreateRatingsComponent } from './components/create-ratings/create-ratings.component';
import { ListRatingsComponent } from './components/list-ratings/list-ratings.component';
import { ListsComponent } from './components/lists/lists.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUsersComponent,
    CreateRatingsComponent,
    ListRatingsComponent,
    ListsComponent
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
