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

  toggleTodo(e) {
    e.preventDefault()
    // const newTodo = Object.assign({}, this.props.todo);
    // newTodo.done = !newTodo.done;
    this.props.todo.done = !this.props.todo.done
    this.props.updateTodo({todo: this.props.todo});
  }

  render() {
    let doneButton = null;
    if (this.props.todo.done) {
      doneButton = <button onClick={this.toggleTodo.bind(this)}>Undo</button>;
    } else {
      doneButton = <button onClick={this.toggleTodo.bind(this)}>Done</button>;
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