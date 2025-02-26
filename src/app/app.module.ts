import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';
import { TaskModule } from './tasks/task.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import { NavbarComponent } from './navbar/navbar.component';
>>>>>>> 4d5ee0e (second)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
=======
    NavbarComponent,
>>>>>>> 4d5ee0e (second)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthModule,
    TaskModule,
    AdminModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
