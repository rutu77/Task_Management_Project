import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _user: UserService) { }

  private authState = new BehaviorSubject<boolean>(this.isLoggedIn());
  $authState = this.authState.asObservable();

  private roleSubject = new BehaviorSubject<string | null>(this.getRole());
  $role = this.roleSubject.asObservable();

  login(role: 'user' | 'admin') {
    localStorage.setItem('user_role', role);
    localStorage.setItem('loggedIn', 'true');
    this.authState.next(true);
    this.roleSubject.next(role);
  }

  
  register(name: string, password: string){
    return true;
  }

  logout() {
    localStorage.clear();
    this.authState.next(false);
    this.roleSubject.next(null);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
    // return localStorage.getItem('user_role') !== null;
  }

  getRole(): 'user' | 'admin' | null {
    return localStorage.getItem('user_role') as 'user' | 'admin' | null;
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }
}

  // register(name: string, password: string) {
  //   if (this._user.isUserNameRegistered(name)) {
  //     return false;
  //   }
  //   const newUser: User = { id: Date.now(), name, password, role: 'user' };
  //   this._user.addUser(newUser);
  //   return true;
  // }