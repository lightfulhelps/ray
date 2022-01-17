import * as React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  isFill?: boolean;
  isPills?: boolean;
  isTabs?: boolean;
  withoutWrapper?: boolean;
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  [key: string]: any;
};

export const Nav: React.FC<Props> = ({
  className,
  isFill,
  isPills,
  isTabs,
  withoutWrapper = false,
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

  const renderNav = () => <Tag {...other} className={classes} />;

  return withoutWrapper ? renderNav() : <div className="overflow-hidden">{renderNav()}</div>;
};

export default Nav;
