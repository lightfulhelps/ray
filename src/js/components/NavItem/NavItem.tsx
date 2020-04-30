import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  [key: string]: any;
};

const NavItem: React.FC<Props> = ({ className, tag: Tag = 'li', ...other }: Props) => {
  const classes = classNames(className, 'nav-item');

  return <Tag {...other} className={classes} />;
};

export default NavItem;
