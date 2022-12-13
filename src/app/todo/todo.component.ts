import { TodosService } from './../todos.service';
import { Component, OnInit } from '@angular/core';
import { TODOS } from '../todo';
import { getTextOfJSDocComment } from 'typescript';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todo?: TODOS;

  constructor(private todosService: TodosService ) { }

  ngOnInit(): void {

    
  }

}
