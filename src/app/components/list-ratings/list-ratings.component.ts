import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { Rating } from 'src/app/models/rating';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-list-ratings',
  templateUrl: './list-ratings.component.html',
  styleUrls: ['./list-ratings.component.css']
})
export class ListRatingsComponent implements OnInit {
  listRatings: Rating[] = [];

  constructor(private _ratingService: RatingService,
        private toastr: ToastrService) { }


  ngOnInit(): void {
    this.getRatings();
  }

  getRatings(){
    this._ratingService.getRatings().subscribe({next: 
      data => {
      console.log(data);
      this.listRatings = data;
    }, error: error => {
      console.log(error);
    }})
  }

  deleteRating(tittle: string){
    const confirmDelete = confirm("Activity "+tittle+" will be deleted, do you want to continue?");
    if(confirmDelete===true){
      this._ratingService.deleteRating(tittle).subscribe({next:
        data => {
        this.toastr.error('Rating successfully deleted', 'Rating deleted');
        this.getRatings();
      }, error: error => {
        console.log(error);
      }})
    }
  }
  }
