import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = [];
  searchTerm = '';
  filterStatus: 'All' | 'Pending' | 'In Progress' | 'Completed' = 'All';

  constructor(private _task: TaskService) {}

  ngOnInit(): void {
    this._task.$task.subscribe(tasks => {
      this.tasks = [...tasks].sort((a, b) => new Date(b.createdAt ?? 0).getTime() - new Date(a.createdAt ?? 0).getTime());
    });
  }

  get filteredTasks(): Task[] {
    const term = this.searchTerm.trim().toLowerCase();

    return this.tasks.filter(task => {
      const matchesStatus = this.filterStatus === 'All' || task.status === this.filterStatus;
      const matchesSearch = !term || task.title.toLowerCase().includes(term) || task.description.toLowerCase().includes(term);
      return matchesStatus && matchesSearch;
    });
  }

  get summary(): { total: number; pending: number; inProgress: number; completed: number } {
    return {
      total: this.tasks.length,
      pending: this.tasks.filter(task => task.status === 'Pending').length,
      inProgress: this.tasks.filter(task => task.status === 'In Progress').length,
      completed: this.tasks.filter(task => task.status === 'Completed').length
    };
  }

  deleteTask(id: number): void {
    this._task.removeTask(id);
  }

  updateTaskStatus(id: number, newStatus: 'Pending' | 'In Progress' | 'Completed'): void {
    this._task.updateTaskStatus(id, newStatus);
  }
}
