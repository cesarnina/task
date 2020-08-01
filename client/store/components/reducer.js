import * as actions from './actions';

const initialState = {
  todos: [],
  singleTodo: {},
};
// change singleTodo to oneTodo and the actions to singleTodo and FetchSingle todo
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.GET_TODO:
      return {...state, todos: action.todo}
    case actions.ONE_TODO:
      return {...state, singleTodo: action.todo}
    case actions.ADD_TODO:
      return {...state, todos: action.todo}
    case actions.UPDATE_TODO:
      return {};
    case actions.REMOVE_TODO:
      return {}
    default:
      return state;
  }
};

// const initialState = {
//   currentlyEdited: null,
//   items: [],
// };

// const componentsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case actions.ADD_COMPONENT:
//       const {id, layout} = action
//       const values = {}
//       return {...state, currentlyEdited: {id, layout, values}, items: [{id, layout, values}]}
//     case actions.UPDATE_COMPONENT:
//       const updatedItem = state.items.map((item) => {
//         return {...item, layout: action.data.layout, values: action.data.values}})
//       return {...state, currentlyEdited: null, items: updatedItem};
//     case actions.REMOVE_COMPONENT:
//       const newItems = state.items.filter(item => item.id !== action.id )
//       return {...state, currentlyEdited: null, items: newItems}
//     case actions.SET_EDITED_COMPONENT:
//       return {...state, currentlyEdited: action.component}
//     default:
//       return state;
//   }
// };

export default taskReducer;