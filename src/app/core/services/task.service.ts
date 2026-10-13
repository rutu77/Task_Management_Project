import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private readonly storageKey = 'tasks';
  private tasks: Task[] = [];
  private taskSubject = new BehaviorSubject<Task[]>([]);
  $task = this.taskSubject.asObservable();

  constructor() {
    this.tasks = this.loadTasks();
    this.ensureSeedTasks();
    this.saveTasks();
  }

  private loadTasks(): Task[] {
    try {
      const storedTasks = localStorage.getItem(this.storageKey);
      const parsedTasks = storedTasks ? JSON.parse(storedTasks) : [];
      return Array.isArray(parsedTasks) ? parsedTasks : [];
    } catch {
      return [];
    }
  }

  private ensureSeedTasks(): void {
    if (this.tasks.length > 0) {
      return;
    }

    this.tasks = [
      {
        id: 1,
        title: 'Prepare sprint plan',
        description: 'Review priorities with the team and finalize the upcoming sprint goals.',
        status: 'In Progress',
        priority: 'High',
        createdAt: new Date().toISOString()
      },
      {
        id: 2,
        title: 'Review feedback',
        description: 'Collect user feedback and identify the top fixes for the upcoming release.',
        status: 'Pending',
        priority: 'Normal',
        createdAt: new Date(Date.now() - 86400000).toISOString()
      },
      {
        id: 3,
        title: 'Update dashboard copy',
        description: 'Refresh the admin dashboard wording to make actions clearer for all users.',
        status: 'Completed',
        priority: 'Low',
        createdAt: new Date(Date.now() - 172800000).toISOString()
      }
    ];
  }

  private saveTasks(): void {
    localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
    this.taskSubject.next([...this.tasks]);
  }

  addTask(task: Task, priority?: 'Low' | 'Normal' | 'High'): void {
    const normalizedTask: Task = {
      ...task,
      id: task.id || Date.now(),
      title: task.title.trim(),
      description: task.description.trim(),
      priority: priority ?? task.priority ?? 'Normal',
      status: task.status || 'Pending',
      createdAt: task.createdAt || new Date().toISOString()
    };

    this.tasks = [normalizedTask, ...this.tasks];
    this.saveTasks();
  }

  updateTask(updatedTask: Task): void {
    this.tasks = this.tasks.map(task => task.id === updatedTask.id ? updatedTask : task);
    this.saveTasks();
  }

  updateTaskStatus(id: number, newStatus: 'Pending' | 'In Progress' | 'Completed'): void {
    const task = this.tasks.find(task => task.id === id);
    if (task) {
      task.status = newStatus;
      this.saveTasks();
    }
  }

  removeTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.saveTasks();
  }

  getTaskById(id: number): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  getAllTasks(): Task[] {
    return [...this.tasks];
  }
}
