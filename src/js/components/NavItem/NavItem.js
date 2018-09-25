// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  tag?: string,
};

const NavItem = ({ className, tag: Tag = 'li', ...other }: Props) => {
  const classes = classNames(className, 'nav-item');

  return <Tag {...other} className={classes} />;
};

export default NavItem;