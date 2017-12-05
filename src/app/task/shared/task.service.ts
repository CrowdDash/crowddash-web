import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskResponse, Task } from './task';


import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskService {
  private http: HttpClient;

  constructor(
    http: HttpClient
  ) {
    this.http = http;
  }

  getTasks(): Observable<TaskResponse[]> {
    return this.http.get<TaskResponse[]>("assets/tasks.json");
  }

  getTask(id: string): Observable<TaskResponse> {
    return new Observable<TaskResponse>((observer) => {
      let task = new Task({
        "title": "Teach kids to cook",
        "description": "Most educational content is written for adults. In this HIT we are interested in translating content so that kids can follow along. If your son or daughter watched a cooking video, what extra information would they need?",
        "url": "https://www.mturk.com/mturk/preview?groupId=3RO2E92DZVPFC88A1Z9QPO7LU06D4M",
        "postedBy": "bennycooly",
        "requesterId": "AQF2BIQ7CISPD",
        "numLikes": 10,
        "numShares": 2,
        "platform": "mturk",
        "payout": 0.20,
        "categories": ["other", "fun"],
        "actualTimes": [
          1,
          3,
          2
        ]
      });
      observer.next(task);
      observer.complete();
    });
  }

  createTask(task: Task): Observable<any> {
    return new Observable((observer) => {
      let task = new Task({
        "title": "Explain why sentence 2 follows from sentence 1",
        "description": "Explain, using common-sense reasoning, why sentence 2 is a consequence of sentence 1",
        "url": "https://www.mturk.com/mturk/preview?groupId=34RF8KPUOT1X89XZANPELV5XJLASBD",
        "postedBy": "bennycooly",
        "requesterId": "ALWW0HGFW31AC",
        "numLikes": 4,
        "numShares": 0,
        "platform": "mturk",
        "payout": 0.01,
        "actualTimes": [
          1,
          4,
          5
        ]
      });
      observer.next(task);
      observer.complete();
    });
  }

}
