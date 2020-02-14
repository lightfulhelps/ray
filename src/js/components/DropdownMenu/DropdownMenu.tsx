
import * as React from "react";
import classNames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
  footer?: string;
  isOpen: boolean;
  onClick?: (arg0: React.MouseEvent<>) => void;
  position?: "left" | "right";
  tag?: string;
  theme?: "light" | "dark";
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
  const classes = classNames(className, 'dropdown-menu', `dropdown-menu-${theme}`, `dropdown-menu-${position}`, { show: isOpen });

  function handleClick(e: React.MouseEvent<>) {
    if (typeof onClick === 'function') {
      onClick(e);
    }
  }

  return <Tag {...other} className={classes} onClick={handleClick}>
      {children}
      {footer && <div className="dropdown-footer">{footer}</div>}
    </Tag>;
};

export default DropdownMenu;