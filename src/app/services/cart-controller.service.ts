import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cart} from "../models/Cart";
import {OrderDTO} from "../models/OrderDTO";

@Injectable({
  providedIn: 'root'
})
export class CartControllerService {

  BASE_URL = 'http://localhost:8080/';
  requestHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {}


  public getCart(): Observable<any> {
    return this.http.get<Cart>(this.BASE_URL + 'cart', {
      headers: this.requestHeaders,
    });
  }

  public addToCart(productId: number, quantity: number): Observable<any> {
    return this.http.post(this.BASE_URL + 'cart/add?id='+productId+'&quantity='+quantity, {
      headers: this.requestHeaders,
    });
  }

  public deleteFromCart(cartItemId: number): Observable<any> {
    return this.http.delete(this.BASE_URL + 'cart/delete?cartItemId='+cartItemId, {
      headers: this.requestHeaders,
    });
  }

  editCart(cartItemId: number, oldQuantity: number, newQuantity: number) {
    return this.http.put(this.BASE_URL + 'cart/edit?cartItemId='+cartItemId+'&oldQuantity='+oldQuantity+'&newQuantity='+newQuantity, {
      headers: this.requestHeaders,
    });
  }

  checkout(orderDTO: OrderDTO) {
    return this.http.post(this.BASE_URL + 'cart/checkout', orderDTO,{
      headers: this.requestHeaders,
    });
  }
}
