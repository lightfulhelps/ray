// @flow
import * as React from 'react';
import classNames from 'classnames';
import Icon from '../Icon/Icon';

type Props = {
  children: string,
  className?: string,
  icon?: string,
  iconPosition?: string,
  isBlock?: boolean,
  isDisabled?: boolean,
  isOutline?: boolean,
  onClick?: () => void,
  size?: 'lg' | 'md' | 'sm',
  tag?: string,
  theme?: string,
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
    <Tag {...other} className={classes} onClick={onClick}>
      {children}
      {icon && <Icon name={icon} size={24} />}
    </Tag>
  );
};

export default Button;
