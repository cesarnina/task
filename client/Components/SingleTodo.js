import React, { Component } from 'react';
import Todo from './Todo';
import UpdateTodo from './UpdateTodo';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import  { removeTodo } from '../store/components/actions';

export class SingleTodo extends Component {
  constructor () {
    super()
    this.state = {}
  };

  componentDidMount() {
    const todoId = this.props.match.params.campusId
    this.props.singleTodo(todoId)
  };

  render () {
    const todo = this.state.todo

    return (
      <div id='single-todo'>
        <Todo todo={singleTodo} removeTodo={this.props.removeTodo}/>
        <UpdateTodo Todo={this.props.singleTodo}/>
        {/* <Link to='/'>Back</Link> */}
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  singleTodo: state.tasks.singleTodo
});

const mapDispatchToProps = (dispatch) => ({
  removeTodo: (todoId) => {dispatch(removeTodo(todoId))}
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleTodo);