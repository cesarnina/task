// ACTION TYPES
// ACTION CREATORS

export const GET_TODO = 'GET_TODO';
export const getTodo = (todo) => ({
  type: GET_TODO,
  todo,
});

export const  SINGLE_TODO = 'SINGLE_TODO';
export const singleTodo = (todoId) => ({
  type: SINGLE_TODO,
  todoId,
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

export const fetchTodos = () => (dispatch) => {
  // const { data } = await axios.get('/api/todos')
  // dispatch(getTodo(data))
};

export const fetchSingleTodo = (todoId) => (dispatch) => {
  // const { data } = await axios.get(`/api/todos/${todoId}`)
  // dispatch(singleTodo(data))
};

export const postTodo = (newTodo) => (dispatch) => {
  // await axios.post('/api/todos', newtodo)
  // const { data } = await axios.get('/api/todos')
  // dispatch(getTodo(data))
}

export const replaceTodo = (campusId, newCampus) => (dispatch) => {
  // await axios.put(`/api/campuses/${campusId}/edit`, newCampus)
  // const { data } = await axios.get('/api/campuses')
  // dispatch(setCampuses(data))
}

export const removeCampus = (campusId) => (dispatch) => {
  // await axios.delete(`/api/campuses/${campusId}`)
  // const { data } = await axios.get('/api/campuses')
  // dispatch(setCampuses(data))
}