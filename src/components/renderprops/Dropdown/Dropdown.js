import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import List from './List'
import withProps from './toolchain/withProps'
import WithStateHandlers from './toolchain/WithStateHandlers'
import WithFocus from './toolchain/WithFocus'
import { parseLabel } from 'helpers'

const Dropdown = ({
  isOpened,
  selectedValue,
  onOpen,
  onClose,
  onSelect,
  data,
  focusRef,
}) => (
  <div className="Dropdown">
    <Button
      className="Dropdown__button"
      placeholder="Select an item"
      value={parseLabel(selectedValue)}
      onOpen={onOpen}
      onClose={onClose}
      isOpened={isOpened}
      focusRef={focusRef}
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
  focusRef: PropTypes.any,
}

const Enhanced = (props) => (
  <WithFocus autoFocus={props.autoFocus}>
    {({ refProxy }) => (
      <WithStateHandlers
        initialState={{
          isOpened: false,
          selectedValue: undefined,
        }}
        handlers={{
          setSelectedValue: (selectedValue) => ({ selectedValue }),
          setOpened: (isOpened) => ({ isOpened }),
        }}
      >
        {({ setSelectedValue, setOpened, isOpened, selectedValue }) => withProps({
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
            focusRef={refProxy}
          />
        ))}
      </WithStateHandlers>
    )}
  </WithFocus>
)

export default Enhanced
