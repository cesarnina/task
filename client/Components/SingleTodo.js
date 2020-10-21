import React, { Component } from 'react';
import Todo from './Todo';
import UpdateTodo from './UpdateTodo';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  { deleteTodo, fetchSingleTodo, editTodo } from '../store/components/actions';

export class SingleTodo extends Component {
  constructor () {
    super()
    this.state = {}
  };

  componentDidMount() {
    const todoId = this.props.match.params.todoId
    this.props.fetchSingleTodo(todoId)
  };

  render () {
    // console.log('SingleTodo props: ', this.props)
    const todo = this.state.todo
    return (
      <div id='single-todo'>
        <Todo todo={this.props.singleTodo} deleteTodo={this.props.deleteTodo} />
        <UpdateTodo singleTodo={this.props.singleTodo} editTodo={this.props.editTodo} />
        <Link to='/'>Back</Link>
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  singleTodo: state.tasks.singleTodo
});

const mapDispatchToProps = (dispatch) => ({
  deleteTodo: (todoId) => {dispatch(deleteTodo(todoId))},
  editTodo: (todoId, newTodo) => {dispatch(editTodo(todoId, newTodo))},
  fetchSingleTodo: (todoId) => {dispatch(fetchSingleTodo(todoId))}
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleTodo);