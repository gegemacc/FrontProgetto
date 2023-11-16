import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {NgForm} from "@angular/forms";
import {Product} from "../models/Product";
import {Category} from "../models/Category";

@Injectable({
  providedIn: 'root'
})
export class CategoryControllerService {

  BASE_URL = 'http://localhost:8080/';
  requestHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {}

  public getCategories(): Observable<any> {
    return this.http.get(this.BASE_URL + 'categories', {
      headers: this.requestHeaders,
    });
  }

  public addCategory( categoryForm: NgForm) {
    return this.http.post<Category>(this.BASE_URL + 'categories/new', categoryForm, {
      headers: this.requestHeaders,
    });
  }

  public editCategory(categoryId: number, categoryForm: NgForm) {
    return this.http.put(this.BASE_URL + 'categories/'+categoryId+'/edit', categoryForm, {
      headers: this.requestHeaders,
    });
  }

}
