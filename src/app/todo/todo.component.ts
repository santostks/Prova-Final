import { TodosService } from './../todos.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo?: Todo;




  constructor(private todosService: TodosService ) { }

  ngOnInit(): void {
    this.getTodos()
  }

  getTodos(){
    const todos ='https://jsonplaceholder.typicode.com/todos'
    this.todosService.getTodos().subscribe(todo => this.todo = todo)
      console.log(this.todo)
    }
  }

