// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Node,
  className?: string,
  tag?: string,
  theme?: string,
};

const Alert = ({ children, className, tag: Tag = 'div', theme = 'primary', ...other }: Props) => {
  const classes = classNames(className, 'alert', `alert-${theme}`);

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default Alert;
