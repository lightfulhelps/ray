import * as React from 'react';
import { color, number } from '@storybook/addon-knobs';
import Icon from '../Icon/Icon';

/*
- actions
- items
- onclick handler
*/

const DropdownItem = ({ action }) => (
  <a className="dropdown-item" href="#">
    <span className="w-100 d-flex align-items-end dropdown-item-content">
      <Icon
        name={'addMedia'}
        size={number('Size', 24)}
        color={color('Color', '#adb5bd')}
        hoverColor={color('Hover Color', '#212529')}
        className="mr-1"
      />
      {action}
    </span>
  </a>
);

export default DropdownItem;
