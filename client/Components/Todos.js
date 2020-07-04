import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import  { removeTodo } from '../store/components/actions';

export class Todos extends Component {
  constructor () {
    super()
    this.state = {}
  };

  render () {
    console.log('this.props.todos: ', this.props.todos)
    return (
      <div id='todos'>
        <CreateTodo />
        {
          this.props.todos.map((todo, index) => {
            return (<Todo 
              // key={todo.id} 
              key={index}
              todo={todo} 
              removeTodo={this.props.removeTodo} />
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
  removeTodo: (todoId) => {dispatch(removeTodo(todoId))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
