import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly storageKey = 'users';
  private users: User[] = [];
  private userSubject = new BehaviorSubject<User[]>([]);
  $user = this.userSubject.asObservable();

  constructor() {
    this.users = this.loadUsers();
    this.ensureSeedUsers();
    this.saveUsers();
  }

  private loadUsers(): User[] {
    try {
      const storedUsers = localStorage.getItem(this.storageKey);
      const parsedUsers = storedUsers ? JSON.parse(storedUsers) : [];
      return Array.isArray(parsedUsers) ? parsedUsers : [];
    } catch {
      return [];
    }
  }

  private ensureSeedUsers(): void {
    if (this.users.length > 0) {
      return;
    }

    this.users = [
      { id: 1, name: 'admin', password: 'admin123', role: 'admin' },
      { id: 2, name: 'user', password: 'user123', role: 'user' }
    ];
  }

  private saveUsers(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.users));
    this.userSubject.next([...this.users]);
  }

  addUser(user: User): void {
    this.users.push(user);
    this.saveUsers();
  }

  getAllUsers(): User[] {
    return [...this.users];
  }

  isUserNameRegistered(name: string): boolean {
    return this.users.some(user => user.name.toLowerCase() === name.trim().toLowerCase());
  }

  getUserByUsernameAndPassword(name: string, password: string): User | undefined {
    return this.users.find(user => user.name.toLowerCase() === name.trim().toLowerCase() && user.password === password);
  }
}
