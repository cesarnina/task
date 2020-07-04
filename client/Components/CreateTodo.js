import React, { Component } from 'react';
import TodoForm from './TodoForm';
import { addTodo } from '../store/components/actions';
import { connect } from 'react-redux';

export class CreateTodo extends Component {
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
  };

  render () {
    return (
      <TodoForm todos={this.props.todos}
         handleChange={this.handleChange}
         handleSubmit={this.handleSubmit} />
    )
  };
};

const mapStateToProps = (state) => ({
  todos: state.tasks.todos
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (newTodo) => {dispatch(addTodo(newTodo))}
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo);
