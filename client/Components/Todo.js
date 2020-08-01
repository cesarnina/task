import React from 'react';
import { Link } from 'react-router-dom';

const Todo = (props) => {
  // console.log('props: ', props)
  const todo = props.todo
  return (
    <div className='todo row' key={todo.id}>
      {/* remove this div? */}
      <div>
        <div className='column'>
          <Link to={`/todos/${todo.id}`}>
            <h3>{todo.taskName}</h3>
          </Link>
          {/* list all the task from this person */}
          <p>Assigned to: {todo.assignee}</p>
        </div>
        <div className='column'>
          <Link to={'/todos'}>
            <button className='remove' onClick={() =>{props.deleteTodo(todo.id)}}>Remove</button>
          </Link>   
        </div>
      </div>
    </div>
  )
};

export default Todo;
