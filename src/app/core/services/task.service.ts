import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
  private taskSubject = new BehaviorSubject<Task[]>(this.tasks);
  $task = this.taskSubject.asObservable();

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.taskSubject.next([...this.tasks]);
  }

  addTask(task: Task, priority: 'Low' | 'Normal' | 'High'): void {
    task.priority = priority;
    this.tasks.push(task);
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
}
