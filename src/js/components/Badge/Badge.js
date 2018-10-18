// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Node,
  className?: string,
  color?: string,
  isPill?: boolean,
  tag?: string,
  theme?: string,
};

const Badge = ({
  children,
  className,
  color,
  isPill,
  tag: Tag = 'div',
  theme = 'primary',
  ...other
}: Props) => {
  const classes = classNames(
    className,
    'badge',
    'text-truncate',
    'mw-100',
    theme ? `badge-${theme}` : null,
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
