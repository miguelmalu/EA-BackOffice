import { Component, OnInit } from '@angular/core';
import { identifierName } from '@angular/compiler';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empty, isEmpty } from 'rxjs';
import { ActivityService } from 'src/app/services/activity.service';
import { Activity } from 'src/app/models/activity';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.css']
})
export class CreateActivityComponent implements OnInit {

  activityForm: FormGroup;
  title = "Create Activity";
  nameEditedActivity: string | null;

  constructor(private fb: FormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _activityService: ActivityService,
    private aRouter: ActivatedRoute,
    private _userService: UserService) { 
      this.activityForm = this.fb.group({
        name: ['', Validators.required],
        description: [''],
        organizer: ['', Validators.required],
        language: ['', Validators.required],
        location: ['',Validators.required]
      });

      this.nameEditedActivity = this.aRouter.snapshot.paramMap.get('nameActivity');
    }

  ngOnInit(): void {
    this.editActivity();
  }

  addActivity(){
    
    //let organizer: User;
    const organizername: string = this.activityForm.get('organizer')?.value;
    this._userService.getUser(organizername).subscribe(data =>{
      const organizer = data;

      const nameActivity:string = this.activityForm.get('name')?.value;
      const description:string = this.activityForm.get('description')?.value;
      const language:string = this.activityForm.get('language')?.value;
      const location:string[] =  this.activityForm.get('location')?.value.replace(/ /g, "").split(',')
          
      const activity: Activity = {
        name: nameActivity,
        description: description,
        organizer: organizer,
        users: [],
        language: language,
        location: location      
      }

      console.log(activity);
      
      if(this.nameEditedActivity!==null){
        this._activityService.editActivity(activity, nameActivity).subscribe(data => {
          this.toastr.success("Activity succesfully modified","Activity modified!");
          this.router.navigate(['/list-activities']);
        }, error => {
          this.toastr.error("Couldn't modify the activity due to some error, please try again","Error modifying the activity");
          console.log(error);
        });
      }
      else{
        this._activityService.addActivity(activity).subscribe(data => {
          this.toastr.success('Activity successfully created','Activity created!');
          this.router.navigate(['/list-activities']);
        }, error => {
          this.toastr.error("Couldn't create the activity due to some error, please try again","Error creating the activity");
          console.log(error);
        });
      }      

    }, error => {
      this.toastr.error("Please try again with another user that exists","Organizer not found")
      console.log(error)
    });
  }

  editActivity(){
    if(this.nameEditedActivity!=null){
      this.title = "Edit Activity";
      this._activityService.getActivity(this.nameEditedActivity).subscribe(data => {
        console.log(data);
        this.activityForm.setValue({
          name: data.name,
          description: data.description,
          organizer: data.organizer.name,
          language: data.language,
          location: `${data.location}`
        })
      }, error => {
        console.log(error);
        this.toastr.error("Cannot find the activity","Error");
      });
  }
  }

}
