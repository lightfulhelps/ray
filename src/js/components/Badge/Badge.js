// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Node,
  className?: string,
  color?: string,
  isOutline?: boolean,
  isPill?: boolean,
  tag?: string,
  theme?: string,
};

const Badge = ({
  children,
  className,
  color,
  isOutline,
  isPill,
  tag: Tag = 'div',
  theme = 'primary',
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'badge',
    `badge${isOutline ? '-outline' : ''}-${theme}`,
    'text-truncate',
    'mw-100',
    {
      'badge-pill': isPill,
    }
  );

  return (
    <Tag {...other} className={classes} style={{ backgroundColor: color }}>
      {children}
    </Tag>
  );
};

export default Badge;
