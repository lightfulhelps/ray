// @flow
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import type { IconNameType } from '../Icon/icons';

type Props = {
  className?: string,
  icon?: IconNameType,
  label: string,
};

const DropdownItem = ({ className, label, icon, onClick }: Props) => {
  const classes = classNames(className, 'dropdown-item');
  return (
    <a className={classes} href="#" onClick={onClick}>
      <span className="w-100 d-flex align-items-center dropdown-item-content">
        {icon && <Icon name={icon} className="mr-1" />}
        <span>{label}</span>
      </span>
    </a>
  );
};

export default DropdownItem;
