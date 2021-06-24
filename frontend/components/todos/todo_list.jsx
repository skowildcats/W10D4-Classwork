import React from 'react'
import TodoListItem from './todo_list_item'
import TodoForm from '../todo_list/todo_form'

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    const todoLi = this.props.todos.map((todo) => {
      return <TodoListItem key={todo.id} todo={todo} receiveTodo={this.props.receiveTodo} removeTodo={this.props.removeTodo} updateTodo={this.props.updateTodo}/>;
    });

    return (
      <>
        <TodoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo} receiveErrors={this.props.receiveErrors} errors={this.props.errors}/>
        <ul>{todoLi}</ul>
      </>
    );
  }
};