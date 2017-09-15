import { List, Map } from 'immutable'

export const clearTextField = () => state => state.set('text', '')
export const addNewTodo = () => state => {
  const todo = state.get('text')
  const currentTodos = state.get('todos', List())
  const todoData = Map({
    todo,
    isDone: false
  })
  const newTodos = currentTodos.push(todoData)
  return state.set('todos', newTodos)
}
