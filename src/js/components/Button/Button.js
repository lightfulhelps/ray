// @flow
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';
import type { IconNameType } from '../Icon/icons';

type Props = {
  children?: string,
  className?: string,
  icon?: IconNameType,
  iconPosition?: 'left' | 'right',
  isBlock?: boolean,
  isDisabled?: boolean,
  isOutline?: boolean,
  onClick?: () => void,
  size?: 'lg' | 'md' | 'sm',
  tag?: string,
  theme?: string,
  type?: 'button' | 'submit' | 'reset',
};

const Button = ({
  children,
  className,
  icon,
  iconPosition = 'left',
  isBlock,
  isDisabled,
  isOutline,
  onClick = () => {},
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
  return (
    <Tag {...other} className={classes} onClick={onClick} type={type}>
      {children}
      {icon && <Icon name={icon} />}
    </Tag>
  );
};

export default Button;
