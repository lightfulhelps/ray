// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ChildrenArray<React.Element<any>>,
  className?: string,
  tag?: string,
};

const Card = ({ children, className, tag: Tag = 'div', ...other }: Props) => {
  const classes = classNames(className, 'card');

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default Card;
