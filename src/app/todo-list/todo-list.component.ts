import { Component, Input } from '@angular/core';
import { TodoItem } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  standalone: false,
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  @Input() todoList!: TodoItem[]; // receives todos from parent (AppComponent)


}
