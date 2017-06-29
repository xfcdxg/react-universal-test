import React, { Component } from 'react'
import { mapObjIndexed }    from 'ramda'

export default (
  mapFunctions => WrappedComponent =>
  class extends Component {
    constructor(props) {
      super(props)
      const { dispatch } = props

      mapObjIndexed(
        (v, k) => { this[k] = v },
        mapFunctions(dispatch, props, this)
      )
    }
    render() {
      return <WrappedComponent { ...this.props } { ...this.state } />
    }
  }
)
