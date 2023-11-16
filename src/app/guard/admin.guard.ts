import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthControllerService} from "../services/auth-controller.service";

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthControllerService);
  const router = inject(Router);
  if (authService.isLoggedIn() && authService.isAdmin()) {
    return true;
  }
  router.navigate(['']);
  return false;
};
