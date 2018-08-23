import React, { Component } from 'react'
import PropTypes from 'prop-types'

class WithFocus extends Component {
  componentDidMount() {
    this.props.autoFocus
      && this.element.focus()
  }

  componentWillReceiveProps(newProps) {
    this.focusMeOnUpdate = !this.props.autoFocus && newProps.autoFocus
  }

  componentDidUpdate() {
    if (this.focusMeOnUpdate) {
      this.element.focus()
    }
  }

  refProxy = (element) => (this.element = element)
  focusMeOnUpdate = false

  render() {
    return this.props.children({
      refProxy: this.refProxy,
    })
  }
}

WithFocus.propTypes = {
  autoFocus: PropTypes.bool,
}

export default WithFocus

