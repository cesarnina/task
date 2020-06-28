import * as actions from './actions';

const initialState = {
  currentlyEdited: null,
  items: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {}
    case UPDATE_TASK:
      return {};
    case REMOVE_TASK:
      return {}
    case SET_EDITED_TASK:
      return {}
    default:
      return state;
  }
};