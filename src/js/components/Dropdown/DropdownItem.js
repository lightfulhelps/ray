// @flow
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import type { IconNameType } from '../Icon/icons';

type Props = {
  className?: string,
  icon?: IconNameType,
  label: string,
  onClick: () => {},
};

const DropdownItem = ({ className, label, icon, onClick }: Props) => {
  const classes = classNames(className, 'dropdown-item', { clickable: onClick });
  return (
    <div className={classes} onClick={onClick}>
      {icon && <Icon name={icon} className="mr-1" />}
      <span>{label}</span>
    </div>
  );
};

export default DropdownItem;
