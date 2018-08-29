// @flow
import * as React from 'react';
import classNames from 'classnames';
import { color, number } from '@storybook/addon-knobs';
import Icon from '../Icon/Icon';

type Props = {
  className?: string
  label: string,
  icon?: string,
}

const DropdownItem = ({ className, label, icon, }) => {
  const classes = classNames(className, 'dropdown-item', { 'dropdown-item-footer': isFooter });
  return (
    <a className={classes} href="#">
      <span className="w-100 d-flex align-items-center dropdown-item-content">
        {icon && (
          <Icon
            name={icon}
            size={number('Size', 24)}
            color={color('Color', '#adb5bd')}
            hoverColor={color('Hover Color', '#212529')}
            className="mr-1"
          />
        )}
        <span>{label}</span>
      </span>
    </a>
  );
};

export default DropdownItem;
