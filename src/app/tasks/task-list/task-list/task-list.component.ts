import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { Router } from '@angular/router';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'] // Corrected typo: styleUrls
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private _task: TaskService, private route: Router) {}

  ngOnInit(): void {
    this._task.$task.subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(id: number): void {
    this._task.removeTask(id);
  }

  updateTaskStatus(id: number, newStatus: 'Pending' | 'In Progress' | 'Completed'): void {
    this._task.updateTaskStatus(id, newStatus);
  }
}
