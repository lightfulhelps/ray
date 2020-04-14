import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  className?: string;
  isValid?: boolean;
  tag?: keyof JSX.IntrinsicElements;
  [key: string]: any;
};

const FormFeedback: React.FC<Props> = ({
  children,
  className,
  isValid,
  tag: Tag = 'div',
  ...other
}: Props) => {
  const classes = classNames(className, isValid ? 'valid-feedback' : 'invalid-feedback');

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default FormFeedback;
