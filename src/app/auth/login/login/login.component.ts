import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private _auth: AuthService, private router: Router) {}

  login() {
    if (this.email === 'admin' && this.password === 'admin') {
      this._auth.login('admin');
      this.router.navigate(['/tasks/task-form']);
    } else {
      this._auth.login('user');
      this.router.navigate(['/tasks/task-list']);
    }
  }
}
