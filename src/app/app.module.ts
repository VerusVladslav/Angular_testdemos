import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import {TaskItemComponent} from './tasks/task-list/task-item/task-item.component';
import {TaskListComponent} from './tasks/task-list/task-list.component';
import {TaskAddComponent} from './tasks/task-add/task-add.component';
import { HeaderComponent } from './header/header.component';
import {TaskListstudentComponent} from './tasks/task-liststudent/task-liststudent.component';
@NgModule({
  declarations: [
    AppComponent,
      TasksComponent,
      TaskItemComponent,
      TaskListComponent,
      TaskAddComponent,
      HeaderComponent,
      TaskListstudentComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
