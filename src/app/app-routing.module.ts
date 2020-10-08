import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import {TaskListstudentComponent} from './tasks/task-liststudent/task-liststudent.component';

const routes: Routes = [

  { path: '', redirectTo: '/teacher', pathMatch: 'full' },
  { path: 'teacher', pathMatch: 'full', component: TasksComponent },
  { path: 'student', pathMatch: 'full', component: TaskListstudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
