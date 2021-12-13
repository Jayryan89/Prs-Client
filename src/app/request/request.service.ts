import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../request/request.class'

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl: string = "http://localhost:5000/api/requests";

  constructor(private http: HttpClient) { }

  approve(request: Request): Observable<Request> {  //PUT
    return this.http.put(`${this.baseurl}/approve`, request) as Observable<any>;
    }
    review(request: Request): Observable <Request> {  //Review 
      return this.http.put(`${this.baseurl}/review`, request) as Observable<any>;
    }
    reject(request: Request): Observable <Request > {  //REJECT REQUEST
      return this.http.put(`${this.baseurl}/reject`, request) as Observable<any>;
    }
    reviewlist(id:number):Observable<Request[]>{// will list status of review
      return this.http.get(`${this.baseurl}/review/${id}`)as Observable<Request[]>
    }

    list(): Observable < Request[] > {  //Get All
      return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
    }

    get(id: number): Observable < Request > { //Get by PK
      return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
    }

    create(request: Request): Observable < Request > {
      return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
    }
    edit(request: Request): Observable < any > { //Put/ Change/edit
      return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<any>;
    }
    delete(id: number): Observable < Request > { //Delete
      return this.http.delete(`${this.baseurl}/${id}`) as Observable<Request>;
    }
}
