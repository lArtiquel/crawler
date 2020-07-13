import { combineReducers } from 'redux'
import HomeReducer from './homeReducer'

const RootReducer = combineReducers({
  home: HomeReducer
})

export default RootReducer
