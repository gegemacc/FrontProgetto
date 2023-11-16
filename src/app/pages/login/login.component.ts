import {Component, OnInit} from '@angular/core';
import {AuthControllerService} from "../../services/auth-controller.service";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  role: string = "";

  constructor(private authService: AuthControllerService, private router: Router) {}

  login(loginForm: NgForm) {
    this.authService.authenticate(loginForm.value).subscribe({
      next: response => {
        this.authService.saveToken(response.token);
        this.authService.saveRole(response.role);
          this.router.navigate(['/']).then();
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
