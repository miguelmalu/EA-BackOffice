import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  url = environment.apiURL + '/api/activities';

  constructor(private http:HttpClient) { }

  getActivities(): Observable<Activity[]>{
    return this.http.get<Activity[]>(this.url);
  }

  getActivity(nameActivity: string): Observable<Activity>{
    return this.http.get<Activity>(this.url + "/" + nameActivity);
  }

  addActivity(activity: Activity): Observable<string>{
    return this.http.post(this.url, activity,{responseType: 'text'});
  }

  editActivity(activity: Activity, nameActivity: string): Observable<string>{
    return this.http.put(this.url + "/" + nameActivity, activity, {responseType: 'text'});
  }

  deleteActivity(nameActivity: string): Observable<string>{
    return this.http.delete(this.url + "/" + nameActivity, {responseType: 'text'});
  }



}
