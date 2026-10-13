import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management/user-management.component';
import { AdminGuard } from '../core/auth/admin.guard';

const routes: Routes = [
  { path: '', redirectTo: 'admin-dash', pathMatch: 'full' },
  { path: 'admin-dash', component: AdminDashboardComponent, canActivate: [AdminGuard] },
  { path: 'users', component: UserManagementComponent, canActivate: [AdminGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
