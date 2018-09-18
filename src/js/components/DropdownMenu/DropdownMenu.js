// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Node,
  className?: string,
  footer?: string,
  isOpen: boolean,
  onClick?: (SyntheticMouseEvent<>) => void,
  position?: 'left' | 'right',
  tag?: string,
  theme?: 'light' | 'dark',
};

const DropdownMenu = ({
  children,
  className,
  footer,
  isOpen,
  onClick,
  position = 'left',
  tag: Tag = 'div',
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

  function handleClick(e: SyntheticMouseEvent<>) {
    if (typeof onClick === 'function') {
      onClick(e);
    }
  }

  return (
    <Tag {...other} className={classes} onClick={handleClick}>
      {children}
      {footer && <div className="dropdown-footer">{footer}</div>}
    </Tag>
  );
};

export default DropdownMenu;
