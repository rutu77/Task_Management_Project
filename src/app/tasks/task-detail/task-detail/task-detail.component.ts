import { Component, OnInit } from '@angular/core';
import { Task } from '../../../core/models/task.model';
import { TaskService } from '../../../core/services/task.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  standalone: false,
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task?: Task;

  constructor(private _task: TaskService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this._task.getTaskById(id);
  }
}
