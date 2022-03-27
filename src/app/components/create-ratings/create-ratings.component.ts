import { Rating } from 'src/app/models/rating';
import { RatingService } from 'src/app/service/rating.service';

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
  name: string|null;

  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _ratingService: RatingService,
              private aRouter: ActivatedRoute) { 
    this.ratingForm = this.fb.group({
      tittle: ['', Validators.required],
      rater: ['', Validators.required],
      userRated: ['', Validators.required],
      activityRated: ['', Validators.required],
      rating: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.name = this.aRouter.snapshot.paramMap.get('name');
    console.log(this.name);
  }

  ngOnInit(): void {
    this.editRating();
  }

  addRating(){
    const rating: Rating = {
      tittle: this.ratingForm.get('tittle')?.value,
      rater: this.ratingForm.get('rater')?.value,
      userRated: this.ratingForm.get('userRated')?.value,
      //activityRated: this.ratingForm.get('activityRated')?.value,
      rating: this.ratingForm.get('rating')?.value,
      description: this.ratingForm.get('description')?.value,
    }
    if(this.name!==null){
      //Edit Rating
      this._ratingService.updateRating(this.name, rating).subscribe(data => {
        this.toastr.info('Rating successfully edited!', 'Rating edited');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.ratingForm.reset();
      })
    }else{
      //Add Rating
      console.log(rating);
      this._ratingService.addRating(rating).subscribe(data => {
        this.toastr.success('Rating successfully created!', 'Rating created');
        this.router.navigate(['/']);
      }, error => {
        console.log(error);
        this.ratingForm.reset();
      })
    }
  }

  editRating(){
    if(this.name!==null){
      this.tittle = 'Edit Rating';
      this._ratingService.getRatingByName(this.name).subscribe(data => {
        this.ratingForm.setValue({
          tittle: data.tittle,
          rater: data.rater,
          userRated: data.userRated,
          //activityRated: data.activityRated,
          rating: data.rating,
          descripion: data.description,
        })
      })
    }
  }
}
