import { combineReducers } from 'redux'
// 引入reducers
import app   from './app'
import page1 from './page1'
// 组合reducers
export default combineReducers({
  app,
  page1,
})
