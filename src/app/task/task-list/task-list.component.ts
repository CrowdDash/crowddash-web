import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { Task, TaskResponse } from '../shared/task';
import { TaskService } from '../shared/task.service';
import { RequesterService } from '../../requester/shared/requester.service';
import { CreateTaskComponent } from '../create-task/create-task.component';


@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  private tasks: Task[];

  private taskService: TaskService;
  private requesterService: RequesterService;

  private dialog: MatDialog;
  private createTaskUrl: string;

  constructor(
    dialog: MatDialog,
    taskService: TaskService,
    requesterService: RequesterService
  ) {
    this.dialog = dialog;
    this.taskService = taskService;
    this.requesterService = requesterService;
    this.createTaskUrl = "";
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe((data: TaskResponse[]) => {
      this.tasks = data.map((taskResponse: TaskResponse) => {
        return new Task(taskResponse);
      });

      for (let task of this.tasks) {
        this.requesterService.getRequester(task.requesterId).subscribe((data: any) => {
          console.log(data);
        });
      }
    });
  }

  openCreateTaskDialog(task: Task) {
    console.log("here");
    let dialogRef = this.dialog.open(CreateTaskComponent, {
      height: '50%',
      width: '50%',
      data: {
        url: this.createTaskUrl
      }
    });
  }

  getTaskImage(platform: string) {
    if (platform === "mturk") {
      return "/assets/mturk-logo.png";
    }
  }

  getAverageTime(task: Task) {
    let sum = task.actualTimes.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    return sum / (task.actualTimes.length);
  }

  getRequester(requesterId: string) {
    
  }

}
