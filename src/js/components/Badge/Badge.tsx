import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: string;
  isOutline?: boolean;
  isPill?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  theme?: string;
};

const Badge: React.FC<Props> = ({
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
