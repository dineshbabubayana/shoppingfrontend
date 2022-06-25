import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private userServerUrl = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  public getUsers() : Observable<User[]>{
    return this.http.get<User[]>('http://localhost:8080/user/all');
  }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:8080/user/add', user);
  }
}
