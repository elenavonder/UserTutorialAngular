import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.class'

const baseurl: string = "http://localhost:55052/api/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
    
    ) {}

    // This function is getting a list of all users
    list(): Observable<User[]>{
        return this.http.get(`${baseurl}`) as Observable<User[]>;
    }

    // This function is getting a list of users by id
    get(id: number): Observable<User>{
      return this.http.get(`${baseurl}/${id}`) as Observable<User>;
    }

    // This function is adding an instance of User
    add(user: User): Observable<User>{
      return this.http.post(`${baseurl}`, user) as Observable<User>;
    }

    // This function is updating information for certain instance of User
    update(user: User): Observable<any>{
      return this.http.put(`${baseurl}/${user.id}`, user) as Observable<any>;
    }

}
