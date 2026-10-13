import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn = false;
  isAdmin = false;
  currentUser = '';

  constructor(private _auth: AuthService, private route: Router) {
    this._auth.$authState.subscribe(status => {
      this.isLoggedIn = status;
      if (status) {
        this.currentUser = this._auth.getCurrentUserName();
      } else {
        this.currentUser = '';
      }
    });

    this._auth.$role.subscribe(role => this.isAdmin = role === 'admin');
  }

  logout(): void {
    this._auth.logout();
    this.currentUser = '';
    this.route.navigate(['/auth/login']);
  }
}
