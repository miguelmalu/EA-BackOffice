import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../models/message';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  url = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(this.url + '/messages');
  }

  getMessagesByReceiver(id: string): Observable<Message[]> {
    return this.http.get<Message[]>(this.url + '/messages/receiver/' + id);
  }

  getMessagesByActivity(id: string): Observable<Message[]> {
    return this.http.get<Message[]>(this.url + '/messages/activity/' + id);
  }

  deleteMessage(id: string): Observable<string> {
    return this.http.delete(this.url + '/messages/' + id, {responseType: 'text'})
  }

  addMessageUser(message: string, sender: string, receiver: string): Observable<string> {
    return this.http.post(this.url + '/messages/receiver', message + sender + receiver, {responseType: 'text'}) ;
  }
/*
  getUser(it: string): Observable<User> {
    return this.http.get<User>(this.url + '/users/' + name);
  }

  editUser(name: string, user: User): Observable<string> {
    return this.http.put(this.url + '/users/' + name, user, {responseType: 'text'});
  }*/
}
