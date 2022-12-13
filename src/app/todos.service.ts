import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  private todos = 'https://jsonplaceholder.typicode.com/todos'

  getTodos(){
    return this.http.get<Todo>(this.todos)
  }

  constructor(private http: HttpClient) { }
}
