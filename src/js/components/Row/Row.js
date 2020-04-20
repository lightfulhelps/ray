// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Node,
  className?: string,
  noGutters?: boolean,
  tag?: string,
};

const Row = ({ children, className, noGutters, tag: Tag = 'div', ...other }: Props) => {
  const classes = classNames(className, 'row', { 'no-gutters': noGutters });

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default Row;