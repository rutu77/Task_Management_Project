import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management/user-management.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AdminModule { }
