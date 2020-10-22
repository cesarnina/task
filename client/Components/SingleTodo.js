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
    const { singleTodo, deleteTodo, editTodo, history } = this.props
    return (
      <div id='single-todo'>
        <Todo todo={singleTodo} deleteTodo={deleteTodo} />
        <UpdateTodo singleTodo={singleTodo} 
                    editTodo={editTodo}
                    history={history} />
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