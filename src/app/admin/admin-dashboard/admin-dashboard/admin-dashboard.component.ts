import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { UserService } from '../../../core/services/user.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  totalTasks = 0;
  pendingTasks = 0;
  completedTasks = 0;
  totalUsers = 0;

  constructor(
    private taskService: TaskService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    const tasks = this.taskService.getAllTasks();
    this.totalTasks = tasks.length;
    this.pendingTasks = tasks.filter(task => task.status === 'Pending').length;
    this.completedTasks = tasks.filter(task => task.status === 'Completed').length;
    this.totalUsers = this.userService.getAllUsers().length;
  }
}
