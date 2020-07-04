import * as actions from './actions';

const initialState = {
  todos: ['clean car'],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_TASK:
      return {}
    case actions.UPDATE_TASK:
      return {};
    case actions.REMOVE_TASK:
      return {}
    case actions.SET_EDITED_TASK:
      return {}
    default:
      return state;
  }
};

export default taskReducer;