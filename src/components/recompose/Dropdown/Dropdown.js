import React from 'react'
import PropTypes from 'prop-types'
import {
  compose,
  withHandlers,
  withStateHandlers,
} from 'recompose'
import Button from './Button'
import List from './List'
import { parseLabel } from 'helpers'

const Dropdown = ({
  isOpened,
  selectedValue,
  onOpen,
  onClose,
  onSelect,
  data,
}) => (
  <div className="Dropdown">
    <Button
      className="Dropdown__button"
      placeholder="Select an item"
      value={parseLabel(selectedValue)}
      onOpen={onOpen}
      onClose={onClose}
      isOpened={isOpened}
    />
    {isOpened && (
      <List
        className="Dropdown__list"
        data={data}
        onSelect={onSelect}
      />
    )}
  </div>
)

Dropdown.propTypes = {
  onClose: PropTypes.func,
  onOpen: PropTypes.func,
  onSelect: PropTypes.func,
  isOpened: PropTypes.bool,
  selectedValue: PropTypes.shape({}),
  data: PropTypes.array,
}

const enhance = compose(
  withStateHandlers({
    isOpened: false,
    selectedValue: undefined,
  }, {
    setSelectedValue: () => (selectedValue) => ({ selectedValue }),
    setOpened: () => (isOpened) => ({ isOpened }),
  }),

  withHandlers({
    onOpen: ({ setOpened }) => () => setOpened(true),
    onClose: ({ setOpened }) => () => setOpened(false),
  }),

  withHandlers({
    onSelect: ({ setSelectedValue, onClose }) => (value) => {
      setSelectedValue(value)
      onClose()
    },
  }),
)

export default enhance(Dropdown)
