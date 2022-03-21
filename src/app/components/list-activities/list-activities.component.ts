import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from 'src/app/service/activity.service';

@Component({
  selector: 'app-list-activities',
  templateUrl: './list-activities.component.html',
  styleUrls: ['./list-activities.component.css']
})
export class ListActivitiesComponent implements OnInit {

  listActivities: Activity[] = [];

  constructor(private _activityService: ActivityService) { 

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

}
