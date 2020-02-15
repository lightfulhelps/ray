import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  noGutters?: boolean;
  tag?: keyof JSX.IntrinsicElements;
};

const Row: React.FC<Props> = ({
  children,
  className,
  noGutters,
  tag: Tag = 'div',
  ...other
}: Props) => {
  const classes = classNames(className, 'row', { 'no-gutters': noGutters });

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default Row;
