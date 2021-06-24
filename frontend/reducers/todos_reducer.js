import {RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO} from '../actions/todo_actions'

// const initialTodos = {
//   1: {
//     id: 1,
//     title: "wash car",
//     body: "with soap",
//     done: false
//   },
//   2: {
//     id: 2,
//     title: "wash dog",
//     body: "with shampoo",
//     done: true
//   }
// };

const todosReducer = (state = {}, action) => {

  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TODOS:
      let todo_map = {};
      action.todos.forEach((todo) => {
        todo_map[todo.id] = todo;
      });
      return todo_map;
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo;
      return newState;
    case REMOVE_TODO:
      delete(newState[action.todo.id]);
      return newState;
    default:
      return state;
  }
};

export default todosReducer;