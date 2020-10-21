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

  handleSubmit(event) {
    event.preventDefault()
    const newTodo = { assignee: this.state.assignee,
                      taskName: this.state.taskName }
    this.props.postTodo(newTodo)
    this.setState({
      assignee: '',
      taskName: ''
    })
  };

  render () {
    return (
      <TodoForm state={this.state}
         handleChange={this.handleChange}
         handleSubmit={this.handleSubmit} />
    )
  };
};
