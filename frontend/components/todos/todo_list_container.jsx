import {connect} from 'react-redux';
import TodoList from './todo_list';
import {allTodos} from '../../reducers/selector';
import {removeTodo, fetchTodos} from '../../actions/todo_actions';

const mSTP = state => ({
  todos: allTodos(state)
});

const mDTP = dispatch => ({
  receiveTodo: todo => dispatch(receiveTodo(todo)),
  removeTodo: todo => dispatch(removeTodo(todo)),
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(mSTP, mDTP)(TodoList);