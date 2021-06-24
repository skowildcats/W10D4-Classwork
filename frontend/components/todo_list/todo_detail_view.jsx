import React from 'react';
import StepListContainer from '../step_list/step_list_container';

const TodoDetailView = ({todo, removeTodo}) => {

  function deleteClick(e) {
    e.preventDefault();
    removeTodo(todo);
  }

  return (
    <>
      <p>body: {todo.body}</p>
      <p>done: {`${todo.done}`}</p>
      <button onClick={deleteClick}>Delete To-Do</button>
      <StepListContainer todo_id={todo.id}/>
    </>

  );
};

export default TodoDetailView;