import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../models/Product";
import {PageResponse} from "../models/PageResponse";
import {Order} from "../models/Order";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {

  BASE_URL = 'http://localhost:8080/';
  requestHeaders = new HttpHeaders()

  constructor(private http: HttpClient) {}

  public getUserOrders(): Observable<any> {

    return this.http.get(this.BASE_URL + 'profile/my-orders', {
      headers: this.requestHeaders,
    });
  }

  public findAll() {
    return this.http.get<User[]>(this.BASE_URL + 'admin/users', {
      headers: this.requestHeaders,
    });
  }
}
