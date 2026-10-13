import { Component } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task: Task = {
    id: Date.now(),
    title: '',
    description: '',
    status: 'Pending',
    priority: 'Normal',
    createdAt: new Date().toISOString()
  };

  constructor(private _task: TaskService) {}

  addTask(): void {
    const title = this.task.title.trim();
    const description = this.task.description.trim();

    if (!title || !description) {
      return;
    }

    this._task.addTask({
      ...this.task,
      id: Date.now(),
      title,
      description,
      createdAt: new Date().toISOString()
    }, this.task.priority);

    this.task = {
      id: Date.now(),
      title: '',
      description: '',
      status: 'Pending',
      priority: 'Normal',
      createdAt: new Date().toISOString()
    };
  }
}
