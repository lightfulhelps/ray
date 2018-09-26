// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Node,
  className?: string,
  isValid?: boolean,
  tag?: string,
};

const FormFeedback = ({ children, className, isValid, tag: Tag = 'div', ...other }: Props) => {
  const classes = classNames(className, isValid ? 'valid-feedback' : 'invalid-feedback');

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default FormFeedback;
