import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import {TaskService} from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor(private Service: TaskService) { }

  Tasks: Task [];
  TaskUnderReview: Task[];
  TaskDone: Task[];



  ngOnInit(): void {
    this.Tasks = this.Service.getAllTask();
    this.TaskDone = this.Service.GetAllDone();
    this.TaskUnderReview = this.Service.GetAllReview();

    this.Service.refreshList.subscribe((tasks: Task[]) => {
     this.Tasks = tasks;
   });
    this.Service.DoneList.subscribe((tasks: Task[]) => {
    this.TaskDone = tasks;
  });
    this.Service.Reviewed.subscribe((tasks: Task[]) => {
    this.TaskUnderReview = tasks;
  });
  }

}
