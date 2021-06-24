import React from 'react';
import {strToBool, uniqueId} from '../util';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: false
    }
  };

  handleTitle(e) {
    this.setState({title: e.target.value});
  }

  handleBody(e) {
    this.setState({body: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = this.state
    this.props.createTodo({todo}).then(
      () => this.setState({ title: '', body: '', done: false})
    );
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="title">title</label>
        <input id="title" type="text" value={this.state.title} onChange={this.handleTitle.bind(this)}/><br/>

        <label htmlFor="body">body</label>
        <input id="body" type="text" value={this.state.body} onChange={this.handleBody.bind(this)}/><br/>

        <button>save</button>
      </form>
    );
  };
};