import React from 'react'
import { Link } from 'react-router'

const App = ({ children, name = '' }) => (
  <div>
    <h1 style={{ fontSize: '.3rem' }}>Hello { name }</h1>
    <div style={{ fontSize: '.26rem' }}>
      <Link to='/page1' >Page1</Link>
    </div>
    <div>{ children }</div>
  </div>
)

export default App
