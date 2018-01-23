import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'
import items from './items'
import cart from './cart'

export default combineReducers({
  routing: routerReducer,
  items,
  cart
})