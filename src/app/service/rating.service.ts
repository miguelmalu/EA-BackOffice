import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rating } from '../models/rating';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getRatings(): Observable<Rating[]> {
    return this.http.get<Rating[]>(this.url + '/ratings');
  }

  deleteRating(name: string): Observable<string> {
    return this.http.delete(this.url + '/ratings/' + name, {responseType: 'text'})
  }

  addRating(user: Rating): Observable<string> {
    return this.http.post(this.url + '/ratings', user, {responseType: 'text'}) ;
  }

  getRatingByName(name: string): Observable<Rating> {
    return this.http.get<Rating>(this.url + '/ratings/' + name);
  }

  updateRating(name: string, rating:Rating): Observable<string> {
      return this.http.put(this.url + '/ratings' + name, rating, {responseType: 'text'});
  }
}