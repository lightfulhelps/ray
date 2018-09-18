// @flow
import * as React from 'react';
import classNames from 'classnames';

export type Props = {
  children: React.Node,
  className?: string,
  isActive?: boolean,
  isDisabled?: boolean,
  isHeader?: boolean,
  onClick?: (SyntheticMouseEvent<>) => void,
  tag?: string,
};

const DropdownItem = ({
  children,
  className,
  isActive,
  isDisabled,
  isHeader,
  onClick,
  tag: Tag = 'div',
  ...other
}: Props) => {
  const classes = classNames(
    className,
    { 'dropdown-item': !isHeader },
    { 'dropdown-header': isHeader },
    { active: isActive },
    { disabled: isDisabled },
    { 'cursor-pointer': onClick && !isDisabled }
  );

  function handleClick(e: SyntheticMouseEvent<>) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  }

  return (
    <Tag {...other} className={classes} onClick={handleClick}>
      {children}
    </Tag>
  );
};

export default DropdownItem;
