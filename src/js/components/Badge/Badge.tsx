import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: string;
  isOutline?: boolean;
  isPill?: boolean;
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  theme?: string;
  withBorder?: boolean;
  [key: string]: any;
};

const Badge: React.FC<Props> = ({
  children,
  className,
  color,
  isOutline,
  isPill,
  tag: Tag = 'div',
  theme = 'primary',
  withBorder,
  ...other
}: Props) => {
  const classes = classNames(className, 'badge', `bg-${theme}`, 'text-truncate', 'mw-100', {
    'rounded-pill': isPill,
    'text-dark': ['light', 'white'].includes(theme),
    [`border border-${theme}`]: withBorder,
    'border border-gray-500': withBorder && theme === 'white',
  });

  return (
    <Tag {...other} className={classes} style={{ backgroundColor: color }}>
      {children}
    </Tag>
  );
};

export default Badge;
