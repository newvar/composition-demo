import React from 'react';
import PropTypes from 'prop-types'
import { parseLabel } from 'helpers'
import WithHandlers from './toolchain/WithHandlers'

const ListItem = ({
  item,
  onSelect,
}) => (
  <li className="Dropdown-List-ListItem">
    <button
      className="Dropdown-List-ListItem__button"
      onClick={onSelect}
    >
      {parseLabel(item)}
    </button>
  </li>
)

ListItem.propTypes = {
  item: PropTypes.shape({}),
  onSelect: PropTypes.func,
}

const Enhanced = (props) => (
  <ListItem
    {...props}
    onSelect={() => props.onSelect(props.item)}
  />
)

export default Enhanced
