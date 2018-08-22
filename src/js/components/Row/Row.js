// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ChildrenArray<React.Element<any>>,
  className?: string,
  noGutters?: boolean,
  tag?: string,
};

const Row = ({ children, className, noGutters, tag: Tag = 'div' }: Props) => {
  const classes = classNames(className, 'row', { 'no-gutters': noGutters });

  return <Tag className={classes}>{children}</Tag>;
};

export default Row;
