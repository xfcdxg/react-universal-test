import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Root from './components/root'
import App from './containers/app'
import Page1 from './containers/page1'
// 路由配置
export default (
  <Router history={ browserHistory } >
    <Route path='/' component={ Root } >
      <IndexRoute component={ App } />
      <Route path='/page1' component={ Page1 } />
    </Route>
  </Router>
)


// <Route path='/' component={ require('react-router-loader?name=root!./components/root') } >
//   <IndexRoute component={ require('react-router-loader?name=app!./containers/app') } />
// </Route>
