import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl: string = "http://localhost:5000/api/users"; 

  constructor(
    private http: HttpClient
  ) { }

  list():Observable<User[]>{
    return this.http.get(`${this.baseurl}`) as Observable<User[]>; //GET ALL
  }
  get(id: number):Observable<User>{   //GET  by Primary Key
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }

  create(user: User): Observable<User> {  //create/POST
    return this.http.post(`${this.baseurl}`, user) as Observable<User>;
  }

  change(user:User): Observable<any>{  // Change/PUT 
    return this.http.put(`${this.baseurl}/${user.id}`, user)as Observable<any>
  }

  remove(id: User): Observable<User>{ //remove
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<User>;
  }

  login(username:string, password:string):Observable<User>{return this.http.get(`${this.baseurl}/${username}/${password}`)as Observable<User>}
  
}