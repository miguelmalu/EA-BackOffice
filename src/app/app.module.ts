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
import { ListActivitiesComponent } from './components/list-activities/list-activities.component';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { TruncatePipePipe } from './pipes/truncate-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    ListUsersComponent,
    ListActivitiesComponent,
    CreateActivityComponent,
    TruncatePipePipe
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
