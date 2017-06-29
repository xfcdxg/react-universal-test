import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// 路由配置
const Routes = () => (
  <Router history={ browserHistory } >
    <Route path='/' component={ require('react-router?name=root!./components/root') } >
      <IndexRoute component={ require('react-router?name=app!./containers/app') } />
    </Route>
  </Router>
)
export default Routes
