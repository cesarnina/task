import React, { Component } from 'react';
import TodoForm from './TodoForm';

export default class UpdateTodo extends Component {
  constructor() {
    super() 
    this.state = {
      assignee: '',
      taskName: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  async handleSubmit(event) {
    event.preventDefault()
    const res = await axios.put(`/api/todos/${todoId}`) 
    // {name:this.state.name, 
    //  taskName: this.state.task} 
      
  };

  render () {
    console.log('update props: ', this.props)
    return (
      <TodoForm state={this.state} />
    )
  };
};
