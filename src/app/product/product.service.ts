import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.class'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseurl: string = "http://localhost:5000/api/products";
  

  constructor( private http: HttpClient) { }

  list(): Observable<Product[]>{  //Get All
    return this.http.get(`${this.baseurl}`) as Observable<Product[]>;
  }

  get(id:number): Observable<Product>{// Get by PK
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>;
  }

  create(product:Product): Observable<Product> { //Create/ Post(2 parameters)
    return this.http.post(`${this.baseurl}`,product ) as Observable<Product>;
  }

  change(product:Product): Observable<any> { //Change/ Put (2 parameters)
    return this.http.put(`${this.baseurl}/${product.id}`,product) as Observable<any>;
  }

  remove(product:Product): Observable<Product> { //Remove / Delete (2 parameters)
    return this.http.delete(`${this.baseurl}/${product.id}`) as Observable<Product>;
  }

}