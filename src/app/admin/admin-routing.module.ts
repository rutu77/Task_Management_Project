import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD

const routes: Routes = [];
=======
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from '../core/auth/admin.guard';

const routes: Routes = [
  {path:'/admin-dash', component:AdminDashboardComponent,canActivate:[AdminGuard]}
];
>>>>>>> 4d5ee0e (second)

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
