import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import List from './List'
import { parseLabel } from 'helpers'

class Dropdown extends Component {
  state = {
    isOpened: false,
    selectedValue: undefined,
  }

  onOpenHandler = () => {
    this.setOpened(true)
  }

  onCloseHandler = () => {
    this.setOpened(false)
  }

  onSelectHandler = (value) => {
    this.setSelectedValue(value)
    this.onCloseHandler()
  }

  setOpened(isOpened) {
    this.setState(state => ({ ...state, isOpened }));
  }

  setSelectedValue(selectedValue) {
    this.setState(state => ({ ...state, selectedValue }));
  }

  render() {
    const { isOpened, selectedValue } = this.state
    const { data } = this.props

    return (
      <div className="Dropdown">
        <Button
          className="Dropdown__button"
          placeholder="Select an item"
          value={parseLabel(selectedValue)}
          onOpen={this.onOpenHandler}
          onClose={this.onCloseHandler}
          isOpened={isOpened}
        />
        {isOpened && (
          <List
            className="Dropdown__list"
            data={data}
            onSelect={this.onSelectHandler}
          />
        )}
      </div>
    )
  }
}

Dropdown.propTypes = {
  data: PropTypes.array,
}

export default Dropdown
