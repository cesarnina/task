// ACTION TYPES / ACTION CREATORS

export const GET_TODO = 'GET_TODO';
export const getTodo = (todo) => ({
  type: GET_TODO,
  todo,
});

export const ADD_TODO = 'ADD_TODO';
export const addTodo = (todo) => ({
  type: ADD_TODO,
  todo,
});

export const UPDATE_TODO = 'UPDATE_TODO';
export const updateTodo = (id, todo) => ({
  type: UPDATE_TODO,
  id,
  todo,
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

// THUNK CREATORS
