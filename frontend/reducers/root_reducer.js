import {combineReducers} from 'redux'
import stepsReducer from './step_reducer'
import todosReducer from './todos_reducer'
import errorsReducer from './error_reducer'


const rootReducer = combineReducers({
  todos: todosReducer,
  steps: stepsReducer,
  errors: errorsReducer
});

export default rootReducer;