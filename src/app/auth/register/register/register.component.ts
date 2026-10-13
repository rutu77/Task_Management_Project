import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: false,
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username = '';
  password = '';
  role: 'user' | 'admin' = 'user';
  errorMsg = '';

  constructor(private _auth: AuthService, private router: Router) {}

  register(): void {
    if (this._auth.register(this.username, this.password, this.role)) {
      this.errorMsg = '';
      this.router.navigate(['/auth/login']);
      return;
    }

    this.errorMsg = 'User already exists. Please sign in instead.';
  }
}
