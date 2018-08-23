import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import List from './List'
import withProps from './toolchain/withProps'
import WithStateHandlers from './toolchain/WithStateHandlers'
import { Adopt } from 'react-adopt'
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

const mapper = {
  state: (
    <WithStateHandlers
      initialState={{
        isOpened: false,
        selectedValue: undefined,
      }}
      handlers={{
        setSelectedValue: (selectedValue) => ({ selectedValue }),
        setOpened: (isOpened) => ({ isOpened }),
      }}
    />
  ),
}

const Enhanced = (props) => (
  <Adopt mapper={mapper}>
    {({
      state: {
        setSelectedValue,
        setOpened,
        isOpened,
        selectedValue,
      },
    }) => withProps({
      onOpen: () => setOpened(true),
      onClose: () => setOpened(false),
    }, ({ onOpen, onClose }) => (
      <Dropdown
        {...props}
        isOpened={isOpened}
        selectedValue={selectedValue}
        onSelect={(value) => {
          setSelectedValue(value)
          onClose()
        }}
        onOpen={onOpen}
        onClose={onClose}
      />
    ))}
  </Adopt>
)

export default Enhanced
