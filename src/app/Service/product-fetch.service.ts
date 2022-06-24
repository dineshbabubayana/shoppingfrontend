import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductFetchService {

  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get<any>("http://localhost:8080/products/all")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
