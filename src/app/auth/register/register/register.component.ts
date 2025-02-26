import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
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

 