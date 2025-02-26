import { Component } from '@angular/core';
import { AuthService } from '../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isLoggedIn:boolean=false;
  isAdmin:boolean=false;

  constructor(private _auth:AuthService, private route:Router){
    this._auth.$authState.subscribe(status=>this.isLoggedIn=status)
    this._auth.$authState.subscribe(role=>this.isAdmin=role)
  }

    logout(){
      this._auth.logout()
      this.route.navigate(['/auth/login'])
    }

}
