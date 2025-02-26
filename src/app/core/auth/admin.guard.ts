import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

export class AdminGuard implements CanActivate {
  constructor(private _auth: AuthService, private route: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAdmin = this._auth.isAdmin();

    if (isAdmin) {
      return true;
    } else {
      alert("Only admin can access this page");
      this.route.navigate(['/tasks']);
      return false;
    }
  }
}
