export class Tasks {
  task: string;
  done: boolean;

  constructor(task: string, done: boolean = false) {
    this.task = task;
    this.done = done;
  }
}
