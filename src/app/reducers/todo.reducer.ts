
import * as TodoActions from '../actions/todo.actions'
import { Todo } from '../models/todo.model'

export type Action = TodoActions.All

export function TodoReducer(state: Todo[] = [{key: 0, text: 'todo', actif: false}], action: Action) {
    console.log(action.payload, state)

    switch (action.type) {
      case 'ADD_TODO':
        return [...state, {...action.payload, key: state.length +1 }]
      case 'TOGGLE_TODO':
        return state.map((todo) => {
          if(todo.key === action.payload.key) {
            return {...todo, actif: !todo.actif}
          }

          return todo
        } )
      case 'REMOVE_TODO':
        return state.filter((todo) => todo.key !== action.payload.key)
      default:
        return state

    }
}
