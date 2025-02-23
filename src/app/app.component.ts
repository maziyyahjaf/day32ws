import { Component } from '@angular/core';
import { TodoItem } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'day-32ws';

  todos: TodoItem[] = []; // holds the todo items

  handleTodo(todoItem: TodoItem) {
    console.log('Recieved todo event in AppComponent:', todoItem);
    this.todos.push(todoItem);
  }
  // need to send this todo to the todo-list component
}
