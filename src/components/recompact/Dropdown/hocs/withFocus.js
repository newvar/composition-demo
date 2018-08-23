import React from 'react'

const withFocus = (
  WrappedComponent
) => (
  class WithFocus extends React.Component {
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
      return (
        <WrappedComponent
          refProxy={this.refProxy}
          {...this.props}
        />
      )
    }
  }
)

export default withFocus
