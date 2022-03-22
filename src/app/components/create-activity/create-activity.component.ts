import { Component, OnInit } from '@angular/core';
import { identifierName } from '@angular/compiler';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empty, isEmpty } from 'rxjs';
import { ActivityService } from 'src/app/service/activity.service';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

  activityForm: FormGroup;
  title = "Create Activity";
  nameActivity: string | null;

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _activityService: ActivityService,
    private aRouter: ActivatedRoute) { 
      this.activityForm = this.fb.group({
        name: ['', Validators.required],
        description: [''],
        organizer: ['', Validators.required],
        language: ['', Validators.required],
        location: ['',Validators.required]
      });

      this.nameActivity = this.aRouter.snapshot.paramMap.get('nameActivity');
    }

  ngOnInit(): void {
    
  }

  addActivity(){
    const activity: Activity = {
      name: this.activityForm.get('name')?.value,
      description: this.activityForm.get('description')?.value,
      organizer: this.activityForm.get('organizer')?.value,
      users: [],
      language: this.activityForm.get('language')?.value,
      location: this.activityForm.get('location')?.value      
    }
  }

}
