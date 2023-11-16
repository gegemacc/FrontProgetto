import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../models/Product";
import {PageResponse} from "../models/PageResponse";
import {NgForm} from "@angular/forms";





@Injectable({
  providedIn: 'root'
})
export class ProductControllerService {

  BASE_URL = 'http://localhost:8080/';
  requestHeaders = new HttpHeaders()

  constructor(private http: HttpClient) {}


  public getProductById(id: string): Observable<any> {

    return this.http.get<Product>(this.BASE_URL + 'products/' + id, {
      headers: this.requestHeaders,
    });
  }

  public getAllProducts(pageNumber: number, size: number, keyword: string): Observable<any> {
      return this.http.get(this.BASE_URL + 'products?page='+pageNumber+'&size='+size+'&searchKey='+keyword, {
        headers: this.requestHeaders,
      });
  }

  public getAllProductsByCategory(categoryId: number): Observable<any> {
    return this.http.get<PageResponse>(this.BASE_URL + 'products/by-category?categoryId='+categoryId, {
      headers: this.requestHeaders,
    });
  }


  public addProduct(productForm: NgForm) {
    return this.http.post<Product>(this.BASE_URL + 'admin/products/new', productForm, {
      headers: this.requestHeaders,
    });
  }

  public editProduct(productId: number, productForm: NgForm) {
    return this.http.put<Product>(this.BASE_URL + 'admin/products/'+productId+'/edit', productForm, {
      headers: this.requestHeaders,
    });
  }

  public deleteProduct(productId: number) {
    return this.http.delete(this.BASE_URL + 'admin/products/'+productId+'/delete', {
      headers: this.requestHeaders,
    });
  }
}
