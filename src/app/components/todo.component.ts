import { Component, Input } from '@angular/core';
import { TodoItem } from '../models/todo.model';

@Component({
  selector: 'app-todo',
  standalone: false,
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
    @Input() item!: TodoItem;

}
