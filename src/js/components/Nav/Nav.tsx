import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  isFill?: boolean;
  isPills?: boolean;
  isTabs?: boolean;
  tag?: keyof JSX.IntrinsicElements;
};

const Nav: React.FC<Props> = ({
  className,
  isFill,
  isPills,
  isTabs,
  tag: Tag = 'ul',
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'nav',
    { 'nav-fill': isFill },
    { 'nav-pills': isPills && !isTabs },
    { 'nav-tabs': !isPills && isTabs }
  );

  return <Tag {...other} className={classes} />;
};

export default Nav;
