import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-user-management',
  standalone: false,
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {
  users: Array<{ id: number; name: string; role: 'admin' | 'user' }> = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }
}
