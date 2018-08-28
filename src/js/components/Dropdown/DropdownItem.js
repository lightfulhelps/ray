import * as React from 'react';
import { withKnobs, color, number } from '@storybook/addon-knobs';
import Icon from '../Icon/Icon';

/*
- actions
- items
- onclick handler
*/

const DropdownItem = ({ action }) => (
  <a className="dropdown-item" href="#">
    <Icon
      name={"addMedia"}
      size={number('Size', 24)}
      color={color('Color', '#adb5bd')}
      hoverColor={color('Hover Color', '#212529')}
    />
    {action}
  </a>
);

export default DropdownItem;
