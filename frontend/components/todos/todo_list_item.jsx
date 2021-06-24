import React from 'react';
import TodoDetailViewContainer from '../todo_list/todo_detail_view_container';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {detail: false};
  }

  detailClick(e) {
    e.preventDefault();
    this.setState({detail: !this.state.detail});
  }

  done(e) {
    e.preventDefault()
    const newTodo = Object.assign({}, this.props.todo);
    newTodo.done = true;
    this.props.receiveTodo(newTodo);
  }

  undo(e) {
    e.preventDefault()
    const newTodo = Object.assign({}, this.props.todo);
    newTodo.done = false;
    this.props.receiveTodo(newTodo);
  }

  render() {
    let doneButton = null;
    if (this.props.todo.done) {
      doneButton = <button onClick={this.undo.bind(this)}>Undo</button>;
    } else {
      doneButton = <button onClick={this.done.bind(this)}>Done</button>;
    }
    
    let detailView = null;
    if (this.state.detail) { detailView = <TodoDetailViewContainer todo={this.props.todo} receiveTodo={this.props.receiveTodo} />}

    return (
      <>
        <h3 onClick={this.detailClick.bind(this)}>{this.props.todo.title}</h3>
        {doneButton}
        {detailView}
      </>
    );
  }
};