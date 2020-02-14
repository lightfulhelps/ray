
import * as React from "react";
import classNames from "classnames";
import Icon from "../Icon/Icon";
import { IconNameType } from "../Icon/icons";

export type Props = {
  children?: React.ReactNode;
  className?: string;
  icon?: IconNameType;
  iconPosition?: "left" | "right";
  iconTheme?: string;
  isBlock?: boolean;
  isDisabled?: boolean;
  isOutline?: boolean;
  onClick?: (arg0: React.MouseEvent<>) => void;
  size?: "lg" | "md" | "sm";
  tag?: string;
  theme?: string;
  type?: "button" | "submit" | "reset";
};

const Button = ({
  children,
  className,
  icon,
  iconPosition = 'left',
  iconTheme,
  isBlock,
  isDisabled,
  isOutline,
  onClick,
  size,
  tag: Tag = 'button',
  theme = 'primary',
  type = 'button',
  ...other
}: Props) => {
  const classes = classNames(className, 'btn', `btn${isOutline ? '-outline' : ''}-${theme}`, size ? `btn-${size}` : false, { 'btn-block': isBlock }, { disabled: isDisabled }, { 'btn-icon': icon && !children }, { [`btn-icon-${iconPosition}`]: icon && children });

  function handleClick(e: React.MouseEvent<>) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  }

  return <Tag {...other} className={classes} onClick={handleClick} type={Tag === 'button' ? type : undefined} disabled={isDisabled}>
      {children}
      {icon && <Icon name={icon} theme={iconTheme} />}
    </Tag>;
};

export default Button;