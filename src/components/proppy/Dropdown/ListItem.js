import React from 'react';
import {
  compose,
  withHandlers,
} from 'proppy'
import { attach } from 'proppy-react';
import PropTypes from 'prop-types'
import { parseLabel } from 'helpers'

const ListItem = ({
  item,
  onSelectOVERRIDE,
}) => (
  <li className="Dropdown-List-ListItem">
    <button
      className="Dropdown-List-ListItem__button"
      onClick={onSelectOVERRIDE}
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
    onSelectOVERRIDE: ({ item, onSelect }) => () => onSelect(item),
  }),
)

export default attach(enhance)(ListItem)
