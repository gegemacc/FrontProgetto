import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrderControllerService {

  BASE_URL = 'http://localhost:8080/';
  requestHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {}

  public getOrderById(id: number): Observable<any> {
    return this.http.get(this.BASE_URL + 'orders/'+id, {
      headers: this.requestHeaders,
    });
  }


}
