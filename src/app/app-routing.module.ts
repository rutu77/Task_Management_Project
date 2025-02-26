import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/auth/register',pathMatch:'full'},
  {path:'auth',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
  {path:'tasks',loadChildren:()=>import('./tasks/task.module').then(m=>m.TaskModule)},
  {path:'admin',loadChildren:()=>
    import('./admin/admin.module').then(m=>m.AdminModule)},
  {path:'**',redirectTo:'/auth/login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
