// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string,
  isActive?: boolean,
  isDisabled?: boolean,
  tag?: string,
};

const NavLink = ({ className, isActive, isDisabled, tag: Tag = 'a', ...other }: Props) => {
  const classes = classNames(className, 'nav-link', { active: isActive }, { disabled: isDisabled });

  return <Tag {...other} className={classes} />;
};

export default NavLink;
