import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { TaskService } from '../../../core/services/task.service';
import { Task } from '../../../core/models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent{
  task:Task ={id:0,title:'',description:'',status:'Pending',priority:'Normal'};

  constructor(private _task:TaskService){}

  addTask():void{
    this.task.id=Date.now();
    this._task.addTask(this.task,this.task.priority);
    this.task={id:0,title:'',description:'',status:'Pending',priority:'Normal'}; //reset form
  }

  // updateTaskPriority(id:number, newPriority:'Low' | 'Normal' | 'High'): void {
  //   this._task.updateTaskPriority(id,newPriority)
  // }

}
