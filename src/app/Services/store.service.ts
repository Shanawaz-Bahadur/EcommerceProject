import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private http: HttpClient) { }

  store() {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductWithID(id:any){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
