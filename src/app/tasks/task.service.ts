import { EventEmitter, Injectable } from '@angular/core';
import {Task} from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  refreshList = new EventEmitter<Task[]>();
  DoneList = new EventEmitter<Task[]>();
  Reviewed = new EventEmitter<Task[]>();

  Tasks: Task[] = [
  new Task ('angular', '2020-10-20', 'text', 0),
  new Task ('angular', '2020-10-20', 'text', 1),
  new Task ('angular', '2020-10-20', 'text', 2)

  ];

  DoneTasks: Task[] = [
    new Task ('DoneTasks', '2020-10-20', 'text', 0, 0, true, false),
    new Task ('DoneTasks', '2020-10-20', 'text', 1, 0, true, false),
    new Task ('DoneTasks', '2020-10-20', 'text', 2, 0, true, false)

    ];

  ReviewTasks: Task[] = [
    new Task ('ReviewTasks', '2020-10-20', 'text', 0, 0, false, true),
    new Task ('ReviewTasks', '2020-10-20', 'text', 1, 0, false, true),
    new Task ('ReviewTasks', '2020-10-20', 'text', 2, 0, false, true)

    ];;


  AddTask(newtest: Task)
  {
    newtest.id = this.Tasks.length;
    this.Tasks.push(newtest);
    this.refreshList.emit(this.Tasks.slice());
  }

  Review(id: number)
  {
    this.Tasks[id].isUnderRewied = true;
    this.ReviewTasks.push(this.Tasks[id]);

    const index = this.Tasks.indexOf(this.Tasks[id]);

    this.Tasks.splice(index, 1);
    this.refreshList.emit(this.Tasks.slice());
    this.Reviewed.emit(this.ReviewTasks.slice());
  }

  Done(id: number)
  {
    this.Tasks[id].isDone = true;

    this.DoneTasks.push(this.Tasks[id]);
    const index = this.Tasks.indexOf(this.ReviewTasks[id]);
    this.ReviewTasks.splice(index, 1);

    this.Reviewed.emit(this.ReviewTasks.slice());
    this.DoneList.emit(this.DoneTasks.slice());

  }

  GetAllDone(): Task[]
  {
    return this.DoneTasks.slice();
  }

  GetAllReview(): Task[]
  {
    return this.ReviewTasks.slice();
  }

  getAllTask(): Task[]
  {
    return this.Tasks.slice();
  }
constructor() { }

}
