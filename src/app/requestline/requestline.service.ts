import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';


@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseurl: string = "http://localhost:5000/api/requestlines";
  deleteRequestline: any;

  constructor(private http: HttpClient) { }

  list(): Observable<Requestline[]>{
    return this.http.get(`${this.baseurl}`) as Observable<Requestline[]>;
  }

  get(id:number): Observable<Requestline>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }

  create(requestline:Requestline): Observable<Requestline> {
    return this.http.post(`${this.baseurl}`, requestline) as Observable<Requestline>;
  }

  edit(requestline:Requestline): Observable<any> {
    return this.http.put(`${this.baseurl}/${requestline.id}`, requestline) as Observable<any>;
  }

  delete(id:number): Observable<Requestline> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }
  
}
