import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  [key: string]: any;
};

const Card: React.FC<Props> = ({ children, className, tag: Tag = 'div', ...other }: Props) => {
  const classes = classNames(className, 'card');

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default Card;
