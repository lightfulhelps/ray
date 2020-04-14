import React from 'react';
import classNames from 'classnames';

type Props = {
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  theme?: string;
  children: React.ReactNode;
  [key: string]: any;
};

const Alert: React.FC<Props> = ({
  children,
  className,
  tag: Tag = 'div',
  theme = 'primary',
  ...other
}: Props) => {
  const classes = classNames(className, 'alert', `alert-${theme}`);

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default Alert;
