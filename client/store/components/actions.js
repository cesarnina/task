// ACTION TYPES / ACTION CREATORS

export const ADD_TASK = 'ADD_TASK';
export const addTask = (id, layout) => ({
  type: ADD_TASK,
  id,
  layout,
});

export const UPDATE_TASK = 'UPDATE_TASK';
export const updateTask = (id, data) => ({
  type: UPDATE_TASK,
  id,
  data,
});

export const SET_EDITED_TASK = 'SET_EDITED_TASK';
export const setEditedTask = component => ({
  type: SET_EDITED_TASK,
  component,
});

export const REMOVE_TASK = 'REMOVE_TASK';
export const removeTask = id => ({
  type: REMOVE_TASK,
  id,
});

// THUNK CREATORS
