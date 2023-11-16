import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthControllerService} from "../../services/auth-controller.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {

  constructor(private authService: AuthControllerService, private router: Router) {

  }
  onSubmit() {

  }

  register(registerForm: NgForm) {
    this.authService.register(registerForm.value).subscribe({
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
