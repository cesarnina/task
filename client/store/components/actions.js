import axios from 'axios';

// ACTION TYPES
// ACTION CREATORS

export const GET_TODO = 'GET_TODO';
export const getTodo = (todo) => ({
  type: GET_TODO,
  todo,
});

export const  ONE_TODO = 'ONE_TODO';
export const oneTodo = (todo) => ({
  type: ONE_TODO,
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

export const fetchTodos = () => async (dispatch) => {
  const { data } = await axios.get('/api/todos')
  dispatch(addTodo(data))
};

export const fetchSingleTodo = (todoId) => async (dispatch) => {
  const { data } = await axios.get(`/api/todos/${todoId}`)
  dispatch(oneTodo(data))
};

export const postTodo = (newTodo) => async (dispatch) => {
  await axios.post('/api/todos', newTodo)
  const { data } = await axios.get('/api/todos')
  dispatch(getTodo(data))
};

export const editTodo = (todoId, newTodo) => async (dispatch) => {
  await axios.put(`/api/todos/${todoId}`, newTodo)
  const { data } = await axios.get('/api/todos')
  dispatch(getTodo(data))
};

export const deleteTodo = (todoId) => async (dispatch) => {
  await axios.delete(`/api/todos/${todoId}`)
  const { data } = await axios.get('/api/todos')
  dispatch(getTodo(data))
};