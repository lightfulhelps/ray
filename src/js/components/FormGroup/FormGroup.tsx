import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  isCheck?: boolean;
  tag?: keyof JSX.IntrinsicElements | typeof React.Component;
  [key: string]: any;
};

const FormGroup: React.FC<Props> = ({
  children,
  className,
  isCheck,
  tag: Tag = 'div',
  ...other
}: Props) => {
  const classes = classNames(className, isCheck ? 'form-check' : 'form-group');

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default FormGroup;
