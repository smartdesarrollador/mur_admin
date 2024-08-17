/* 12.- LOGIN_REGISTER_BASICO-V1-P2 */
import { Injectable } from '@angular/core';
import {
  Router,
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private router: Router) {}

  canActivate: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    const token = localStorage.getItem('token');

    if (token) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  };
}
/* /12.- LOGIN_REGISTER_BASICO-V1-P2 */
