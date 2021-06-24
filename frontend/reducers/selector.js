const allTodos = (state) => {
  return Object.values(state.todos);
};

const stepsByTodoId = (state, todoId) => {
  return Object.values(state.steps).filter(step => step.todo_id === todoId);
};

export {allTodos, stepsByTodoId}
