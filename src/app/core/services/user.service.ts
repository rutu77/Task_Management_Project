import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  private userSubject = new BehaviorSubject<User[]>(this.users);
  $user = this.userSubject.asObservable();

  private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
    this.userSubject.next([...this.users]);
  }

  addUser(user: User): void {
    this.users.push(user);
    this.saveUsers();
  }

  updateUser(updatedUser: User): void {
    this.users = this.users.map(user => user.id === updatedUser.id ? updatedUser : user);
    this.saveUsers();
  }

  removeUser(id: number): void {
    this.users = this.users.filter(user => user.id !== id);
    this.saveUsers();
  }

  // isUserNameRegistered(name: string): boolean {
  //   return this.users.some(user => user.name === name);
  // }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
