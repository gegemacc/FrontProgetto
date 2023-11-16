import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {PageResponse} from "../models/PageResponse";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Order} from "../models/Order";

@Injectable({
  providedIn: 'root'
})
export class AdminControllerService {

  BASE_URL = 'http://localhost:8080/';
  requestHeaders = new HttpHeaders()

  constructor(private http: HttpClient) {}

  public getAllOrdersByUserId(userId: number): Observable<any> {
    return this.http.get<Order[]>(this.BASE_URL + 'orders/user/'+userId, {
      headers: this.requestHeaders,
    });
  }
}
