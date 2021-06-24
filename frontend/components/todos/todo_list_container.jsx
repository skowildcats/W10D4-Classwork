import {connect} from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selector';
import {receiveTodo, removeTodo, fetchTodos, createTodo} from '../../actions/todo_actions';
import { receiveErrors } from '../../actions/error_actions';

const mSTP = state => ({
  todos: allTodos(state)
});

const mDTP = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos()),
  createTodo: todo => dispatch(createTodo(todo))
});

export default connect(mSTP, mDTP)(TodoList);