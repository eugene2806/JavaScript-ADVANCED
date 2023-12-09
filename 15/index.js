"use strict";
import { User } from "./user.js";
import { Task } from "./task.js";

const newTask = new Task("задача 2");

new User(newTask).do();
