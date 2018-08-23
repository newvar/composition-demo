import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

const Button = ({
  onOpen,
  onClose,
  isOpened,
  value,
  placeholder,
  className,
}) => (
  <button
    className={cn( 'Dropdown-Button', className)}
    onClick={isOpened ? onClose : onOpen}
  >
    <div className="Dropdown-Button__content">
      {value === undefined ? placeholder : value}
      {isOpened ? `/\\` : `\\/`}
    </div>
  </button>
)

Button.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  isOpened: PropTypes.bool,
  className: PropTypes.string,
};

Button.defaultProps = { isOpened: false }

export default Button
