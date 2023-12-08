(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  class User {
    constructor(task) {
      this.task = task;
    }

    do() {
      this.task.run(this.task.tasks);
    }
  }

  class Task {
    constructor(tasks) {
      this.tasks = tasks;
    }
    run(task) {
      console.log(task);
    }
  }

  const newTask = new Task("задача 2");

  new User(newTask).do();

}));
