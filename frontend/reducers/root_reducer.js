import {combineReducers} from 'redux'
import stepsReducer from './step_reducer'
import todosReducer from './todos_reducer'


const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer
});

export default rootReducer;