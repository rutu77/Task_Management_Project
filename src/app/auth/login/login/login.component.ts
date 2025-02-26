import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
<<<<<<< HEAD

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
=======
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone:false,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMsg: string = '';

  constructor(private _auth: AuthService, private _user: UserService, private router: Router) {}

  login() {
    const user: User | undefined = this._user.getUserByUsernameAndPassword(this.username, this.password);

    if (!user) {
      alert('User not registered or incorrect username or password!');
      // this.router.navigate(['/auth/register']);
      return;
    }

    const role = user.role;
    this._auth.login(role);
    this.router.navigate([role === 'admin' ? '/tasks/task-form' : '/tasks/task-list']);
  }
}

>>>>>>> 4d5ee0e (second)
