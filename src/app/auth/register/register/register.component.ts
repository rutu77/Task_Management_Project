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
  username: string = '';
  password: string = '';
  role: 'user' | 'admin' = 'user';
  errorMsg: string = '';

  constructor(private _auth: AuthService, private router: Router) {}

  register() {
    if (this._auth.register(this.username, this.password, this.role)) {
      alert('Registration successful! Redirecting to login...');
      this.router.navigate(['/login']);
    } else {
      this.errorMsg = 'User already exists! Please log in.';
      this.router.navigate(['/auth/login']);
    }
  }
}
