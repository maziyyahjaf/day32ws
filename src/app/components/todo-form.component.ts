import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoItem } from '../models/todo.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  standalone: false,
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent implements OnInit {
  todoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  @Output() sendTodo = new Subject<TodoItem>();

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      description: this.fb.control<string>(''),
      priority: this.fb.control<string>(''),
      due: this.fb.control<Date>(new Date())
    });
  }

  onSubmit() {
    const formData = this.todoForm.value;
    const todoItem: TodoItem = {
      description: formData.description,
      priority: formData.priority,
      due: formData.due
    };
    
    this.sendTodo.next(todoItem);

  }

}
