import React from 'react';
import {
  compose,
  withHandlers,
} from 'recompact'
import PropTypes from 'prop-types'
import { parseLabel } from 'helpers'

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

const enhance = compose(
  withHandlers({
    onSelect: ({ item, onSelect }) => () => onSelect(item),
  }),
)

export default enhance(ListItem)
