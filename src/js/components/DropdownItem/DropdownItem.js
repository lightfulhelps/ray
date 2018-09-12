// @flow
import * as React from 'react';
import classNames from 'classnames';
import { Icon } from '../../';
import type { IconNameType } from '../Icon/icons';

export type DropdownItemType = {
  icon?: IconNameType,
  iconColor?: string,
  label: string,
  onClick?: () => void,
};

type Props = DropdownItemType & {
  className?: string,
};

const DropdownItem = ({ className, label, icon, iconColor, onClick = () => {} }: Props) => {
  const classes = classNames(className, 'dropdown-item');

  return (
    <div className={classes} onClick={onClick}>
      {icon && <Icon name={icon} color={iconColor} className="mr-1" />}
      <span>{label}</span>
    </div>
  );
};

export default DropdownItem;
