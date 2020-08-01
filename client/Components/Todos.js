import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import  { postTodo, deleteTodo, fetchTodos } from '../store/components/actions';

export class Todos extends Component {
  constructor () {
    super()
  };

  componentDidMount() {
    this.props.fetchTodos()
  };

  render () {
    // console.log('this.props.todos: ', this.props.todos)
    return (
      <div id='todos'>
        <CreateTodo postTodo={this.props.postTodo}/>
        {
          this.props.todos.map((todo) => {
            return (<Todo 
              key={todo.id} 
              todo={todo} 
              deleteTodo={this.props.deleteTodo} />
          )})
        }
      </div>
    )
  };
};

const mapStateToProps = (state) => ({
  todos: state.tasks.todos
});

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => {dispatch(fetchTodos())},
  addTodo: (newTodo) => {dispatch(addTodo(newTodo))},
  deleteTodo: (todoId) => {dispatch(deleteTodo(todoId))},
  postTodo: (newTodo) => {dispatch(postTodo(newTodo))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
