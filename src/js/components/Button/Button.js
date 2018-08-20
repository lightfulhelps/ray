import React from 'react';
import classNames from 'classnames';

const Button = ({
  block,
  children,
  color = 'primary',
  disabled,
  onClick,
  outline,
  size,
  tag: Tag = 'button',
}) => {
  const classes = classNames(
    'btn',
    `btn${outline ? '-outline' : ''}-${color}`,
    size ? `btn-${size}` : false,
    block ? 'btn-block' : false,
    { disabled }
  );
  return (
    <Tag className={classes} onClick={onClick}>
      {children}
    </Tag>
  );
};

export default Button;
