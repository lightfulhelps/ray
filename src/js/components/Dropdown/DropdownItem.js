// @flow
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import type { IconNameType } from '../Icon/icons';

export type DropdownItemType = {
  icon?: IconNameType,
  label: string,
  onClick?: () => void,
};

type Props = DropdownItemType & {
  className?: string,
};

const DropdownItem = ({ className, label, icon, onClick = () => {} }: Props) => {
  const classes = classNames(className, 'dropdown-item');

  return (
    <div className={classes} onClick={onClick}>
      {icon && <Icon name={icon} className="mr-1" />}
      <span>{label}</span>
    </div>
  );
};

export default DropdownItem;
