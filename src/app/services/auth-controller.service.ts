import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, from, Observable, Subject} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {RoleResponse} from "../models/RoleResponse";


@Injectable({
  providedIn: 'root'
})
export class AuthControllerService {

  BASE_URL = 'http://localhost:8080/';
  requestHeaders = new HttpHeaders();
  isAnAdmin = false;

  constructor(private http: HttpClient) {}

  public authenticate(loginObj: any): Observable<any> {
      return this.http.post(this.BASE_URL + 'login', loginObj, {
        headers: this.requestHeaders,
      });
  }

  public register(registerObj: any): Observable<any> {
    return this.http.post(this.BASE_URL + 'register', registerObj, {
      headers: this.requestHeaders,
    });
  }

  public logout(): Observable<any> {
    this.clear();
    return this.http.get(this.BASE_URL + 'logout', {
      headers: this.requestHeaders,
    });
  }

  public clear() {
    localStorage.clear();
  }

  public saveToken(jwtToken: string) {
    localStorage.setItem('token', jwtToken);
  }

  public saveRole(role: string) {
    localStorage.setItem('role', role);
  }

  public getRole(): string {
    return localStorage.getItem('role') as string;
  }

  public getToken(): string {
    return localStorage.getItem('token') as string;
  }
  isLoggedIn(): boolean{
    return !!localStorage.getItem('token');
  }

  isAdmin(): boolean {
    return this.getRole()==='ADMIN';
  }

}
