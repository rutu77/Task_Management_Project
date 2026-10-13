import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: false,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  errorMsg = '';

  constructor(private _auth: AuthService, private _user: UserService, private router: Router) {}

  login(): void {
    const normalizedName = this.username.trim();
    const user: User | undefined = this._user.getUserByUsernameAndPassword(normalizedName, this.password);

    if (!user) {
      this.errorMsg = 'User not registered or the password is incorrect.';
      return;
    }

    this._auth.login(user.role, user.name, user.id);
    this.router.navigate([user.role === 'admin' ? '/tasks/task-form' : '/tasks/task-list']);
  }
}

