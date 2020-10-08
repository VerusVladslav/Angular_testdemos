import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import {TaskService} from '../task.service';


@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {


   newTheme: string;
   newDate: string;
   newtextwork: string;


  constructor(private Service: TaskService) { }

  sendAddTask()
  {
    const  newTask = new  Task(this.newTheme, this.newDate, this.newtextwork);

    this.Service.AddTask(newTask);
  }


  ngOnInit(): void {
  }

}
