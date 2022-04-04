import { Rating } from 'src/app/models/rating';
import { RatingService } from 'src/app/services/rating.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';
import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { empty, isEmpty } from 'rxjs';

@Component({
  selector: 'app-create-ratings',
  templateUrl: './create-ratings.component.html',
  styleUrls: ['./create-ratings.component.css']
})
export class CreateRatingsComponent implements OnInit {
  ratingForm: FormGroup;
  tittle = 'Create Rating';
  titlerating: string|null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _ratingService: RatingService,
              private _userService: UserService,
              private aRouter: ActivatedRoute) { 
    this.ratingForm = this.fb.group({
      tittle: ['', Validators.required],
      rater: ['', Validators.required],
      userRated: [],
      activityRated: [],
      rating: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.titlerating = this.aRouter.snapshot.paramMap.get('title');
    console.log(this.titlerating);
  }

  ngOnInit(): void {
    this.editRating();
  }

  addRating(){
    const rating: Rating = {
      tittle: this.ratingForm.get('tittle')?.value,
      rater: this.ratingForm.get('rater')?.value,
      userRated: this.ratingForm.get('userRated')?.value,
      activityRated: this.ratingForm.get('activityRated')?.value,
      rating: this.ratingForm.get('rating')?.value,
      description: this.ratingForm.get('description')?.value,
    }
    if(this.titlerating!=null ){
      //Edit Rating
      this._ratingService.updateRating(this.titlerating, rating).subscribe(data => {
        this.toastr.info('Rating successfully edited!', 'Rating edited');
        this.router.navigate(['/list-ratings']);
      }, error => {
        console.log(error);
        this.ratingForm.reset();
      })
    }else{
      //Add Rating
      console.log(rating);
      if (rating.userRated != null) {
        this._ratingService.addRatingUser(rating).subscribe(data => {
          this.toastr.success('Rating successfully created!', 'Rating created');
          this.router.navigate(['/list-ratings']);
        }, error => {
          console.log(error);
          this.ratingForm.reset();
        })
      }
      else {
        this._ratingService.addRatingActivity(rating).subscribe(data => {
          this.toastr.success('Rating successfully created!', 'Rating created');
          this.router.navigate(['/list-ratings']);
        }, error => {
          console.log(error);
          this.ratingForm.reset();
        })
      }
      
    }
  }

  editRating(){
    if(this.titlerating!==null){
      this.tittle = 'Edit Rating';
      this._ratingService.getRatingByName(this.titlerating).subscribe(data => {
        this.ratingForm.setValue({
          tittle: data.tittle,
          rater: data.rater,
          userRated: data.userRated,
          activityRated: data.activityRated,
          rating: data.rating,
          descripion: data.description,
        })
      })
    }
  }
}
