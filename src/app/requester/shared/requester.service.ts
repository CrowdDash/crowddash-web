import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequesterService {
  private http: HttpClient;

  constructor(
    http: HttpClient
  ) {
    this.http = http;
  }

  getRequester(requesterId: string): Observable<any[]> {
    return this.http.get<any[]>("https://api.turkopticon.info/requesters/" + requesterId);
  }

}
