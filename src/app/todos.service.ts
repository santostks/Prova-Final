import { TODOS } from './todo';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private json = 'https://jsonplaceholder.typicode.com/todos'

  getTodo(){
    return this.http.get<TODOS>(this.json)
  }

  constructor(private http: HttpClient) { }
}
