import React        from 'react'
import { render }   from 'react-dom'
import { Provider } from 'react-redux'
import routes       from '../page/routes'
import createStore  from '../page/store'

const initialState = window.__INITIAL_STATE__

// 定义根组件
const Root  = () => (
  <Provider store={ createStore(initialState) }>
    {
      routes
    }
  </Provider>
)

render(<Root />, document.querySelector('#root'))
