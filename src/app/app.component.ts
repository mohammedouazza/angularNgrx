import { Component } from '@angular/core';

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { Todo } from './models/todo.model';

interface AppState {
  todos: Array<Todo>
}
const defaultTodo = {
  key: 0,
  text: '',
  actif: false
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})


export class AppComponent {
  todos: Observable<Todo[]>;
  todo: Todo = defaultTodo;

  constructor(private store: Store<AppState>) {
    this.todos = this.store.select('todos')
    console.log(this.todos)
  }

  addTodo() {
    console.log(this.todo)
    this.store.dispatch({type: 'ADD_TODO', payload: this.todo})
    this.todo = defaultTodo
  }

  removeTodo(todo) {
    console.log(todo)
    this.store.dispatch({type: 'REMOVE_TODO', payload: todo })
  }

  toggleTodo(todo) {
    console.log(todo)
    this.store.dispatch({type: 'TOGGLE_TODO', payload: todo})
  }

}
