// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Element<any>,
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
  tag: Tag = 'span',
  theme = 'primary',
}: Props) => {
  const classes = classNames(
    className,
    'badge',
    'text-uppercase',
    theme ? `badge-${theme}` : null,
    {
      'badge-pill': isPill,
    }
  );

  return (
    <Tag className={classes} style={{ backgroundColor: color }}>
      {children}
    </Tag>
  );
};

export default Badge;
