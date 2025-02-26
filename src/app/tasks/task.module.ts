import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskListComponent } from './task-list/task-list/task-list.component';
import { TaskDetailComponent } from './task-detail/task-detail/task-detail.component';
import { TaskFormComponent } from './task-form/task-form/task-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskDetailComponent,
    TaskFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TaskRoutingModule,
    FormsModule
  ]
})
export class TaskModule { }
