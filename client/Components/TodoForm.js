import React from 'react';

const TodoForm = (props) => {
  const state = props.state
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor='taskName'>Task Name:</label>
      <input type='text' name='taskName' 
            // value={state.taskName}
            placeholder={state.taskName}
            onChange={props.handleChange} />

      <label htmlFor='assignee'>Assign to:</label>
      <input type='text' name='assignee' 
            // value={state.assignee}
            placeholder={state.assignee}
            onChange={props.handleChange} />

      <button type='submit'>Submit</button>
    </form>
  )
};

export default TodoForm;
