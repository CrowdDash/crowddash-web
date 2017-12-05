import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../shared/task';
import { TaskService } from '../shared/task.service';
import { RequesterService } from '../../requester/shared/requester.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent implements OnInit {

  private route: ActivatedRoute;

  private taskService: TaskService;
  private requesterService: RequesterService;

  private id: string;
  private task: Task;
  private requester: any;
  private isAddingTime: boolean;

  private displayedColumns: string[] = [
    "filter",
    "reviews",
    "reward",
    "pending",
    "comm",
    "recommend",
    "rejected",
    "tos",
    "broken"
  ];

  private requesterDataSource = new MatTableDataSource<any>([]);



  constructor(
    route: ActivatedRoute,
    taskService: TaskService,
    requesterService: RequesterService
  ) {
    this.route = route;
    this.taskService = taskService;
    this.requesterService = requesterService;
    this.isAddingTime = false;
    this.requester = {};
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(this.id);
      this.taskService.getTask(this.id).subscribe((data: any) => {
        this.task = data;
        console.log(this.task);

        this.requesterService.getRequester(this.task.requesterId).subscribe((data: any) => {
          console.log(data);
          this.requester = data;
          this.requester.data.attributes.aggregates.all.filter = "All";
          this.requester.data.attributes.aggregates.recent.filter = "Recent (90 Days)";
          this.requesterDataSource.data = [
            this.requester.data.attributes.aggregates.all,
            this.requester.data.attributes.aggregates.recent
          ];
        });
      });
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

  toggleAddTime() {
    this.isAddingTime = !this.isAddingTime;
  }

}

export interface Element {
  reward: any,
  pending: any,
  comm: any,
  recommend: any,
}
