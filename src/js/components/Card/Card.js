// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ChildrenArray<React.Element<any>>,
  className?: string,
  color?: string,
  outline?: boolean,
  tag?: string,
};

const Card = ({ children, className, color, outline, tag: Tag = 'div' }: Props) => {
  const classes = classNames(
    className,
    'card',
    color ? `${outline ? 'border' : 'bg'}-${color}` : false
  );

  return <Tag className={classes}>{children}</Tag>;
};

export default Card;
