import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Activity } from 'src/app/models/activity';
import { User } from 'src/app/models/user';
import { ActivityService } from 'src/app/service/activity.service';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {

  listActivities: Activity[] = [];

  constructor(private _activityService: ActivityService, private toastr: ToastrService) { 

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
    this._activityService.deleteActivity(nameActivity).subscribe(data => {
      this.toastr.success('Activity successfully deleted', 'Activity deleted');
      this.getActivities();
    }, error => {
      this.toastr.error("Activity can not be deleted, please try again","Error deleting activity");
      console.log(error);
    })
  }

}
