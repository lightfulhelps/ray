// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Element<any>,
  className?: string,
  color?: string,
  isBlock?: boolean,
  isDisabled?: boolean,
  isOutline?: boolean,
  onClick?: () => void,
  size?: 'lg' | 'md' | 'sm',
  tag?: string,
};

const Button = ({
  children,
  className,
  color = 'primary',
  isBlock,
  isDisabled,
  isOutline,
  onClick = () => {},
  size,
  tag: Tag = 'button',
}: Props) => {
  const classes = classNames(
    className,
    'btn',
    `btn${isOutline ? '-outline' : ''}-${color}`,
    size ? `btn-${size}` : false,
    isBlock ? 'btn-block' : false,
    { disabled: isDisabled }
  );

  return (
    <Tag className={classes} onClick={onClick}>
      {children}
    </Tag>
  );
};

export default Button;
