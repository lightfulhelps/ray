// @flow
import * as React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.Node,
  className?: string,
  isCheck?: boolean,
  tag?: string,
};

const FormGroup = ({ children, className, isCheck, tag: Tag = 'div', ...other }: Props) => {
  const classes = classNames(className, isCheck ? 'form-check' : 'form-group');

  return (
    <Tag {...other} className={classes}>
      {children}
    </Tag>
  );
};

export default FormGroup;
