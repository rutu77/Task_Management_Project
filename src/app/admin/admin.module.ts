import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './user-management/user-management/user-management.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
