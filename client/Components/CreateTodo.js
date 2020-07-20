import React, { Component } from 'react';
import TodoForm from './TodoForm';

export default class CreateTodo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      assignee: '',
      taskName: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit() {
    event.preventDefault()
    const newTodo = {assignee: this.state.assignee, taskName: this.state.taskName}
    this.props.addTodo(newTodo)
    this.setState({count: this.state.count++})
  };

  render () {
    return (
      <TodoForm todos={this.props.todos}
         handleChange={this.handleChange}
         handleSubmit={this.handleSubmit} />
    )
  };
};
