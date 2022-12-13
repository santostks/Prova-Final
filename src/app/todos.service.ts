import { TODOS } from './todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


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
