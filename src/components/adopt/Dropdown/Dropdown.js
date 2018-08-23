import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import List from './List'
import withProps from './toolchain/withProps'
import WithStateHandlers from './toolchain/WithStateHandlers'
import WithFocus from './toolchain/WithFocus'
import { adopt } from 'react-adopt'
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

const Composed = adopt({
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
  focus: ({ autoFocus, render }) => (
    <WithFocus autoFocus={autoFocus}>
      {render}
    </WithFocus>
  )
})

const Enhanced = (props) => (
  <Composed autoFocus={props.autoFocus} >
    {({
      state: {
        setSelectedValue,
        setOpened,
        isOpened,
        selectedValue,
      },
      focus: {
        refProxy,
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
        focusRef={refProxy}
      />
    ))}
  </Composed>
)

export default Enhanced
