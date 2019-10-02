// @flow
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import type { IconNameType } from '../Icon/icons';

export type Props = {
  children?: React.Node,
  className?: string,
  icon?: IconNameType,
  iconColor?: string,
  iconPosition?: 'left' | 'right',
  iconSize?: number,
  isBlock?: boolean,
  isDisabled?: boolean,
  isOutline?: boolean,
  onClick?: (SyntheticMouseEvent<>) => void,
  size?: 'lg' | 'md' | 'sm',
  tag?: string,
  theme?: string,
  type?: 'button' | 'submit' | 'reset',
};

const Button = ({
  children,
  className,
  icon,
  iconColor,
  iconPosition = 'left',
  iconSize,
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
  const classes = classNames(
    className,
    'btn',
    `btn${isOutline ? '-outline' : ''}-${theme}`,
    size ? `btn-${size}` : false,
    { 'btn-block': isBlock },
    { disabled: isDisabled },
    { 'btn-icon': icon && !children },
    { [`btn-icon-${iconPosition}`]: icon && children }
  );

  function handleClick(e: SyntheticMouseEvent<>) {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    if (typeof onClick === 'function') onClick(e);
  }

  return (
    <Tag
      {...other}
      className={classes}
      onClick={handleClick}
      type={Tag === 'button' ? type : undefined}
    >
      {children}
      {icon && <Icon name={icon} size={iconSize} color={iconColor} />}
    </Tag>
  );
};

export default Button;
