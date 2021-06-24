import React from 'react';

export default class StepListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  done(e) {
    e.preventDefault()
    const newStep = Object.assign({}, this.props.step);
    newStep.done = true;
    this.props.receiveStep(newStep);
  }

  undo(e) {
    e.preventDefault()
    const newStep = Object.assign({}, this.props.step);
    newStep.done = false;
    this.props.receiveStep(newStep);
  }

  deleteClick(e) {
    e.preventDefault();
    this.props.removeStep(this.props.step);
  }

  render() {
    let doneButton = null;
    if (this.props.step.done) {
      doneButton = <button onClick={this.undo.bind(this)}>Undo</button>;
    } else {
      doneButton = <button onClick={this.done.bind(this)}>Done</button>;
    }

    return (
      <>
        <p>{this.props.step.title}</p>
        <p>{this.props.step.body}</p>
        <p>{`${this.props.step.done}`}</p>
        {doneButton}
        <button onClick={this.deleteClick.bind(this)}>Delete Step</button>
      </>
    );
  }
}