import React from 'react'
import { merge } from 'ramda'

const spanStyle = {
  display: 'inline-block',
}
const liStyle = {
  listStyle:    'none',
  fontSize:     '.26rem',
  height:       '.88rem',
  lineHeight:   '.88rem',
  width:        '100%',
  padding:      '0 .32rem',
  boxSizing:    'border-box',
  borderBottom: '1px solid #f5f5f6',
}
export default (
  ({ list = [] }) => (
    <ul style={{ padding: 0 }}>
      {
        list.map(({ name, value }) => (
          <li key={ value } style={ liStyle }>
            <span style={ merge(spanStyle, { float: 'right', color: '#949494' }) }>
              { value }
            </span>
            <span style={ spanStyle }>{ name }</span>
          </li>
        ))
      }
    </ul>
  )
)
