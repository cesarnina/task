import { componentsReducer } from './components/reducer';
import { combineReducers } from 'redux'

const appReducer = combineReducers({
  components: componentsReducer,
})

export default appReducer