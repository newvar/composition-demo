import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapValues } from 'lodash'

class WithStateHandlers extends Component {
  constructor(props) {
    super(props)
    this.state = {...props.initialState}
  }

  handle = (handler) => (...args) => this.setState((state) => ({
    ...state,
    ...handler(...args),
  }))

  render() {
    return this.props.children({
      ...this.state,
      ...mapValues(this.props.handlers, this.handle)
    })
  }
}

WithStateHandlers.propTypes = {
  initialState: PropTypes.shape({}),
  handlers: PropTypes.objectOf(PropTypes.func),
  inputProps: PropTypes.shape({}),
}

export default WithStateHandlers

