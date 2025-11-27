import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  color?: string;
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
  isPill,
  tag: Tag = 'div',
  theme = 'primary',
  withBorder,
  ...other
}: Props) => {
  const classes = classNames(className, 'badge', `bg-${theme}`, 'text-truncate', 'mw-100', {
    'rounded-pill': isPill,
    'border border-2': withBorder,
  });

  return (
    <Tag {...other} className={classes} style={{ backgroundColor: color }}>
      {children}
    </Tag>
  );
};

export default Badge;
