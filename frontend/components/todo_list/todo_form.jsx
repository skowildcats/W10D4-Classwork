import React from 'react';
import {strToBool, uniqueId} from '../util';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      done: null
    }
  };

  handleTitle(e) {
    this.setState({title: e.target.value});
  }

  handleBody(e) {
    this.setState({body: e.target.value});
  }

  handleDone(e) {
    this.setState({done: strToBool(e.target.value)});
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = {...this.state, id:uniqueId()}
    this.props.receiveTodo(todo);
    this.setState({title: "",
      body: "",
      done: null})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label htmlFor="title">title</label>
        <input id="title" type="text" value={this.state.title} onChange={this.handleTitle.bind(this)}/><br/>

        <label htmlFor="body">body</label>
        <input id="body" type="text" value={this.state.body} onChange={this.handleBody.bind(this)}/><br/>

        <div>done:</div>
        <label htmlFor="done-true">true</label>
        <input id="done-true" name="done" type="radio" value={true} checked={this.state.done === true} onChange={this.handleDone.bind(this)}/>
        <label htmlFor="done-false">false</label>
        <input id="done-false" name="done" type="radio" value={false} checked={this.state.done === false} onChange={this.handleDone.bind(this)}/>

        <button>save</button>
      </form>
    );
  };
};