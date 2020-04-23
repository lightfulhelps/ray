import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  isFluid?: boolean;
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  [key: string]: any;
};

const Container: React.FC<Props> = ({
  children,
  className,
  isFluid,
  tag: Tag = 'div',
  ...other
}: Props) => {
  const classes = classNames(className, isFluid ? 'container-fluid' : 'container');

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default Container;
