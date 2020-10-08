export class Task{

  public id: number;
  public theme: string;
  public date: string;
  public textwork: string;
  public mark: number;
  public isDone: boolean;
  public isUnderRewied: boolean;




  // tslint:disable-next-line: max-line-length
  constructor(theme: string, date: string, textwork: string, id: number = 0, mark: number = 1, done: boolean = false, review: boolean = false)
  {
    this.id =  id;
    this.date = date;
    this.textwork = textwork;
    this.mark = mark;
    this.theme = theme;
    this.isDone = done;
    this.isUnderRewied = review;
  }

}
