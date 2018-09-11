// @flow
import * as React from 'react';
import classNames from 'classnames';
import { DropdownItem } from '../../';
import { type DropdownItemType } from '../DropdownItem/DropdownItem';

type Props = {
  className?: string,
  footer?: string,
  iconColor?: string,
  isOpen: boolean,
  items: DropdownItemType[],
  onClick?: () => void,
  position?: 'left' | 'right',
  theme?: 'light' | 'dark',
};

const DropdownMenu = ({
  className,
  footer,
  iconColor,
  items,
  isOpen,
  onClick = () => {},
  position = 'left',
  theme = 'light',
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'dropdown-menu',
    `dropdown-menu-${theme}`,
    `dropdown-menu-${position}`,
    { show: isOpen }
  );

  return (
    <div {...other} className={classes} onClick={onClick}>
      {items.map((item, i) => (
        <DropdownItem
          key={i}
          label={item.label}
          icon={item.icon}
          iconColor={iconColor}
          onClick={item.onClick}
        />
      ))}
      {footer && <div className="dropdown-footer">{footer}</div>}
    </div>
  );
};

export default DropdownMenu;
