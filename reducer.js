import { createReducer } from 'redux-act'
import { Map } from 'immutable'
import * as actions from './actions'
import * as mutations from './mutations'
import { pipe } from 'redux-pipe'
import { NavigationActions } from 'react-navigation'
import { Navigator } from './Navigator'
import { combineReducers } from 'redux'

const firstAction = Navigator.router.getActionForPathAndParams('Home')
const tempNavState = Navigator.router.getStateForAction(firstAction)
// const secondAction = Navigator.router.getActionForPathAndParams('Todos')
const initialNavState = Navigator.router.getStateForAction(tempNavState)

function nav(state = initialNavState, action) {
  let nextState
  switch (action.type) {
    default:
      nextState = Navigator.router.getStateForAction(action, state)
      break
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state
}
const state = createReducer(
  {
    [actions.editInput]: (state, payload) => state.set('text', payload.value),
    [actions.addTodo]: (state, payload) => pipe([mutations.addNewTodo(), mutations.clearTextField()], state)
  },
  Map()
)
const rootReducer = combineReducers({
  nav,
  state
})

export default rootReducer
