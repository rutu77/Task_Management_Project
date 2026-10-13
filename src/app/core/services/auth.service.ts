import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(this.isLoggedIn());
  $authState = this.authState.asObservable();

  private roleSubject = new BehaviorSubject<'user' | 'admin' | null>(this.getRole());
  $role = this.roleSubject.asObservable();

  constructor(private _user: UserService) { }

  login(role: 'user' | 'admin', username?: string, userId?: number): void {
    localStorage.setItem('user_role', role);
    localStorage.setItem('loggedIn', 'true');

    if (username) {
      localStorage.setItem('current_user', username);
    }

    if (userId !== undefined) {
      localStorage.setItem('current_user_id', String(userId));
    }

    this.authState.next(true);
    this.roleSubject.next(role);
  }

  register(name: string, password: string, role: 'user' | 'admin'): boolean {
    const normalizedName = name.trim();

    if (!normalizedName || !password.trim()) {
      return false;
    }

    if (this._user.isUserNameRegistered(normalizedName)) {
      return false;
    }

    const newUser: User = {
      id: Date.now(),
      name: normalizedName,
      password,
      role
    };

    this._user.addUser(newUser);
    return true;
  }

  logout(): void {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('user_role');
    localStorage.removeItem('current_user');
    localStorage.removeItem('current_user_id');
    this.authState.next(false);
    this.roleSubject.next(null);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedIn') === 'true';
  }

  getRole(): 'user' | 'admin' | null {
    const role = localStorage.getItem('user_role');
    return role === 'admin' || role === 'user' ? role : null;
  }

  getCurrentUserName(): string {
    return localStorage.getItem('current_user') || '';
  }

  isAdmin(): boolean {
    return this.getRole() === 'admin';
  }
}
