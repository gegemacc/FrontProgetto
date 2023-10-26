import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { UserControllerService } from './user-controller.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLoggedIn$: BehaviorSubject<boolean>;

  private accessJWT: AccessJWT | null = null;

  constructor(private router: Router, private userService: UserControllerService) { 
    this.loadTokens();
    this.isLoggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn$());
    console.log('this.isLoggedIn():', this.isLoggedIn$());
  }

  loadTokens() {
    this.encodedAccessJWT = localStorage.getItem('accessJWT') || null;
  }

  public isLoggedIn(): boolean {
    return (this.accessJWT != null)
    && this.notExpired(this.accessJWT);
  }

  private notExpired(jwt: AccessJWT): boolean {
    return jwt.exp
  }

}

export type AccessJWT = {
  exp: number;
  iat: number;
  nbf: string;
  username: string;
  role: string;
}


