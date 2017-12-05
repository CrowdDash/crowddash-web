import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from './task';


import { Observable } from 'rxjs/Observable';

@Injectable()
export class CategoryService {
  private http: HttpClient;

  constructor(
    http: HttpClient
  ) {
    this.http = http;
  }

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>("assets/categories.json");
  }
}
