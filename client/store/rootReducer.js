import taskReducer from './components/reducer';
import { combineReducers } from 'redux'

const appReducer = combineReducers({
  tasks: taskReducer,
})

export default appReducer