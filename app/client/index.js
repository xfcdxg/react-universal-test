import React        from 'react'
import { render }   from 'react-dom'
import { Provider } from 'react-redux'
import Routes       from '../page/routes'
import createStore  from '../page/store'
// 定义根组件
const Root  = () => (
  <Provider store={ createStore() }>
    <Routes />
  </Provider>
)

render(<Root />, document.querySelector('#root'))
