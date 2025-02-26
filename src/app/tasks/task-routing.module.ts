import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form/task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail/task-detail.component';
import { AuthGuard } from '../core/auth/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/task-list', pathMatch: 'full' },
  { path: 'task-list', component: TaskListComponent , canActivate: [AuthGuard]},
  { path: 'task-form', component: TaskFormComponent , canActivate: [AuthGuard]},
  { path: 'task-detail/:id', component: TaskDetailComponent, canActivate: [AuthGuard]},
  // { path: '**', redirectTo: '/tasks' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
