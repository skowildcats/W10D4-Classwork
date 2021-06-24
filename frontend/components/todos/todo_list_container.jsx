import {connect} from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selector';
import {removeTodo, fetchTodos, createTodo, updateTodo} from '../../actions/todo_actions';
import { receiveErrors } from '../../actions/error_actions';

const mSTP = state => ({
  todos: allTodos(state),
  errors: state.errors
});

const mDTP = dispatch => ({
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo)),
  receiveErrors: () => dispatch(receiveErrors()),
  updateTodo: todo => dispatch(updateTodo(todo))
});

export default connect(mSTP, mDTP)(TodoList);