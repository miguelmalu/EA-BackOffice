import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Activity } from 'src/app/models/activity';
import { User } from 'src/app/models/user';
import { ActivityService } from 'src/app/services/activity.service';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {

  listActivities: Activity[] = [];

  constructor(private _activityService: ActivityService, private toastr: ToastrService, private _userService: UserService) { 

  }

  ngOnInit(): void {   
    this.getActivities();
  }

  getActivities(){
    this._activityService.getActivities().subscribe(data => {
      console.log("getActivities() successful");
      console.log(data);
      this.listActivities = data;
    }, error => {
      console.log(error);
    })
  }

  deleteActivity(nameActivity: string){
    const confirmDelete = confirm("Activity "+nameActivity+" will be deleted, do you want to continue?");
    if(confirmDelete===true){
      this._activityService.deleteActivity(nameActivity).subscribe(data => {
        this.toastr.success('Activity successfully deleted', 'Activity deleted');
        this.getActivities();
      }, error => {
        this.toastr.error("Activity can not be deleted, please try again","Error deleting activity");
        console.log(error);
      })
    }    
  }

  addUserActivity(activity:Activity){
    const username = prompt("Please enter the name of the user participating on this activity");
    if(username!==null && username!==""){
      this._userService.getUser(username).subscribe(data=>{
        const user = data;
        console.log(user);
        activity.users.push(user);
        console.log(activity);
        this._activityService.editActivity(activity,activity.name).subscribe(data => {
          this.toastr.success("User "+username+" added correctly to activity "+activity.name,"Used added!");
        }, error => {
          this.toastr.error("The user can not be added due to an error with the activity","User not added")
        });
      }, error => {
        this.toastr.error("The user introduced doesn't exist, try again","Error in user name")
      })

    }
    else{
      this.toastr.error("Please enter a user name","Error");
    }

  }

}
