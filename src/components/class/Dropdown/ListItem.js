import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { parseLabel } from 'helpers'

class ListItem extends Component {
  onClickHandler = () => this.props.onSelect(this.props.item)

  render() {
    const { item } = this.props
    return (
      <li className="Dropdown-List-ListItem">
        <button className="Dropdown-List-ListItem__button" onClick={this.onClickHandler}>
          {parseLabel(item)}
        </button>
      </li>
    )
  }
}

ListItem.propTypes = {
  item: PropTypes.shape({}),
  onSelect: PropTypes.func,
};

export default ListItem;
