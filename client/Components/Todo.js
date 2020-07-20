import React from 'react';
import { Link } from 'react-router-dom';

const Todo = (props) => {
  const todo = props.todo
  return (
    // <div className='todo row' key={todo.id}>
    <div>
      <div className='column'>
        {/* <Link to={`/todos/${todo.id}`}> */}
          <h3>{todo.taskName}</h3>
        {/* </Link> */}
        <p>Assigned to: {todo.assignee}</p>
      </div>
      <div className='column'>
        {/*todo.id*/} 
        <button className='remove' onClick={() =>{props.removeTodo(props.key)}}>Remove</button>
      </div>
    </div>
    // </div>
  );
};

export default Todo;
