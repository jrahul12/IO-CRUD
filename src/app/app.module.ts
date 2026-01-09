import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoFormComponent } from './component/todo-form/todo-form.component';
import { TodoListComponent } from './component/todo-list/todo-list.component';
import { TodoDashboardComponent } from './component/todo-dashboard/todo-dashboard.component';
import { FormsModule } from "@angular/forms";
import { StudentDashboardComponent } from './component1/student-dashboard/student-dashboard.component';
import { StudentListComponent } from './component1/student-list/student-list.component';
import { StudentFormComponent } from './component1/student-form/student-form.component';
import { StdFormComponent } from './component3/std-form/std-form.component';
import { StdUiComponent } from './component3/std-ui/std-ui.component';
import { StdDashboardComponent } from './component3/std-dashboard/std-dashboard.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { GetConfirmComponent } from './component3/get-confirm/get-confirm.component';
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MovieDashboardComponent } from './movie-component/movie-dashboard/movie-dashboard.component';
import { MovieCardComponent } from './movie-component/movie-card/movie-card.component';
import { MovieFormComponent } from './movie-component/movie-form/movie-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoDashboardComponent,
    StudentDashboardComponent,
    StudentListComponent,
    StudentFormComponent,
    StdFormComponent,
    StdUiComponent,
    StdDashboardComponent,
    GetConfirmComponent,
    MovieDashboardComponent,
    MovieCardComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
