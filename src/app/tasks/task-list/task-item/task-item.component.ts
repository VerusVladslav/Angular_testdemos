import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../task.model';
import {TaskService} from '../../task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {


  @Input() currentTask: Task;

  NotDones: boolean = false;
  NotReviews: boolean = false ;
  Dones: boolean = false;

  Done (id: number)
  {
    console.log(id);
    this.Service.Done(id);
  }
  Review(id: number)
  {
    console.log(id);

    this.Service.Review(id);
  }

  constructor(private Service: TaskService) { }

  ngOnInit(): void {
    if (this.currentTask.isDone === false && this.currentTask.isUnderRewied === false ) {
      this.NotReviews = true;

     }
    if (this.currentTask.isDone === false && this.currentTask.isUnderRewied === true ) {
      this.NotDones = true;
     }
    if (this.currentTask.isDone === true  ) {
      this.Dones = true;
     }
  }

}
