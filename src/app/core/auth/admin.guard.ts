import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _auth: AuthService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAdmin = this._auth.isAdmin();

    if (isAdmin) {
      return true;
    }

    alert('Only admin can access this page');
    this.route.navigate(['/auth/login']);
    return false;
  }
}
