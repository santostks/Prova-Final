import { TodoService } from './../todos.service';
import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodosComponent implements OnInit {
  todos?: Todo[];

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
