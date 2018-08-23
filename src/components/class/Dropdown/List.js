import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { map } from 'lodash';
import ListItem from './ListItem';

class List extends Component {
  render() {
    const { data, onSelect, className } = this.props
    return (
      <ul className={cn('Dropdown-List', className)}>
        {map(data, (item, index) => (
          <ListItem key={index} item={item} onSelect={onSelect} />
        ))}
      </ul>
    )
  }
}

List.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
  className: PropTypes.string,
}

export default List;
