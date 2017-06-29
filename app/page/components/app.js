import React from 'react'

const App = ({ children, title = '' }) => (
  <div>
    <h1 style={{ fontSize: '.3rem' }}>Hello { title }</h1>
    <div>{ children }</div>
  </div>
)

export default App
