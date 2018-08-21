// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  block?: boolean,
  children: React.Element<any>,
  color?: string,
  disabled?: boolean,
  onClick?: () => void,
  outline?: boolean,
  size?: 'lg' | 'md' | 'sm',
  tag?: string,
};

const Button = ({
  block,
  children,
  color = 'primary',
  disabled,
  onClick = () => {},
  outline,
  size,
  tag: Tag = 'button',
}: Props) => {
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
