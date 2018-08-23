import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { map } from 'lodash';
import ListItem from './ListItem';

const List = ({
  data,
  onSelect,
  className,
}) => (
  <ul className={cn('Dropdown-List', className)}>
    {map(data, (item, index) => (
      <ListItem
        key={index}
        item={item}
        onSelect={onSelect}
      />
    ))}
  </ul>
)

List.propTypes = {
  data: PropTypes.array,
  onSelect: PropTypes.func,
  className: PropTypes.string,
}

export default List;
