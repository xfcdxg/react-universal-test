import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// 路由配置
export default (
  <Router history={ browserHistory } >
    <Route path='/' component={ require('react-router-loader?name=root!./components/root') } >
      <IndexRoute component={ require('react-router-loader?name=app!./containers/app') } />
    </Route>
  </Router>
)
