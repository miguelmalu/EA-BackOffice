import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiURL + '/api';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + '/users');
  }

  deleteUser(name: string): Observable<string> {
    return this.http.delete(this.url + '/users/forget/' + name, {responseType: 'text'})
  }

  disableUser(name: string): Observable<string> {
    return this.http.delete(this.url + '/users/' + name, {responseType: 'text'})
  }

  addUser(user: User): Observable<string> {
    return this.http.post(this.url + '/users', user, {responseType: 'text'}) ;
  }

  getUser(name: string): Observable<User> {
    return this.http.get<User>(this.url + '/users/' + name);
  }

  editUser(name: string, user: User): Observable<string> {
    return this.http.put(this.url + '/users/' + name, user, {responseType: 'text'});
  }
}
