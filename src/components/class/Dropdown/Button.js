import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

class Button extends Component {
  render() {
    const { onOpen, onClose, isOpened, value, placeholder, className, focusRef } = this.props

    return (
      <button
        className={cn('Dropdown-Button', className)}
        onClick={isOpened ? onClose : onOpen}
        ref={focusRef}
      >
        <div className="Dropdown-Button__content">
          {value === undefined ? placeholder : value}
          {isOpened
            ? `/\\`
            : `\\/`}
        </div>
      </button>
    )
  }
}

Button.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  isOpened: PropTypes.bool,
  className: PropTypes.string,
  focusRef: PropTypes.any,
};

Button.defaultProps = { isOpened: false }

export default Button
