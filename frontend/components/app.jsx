import React from "react";
import TodoListContainer from "./todos/todo_list_container";

const App = props => {
  return (
    <>
      <h1> To Do List</h1>
      <TodoListContainer />
    </>
  );
};

export default App;