import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../models/rating';
import { Activity } from '../models/activity';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  url = environment.apiURL + '/api';

  constructor(private http: HttpClient) { }

  getRatings(): Observable<Rating[]> {
    return this.http.get<Rating[]>(this.url + '/ratings');
  }

  deleteRating(tittle: string): Observable<string> {
    return this.http.delete(this.url + '/ratings/' + tittle, {responseType: 'text'})
  }

  addRatingUser(user: Rating): Observable<string> {
    return this.http.post(this.url + '/ratings/ratinguser', user, {responseType: 'text'}) ;
  }

  addRatingActivity(activity: Rating): Observable<string> {
    return this.http.post(this.url + '/ratings/ratingactivity', activity, {responseType: 'text'}) ;
  }

  getRatingByName(name: string): Observable<Rating> {
    return this.http.get<Rating>(this.url + '/ratings/' + name);
  }

  updateRating(name: string, rating:Rating): Observable<string> {
      return this.http.put(this.url + '/ratings' + name, rating, {responseType: 'text'});
  }
}