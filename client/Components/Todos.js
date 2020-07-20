import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';
import CreateTodo from './CreateTodo';
import  { addTodo, removeTodo, fetchTodos } from '../store/components/actions';

export class Todos extends Component {
  constructor () {
    super()
  };

  componentDidMount() {
    this.props.fetchTodos()
  }

  render () {
    console.log('this.props.todos: ', this.props.todos)
    return (
      <div id='todos'>
        <CreateTodo todos={this.props.todos} addTodo={this.props.addTodo}/>
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
  fetchTodos: () => {dispatch(fetchTodos())},
  addTodo: (newTodo) => {dispatch(addTodo(newTodo))},
  removeTodo: (todoId) => {dispatch(removeTodo(todoId))}
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
