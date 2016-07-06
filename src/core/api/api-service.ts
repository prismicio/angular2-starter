import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


const projects: any[] = [
  {id: 101, name: 'Project 1'},
  {id: 102, name: 'Project 2'},
  {id: 103, name: 'Project 3'}
];


@Injectable()
export class ApiService {
  fetchProjects(): Observable<any[]> {
    return Observable.of(projects)
      .delay(1000);
  }
}
