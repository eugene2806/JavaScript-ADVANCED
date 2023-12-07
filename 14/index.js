"use strict";
import { User } from "./user.js";
import { Task } from "./task.js";

const newTask = new Task("задача 1");

new User(newTask).do();
