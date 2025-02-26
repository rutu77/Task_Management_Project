import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
=======

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  standalone: false,
>>>>>>> 4d5ee0e (second)
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
<<<<<<< HEAD
  errorMsg: string = '';

  constructor(private _auth: AuthService, private _user: UserService, private route: Router) {}

  register(){
    if (this._auth.register(this.username, this.password)) {
      this.route.navigate(['/login']);
    } else {
      this.errorMsg = 'Registration Failed! Please try again';
    }
  }
}

 
=======
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
>>>>>>> 4d5ee0e (second)
