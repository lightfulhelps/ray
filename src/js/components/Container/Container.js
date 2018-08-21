// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ChildrenArray<React.Element<any>>,
  className?: string,
  isFluid?: boolean,
  tag?: string,
};

const Container = ({ children, className, isFluid, tag: Tag = 'div' }: Props) => {
  const classes = classNames(className, isFluid ? 'container-fluid' : 'container');

  return <Tag className={classes}>{children}</Tag>;
};

export default Container;
