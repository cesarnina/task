import * as actions from './actions';

const initialState = {
  todos: [{id: 500, assignee: 'Mario', taskName: 'Collect coins'}],
  singleTodo: {},
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_TODO:
      return {}
    case actions.ADD_TODO:
      return {...state, todos: [...state.todos, action.todo]}
    case actions.UPDATE_TODO:
      return {};
    case actions.REMOVE_TODO:
      return {}
    default:
      return state;
  }
};

export default taskReducer;