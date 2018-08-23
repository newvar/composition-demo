import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { mapValues } from 'lodash'

class WithHandlers extends Component {
  render() {
    return this.props.children(this.props.handlers)
  }
}

WithHandlers.propTypes = {
  handlers: PropTypes.objectOf(PropTypes.func),
  inputProps: PropTypes.shape({}),
}

export default WithHandlers

