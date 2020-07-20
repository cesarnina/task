import React from 'react';

const TodoForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='taskName'>Task Name:</label>
      <input type='text' name='taskName' 
            value={props.taskName}
            // placeholder={props.taskName}
            onChange={props.handleChange} />

      <label htmlFor='assignee'>Assign to:</label>
      <input type='text' name='assignee' 
            value={props.assignee}
            // placeholder={props.assignee}
            onChange={props.handleChange} />

      <button type='submit'>Submit</button>
    </form>
  );
};

export default TodoForm;
