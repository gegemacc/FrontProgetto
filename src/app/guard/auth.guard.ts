import {CanActivateChildFn, CanActivateFn, Router} from '@angular/router';
import {AuthControllerService} from "../services/auth-controller.service";
import {inject} from "@angular/core";


export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthControllerService);
  const router = inject(Router);
  return authService.isLoggedIn() ? true : router.createUrlTree(['login']);
};
